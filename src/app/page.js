import { LandingPage } from "@/presentation/components/LandingPage";

export const metadata = {
  title: "Ganesh Power Laundary | Wash, Iron, Dry Clean",
  description:
    "Book premium wash, fold, steam iron, dry clean, pickup, and delivery services from Ganesh Power Laundary.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <LandingPage />;
}
