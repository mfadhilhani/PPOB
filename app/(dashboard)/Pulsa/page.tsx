import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable, ProductsTable2 } from './products-table';
import { getPLNBills, getReceipts, statusEnum } from '@/lib/dbpln';

export default async function ProductsPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;

  // Ambil data untuk Transaksi (PLN bills)
  const { bills, newOffset: newOffsetBills, totalBills } = await getPLNBills(search, Number(offset));

  // Ambil data untuk Struk Pembelian
  const { receipts, newOffset: newOffsetReceipts, totalReceipts } = await getReceipts(search, Number(offset));

  // Transformasi data PLN bills
  const transformedBills = bills.map((bill) => ({
    status: bill.status as typeof statusEnum.enumValues[number],
    customerId: Number(bill.customerId),
    customerName: String(bill.customerName),
    billSheets: Number(bill.billSheets),
    billAmount: String(bill.billAmount),
    adminFee: String(bill.adminFee),
    totalBill: String(bill.totalBill),
    description: bill.description || null,
    createdAt: bill.createdAt ? new Date(bill.createdAt) : null,
  }));

  // Transformasi data Struk Pembelian
  const transformedReceipts = receipts.map((receipt) => ({
    status: receipt.status as typeof statusEnum.enumValues[number],
    customerId: String(receipt.customerId),
    customerName: String(receipt.customerName),
    billSheets: Number(receipt.billSheets),
    billAmount: String(receipt.billAmount),
    adminFee: String(receipt.adminFee),
    totalBill: String(receipt.totalBill),
    TotalTagihan: String(receipt.TotalTagihan),
    WaktuTransaksi: String(receipt.WaktuTransaksi),
    BL_TH: String(receipt.BL_TH),
    description: receipt.description || null,
    createdAt: receipt.createdAt ? new Date(receipt.createdAt) : null,
}));


  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Transaksi</TabsTrigger>
          <TabsTrigger value="receipts">Struk Pembelian</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Bill
            </span>
          </Button>
        </div>
      </div>

      {/* Tab untuk Transaksi */}
      <TabsContent value="all">
        <ProductsTable products={transformedBills} />
      </TabsContent>

      {/* Tab untuk Struk Pembelian */}
      <TabsContent value="receipts">
        <ProductsTable2
          products2={transformedReceipts} 
        />
      </TabsContent>
    </Tabs>
  );
}