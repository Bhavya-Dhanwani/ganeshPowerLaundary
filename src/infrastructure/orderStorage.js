"use client";

const STORAGE_KEY = "ganesh-power-laundary-orders";

export function loadOrders(fallbackOrders) {
  try {
    const rawOrders = window.localStorage.getItem(STORAGE_KEY);
    return rawOrders ? JSON.parse(rawOrders) : fallbackOrders;
  } catch {
    return fallbackOrders;
  }
}

export function saveOrders(orders) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}
