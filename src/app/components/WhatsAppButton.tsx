"use client";

import { WhatsAppOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function WhatsAppButton() {
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(false);

  return (
    <div
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}
      className="flex flex-col items-end">
      {showWhatsappPopup && (
        <div className="mb-2 px-4 py-2 rounded shadow-lg bg-white text-gray-900 text-xs font-semibold border border-gray-200 animate-fade-in">
          Chat ke WhatsApp kami untuk bantuan lebih lanjut
        </div>
      )}
      <button
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 flex items-center justify-center"
        style={{ width: 56, height: 56 }}
        onMouseEnter={() => setShowWhatsappPopup(true)}
        onMouseLeave={() => setShowWhatsappPopup(false)}
        onClick={() => {
          setShowWhatsappPopup((v) => !v);
          window.open(
            "https://web.whatsapp.com/send?phone=6281977772400&text=Halo%20min%20Senkom%2C%20aku%20butuh%20bantuan%20nih",
            "_blank"
          );
        }}
        aria-label="WhatsApp Support">
        <WhatsAppOutlined />
      </button>
    </div>
  );
}
