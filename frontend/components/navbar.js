export default function Navbar() {
  return (
    <>
      <div className="relative h-[8vh]"></div>
      <div id="navbar" className="w-full h-[8vh] bg-[#c0dded] fixed z-20 top-0">
        <div className="flex h-full w-full justify-between items-center">
          <div className="flex flex-row justify-around items-center w-[17%] h-full py-2">
            <div className="w-auto h-full">
              <img href="#" className="w-full h-full" src="/banyumas.svg" />
            </div>
            <div className="flex items-center w-auto h-full">
              <text className="text-2xl font-semibold text-gray-600">
                Desa Melung
              </text>
            </div>
          </div>
          <div className="flex flex-row w-[25%] h-full">
            <div className="flex items-center justify-center w-[90%] h-full">
              <a
                href="../laporanKeuangan"
                className="font-medium text-xl text-gray-600 hover:underline"
              >
                Pendapatan dan Pengeluaran Desa
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
