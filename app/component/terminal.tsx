"use client";
import React, { useState, useRef } from "react";

const Terminal: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [input, setInput] = useState<string>(""); 
  const consoleOutputRef = useRef<HTMLDivElement | null>(null); 

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const command = input.trim();
      if (command) {
        setCommandHistory((prev) => [...prev, `user@localhost:~$ ${command}`]);
        setInput("");
        processCommand(command);
      }
    }
  };

  const processCommand = (command: string) => {
    const response = getCommandResponse(command);
    setCommandHistory((prev) => [...prev, response]);
  };

  const getCommandResponse = (command: string): string => {
    switch (command.toLowerCase()) {
      case "ls":
        return "file1.txt\nfile2.txt\nfolder1";
      case "pwd":
        return "/home/user";
      case "clear":
        setCommandHistory([]);
        return "";
      case "cat file1.txt":
        return "This is the content of file1.txt";
      case "mkdir newfolder":
        return "Directory newfolder created";
      case "cd folder1":
        return "Changed directory to folder1";
      case "man ls":
        return "ls: list directory contents";
      case "whoami":
        return "user";
      case "date":
        return new Date().toLocaleString();
      case "uptime":
        return "up 10 days, 4 hours, 15 minutes";
      default:
        return `bash: ${command}: command not found`;
    }
  };

  const scrollToBottom = () => {
    if (consoleOutputRef.current) {
      consoleOutputRef.current.scrollTop = consoleOutputRef.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [commandHistory]);

  return (
    <div
      className="console"
      id="console-background"
      style={{
        backgroundColor: "#000",
        padding: "10px",
        borderRadius: "5px",
        width: "100%",
        height: "500px",
        overflowY: "auto",
        position: "relative",
      }}
      onClick={() => document.getElementById("command-input")?.focus()}
    >
      <div
        id="console-output"
        ref={consoleOutputRef}
        style={{
          marginBottom: "10px",
          color: "#ccc",
        }}
      >
        {commandHistory.map((line, index) => (
          <div key={index} className="output" style={{ marginTop: "10px" }}>
            {line}
          </div>
        ))}
      </div>
      <div className="input-line" style={{ display: "flex" }}>
        <span style={{ color: "#666BFB" }}>user@localhost:~$</span>
        <input
          type="text"
          id="command-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            outline: "none",
            flex: "1",
            fontSize: "14px",
          }}
        />
      </div>
    </div>
  );
};

export default Terminal;
