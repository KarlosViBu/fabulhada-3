import { NextResponse, type NextRequest } from "next/server";
 
import { jwtVerify } from "jose";
 
export async function middleware(req: NextRequest) {

   // console.log('K-middleware');
   // console.log(req.nextUrl.pathname);
   if ( req.nextUrl.pathname.includes('/admin')) {
      console.log('Valido Admin');
      
   }
      
   return NextResponse.next()
}
