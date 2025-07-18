"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface RegisterPopupProps{
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4"
      onClick={handleOverlayClick}
    >
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden"
        style={{ height: "70vh" }}
      >
        {/* Promo Banner */}
        <div className="hidden md:flex w-1/2 bg-gray-200 items-center justify-center text-2xl font-bold text-gray-700">
          Promo Banner
        </div>

        {/* Form kanan: buat scroll jika overflow */}
        <div className="w-full md:w-1/2 p-6 relative overflow-y-auto">
          {/* Close Button di pojok kanan atas */}
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-bold text-xl"
              aria-label="Close popup"
              type="button"
            >
              &times;
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-28 h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>

          <h2 className="text-center text-xl font-bold mb-6">Ayo Bergabung!</h2>

          <form className="space-y-5" onClick={(e) => e.stopPropagation()}>
            <div>
              <label htmlFor="nama" className="block text-sm font-semibold mb-1">
                Nama
              </label>
              <input
                id="nama"
                type="text"
                required
                className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="telp" className="block text-sm font-semibold mb-1">
                No. Telp
              </label>
              <input
                id="telp"
                type="tel"
                required
                className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full border-b border-gray-300 py-2 px-1 pr-10 focus:outline-none focus:border-blue-600"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pr-3 text-blue-600 hover:text-blue-800 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-semibold mb-1"
              >
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full border-b border-gray-300 py-2 px-1 pr-10 focus:outline-none focus:border-blue-600"
                />
                <button
                  type="button"
                  aria-label={showConfirmPassword ? "Sembunyikan konfirmasi password" : "Tampilkan konfirmasi password"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pr-3 text-blue-600 hover:text-blue-800 focus:outline-none"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="rounded mt-1"
              />
              <label htmlFor="terms" className="text-sm">
                Dengan mendaftar, Anda telah membaca dan menyetujui{" "}
                <a href="#" className="text-blue-600 underline">
                  Syarat & Ketentuan kami
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white rounded py-2 w-full mt-4 hover:bg-blue-700 transition"
            >
              Daftar
            </button>

            <div className="my-6 flex items-center justify-center gap-3">
              <hr className="border-gray-300 flex-grow" />
              <span className="text-gray-500 text-sm">atau</span>
              <hr className="border-gray-300 flex-grow" />
            </div>

            <button
              type="button"
              className="w-full border border-blue-600 text-blue-600 rounded py-2 flex justify-center items-center gap-2 hover:bg-blue-50 transition"
            >
              <img
                src="/google-icon.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Daftar dengan akun Google
            </button>

            <p className="text-center text-sm text-gray-600">
              Sudah punya akun?{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToLogin();
                }}
                className="text-blue-600 underline"
                type="button"
              >
                Masuk disini
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPopup;