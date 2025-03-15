// import { UserDAO } from "../../../interfaces/UserInterface";
// import { LoginDTO } from "../../../interfaces/AuthInterfaces";
// // import { useLoadingStore } from "@/store/LoadingSpinner";

// export const loginUser = async (body: LoginDTO): Promise<UserDAO> => {
//     // const { startLoading, stopLoading } = useLoadingStore();

//     try{
//         // startLoading();
//         const response = await fetch(`http://localhost:4000/api/users/login`,{
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body),
//         });

//         if(!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Error de autenticacion")
//         }

//         const jsonData = await response.json()
//         return jsonData
//     }catch(error){
//         console.error("Error en autenticación:", error);
//         throw new Error("No se pudo completar la autenticación. Por favor, inténtalo de nuevo.");
//     }finally{
//         // stopLoading();
//     }
// }
