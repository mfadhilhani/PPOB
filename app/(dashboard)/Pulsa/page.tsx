import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from './products-table';
import { getPLNBills, statusEnum } from '@/lib/dbpln';

export default async function ProductsPage(
  props: {
    searchParams: Promise<{ q: string; offset: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;

  // Ambil data PLN bills
  const { bills, newOffset, totalBills } = await getPLNBills(search, Number(offset));

  // Transformasi data agar sesuai dengan tipe yang diharapkan oleh ProductsTable
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

  

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Transaksi</TabsTrigger>
          <TabsTrigger value="active">Struk Pembelian</TabsTrigger>
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

      <TabsContent value="all">
        <ProductsTable
          products={transformedBills}  // Only pass the products prop
        />
      </TabsContent>
    </Tabs>
  );
}
