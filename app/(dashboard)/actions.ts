'use server';

// import { deleteProductById } from '@/lib/dbpln';
import { revalidatePath } from 'next/cache';

export async function deleteProduct(formData: FormData) {
  // let id = Number(formData.get('id'));
  // await deleteProductById(id);
  // revalidatePath('/');
}
