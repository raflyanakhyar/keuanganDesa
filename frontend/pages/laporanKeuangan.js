import Head from "next/head";
import Navbar from "@/components/navbar";
import Pendes from "@/components/pendes";
import Beldes from "@/components/beldes";

export default function Landingpage() {
  return (
    <>
      <Head>
        <title>Keuangan Desa</title>
        <link rel="icon" href="/banyumas.svg" />
      </Head>
      <Navbar />
      <div className="flex justify-center items-center w-full min-h-screen bg-slate-50">
        <div className="flex flex-col items-center justify-center w-[80%]">
          <Pendes />
          <Beldes />
        </div>
      </div>
    </>
  );
}
