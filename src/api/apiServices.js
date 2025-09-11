export async function getServices(businessId) {
  try {
    const response = await fetch("http://localhost:3000/services");

    if (!response.ok) {
      throw new Error("خطا در دریافت خدمات");
    }

    const json = await response.json();
    const filteredServices = json.filter(
      (service) => service.business_id === businessId,
    );
    return filteredServices;
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

export async function createEditService(newService, id) {
  try {
    const url = id
      ? `http://localhost:3000/services/${id}`
      : "http://localhost:3000/services";
    const method = id ? "PATCH" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    });

    if (!response.ok) {
      throw new Error(id ? "خطا در ویرایش خدمت" : "خطا در افزودن خدمت");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
