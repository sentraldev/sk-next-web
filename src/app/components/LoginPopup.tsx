"use client";

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/config/firebase_config";

interface LoginPopupPage {
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSubmitLogin?: (data: {
    email: string;
    password: string;
  }) => void | Promise<void>;
}

const LoginPopup: React.FC<LoginPopupPage> = ({
  onClose,
  onSwitchToRegister,
  // onSubmitLogin,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      // Firebase login
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        // Get access token
        const token = await user.getIdToken();
        sessionStorage.setItem("token", token);
        // Optionally call parent handler
        // if (onSubmitLogin) {
        //   await onSubmitLogin({ email, password });
        // }
        // Optionally close popup or show success
        onClose();

        if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
          window.location.href = "/admin";
        } else {
          window.location.reload(); // Reload to reflect login state
        }
      }
    } catch (error: any) {
      console.log(error.message);

      if (error.code === "auth/auth/email-already-in-use") {
        setErrorMsg("Email terdaftar. Gunakan email lain untuk mendaftar.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("Password salah. Silakan coba lagi.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMsg("Format email tidak valid. Silakan periksa kembali.");
      } else if (error.code === "auth/too-many-requests") {
        setErrorMsg("Terlalu banyak permintaan. Silakan coba lagi nanti.");
      } else if (error.code === "auth/invalid-credential") {
        setErrorMsg(
          "Email atau password tidak valid. Silakan periksa kembali."
        );
      } else {
        // General error message
        console.error("Login error:", error);
        // Set error message to display
        setErrorMsg("Login gagal. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4"
      onClick={handleOverlayClick}>
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Promo Banner */}
        <div className="hidden md:flex w-1/2 bg-gray-200 items-center justify-center text-2xl font-bold text-gray-700">
          Promo Banner
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-6 relative">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-bold text-xl"
              aria-label="Close popup"
              type="button">
              &times;
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-24 h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>

          <h2 className="text-center text-xl font-bold mb-6">
            Selamat Datang!
          </h2>

          <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan email Anda"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 py-2 px-1 mb-4 focus:outline-none focus:border-blue-600"
              required
            />

            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="password">
              Password
            </label>
            <div className="relative mb-6">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password Anda"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 py-2 px-1 pr-10 focus:outline-none focus:border-blue-600"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-1/2 -translate-y-1/2 pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>

            <button
              type="submit"
              className={`bg-blue-600 text-white py-2 rounded w-full mb-2 hover:bg-blue-700 transition flex items-center justify-center ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2 justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32">
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                </span>
              ) : (
                "Masuk"
              )}
            </button>
            {errorMsg && (
              <div className="text-red-600 text-sm text-center mb-4">
                {errorMsg}
              </div>
            )}
          </form>

          <div className="max-w-md mx-auto border-t border-gray-300 my-4 relative">
            <span className="bg-white px-2 absolute left-1/2 -translate-x-1/2 -top-3 text-gray-500 text-sm">
              atau
            </span>
          </div>

          <div className="max-w-md mx-auto">
            <button className="w-full border border-blue-600 text-blue-600 rounded py-2 flex justify-center items-center gap-2 hover:bg-blue-50 transition mb-4">
              <img
                src="/icons/google-icon.svg"
                alt="Google"
                className="w-5 h-5"
              />
              masuk dengan akun Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Belum punya akun?{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                onSwitchToRegister();
              }}
              className="text-blue-600 underline"
              type="button">
              Daftar disini
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
