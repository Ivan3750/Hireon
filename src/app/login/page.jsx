"use client"
import { useState } from "react";
import { useRouter } from "next/router";
import LoginLayout from "@/app/LoginLayout";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? "/api/auth/register" : "/api/auth/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username: isSignup ? username : undefined,
          phone: !isSignup ? phone : undefined,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        window.location.pathname = "/main";  // Navigate to main page
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
      console.error("Error:", error);
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setErrorMessage("");
    setUsername("");
    setPhone("");
  };

  return (
    <LoginLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm p-6 w-520 h-639 bg-[#8ECAE6] border-rad rounded-2xl">
          {isSignup ? (
            <>
              <h2 className="text-[25px] font-medium text-gray-900 mb-6 text-center ">Create account</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4">
                  <label className="ml-[5px] font-[350] text-[15px]" >Full Name</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="John Petersen"
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-[20px] focus:outline-none placeholder:text-[15px]"
                  />
                </div>
                <div className="mb-4">
                  <label className="ml-[5px] font-[350] text-[15px]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@nireon.com"
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-[20px] focus:outline-none placeholder:text-[15px]"
                  />
                </div>
                <div className="mb-4">
                  <label className="ml-[5px] font-[350] text-[15px]">Phone</label>
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+380 67 000 00 00"
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-[20px] focus:outline-none placeholder:text-[15px]"
                  />
                </div>
                <div className="mb-4">
                  <label className="ml-[5px] font-[350] text-[15px]" >Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="************"
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-[20px] focus:outline-none placeholder:text-[15px]"
                  />
                </div>
              
                <button
                  type="submit"
                  className="w-full bg-[#FFB703] rounded-[20px] h-10 text-[15px] text-[#F0F8FF]"
                >
                 Get started
                </button>
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
                <p className="text-[10px] font-normal text-center" >By clicking "Get started", you agree to Terms of Use and  Privacy Policy</p>
                <p className="mt-2 text-center font-normal text-[14px]">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-blue-500"
                  >
                    Log in
                  </button>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-[25px] font-medium text-gray-900 mb-6 text-center">Log in</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-4">
                  <label className="ml-[5px] font-[350] text-[15px]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-[20px] focus:outline-none placeholder:text-[15px]"
                  />
                </div>
                <div className="mb-4">
                  <label className="ml-[5px] font-[350] text-[15px]" >Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-[20px] focus:outline-none placeholder:text-[15px]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFB703] rounded-[20px] h-10 text-[15px] text-[#F0F8FF]"
                >
                 Get started
                </button>
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
                <p className="mt-2 text-center font-normal text-[14px]">
                Dont have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-blue-500"
                  >
                    Sing up
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </LoginLayout>
  );
}
