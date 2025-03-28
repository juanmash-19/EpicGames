export const fetchUserProfile = async (token: string | null) => {
  if (!token) return null;

  try {
    const res = await fetch("http://172.20.10.3:4000/api/v1/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return await res.json();
    } else {
      throw new Error("No se pudo cargar la información del perfil.");
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export const updateUserProfile = async (
  token: string | null,
  payload: Record<string, any>
) => {
  if (!token) return;

  try {
    const res = await fetch("http://172.20.10.3:4000/api/v1/users/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      return { success: true };
    } else {
      const error = await res.json();
      throw new Error(error.message || "No se pudo actualizar el perfil");
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};
