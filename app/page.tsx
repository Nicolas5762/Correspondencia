import CanchasCarousel from "@/components/CanchasCarousel";
import CanchasSection from "@/components/CanchasSection";
import InfoSection from "@/components/infoSection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <Navbar />
      <CanchasCarousel />
      <InfoSection />
      <CanchasSection />
    </main>
  );
}

{
  /* <Navbar /> */
}
