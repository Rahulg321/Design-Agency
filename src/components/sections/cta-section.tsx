import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
    return (
        <section className="w-full p-4 md:p-8">
            <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#CCFF00] px-4 py-16 md:py-24">
                <div className="flex flex-col items-center justify-center space-y-8">
                    {/* Decorative stars */}
                    <div className="flex items-center gap-4">
                        <div className="h-px w-32 bg-black/20" />
                        <div className="flex gap-4">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <div className="h-px w-32 bg-black/20" />
                    </div>

                    {/* Heading */}
                    <div className="space-y-4 text-center">
                        <h2 className="text-balance text-4xl font-bold tracking-wide md:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-space-grotesk, ui-sans-serif)' }}>
                            {"LET'S DISCUSS"}
                            <br />
                            YOUR IDEAS
                        </h2>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Button
                            className="h-12 rounded-full bg-black px-8 text-base hover:bg-black/90"
                            asChild
                        >
                            <Link href="#">Connect Now</Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-12 rounded-full border-2 border-black bg-transparent px-8 text-base text-black hover:bg-black hover:text-white"
                            asChild
                        >
                            <Link href="#">Follow us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function StarIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black/40"
        >
            <path
                d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"
                fill="currentColor"
            />
        </svg>
    )
}
