export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  country: string;
  rol: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    console.log(" Obteniendo usuarios:", );
    const response = await fetch("http://172.20.10.4:4000/api/v1/users");
    if (!response.ok) {
      throw new Error("Error al obtener los usuarios");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return [];
  }
};
