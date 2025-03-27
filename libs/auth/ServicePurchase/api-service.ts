const API_URL = "http://172.20.10.4:4000/api/v1/cart";

export const fetchPurchaseHistory = async (userId: number) => {
  try {
    const response = await fetch(`${API_URL}?userId=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();
    console.log("📦 Datos recibidos:", data);
    return data;
  } catch (error) {
    console.error("🚨 Error obteniendo historial de compras:", error);
    return [];
  }
};
