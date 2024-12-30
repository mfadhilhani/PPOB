"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("transaksi");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 w-16 flex flex-col border-r bg-white">
  <nav className="flex flex-col items-center gap-6 py-6">
    {/* Sidebar Menu */}
    {[
      {
        href: "/",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {/* Icon for PLN */}
            <path d="M13 2L3 14h7v8l10-12h-7V2z" />
          </svg>
        ),
        srText: "PLN",
      },
      {
        href: "pulsa",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {/* Icon for Pulsa */}
            <path d="M7 2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        ),
        srText: "Pulsa",
      },
      {
        href: "bpjs",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {/* Icon for BPJS */}
            <path d="M4 6h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
  <path d="M4 10h16" />
          </svg>
        ),
        srText: "BPJS",
      },
    ].map((item, idx) => (
      <a
        key={idx}
        href={item.href}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:text-blue-600"
      >
        {item.icon}
        <span className="sr-only">{item.srText}</span>
      </a>
    ))}
  </nav>
</aside>


      {/* Main Content */}
      <div className="flex-1 overflow-y-auto  md:ml-16 md:mt-0">
        {/* Header */}
        <header className="bg-white shadow px-10 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            BPJS
          </h2>
        </header>

        {/* Tab Navigation */}
        <div className="bg-white shadow px-6 py-4 flex justify-start space-x-4">
          <button
            onClick={() => setActiveTab("transaksi")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "transaksi"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Transaksi
          </button>
          <button
            onClick={() => setActiveTab("struk")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "struk"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Struk Pembelian
          </button>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white shadow px-6 py-4">
          <form className="flex flex-wrap items-center space-x-4 space-y-2">
            <input
              type="text"
              placeholder="PLN/Pulsa/BPJS"
              className="flex-grow w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="No HP"
              className="flex-grow w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="date"
              className="flex-grow w-full md:w-1/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="date"
              className="flex-grow w-full md:w-1/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Filter
            </button>
          </form>
        </div>

        {/* Main Section */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "transaksi" && (
            <div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <h3 className="px-6 py-4 text-lg font-semibold">Transaksi</h3>
                <table className="table-auto w-full text-left border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
        <th className="px-6 py-3">Status Transaksi</th>
        <th className="px-6 py-3">Nomor Kartu</th>
        <th className="px-6 py-3">Nama Pelanggan</th>
        <th className="px-6 py-3">Periode</th>
        <th className="px-6 py-3">Nominal Tagihan</th>
        <th className="px-6 py-3">Biaya Admin</th>
        <th className="px-6 py-3">Total Tagihan</th>
        <th className="px-6 py-3">Waktu Transaksi</th>
        <th className="px-6 py-3">Keterangan</th>
      </tr>
    </thead>
    <tbody>
      {[
        {
          status: "Sukses",
          nomorKartu: "123456789",
          nama: "John Doe",
          periode: "2024/01",
          nominal: "100.000",
          admin: "2.000",
          total: "102.000",
          waktu: "10:00",
          keterangan: "Pembayaran berhasil",
        },
      ].map((item, index) => (
        <tr
          key={index}
          className={`hover:bg-gray-100 ${
            item.status === "Sukses" ? "bg-blue-100" : "bg-red-100"
          }`}
        >
          <td className="px-6 py-4 text-green-600 font-bold">{item.status}</td>
          <td className="px-6 py-4">{item.nomorKartu}</td>
          <td className="px-6 py-4">{item.nama}</td>
          <td className="px-6 py-4">{item.periode}</td>
          <td className="px-6 py-4">{item.nominal}</td>
          <td className="px-6 py-4">{item.admin}</td>
          <td className="px-6 py-4">{item.total}</td>
          <td className="px-6 py-4">{item.waktu}</td>
          <td className="px-6 py-4">{item.keterangan}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            </div>
          )}




        {activeTab === "struk" && (
          <div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <h3 className="px-6 py-4 text-lg font-semibold">Struk Pembelian</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-gray-700">Struk</th>
                    <th className="px-6 py-3 text-gray-700">Status Transaksi</th>
                    <th className="px-6 py-3 text-gray-700">ID Pelanggan</th>
                    <th className="px-6 py-3 text-gray-700">Nama Pelanggan</th>
                    <th className="px-6 py-3 text-gray-700">Lembar Tagihan</th>
                    <th className="px-6 py-3 text-gray-700">BL/TH</th>
                    <th className="px-6 py-3 text-gray-700">Nominal Tagihan</th>
                    <th className="px-6 py-3 text-gray-700">Biaya Admin</th>
                    <th className="px-6 py-3 text-gray-700">Total Tagihan</th>
                    <th className="px-6 py-3 text-gray-700">Waktu Transaksi</th>
                    <th className="px-6 py-3 text-gray-700">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      Struk: "Cetak & Download",
                      statustransaksi: "-",
                      IDPelanggan: "-",
                      NamaPelanggan: "-",
                      LembarTagihan: "-",
                      BLTH: "-",
                      NominalTagihan: "-",
                      BiayaAdmin: "-",
                      TotalTagihan: "-",
                      WaktuTransaksi: "-",
                      Keterangan: "-",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Link href="statuspln">
                          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                            Cetak & Download
                          </button>
                        </Link>
                      </td>
                      <td className="px-6 py-4">{item.statustransaksi}</td>
                      <td className="px-6 py-4">{item.IDPelanggan}</td>
                      <td className="px-6 py-4">{item.NamaPelanggan}</td>
                      <td className="px-6 py-4">{item.LembarTagihan}</td>
                      <td className="px-6 py-4">{item.BLTH}</td>
                      <td className="px-6 py-4">{item.NominalTagihan}</td>
                      <td className="px-6 py-4">{item.BiayaAdmin}</td>
                      <td className="px-6 py-4">{item.TotalTagihan}</td>
                      <td className="px-6 py-4">{item.WaktuTransaksi}</td>
                      <td className="px-6 py-4">{item.Keterangan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}