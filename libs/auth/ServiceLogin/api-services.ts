export const login = async (user: { email: string; password: string }) => {
  console.log("Enviando datos de login:", user);

  const bodydata = JSON.stringify({
    email: user.email,
    password: user.password
  });

  try {
    const response = await fetch("http://192.168.1.10:4000/api/v1/auth/login", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: bodydata
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la solicitud de login:", error);
    return { error: "No se pudo iniciar sesión. Verifica tu conexión." };
  }
};
