import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { SelectPLNBills } from '@/lib/dbpulsa';
import { SelectReceipts } from '@/lib/dbpulsa';
import { deleteProduct } from './actions';
import { deleteProduct2 } from './actions';
import Link from 'next/link';



export function Product({ product }: { product: SelectPLNBills }) {
  return (
    <TableRow>      
      <TableCell>
        <Badge variant={
          product.status === 'active' ? 'default' :
          product.status === 'inactive' ? 'secondary' : 'outline'
        }>
          {product.status}
        </Badge>
      </TableCell>
      <TableCell className="text-center">{product.customerId}</TableCell>
      <TableCell className="text-center">{product.customerName}</TableCell>
      <TableCell className="text-center">{product.billSheets}</TableCell>
      <TableCell className="text-center">{product.billAmount}</TableCell>
      <TableCell className="text-center">{product.adminFee}</TableCell>
      <TableCell className="text-center">{product.totalBill}</TableCell>
      <TableCell className="text-center">{product.description}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={deleteProduct}>
                <button type="submit">Delete</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

export function Product2({ product2 }: { product2: SelectReceipts }) {
  return (
    <TableRow>      
        <TableCell className="text-center">
        <Link href={"./statuspln"}>
        <Button className="bg-black hover:bg-gray-600 text-white" onClick={() => console.log(product2.customerId)} variant="ghost" size="sm">
  {product2.customerId}
</Button>
</Link>
      </TableCell>
      <TableCell>
        <Badge variant={
          product2.status === 'active' ? 'default' :
          product2.status === 'inactive' ? 'secondary' : 'outline'
        }>
          {product2.status}
        </Badge>
      </TableCell>
      <TableCell className="text-center">{product2.billSheets}</TableCell>
      <TableCell className="text-center">{product2.customerName}</TableCell>
      <TableCell className="text-center">{product2.billAmount}</TableCell>
      <TableCell className="text-center">{product2.BL_TH}</TableCell>
      <TableCell className="text-center">{product2.adminFee}</TableCell>
      <TableCell className="text-center">{product2.totalBill}</TableCell>
      <TableCell className="text-center">{product2.TotalTagihan}</TableCell>
      <TableCell className="text-center">{product2.WaktuTransaksi}</TableCell>
      <TableCell className="text-center">{product2.description}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={deleteProduct2}>
                <button type="submit">Delete</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}