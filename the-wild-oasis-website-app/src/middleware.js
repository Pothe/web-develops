/*import { NextResponse } from "next/server"
// to check if the user is authenticated, you can use the auth function from your Auth.js file. You can import it and call it within the middleware function to determine if the user has a valid session. Based on the authentication status, you can decide whether to allow access to the requested page or redirect them to a login page.   

export function middleware(request){
    console.log(request )
return NextResponse.redirect(new URL('/about',request.url))
}
*/
   
 // this middleware will run on every request route that matches the specified routes in the matcher configuration. In this example, it will redirect all requests to the '/about' page. You can customize the logic inside the middleware function to check for authentication and redirect accordingly. it will redirect to the about page for any request to the /account page, 

 import {auth} from "@/app/_lib/Auth"   
 export const middleware = auth;
export const config={
    matcher:['/account']
}