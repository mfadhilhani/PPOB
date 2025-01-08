// dbpln.ts
import 'server-only';

import { pgTable, text, numeric, integer, timestamp, pgEnum, serial } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

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

export type SelectPLNBills = typeof plnBills.$inferSelect;

// Fungsi untuk mendapatkan data PLN bills
export async function getPLNBills(search: string, offset: number) {
  const dummyBills = [
    {
      status: 'inactive' as const,
      customerId: 12345,
      customerName: 'John Doe',
      billSheets: 2,
      billAmount: 'Rp 150.000',
      adminFee: 'Rp 5.000',
      totalBill: 'Rp 155.000',
      description: 'Pembayaran bulan Oktober',
      createdAt: new Date('2023-10-01'),
    },
    {
      status: 'active' as const,
      customerId: 67890,
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: 'Rp 225.000',
      adminFee: 'Rp 2.500',
      totalBill: 'Rp 227.500',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
  ];

  return {
    bills: dummyBills.filter((bill) =>
      bill.customerName.toLowerCase().includes(search.toLowerCase())
    ),
    newOffset: offset + dummyBills.length,
    totalBills: dummyBills.length,
  };
}

// Fungsi untuk mendapatkan data receipts
export async function getReceipts(search: string, offset: number) {
  const dummyReceipts = [
    {
      status: 'active' as const,
      customerId: 67890,
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: 'Rp 225.000',
      adminFee: 'Rp 2.500',
      totalBill: 'Rp 227.500',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
    {
      status: 'active' as const,
      customerId: 67890,
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: 'Rp 225.000',
      adminFee: 'Rp 2.500',
      totalBill: 'Rp 227.500',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
  ];

  return {
    receipts: dummyReceipts.filter((receipt) =>
      receipt.customerName.toLowerCase().includes(search.toLowerCase())
    ),
    newOffset: offset + dummyReceipts.length,
    totalReceipts: dummyReceipts.length,
  };
}
