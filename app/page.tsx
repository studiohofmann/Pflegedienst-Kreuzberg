import { client } from "@/sanity/lib/client"
import Image from "next/image";
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types';
import Footer from "./components/footer";
import logo from "@/public/logo.svg"

export default async function Home() {
  const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)
  return (

    <main className='flex justify-center items-center'> {

      home.map((home) => (
        <div key={home._id}>
          <Image
            src={urlFor(home.bild).url()}
            alt={home.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute w-2/3 lg:w-1/3 flex flex-col gap-10 items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
            <Image
              priority
              src={logo}
              alt="Follow us on Twitter"
              className="w-full"

            />
            <div className='text-cemter'>
              <PortableText value={home.comingSoon} />
            </div>

            <div className=''>
              <PortableText value={home.text} />
            </div>

          </div>
        </div>

      ))}

      <div className="absolute text-center bottom-0 pb-2">
        <Footer />
      </div>


    </main>

  );
}

export const revalidate = 60;
