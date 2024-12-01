import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Beldes() {
  const componentPDFBelanja = useRef();
  const generatePDFBelanja = useReactToPrint({
    content: () => componentPDFBelanja.current,
    documentTitle: "Data Belanja Desa",
  });

  // Fetch Belanja Desa
  const [belanja, setBelanja] = useState([]);
  const fetchBelanja = async () => {
    const responseBelanja = await axios("http://localhost:5000/belanjaDesa");
    setBelanja(responseBelanja.data.belanjaDesa);
  };

  useEffect(() => {
    fetchBelanja();
  }, []);

  console.log(belanja);

  return (
    <>
      <div className="w-[88%] h-auto rounded-lg my-10 border-[#0d5472] border-2">
        <div ref={componentPDFBelanja}>
          <div className="flex w-100 h-auto bg-[#0d5472] px-5 p-3 text-xl rounded-t text-[#f8efed] font-semibold">
            Belanja Desa
            <div className="flex justify-end items-center w-[85%] gap-3">
              <a href="./inputBeldes">
                <button
                  className="bg-[#e7e6e1] text-gray-700 p-1 px-3 rounded"
                  size="sm"
                >
                  Input Belanja
                </button>
              </a>
              <a>
                <button
                  className="bg-[#e7e6e1] text-gray-700 p-1 px-4 rounded"
                  size="sm"
                  onClick={generatePDFBelanja}
                >
                  PDF
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-auto p-5 bg-gray-100 rounded-b-lg">
            <div className="w-[94%] h-[90%]">
              <table className="table-auto w-full">
                <thead className="text-sm bg-[#c0dded] h-14 text-gray-600">
                  <tr>
                    <th className="text-left px-5">Kode Rekening / Uraian</th>
                    <th className="text-right">Anggaran (Rp.)</th>
                    <th className="text-right">Realisasi (Rp.)</th>
                    <th className="text-right">Lebih/Kurang (Rp.)</th>
                    <th className="text-right pr-5">Aksi</th>
                  </tr>
                </thead>
                <tbody className=" border-black text-black text-right text-sm items-center">
                  {belanja.map((b) => (
                    <tr className="border-y-2">
                      <td className="text-left px-5 p-2 text-gray-700 font-semibold">
                        {b.kodetransaksi_beldes} {b.nama_beldes}
                      </td>
                      <td>
                        {new Intl.NumberFormat("de-DE").format(
                          b.anggaran_beldes
                        )}
                      </td>
                      <td>
                        {new Intl.NumberFormat("de-DE").format(
                          b.realisasi_beldes
                        )}
                      </td>
                      <td>
                        {new Intl.NumberFormat("de-DE").format(b.sisa_beldes)}
                      </td>
                      <td className="flex justify-end items-center gap-2 pr-3">
                        <Link
                          href={{
                            pathname: "/editBeldes/[id]",
                            query: { id: b.id },
                          }}
                        >
                          <button
                            className="bg-[#c0dded] p-1 rounded"
                            size="sm"
                          >
                            <img className="w-5" src="/edit.svg"></img>
                          </button>
                        </Link>
                        <Link
                          href={{
                            pathname: "/deleteBeldes/[id]",
                            query: { id: b.id },
                          }}
                        >
                          <button className="bg-red-500 p-1 rounded" size="sm">
                            <img className="w-5" src="/delete.svg"></img>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
