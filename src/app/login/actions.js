"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import api from "@/infrastructure/api";
import { SESSION_COOKIE } from "@/application/auth";

export async function loginOwner(formData) {
  const password = String(formData.get("password") || "");
  const nextPath = String(formData.get("next") || "/dashboard");

  try {
    const res = await api.post("/api/auth/adminlogin", { password });
    if (res.status === 200) {
      const cookieStore = await cookies();
      cookieStore.set(SESSION_COOKIE, "active", {
        path: "/",
        maxAge: 60 * 60 * 8,
        sameSite: "lax",
      });

      redirect(nextPath.startsWith("/") ? nextPath : "/dashboard");
    } else {
      redirect("/login?error=1");
    }
  } catch (err) {
    redirect("/login?error=1");
  }
}
