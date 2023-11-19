import { NextResponse } from "next/server";
import {headers, cookies} from 'next/headers';
import {redirect} from 'next/navigation';


export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const posts = req.json()
//   redirect('/')

  const headersList = headers()
  const type = headersList.get('Content-Type')

  const cookiesList = cookies();
  const coo = cookiesList.get('Cookie_1')?.value;



  return NextResponse.json({type, coo})
}
