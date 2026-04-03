import React, { useState, useEffect, useRef } from "react";
import { Minus, History } from "lucide-react";
import { LuSend } from "react-icons/lu";
import { IoLogoWechat } from "react-icons/io5";
import ReactMarkdown from 'react-markdown';


import "./Chatbox.css";

const Chatbox = () => {
  const [input, setInput] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem("chat-sessions");
    return saved
      ? JSON.parse(saved)
      : [{ id: Date.now(), name: "Phiên 1", messages: [] }];
  });

  const [currentSessionId, setCurrentSessionId] = useState(sessions[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSessionList, setShowSessionList] = useState(false);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  const currentSession =
    sessions.find((s) => s.id === currentSessionId) || sessions[0];

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput && selectedFiles.length === 0) return;

    let contentToSend = trimmedInput;

    // ✅ Gắn tên file vào message
    if (selectedFiles.length > 0) {
      const fileNames = selectedFiles
        .map((file) => `📎 ${file.name}`)
        .join("\n");
      contentToSend += `\n\n${fileNames}`;
    }

    const newMessages = [
      ...currentSession.messages,
      { role: "user", content: contentToSend },
    ];

    const updatedSessions = sessions.map((s) =>
      s.id === currentSessionId ? { ...s, messages: newMessages } : s
    );
    setSessions(updatedSessions);
    setInput("");
    setSelectedFiles([]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: contentToSend }],
          fileNames: selectedFiles.map((f) => f.name),
        }),
      });

      const data = await res.json();

      setSessions((prev) =>
        prev.map((s) =>
          s.id === currentSessionId
            ? {
                ...s,
                messages: [
                  ...s.messages,
                  {
                    role: "assistant",
                    content: data.content || "Không có phản hồi.",
                  },
                ],
              }
            : s
        )
      );
    } catch (error) {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === currentSessionId
            ? {
                ...s,
                messages: [
                  ...s.messages,
                  { role: "assistant", content: "❌ Lỗi khi gửi yêu cầu." },
                ],
              }
            : s
        )
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const createNewSession = () => {
    const newSession = {
      id: Date.now(),
      name: `Phiên ${sessions.length + 1}`,
      messages: [],
    };
    const newSessions = [...sessions, newSession];
    setSessions(newSessions);
    setCurrentSessionId(newSession.id);
    setShowSessionList(false);
  };

  const switchSession = (id) => {
    setCurrentSessionId(id);
    setShowSessionList(false);
  };

  const deleteSession = (id) => {
    const updated = sessions.filter((s) => s.id !== id);
    if (updated.length === 0) {
      updated.push({ id: Date.now(), name: "Phiên 1", messages: [] });
    }
    setSessions(updated);
    setCurrentSessionId(updated[0].id);
    setShowSessionList(false);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentSession.messages]);

  useEffect(() => {
    localStorage.setItem("chat-sessions", JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      textareaRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  return (
    <div className="chatbox-wrapper">
      {isOpen && !isMinimized ? (
        <div className="chatbox-container">
          <div className="chatbox-header">
            <div className="chatbox-header-left">
              <button
                className="chatbox-history-btn"
                onClick={() => setShowSessionList(!showSessionList)}
                title="Lịch sử chat"
              >
                <History size={18} />
              </button>
              <span>🤖 Jobnie - HCMUTE Job Finder</span>
            </div>
            <button
              className="chatbox-minimize-btn"
              onClick={() => setIsMinimized(true)}
              title="Thu nhỏ"
            >
              <Minus size={18} />
            </button>
          </div>

          {showSessionList ? (
            <div className="chatbox-session-list">
              <button
                className="chatbox-new-session-btn"
                onClick={createNewSession}
              >
                + Tạo đoạn chat mới
              </button>
              {sessions.map((s) => (
                <div key={s.id} className="chatbox-session-item">
                  <span
                    onClick={() => switchSession(s.id)}
                    className={s.id === currentSessionId ? "active" : ""}
                  >
                    {s.name} ({s.messages.length} tin nhắn)
                  </span>
                  <button
                    className="chatbox-delete-session-btn"
                    onClick={() => deleteSession(s.id)}
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="chatbox-messages">
              {currentSession.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-bubble ${
                    msg.role === "user" ? "user" : "assistant"
                  }`}
                >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          )}
          {!showSessionList && (
            <div className="chatbox-input-area">
              {/* ✅ Danh sách file đính kèm - đặt trên nút gửi */}
              {selectedFiles.length > 0 && (
                <div className="chatbox-file-list">
                  {selectedFiles.map((file, i) => (
                    <div key={i} className="chatbox-file-name">
                      📎 {file.name}
                      <button
                        className="chatbox-remove-file"
                        onClick={() =>
                          setSelectedFiles((prev) =>
                            prev.filter((_, index) => index !== i)
                          )
                        }
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Textarea */}
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Bạn muốn hỏi gì?"
                className="chatbox-textarea"
                rows={2}
              />

              {/* Nút gửi và chọn file */}
              <div className="chatbox-actions">
                <label
                  htmlFor="file-upload"
                  className="custom-file-upload"
                  title="Đính kèm tệp"
                >
                  📎
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".txt,.md,.json,.pdf,.doc,.docx,image/*"
                  multiple
                  onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
                  style={{ display: "none" }}
                />

                <button
                  onClick={handleSend}
                  className="chatbox-send-btn"
                  title="Gửi"
                >
                  <LuSend size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button
          className="chatbox-fab"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
        >
          <IoLogoWechat size={26} color="#fff" />
        </button>
      )}
    </div>
  );
};

export default Chatbox;
