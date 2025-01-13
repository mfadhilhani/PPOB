'use server';

// import { deleteProductById } from '@/lib/dbpln';
import { revalidatePath } from 'next/cache';

export async function deleteProduct(formData: FormData) {
  // let customerId = Number(formData.get('customerId'));
  // await deleteProductById(customerId);
  // revalidatePath('/');
}
export async function deleteProduct2(formData: FormData) {
  // let id = Number(formData.get('id'));
  // await deleteProductById(id);
  // revalidatePath('/');
}
