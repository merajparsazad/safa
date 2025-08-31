export async function getServices() {
  try {
    const response = await fetch("http://localhost:3000/services");

    if (!response.ok) {
      throw new Error("خطا در دریافت خدمت");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteService(id) {
  try {
    const response = await fetch(`http://localhost:3000/services/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("خطا در حذف خدمت");
    }

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
}
