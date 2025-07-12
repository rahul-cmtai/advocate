import React from "react";

const whatsappNumber = "919891324664"; // Apna WhatsApp number yahan daalein (country code ke sath, bina + ke)
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const gmailAddress = "yourmail@gmail.com"; // Apna Gmail address yahan daalein
const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailAddress}`;

export default function FloatingButton() {
  return (
    <div style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "flex-end",
    }}>
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#25D366",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.416 27.168 14.684 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.336-.207-3.428-.613l-.244-.09-4.65 1.217 1.24-4.527-.158-.25C6.82 18.09 6 16.59 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.145-1.71-.844-1.974-.94-.264-.097-.456-.145-.648.145-.193.29-.744.94-.912 1.133-.168.193-.336.217-.626.072-.29-.145-1.225-.452-2.334-1.44-.862-.769-1.444-1.72-1.614-2.01-.168-.29-.018-.447.127-.592.13-.13.29-.336.435-.504.145-.168.193-.29.29-.483.097-.193.048-.362-.024-.507-.072-.145-.648-1.566-.888-2.146-.234-.563-.472-.486-.648-.495l-.553-.01c-.193 0-.507.072-.772.362-.264.29-1.01.984-1.01 2.397 0 1.413 1.034 2.775 1.178 2.967.145.193 2.037 3.11 4.938 4.24.69.297 1.228.474 1.647.606.692.22 1.323.189 1.82.115.555-.082 1.71-.698 1.953-1.372.24-.674.24-1.252.168-1.372-.072-.12-.264-.193-.553-.338z" />
        </svg>
      </a>
      {/* Gmail Button */}
      <a
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#EA4335",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
        aria-label="Send Email via Gmail"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="white"
        >
          <path d="M44 8H4c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-2 4v2.67L24 27.34 6 14.67V12h36zm0 24H6V17.34l18 12.67 18-12.67V36z" />
        </svg>
      </a>
    </div>
  );
} 