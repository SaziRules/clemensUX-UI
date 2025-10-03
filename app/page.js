import Image from "next/image";
import RanjeCard from "@/components/RanjeCard";
import productHeading from '@/assets/product-heading.png';
import BlogHeading from '@/public/blog-heading.png';
import Promo from "@/components/Promo";
import Doctor from "@/components/Doctor";
import Subscriber from "@/components/Subscriber";
import HardProducts from "@/components/HardProducts";
import HardPosts from "@/components/HardPosts";


export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-[auto] px-8 sm:px-16 md:px-0">
        <section className="pt-[7%]">
          <div>
            <RanjeCard />
            </div>     
        </section>

        <section className=" pt-[7%]">
          <div>
            <Promo />
          </div>
        </section>

        <section className="pt-[7%]">
          <div>
            <div className="flex items-center justify-center pb-[5%]">
              <Image src={productHeading} alt="heading" />
            </div>
            <HardProducts />
            </div>     
        </section>

        <section className="pt-[7%]">
          <div>
            <Doctor />
          </div>
        </section>

        <section className="pt-[7%]">
        <div className="flex items-center justify-center pb-[5%]">
              <Image src={BlogHeading} alt="Heading" />
            </div>
            <HardPosts />
        </section>
        <section className="pt-7 pb-14">
          <Subscriber />
        </section>
      </main>
    </div>
    
  );
}