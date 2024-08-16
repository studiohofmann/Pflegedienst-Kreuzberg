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

    <main className='w-full flex realtive justify-center items-center'> {

      home.map((home) => (
        <div key={home._id} className=''>
          <Image
            className='h-full w-full bg-center bg-no-repeat bg-cover z-0'
            src={urlFor(home.bild).url()}
            alt={home.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute w-full p-10 lg:p-96 lg:h-full flex flex-col items-center gap-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
            <Image
              priority
              src={logo}
              alt="Follow us on Twitter"
              className="w-full"

            />
            <div className='text-white text-cemter'>
              <PortableText value={home.comingSoon} />
            </div>

            <div className='text-white'>
              <PortableText value={home.text} />
            </div>

          </div>
        </div>

      ))}

      <div className="absolute text-white bottom-0 pb-2">
        <Footer />
      </div>


    </main>

  );
}

export const revalidate = 60;
