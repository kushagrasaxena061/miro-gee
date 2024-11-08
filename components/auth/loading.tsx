import Image from "next/image"

export const Loading = () => {
    return (
        <main >
            <Image
                src={"/logo.svg"}
                alt="logo"
                width={120}
                height={120}
                className="animate-pulse duration-700"
            />
        </main>
    )
}