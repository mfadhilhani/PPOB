'use client';


import { useState, useEffect  } from 'react';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Product } from './product';
import { SelectPLNBills  } from '@/lib/dbpln';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProductsTable({ products }: { products: SelectPLNBills[] }) {

 const productsPerPage = 5; // Jumlah data per halaman
  const [offset, setOffset] = useState(0); // Offset untuk pagination

  // Data untuk halaman saat ini
  const currentProducts = products.slice(offset, offset + productsPerPage);

  const totalProducts = products.length; // Total data

  useEffect(() => {
    console.log('Offset Updated:', offset);
    console.log('Current Products:', currentProducts);
  }, [offset, currentProducts]);

  const nextPage = () => {
    console.log('Next button clicked');
    if (offset + productsPerPage < totalProducts) {
      setOffset(offset + productsPerPage);
    }
  };

  const prevPage = () => {
    console.log('Prev button clicked');
    if (offset - productsPerPage >= 0) {
      setOffset(offset - productsPerPage);
    }
  };


  return (
<Card>
      <CardHeader>
        <CardTitle>PLN</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
           <TableHead className="text-center font-semibold">Status</TableHead>
           <TableHead className="text-center font-semibold">ID Pelanggan</TableHead>
           <TableHead className="text-center font-semibold">Nama Pelanggan</TableHead>
           <TableHead className="text-center font-semibold">Lembar Tagihan</TableHead>
           <TableHead className="text-center font-semibold">Nominal Tagihan</TableHead>
           <TableHead className="text-center font-semibold">Biaya Admin</TableHead>
           <TableHead className="text-center font-semibold">Total Tagihan</TableHead>
           <TableHead className="text-center font-semibold">Keterangan</TableHead>
           <TableHead className="text-center font-semibold">Aksi</TableHead>
         </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <Product key={product.customerId} product={product} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {offset + 1}-{Math.min(offset + productsPerPage, totalProducts)}
            </strong>{' '}
            of <strong>{totalProducts}</strong> products
          </div>
          <div className="flex">
            <Button
              onClick={prevPage}
              variant="ghost"
              size="sm"
              disabled={offset === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              onClick={nextPage}
              variant="ghost"
              size="sm"
              disabled={offset + productsPerPage >= totalProducts}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}