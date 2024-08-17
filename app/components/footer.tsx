import { client } from '@/sanity/lib/client'
import { PortableText } from 'next-sanity'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { FOOTER_QUERYResult } from '@/sanity.types';
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types';
import Link from 'next/link';
import { HomeFilled } from '@ant-design/icons';
import { PhoneFilled } from '@ant-design/icons';
import { MailFilled } from '@ant-design/icons';


export default async function Footer() {
    const footer = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY)
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)
    return (
        <div className="">
            {
                home.map((home) => (
                    <div key={home._id} >

                        <div className="flex flex-col pb-10 ">
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
                        </div>
                        <h5>
                            {(new Date().getFullYear())}&nbsp;©&nbsp;{home.name}
                        </h5>
                    </div>

                ))}
            {
                footer.map((footer) => (
                    <div key={footer._id} >
                        <PortableText value={footer.designDevelopment} />
                    </div>
                ))}
        </div>

    );
}