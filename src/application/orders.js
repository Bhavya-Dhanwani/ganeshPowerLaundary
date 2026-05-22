import { initialOrders } from "@/domain/laundryCatalog";

export function createOrder(formValues, sequence) {
  return {
    id: `GPL-${String(sequence).padStart(4, "0")}`,
    customer: formValues.customer.trim(),
    phone: formValues.phone.trim(),
    service: formValues.service,
    items: Number(formValues.items),
    amount: Number(formValues.amount),
    due: formValues.due.trim(),
    status: "Pending",
  };
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
  return initialOrders;
}
