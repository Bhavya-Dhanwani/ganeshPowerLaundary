import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isAuthenticatedCookie, SESSION_COOKIE } from "@/application/auth";
import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Owner Dashboard",
  description: "Protected owner dashboard for managing Ganesh Power Laundary orders.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  if (!isAuthenticatedCookie(session)) {
    redirect("/login?next=/dashboard");
  }

  return <DashboardClient />;
}
