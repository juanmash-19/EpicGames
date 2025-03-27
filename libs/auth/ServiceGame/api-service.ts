const API_URL = "http://172.20.10.4:4000/api/v1/videogames";

export interface Videogame {
  id?: string;
  name: string;
  description: string;
  price: number;
  image?: File | string;
}

export const videogameService = {
  getAll: async (): Promise<Videogame[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener videojuegos");

    const data = await response.json();

    
    const videojuegosAjustados = data.map((juego: any) => ({
      ...juego,
      image: juego.image
        ? `http://172.20.10.4:4000/${juego.image.replace(/\\/g, "/")}` 
        : null,
      price: typeof juego.price === "string" ? parseFloat(juego.price) : juego.price, 
    }));

    return videojuegosAjustados;
  },

  getById: async (id: string): Promise<Videogame> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Error al obtener el videojuego");

    const data = await response.json();

    
    return {
      ...data,
      image: data.image
        ? `http://192.168.69.110:4000/${data.image.replace(/\\/g, "/")}`
        : null,
      price: typeof data.price === "string" ? parseFloat(data.price) : data.price,
    };
  },

  create: async (videogame: Videogame): Promise<Videogame> => {
    const formData = new FormData();
    formData.append("name", videogame.name);
    formData.append("description", videogame.description);
    formData.append("price", videogame.price.toString());
    if (videogame.image) {
      formData.append("image", videogame.image);
    }

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Error al agregar el videojuego");
    return response.json();
  },

  update: async (id: string, videogame: Videogame): Promise<Videogame> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videogame),
    });

    if (!response.ok) throw new Error("Error al actualizar el videojuego");
    return response.json();
  },

  updateImage: async (id: string, image: File): Promise<void> => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(`${API_URL}/${id}/image`, {
      method: "PATCH",
      body: formData,
    });

    if (!response.ok) throw new Error("Error al actualizar la imagen");
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar el videojuego");
  },
};