import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Pendes() {
  const componentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Data Pendapatan Desa",
  });

  // Fetch data pendapatan desa
  const [pendapatan, setPendapatan] = useState([]);
  const fetchPendapatan = async () => {
    const responsePendapatan = await axios(
      "http://localhost:5000/pendapatanDesa"
    );
    setPendapatan(responsePendapatan.data.pendapatanDesa);
  };

  useEffect(() => {
    fetchPendapatan();
  }, []);

  return (
    <>
      {/* {openModal && <ConfirmPendes setOpenModal={setOpenModal} />} */}
      <div className="w-[88%] h-auto rounded-lg my-10 border-[#0d5472] border-2">
        <div ref={componentPDF}>
          <div className="flex w-100 h-auto bg-[#0d5472] px-5 p-3 text-xl rounded-t text-[#f8efed] font-semibold">
            Pendapatan Desa
            <div className="flex justify-end items-center w-[80%] gap-3">
              <a href="./inputPendes">
                <button
                  className="bg-[#e7e6e1] text-gray-700 p-1 px-3 rounded"
                  size="sm"
                >
                  Input Pendapatan
                </button>
              </a>
              <a>
                <button
                  className="bg-[#e7e6e1] text-gray-700 p-1 px-4 rounded"
                  size="sm"
                  onClick={generatePDF}
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
                  {pendapatan.map((p) => (
                    <tr className="border-y-2">
                      <td className="text-left px-5 p-2 text-gray-700 font-semibold">
                        {p.kodetransaksi_pendes} {p.nama_pendes}
                      </td>
                      <td>
                        {new Intl.NumberFormat("de-DE").format(
                          p.anggaran_pendes
                        )}
                      </td>
                      <td>
                        {new Intl.NumberFormat("de-DE").format(
                          p.realisasi_pendes
                        )}
                      </td>
                      <td>
                        {new Intl.NumberFormat("de-DE").format(p.sisa_pendes)}
                      </td>
                      <td className="flex justify-end items-center gap-2 pr-3">
                        <Link
                          href={{
                            pathname: "/editPendes/[id]",
                            query: { id: p.id },
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
                            pathname: "/deletePendes/[id]",
                            query: { id: p.id },
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
    </>
  );
}
