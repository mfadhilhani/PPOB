"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("transaksi");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col md:flex-row">
      


      {/* Main Content */}
      <div className="flex-1 overflow-y-auto  md:ml-16 md:mt-0">
        {/* Header */}
        <header className="bg-white shadow px-10 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            PLN
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
                      <th className="px-6 py-3 ">Status</th>
                      <th className="px-6 py-3 ">ID Pelanggan</th>
                      <th className="px-6 py-3 ">Nama Pelanggan</th>
                      <th className="px-6 py-3 ">Lembar Tagihan</th>
                      <th className="px-6 py-3 ">Nominal Tagihan</th>
                      <th className="px-6 py-3 ">Biaya Admin</th>
                      <th className="px-6 py-3 ">Total Tagihan</th>
                      <th className="px-6 py-3 ">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        status: "Gagal",
                        id: "123456789",
                        nama: "John Doe",
                        lembar: 1,
                        nominal: "Rp100.000",
                        admin: "Rp2.000",
                        total: "Rp102.000",
                        keterangan: "Transaksi gagal",
                      },
                      {
                        status: "Sukses",
                        id: "987654321",
                        nama: "Jane Smith",
                        lembar: 1,
                        nominal: "Rp150.000",
                        admin: "Rp3.000",
                        total: "Rp153.000",
                        keterangan: "Transaksi sukses",
                      },
                      {
                        status: "Sukses",
                        id: "987654321",
                        nama: "Jane Smith",
                        lembar: 1,
                        nominal: "Rp150.000",
                        admin: "Rp3.000",
                        total: "Rp153.000",
                        keterangan: "Transaksi sukses",
                      },
                    
                      
                    ].map((item, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 ${
                          item.status === "Gagal"
                            ? "bg-red-100"
                            : item.status === "Sukses"
                            ? "bg-green-100"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              item.status === "Gagal"
                                ? "bg-red-100 text-red-600"
                                : item.status === "Sukses"
                                ? "bg-green-100 text-green-600"
                                : ""
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">{item.id}</td>
                        <td className="px-6 py-4">{item.nama}</td>
                        <td className="px-6 py-4">{item.lembar}</td>
                        <td className="px-6 py-4">{item.nominal}</td>
                        <td className="px-6 py-4">{item.admin}</td>
                        <td className="px-6 py-4">{item.total}</td>
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