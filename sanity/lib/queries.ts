import { groq } from "next-sanity"

export const FOOTER_QUERY = groq`*[_type == "footer"]{_id, designDevelopment}`
export const HOME_QUERY = groq`*[_type == "home"]{_id, name, comingSoon, text, bild, alt, adresse, telefonnummer, email}`


