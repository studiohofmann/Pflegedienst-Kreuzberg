import { client } from '@/sanity/lib/client'
import { PortableText } from 'next-sanity'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { FOOTER_QUERYResult } from '@/sanity.types'

export default async function Footer() {
    const footer = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY)
    return (
        <div className="absolute bottom-2 w-full text-center">
            {
                footer.map((footer) => (
                    <div key={footer._id} >
                        <h5>{(new Date().getFullYear())}&nbsp;{footer.copyright}</h5>
                        <PortableText value={footer.designDevelopment} />
                    </div>
                ))}
        </div>

    );
}