import { client } from "@/sanity/lib/client"
import Image from "next/image";
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types';
import Footer from "./components/footer";
import logo from "@/public/logo.svg"
import Link from 'next/link';
import { HomeFilled } from '@ant-design/icons';
import { PhoneFilled } from '@ant-design/icons';
import { MailFilled } from '@ant-design/icons';


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
          <div className='w-full px-5 absolute flex gap-5 flex-col items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Image
              priority
              src={logo}
              alt="Follow us on Twitter"
              className="w-1/2 md:w-1/3 lg:w-1/5"

            />
            <div className='text-center'>
              <PortableText value={home.comingSoon} />
            </div>

            <div className='md:w-1/2 lg:w-1/2'>
              <PortableText value={home.text} />
            </div>
            <h5 className="flex flex-col pt-5">
              <Link href="https://maps.app.goo.gl/Nb5ogG4z6pRRDj248">
                <HomeFilled className="text-sm mr-2" />
                {home.adresse}
              </Link>
              <Link href="tel:+4903062871764">

                <PhoneFilled className="text-sm mr-2" />
                {home.telefonnummer}

              </Link>
              <Link href="mailto:info@pflegedienstkreuzberg.de">

                <MailFilled className="text-sm mr-2" />
                {home.email}

              </Link>
            </h5>
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
