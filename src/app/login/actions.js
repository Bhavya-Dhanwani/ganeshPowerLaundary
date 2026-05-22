"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isValidOwnerPassword, SESSION_COOKIE } from "@/application/auth";

export async function loginOwner(formData) {
  const password = String(formData.get("password") || "");
  const nextPath = String(formData.get("next") || "/dashboard");

  if (!isValidOwnerPassword(password)) {
    redirect("/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "active", {
    path: "/",
    maxAge: 60 * 60 * 8,
    sameSite: "lax",
  });

  redirect(nextPath.startsWith("/") ? nextPath : "/dashboard");
}
