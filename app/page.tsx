import { client } from "@/sanity/lib/client"
import Image from "next/image";
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types';
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { FOOTER_QUERYResult } from '@/sanity.types'
import logo from "@/public/logo.svg"
import Link from 'next/link';
import { HomeFilled } from '@ant-design/icons';
import { PhoneFilled } from '@ant-design/icons';
import { MailFilled } from '@ant-design/icons';


export default async function Home() {
  const footer = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY)
  const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)
  return (

    home.map((home) => (
      <div key={home._id} className="h-screen flex flex-col items-center justify-center gap-5 md:gap-10 px-5 md:px-20 lg:px-40">

        <Image
          src={urlFor(home.bild).url()}
          alt={home.alt}
          fill
          style={{ objectFit: 'cover', bottom: '0' }}
        />


        <div className='z-20'>
          <PortableText value={home.comingSoon} />
        </div>

        <div className='z-20'>
          <PortableText value={home.text} />
        </div>



        <h5 className="flex flex-col items-center z-10">
          <Link href="https://maps.app.goo.gl/Nb5ogG4z6pRRDj248" className="flex gap-1"><HomeFilled />{home.adresse}</Link>
          <Link href="tel:+4903062871764" className="flex gap-1"><PhoneFilled className="" />{home.telefonnummer}</Link>
          <Link href="mailto:info@pflegedienstkreuzberg.de" className="flex gap-1"><MailFilled className="" />{home.email}</Link>
        </h5>
      </div>


    ))

  );
}

export const revalidate = 60;
