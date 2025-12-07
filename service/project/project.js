"use server";

export const getProjects = async () => {
  try {
    const res = await fetch(`${process.env.VITE_API_URL}/api/projects`, {
      method: "GET",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
};
