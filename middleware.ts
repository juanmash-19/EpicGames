import type { NextRequest } from "next/server"
import { getToken } from "./libs/auth/StoreToken";

// Definir rutas protegidas
const protectedRoutes = ["/login", "/register", "/Carrito"];

export function middleware(request: NextRequest) {
  //const token = await getToken();
  console.log("request.nextUrl.pathname");
  
  // if (protectedRoutes.includes(request.nextUrl.pathname)) {

  //   return NextResponse.redirect(new URL("/", request.url)); 
  // }

  // return NextResponse.next(); 
}

// export const config = {
//   matcher: ["/Carrito", "/lista-deseos", "/biblioteca", "/noticias", "/register"],
// };
