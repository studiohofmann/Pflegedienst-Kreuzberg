import Image from "next/image";
import logo from "@/public/logo.svg"

export default async function Logo() {

    return (
        <div className="absolute w-full flex justify-center top-5 md:top-10 z-10">
            <Image
                priority
                src={logo}
                alt="Follow us on Twitter"
                className="w-1/3 lg:w-1/4"
            />
        </div>
    );
}