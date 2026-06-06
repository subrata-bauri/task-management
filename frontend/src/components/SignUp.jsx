import { UserPlus, Mail, User, Eye, EyeOff, Lock, UserRound, UserRoundPlus } from "lucide-react";
import React, { useState } from "react";
import {
  BUTTONCLASSES,
  Inputwrapper,
  MESSAGE_ERROR,
  MESSAGE_SUCCESS,
} from "../assets/dummy";
import axios from "axios";

const API_URL = "https://personal-task-tracker-app-backend.onrender.com";
// const API_URL = "http://localhost:4000";
const INITIAL_FORM = { name: "", email: "", password: "" };

const Signup = ({ onSwitchMode }) => {
  const [showPassword, setShowpassword] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const { data } = await axios.post(
        `${API_URL}/api/user/register`,
        formData,
      );
      console.log("Signup Successfull", data);
      setMessage({
        text: "Registration successful! You can now Login.",
        type: "success",
      });
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.log("Signup error: ", err);
      setMessage({
        text:
          err.response?.data?.message || "An error occured. Please try again",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const FIELDS = [
    { name: "name", type: "text", placeholder: "Full Name", icon: UserRound },
    { name: "email", type: "email", placeholder: "Email", icon: Mail },
    {
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Password",
      icon: Lock,
      isPassword: true,
    },
  ];

  return (
    <div className="max-w-md w-full bg-one/50 shadow-lg border border-one rounded-3xl p-8">
      <div className="mb-3 text-center">
        <div
          className="w-16 h-16 bg-linear-to-br from-two to-one rounded-full mx-auto
        flex items-center justify-center mb-3"
        >
          <UserRoundPlus className="w-8 h-8 text-maintxt ml-1" />
        </div>
        <h2 className="text-3xl font-bold text-maintxt">Create Account</h2>
        <p className="text-maintxt/50 text-sm">
          Join TaskFlow to manage your tasks
        </p>
      </div>
      {message.text && (
        <div
          className={
            message.type === "success" ? MESSAGE_SUCCESS : MESSAGE_ERROR
          }
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {FIELDS.map(({ name, type, placeholder, icon: Icon, isPassword }) => (
          <div className={Inputwrapper} key={name}>
            <Icon className=" text-maintxt w-5 h-5 mr-2" />

            <input
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={(e) =>
                setFormData({ ...formData, [name]: e.target.value })
              }
              className="w-full bg-transparent text-maintxt focus:outline-none focus:ring-0 appearance-none text-sm"
              required
            />

            {isPassword && (
              <button
                type="button"
                onClick={() => setShowpassword((prev) => !prev)}
                className="ml-2 text-maintxt/50 hover:text-maintxt transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        ))}

        <button type="submit" className={BUTTONCLASSES} disabled={loading}>
          {loading ? (
            "Signing Up... "
          ) : (
            <>
              <UserPlus className=" w-4 h-4" />
              Sign Up
            </>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-maintxt/50 mt-4">
        Already have an account?{" "}
        <button
          onClick={onSwitchMode}
          className="text-maintxt/70 cursor-pointer hover:text-maintxt hover:underline font-medium transition-colors"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
