export const register = async (user: { username: string; firstName: string; lastName: string; country: string; email: string; password: string; rol:string; }) => {
  try {
    console.log("Enviando datos:", user);
    const response = await fetch("http://172.20.10.4:4000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        name: user.firstName,
        lastname: user.lastName,
        country: user.country,
        email: user.email,
        password: user.password,
        rol: user.rol,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text(); 
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    try {
      return await response.json();
    } catch (jsonError) {
      throw new Error("La respuesta del servidor no es JSON válido.");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
};
