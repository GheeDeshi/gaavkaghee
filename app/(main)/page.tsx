import { getBanners } from "@/actions/banner";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/layout/Footer";



export default async function Home() {
  const banners = await getBanners()
  return (
    <>

      <Hero banners={banners} />
      <Footer />
    </>
  );
}
