import Image from "next/image";
import PrimaryButton from "./Components/Buttons/PrimaryButton";

export default function Home() {
  return (
    <main>
        <section className="hero-section bg-primary h-screen max-h-[500px] flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-[700px] aspect-video absolute sm:-bottom-40 -bottom-20 ">
            <Image src="/hero-image.png" fill="true" alt="طبق ورق عنب" className="object-contain "/>
          </div>
          <div className="container z-1 relative">
              <div className="hero-content space-y-5 text-white w-full text-center">

                <strong className="text-secondary">صنع بكل الحب</strong>
                <h1 className="text-5xl leading-noraml">أكل بيتي صنع بكل الحب</h1>
                <p className="text-text">في Angela's Food احنا مش بنقدم مجرد اكل احنا بنقدم تجربة كامله متتنسيش. كل طبق معمول باحسن المكونات</p>
                <PrimaryButton href="/menu" className="font-medium ">اطلب دلوقتي</PrimaryButton>
            </div>
          </div>
        </section>
    </main>
  );
}
