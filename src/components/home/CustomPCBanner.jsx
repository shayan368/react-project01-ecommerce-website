
export default function CustomPCBanner() {
  return (
    <div className="px-6 lg:px-12 py-6">
      
      <div className="bg-blue-500 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 overflow-hidden">

        <div className="text-white max-w-md p-10">
          <h2 className="text-xl lg:text-2xl font-semibold mb-6 mt-4">
            Build your Custom PC <br />NOW
          </h2>

          <button className="bg-white text-blue-600 px-5 py-2 rounded text-sm font-medium hover:bg-gray-100 transition">
            View Details
          </button>
        </div>

      </div>

    </div>
  );
}