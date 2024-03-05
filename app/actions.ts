"use server";

const API_HOST = process.env.API_HOST;

export async function createUser(prevState: any, formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await fetch(`${API_HOST}/user`, {
      body: JSON.stringify(rawFormData),
      method: "POST",
    });
    return res.json();
    //  redirect(`/confirm`);
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
