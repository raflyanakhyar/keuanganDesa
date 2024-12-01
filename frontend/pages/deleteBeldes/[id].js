import { useRouter } from "next/router";
import Router from "next/router";
import axios from "axios";

export default function ConfirmPendes() {
  const router = useRouter();
  const id = router.query.id;

  // Delete Belanja desa
  const DeleteBelanja = async () => {
    try {
      await axios.delete(`http://localhost:5000/belanjaDesa/${id}`);
      alert("Data Berhasil dihapus");
      Router.push(`../laporanKeuangan`);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] min-w-full bg-[#0d5472]">
        <div className="flex flex-col justify-center items-center h-[30%] w-[30%] bg-slate-50 rounded-lg">
          <div className="flex justify-center items-center w-full h-[45%]">
            <div className="text-black text-2xl font-bold">
              Yakin Akan Menghapus Data Ini ?
            </div>
          </div>
          <div className="flex justify-center items-center w-full gap-9 h-[30%]">
            <a href="#">
              <button
                className="bg-red-500 p-2 px-9 rounded text-black font-medium"
                size="sm"
                onClick={() => DeleteBelanja()}
              >
                Yakin
              </button>
            </a>
            <a href="/laporanKeuangan">
              <button
                className="bg-red-500 p-2 px-9 rounded text-black font-medium"
                size="sm"
              >
                Cancel
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
