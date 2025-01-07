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


export async function getPLNBills(search: string, offset: number) {
  // Simulasi data dari database
  const dummyBills = [   
    {
      status: 'inactive' as const,
      customerId: 78901,
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
      customerId: 78901,
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: 'Rp 225.000',
      adminFee: 'Rp 2.500',
      totalBill: 'Rp 227.500',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
    {
      status: 'inactive' as const,
      customerId: 78901,
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: 'Rp 225.000',
      adminFee: 'Rp 2.500',
      totalBill: 'Rp 227.500',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
    {
      status: 'inactive' as const,
      customerId: 78901,
      customerName: 'Jane Smith',
      billSheets: 3,
      billAmount: 'Rp 225.000',
      adminFee: 'Rp 2.500',
      totalBill: 'Rp 227.500',
      description: 'Pembayaran bulan November',
      createdAt: new Date('2023-11-15'),
    },
   
    {
      status: 'archived' as const,
      customerId: 78901,
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
    bills: dummyBills,
    newOffset: offset + dummyBills.length,
    totalBills: dummyBills.length,
  };
}
