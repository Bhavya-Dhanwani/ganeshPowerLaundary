import { loginOwner } from "./actions";
import { LoginForm } from "@/presentation/components/LoginForm";

export const metadata = {
  title: "Owner Login",
  description: "Password-only owner login for the Ganesh Power Laundary dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const nextPath = typeof params?.next === "string" ? params.next : "/dashboard";

  return <LoginForm action={loginOwner} hasError={params?.error === "1"} nextPath={nextPath} />;
}
