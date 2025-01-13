import 'server-only';

// Import Drizzle ORM
import { pgTable, text, numeric, integer, timestamp, pgEnum, serial } from 'drizzle-orm/pg-core';
import { number } from 'zod';

// Enum untuk Status
export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

// Tabel PLN Bills
export const plnBills = pgTable('pln_bills', {
  customerId: serial('customer_id').primaryKey(), // ID Pelanggan
  customerName: text('customer_name').notNull(), // Nama Pelanggan
  billSheets: integer('bill_sheets').notNull(), // Lembar Tagihan
  billAmount: numeric('bill_amount', { precision: 12, scale: 2 }).notNull(), // Nominal Tagihan
  adminFee: numeric('admin_fee', { precision: 12, scale: 2 }).notNull(), // Biaya Admin
  totalBill: numeric('total_bill', { precision: 12, scale: 2 }).notNull(), // Total Tagihan
  status: statusEnum('status').notNull(), // Status
  description: text('description'), // Keterangan
  createdAt: timestamp('created_at').defaultNow(), // Tanggal Dibuat
});

// Tabel Receipts
export const receiptsTable = pgTable('receipts', {
  customerId: text('customer_id').notNull(), // ID Pelanggan
  customerName: text('customer_name').primaryKey(), // Nama Pelanggan
  billSheets: integer('bill_sheets').notNull(), // Lembar Tagihan
  billAmount: numeric('bill_amount', { precision: 12, scale: 2 }).notNull(), // Nominal Tagihan
  adminFee: numeric('admin_fee', { precision: 12, scale: 2 }).notNull(), // Biaya Admin
  totalBill: numeric('total_bill', { precision: 12, scale: 2 }).notNull(), // Total Tagihan
  status: statusEnum('status').notNull(), // Status
  description: text('description'), // Keterangan
  TotalTagihan: text('Total Tagihan').notNull(), // Total Tagihan
  WaktuTransaksi: text('Waktu Transaksi').notNull(), // Waktu Transaksi
  createdAt: timestamp('created_at').defaultNow(), // Tanggal Dibuat
});

// Tipe untuk Select
export type SelectPLNBills = typeof plnBills.$inferSelect;
export type SelectReceipts = typeof receiptsTable.$inferSelect;

// Fungsi untuk Mendapatkan Data PLN Bills
export async function getPLNBills(search: string, offset: number) {
  const dummyBills = [
    {
      status: 'inactive' as const,
      customerId: 12345,
      customerName: 'John Doe',
      billSheets: 2,
      billAmount: '150000', // Nominal dalam bentuk string untuk format konsistensi
      adminFee: '5000',
      totalBill: '155000',
      description: 'Pembayaran bulan Oktober',
      createdAt: new Date('2023-10-01'),
    },
    {
      status: 'active' as const,
      customerId: 67890,
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: '225000',
      adminFee: '2500',
      totalBill: '227500',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
  ];

  return {
    bills: dummyBills
      .filter((bill) =>
        bill.customerName.toLowerCase().includes(search.toLowerCase())
      )
      .slice(offset, offset + 10), // Pagination: 10 item per halaman
    newOffset: offset + 10,
    totalBills: dummyBills.length,
  };
}

// Fungsi untuk Mendapatkan Data Receipts
export async function getReceipts(search: string, offset: number) {
  const dummyReceipts = [
    {
      status: 'active' as const,
      customerId: "Cetak & Download",
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: '225000',
      adminFee: '2500',
      totalBill: '22750',
      TotalTagihan: '227500',
      WaktuTransaksi: '2023-11-15',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
  ];

  // Menghapus duplikasi data
  const uniqueReceipts = Array.from(
    new Map(dummyReceipts.map((item) => [item.customerId, item])).values()
  );

  return {
    receipts: uniqueReceipts
      .filter((receipt) =>
        receipt.customerName.toLowerCase().includes(search.toLowerCase())
      )
      .slice(offset, offset + 10), // Pagination: 10 item per halaman
    newOffset: offset + 10,
    totalReceipts: uniqueReceipts.length,
  };
}
