import Image from "next/image";
import RanjeCard from "@/components/RanjeCard";
import Promo from "@/components/Promo";
import Doctor from "@/components/Doctor";
import Subscriber from "@/components/Subscriber";
import HardProducts from "@/components/HardProducts";
import HardPosts from "@/components/HardPosts";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16 md:px-0">
      {/* Hero Section */}
      <section className="pt-[7%]">
        <RanjeCard />
      </section>

      {/* Promo Section */}
      <section className="pt-[7%]">
        <Promo />
      </section>

      {/* Products Section */}
      <section className="pt-[7%]">
        <div className="flex items-center justify-center pb-[3%]">
          <Image
            src="/product-heading.png"
            alt="Product Heading"
            width={500}
            height={150}
            priority
          />
        </div>
        <HardProducts />
      </section>

      {/* Doctor Section */}
      <section className="pt-[7%]">
        <Doctor />
      </section>

      {/* Blog Section */}
      <section className="pt-[7%]">
        <div className="flex items-center justify-center pb-[3%]">
          <Image
            src="/blog-heading.png"
            alt="Blog Heading"
            width={500}
            height={150}
          />
        </div>
        <HardPosts />
      </section>

      {/* Subscriber Section */}
      <section className="pt-[7%] pb-14">
        <Subscriber />
      </section>
    </main>
  );
}
