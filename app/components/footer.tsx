import { client } from '@/sanity/lib/client'
import { PortableText } from 'next-sanity'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { FOOTER_QUERYResult } from '@/sanity.types';
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types';


export default async function Footer() {
    const footer = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY)
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)
    return (
        <div className="">
            {
                home.map((home) => (
                    <h5 key={home._id} >
                        {(new Date().getFullYear())}&nbsp;©&nbsp;{home.name}
                    </h5>
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