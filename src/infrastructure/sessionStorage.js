"use client";

import { SESSION_COOKIE } from "@/application/auth";

const maxAge = 60 * 60 * 8;

export function startOwnerSession() {
  document.cookie = `${SESSION_COOKIE}=active; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function endOwnerSession() {
  document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}
