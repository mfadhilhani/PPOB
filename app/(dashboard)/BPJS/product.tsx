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
import { SelectPLNBills } from '@/lib/dbpln';
import { deleteProduct } from './actions';

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
      <TableCell>{product.customerId}</TableCell>
      <TableCell>{product.customerName}</TableCell>
      <TableCell>{product.billSheets}</TableCell>
      <TableCell>{product.billAmount}</TableCell>
      <TableCell>{product.adminFee}</TableCell>
      <TableCell>{product.totalBill}</TableCell>
      <TableCell>{product.description}</TableCell>
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
