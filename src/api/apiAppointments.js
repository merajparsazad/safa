export async function getAppointments(businessId) {
  try {
    const [appointmentsRes, usersRes, servicesRes] = await Promise.all([
      fetch("http://localhost:3000/appointments"),
      fetch("http://localhost:3000/users"),
      fetch("http://localhost:3000/services"),
    ]);

    if (!appointmentsRes.ok || !usersRes.ok || !servicesRes.ok) {
      throw new Error("خطا در دریافت نوبت‌ها");
    }

    const [appointments, users, services] = await Promise.all([
      appointmentsRes.json(),
      usersRes.json(),
      servicesRes.json(),
    ]);

    const filteredAppointments = appointments.filter(
      (appointment) => Number(appointment.business_id) === Number(businessId),
    );

    const result = filteredAppointments.map((appointment) => {
      const customer = users.find(
        (user) => Number(user.id) === Number(appointment.customer_id),
      );
      const service = services.find(
        (service) => Number(service.id) === Number(appointment.service_id),
      );

      return {
        id: appointment.id,
        serviceName: service ? service.name : "نامشخص",
        servicePrice: service ? service.price : "نامشخص",
        customerName: customer ? customer.fullName : "نامشخص",
        startTime: appointment.start_time,
        endTime: appointment.end_time,
        status: appointment.status,
      };
    });

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}
