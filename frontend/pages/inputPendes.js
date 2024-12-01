import Head from "next/head";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

export default function InputPendes() {
  const [kodetransaksi_pendes, setKode] = useState("");
  const [nama_pendes, setNama] = useState("");
  const [anggaran_pendes, setAnggaran] = useState("");
  const [realisasi_pendes, setRealisasi] = useState("");
  const [sisa_pendes, setSisa] = useState();

  const hitungsisa = async () => {
    const sisa = parseInt(anggaran_pendes) - parseInt(realisasi_pendes);
    setSisa(sisa);
  };

  useEffect(() => {
    hitungsisa();
  });

  const CreatePendapatan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pendapatanDesa", {
        kodetransaksi_pendes: kodetransaksi_pendes,
        nama_pendes: nama_pendes,
        anggaran_pendes: anggaran_pendes,
        realisasi_pendes: realisasi_pendes,
        sisa_pendes: sisa_pendes,
      });
      alert("Data Berhasil Ditambahkan");
      Router.push(`/laporanKeuangan`);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <Head>
        <title>Keuangan Desa</title>
        <link rel="icon" href="/banyumas.svg" />
      </Head>
      <Navbar />
      <div className="flex items-center justify-center w-screen h-screen bg-slate-50">
        <div className="flex items-center justify-center w-[65%] h-[75%] rounded-3xl border-[#0d5472] border-4 bg-gray-200">
          <div className="flex flex-col items-center justify-center w-[90%] h-[90%]">
            <div className="w-full h-[15%] text-[#0d5472] text-4xl text-center font-semibold">
              Input Pendapatan Desa
            </div>
            <div className="w-full h-[85%]">
              <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-2 gap-y-5 place-content-around place-items-center w-full h-auto">
                <div className="w-[90%]">
                  <div className="p-2 text-black font-medium">
                    Kode Transaksi Pendapatan
                  </div>
                  <input
                    className="bg-white border border-[#0d5472] text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="1.1.1.10"
                    value={kodetransaksi_pendes}
                    onChange={(e) => {
                      setKode(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="w-[90%]">
                  <div className="p-2 text-black font-medium">
                    Uraian Nama Pendapatan
                  </div>
                  <input
                    className="bg-white border border-[#0d5472] text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="Nama Pendapatan"
                    value={nama_pendes}
                    onChange={(e) => {
                      setNama(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="w-[90%]">
                  <div className="p-2 text-black font-medium">
                    Anggaran Dana Desa
                  </div>
                  <input
                    className="bg-white border border-[#0d5472] text-black text-sm rounded-lg block w-full p-2.5"
                    value={anggaran_pendes}
                    onChange={(e) => {
                      setAnggaran(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="w-[90%]">
                  <div className="p-2 text-black font-medium">
                    Realisasi Dana Desa
                  </div>
                  <input
                    className="bg-white border border-[#0d5472] text-black text-sm rounded-lg block w-full p-2.5"
                    value={realisasi_pendes}
                    onChange={(e) => {
                      setRealisasi(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="w-[90%]">
                  <div className="p-2 text-black font-medium">
                    Sisa atau Kurang Dana Desa
                  </div>
                  <text className="bg-white border border-[#0d5472] text-black text-sm rounded-lg block w-full p-2.5">
                    {sisa_pendes}
                  </text>
                </div>
                <div className="w-[90%]"></div>
                <div className="col-start-1 col-end-3 w-full p-10">
                  <div className="flex justify-around w-full">
                    <button
                      type="input"
                      className="text-white bg-[#0d5472] font-semibold rounded-lg text-sm w-auto sm:w-auto px-10 py-2.5 text-center"
                      onClick={CreatePendapatan}
                    >
                      Simpan Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
