import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

export default function Landingpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/loginadmin", {
        username: username,
        password: password,
      });
      console.log("Berhasil Login");
      Router.push(`/laporanKeuangan`);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <Head>
        <title>Keuangan Desa</title>
      </Head>
      <div className="flex justify-center items-center w-screen h-screen bg-[#0d5472]">
        <div className="flex flex-col justify-center items-center w-[60%] h-[75%]">
          <div className="flex justify-center items-center w-full h-[20%]">
            <div className="flex justify-center items-center">
              <img className="object-contain w-[40%]" src="/banyumas.svg" />
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-[60%]">
            <div className="sm:text-4xl text-xl text-center font-semibold w-[70%] sm:leading-loose">
              SELAMAT DATANG DI LAPORAN KEUANGAN DESA MELUNG
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[70%] h-full bg-gray-200 rounded-3xl">
            <div className="flex flex-col justify-end items-center w-full h-full">
              <div className="w-[50%]">
                <div className="p-2 text-black font-medium">Username</div>
                <input
                  className="bg-white border border-[#0d5472] text-black text-sm rounded-lg block w-full p-2"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="w-[50%]">
                <div className="p-2 text-black font-medium">Password</div>
                <input
                  type="password"
                  id="password"
                  className="bg-white border border-[#0d5472] text-black text-sm rounded-lg block w-full p-2"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div className="flex justify-center w-[50%]">
                <button
                  type="login"
                  className="text-white bg-[#0d5472] font-semibold rounded-lg text-sm w-auto sm:w-auto px-16 py-2.5 text-center"
                  onClick={Login}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
