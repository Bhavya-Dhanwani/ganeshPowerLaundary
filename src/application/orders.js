import api from "@/infrastructure/api";

export async function fetchOrders() {
  const res = await api.get("/api/order/getOrder");
  return res.data?.data || [];
}

export async function createOrder(formValues) {
  const payload = {
    customer: String(formValues.customer || "").trim(),
    phone: String(formValues.phone || "").trim(),
    service: formValues.service,
    quantity: Number(formValues.items),
    amount: Number(formValues.amount),
    due: new Date(formValues.due).toISOString(),
    tower: formValues.tower || "",
    flat: formValues.flat || "",
  };

  const res = await api.post("/api/order/createOrder", payload);
  return res.data?.data;
}

export async function updateOrder(id, status) {
  const res = await api.put(`/api/order/updateorder/${id}`, { status });
  return res.data?.data;
}

export async function deleteOrder(id) {
  const res = await api.delete(`/api/order/deleteorder/${id}`);
  return res.data?.data;
}

export function calculateOrderSummary(orders) {
  return {
    total: orders.length,
    pending: orders.filter((order) => order.status !== "Completed").length,
    completed: orders.filter((order) => order.status === "Completed").length,
    revenue: orders.reduce((total, order) => total + Number(order.amount || 0), 0),
  };
}

export function getInitialOrders() {
  return [];
}
