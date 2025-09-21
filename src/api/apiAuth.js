export async function getCurrentUser(id) {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`);

    if (!response.ok) {
      throw new Error("خطا در دریافت کاربر");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signup(newUser) {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("خطا در ایجاد کاربر جدید");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login({ email, password }) {
  try {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      throw new Error("خطا در دریافت اطلاعات");
    }

    const users = await response.json();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      throw new Error("ایمیل یا پسورد اشتباه است");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editUser(newUser, id) {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("خطا در ویرایش اطلاعات کاربر");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
