import Contact from "./_sections/Contact";
import Faq from "./_sections/Faq/Faq";
import FeaturesGrid from "./_sections/FeaturesGrid";
import FeaturesSideImageLeft from "./_sections/FeaturesSideImageLeft";
import FeaturesSideImageRight from "./_sections/FeaturesSideImageRight";
import Footer from "./_sections/Footer";
import Hero from "./_sections/Hero";
import LogoMarquee from "./_sections/LogoMarquee";
import Newsletter from "./_sections/Newsletter";
import Pricing from "./_sections/Pricing";

export default function Home() {
  return (
    <main className="shadow-sm bg-white rounded md:shadow-md md:rounded-md min-[1440px]:shadow-lg w-full overflow-hidden mt-4">
      <Hero />
      <LogoMarquee />
      <FeaturesGrid />
      <FeaturesSideImageRight />
      <FeaturesSideImageLeft />
      <Pricing />
      <Faq />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
