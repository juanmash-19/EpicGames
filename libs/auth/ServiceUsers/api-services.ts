export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  country: string;
  rol: string;
  username: string;
  password: string; 
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

export const createUser = async (user: Partial<User>): Promise<User> => {
  const response = await fetch("http://192.168.69.110:4000/api/v1/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Error al crear el usuario");
  }
  return await response.json();
};

export const updateUser = async (id: number, user: Partial<User>): Promise<void> => {
  const response = await fetch(`http://192.168.69.110:4000/api/v1/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Error al actualizar el usuario");
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  const response = await fetch(`http://192.168.69.110:4000/api/v1/users/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar el usuario");
  }
};
