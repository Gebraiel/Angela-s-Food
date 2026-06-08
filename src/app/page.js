import Image from "next/image";
import PrimaryButton from "./Components/Buttons/PrimaryButton";
import Link from "next/link";
const categories = [
  {
    id:"1",
    name:"اكل مستوي",
    image:"/cooked.png",
    description:"اكلات مصريه جاهزة مستوية"
  },
  {
    id:"2",
    name:"اكل علي التسوية",
    image:"/cooked.png",
    description:"اكلات مصريه جاهزة علي التسوية"
  },
  {
    id:"3",
    name:"اكل مستوي",
    image:"/cooked.png",
    description:"اكلات مصريه جاهزة مستوية"
  },
  {
    id:"4",
    name:"اكل مستوي",
    image:"/cooked.png",
    description:"اكلات مصريه جاهزة مستوية"
  },
  {
    id:"5",
    name:"اكل مستوي",
    image:"/cooked.png",
    description:"اكلات مصريه جاهزة مستوية"
  },
]
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
        <section className="py-12">
          <div className="container">
            <div className="mb-12 text-center">
              <strong className="text-2xl text-primary">الاصناف</strong>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {categories.map(({id,name,description,image})=>{
                return(
                <Link key={id} href={`/category/${id}`} className="relative category h-72 flex flex-col justify-end p-8 rounded-2xl">
                  <div className="overlay bg-black/30 absolute size-full inset-0 rounded-2xl z-2"></div>

                  <Image src={image} fill="true" className="object-cover object-center rounded-2xl" alt={name} />
                  <div className="category-content z-3 relative">
                    <b className="text-secondary text-lg">{name}</b>
                    <p className="text-text text-sm">{description}</p>
                  </div>
                </Link>
                )
              })}



            </div>
          </div>
        </section>
    </main>
  );
}
