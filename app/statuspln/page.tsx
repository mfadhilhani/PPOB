import Link from "next/link";

export default function StatusPLN() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-lg font-semibold">Status Pembayaran PLN</h1>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="text-center text-green-600 font-semibold mt-2">Sukses</p>

        {/* Payment Details */}
        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Senin, 6 September 2021</span>
            <span>09:30:12 WITA</span>
          </div>
          <div className="flex justify-between">
            <span>PLN Pra Bayar</span>
            <span>Sep21/Kelas III Rp 123.456</span>
          </div>
          <div className="flex justify-between">
            <span>123xxxxxxxxx</span>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-4 p-4 border rounded-md bg-gray-50 text-sm text-gray-600">
          <p>IDPEL: XXXXXXX</p>
          <p>Nama: XXXXXXX</p>
          <p>Stand Meter: XXXXXXX</p>
          <p>...</p>
          <p>Total Bayar: Rp XXX.XXX</p>
          <p className="mt-2">
            PLN menyatakan struk ini sah.
            <br />
            Terima Kasih.
          </p>
        </div>

        {/* Navigation */}
        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center"
          >
            BERANDA
          </Link>
        </div>
      </div>
    </div>
  );
}