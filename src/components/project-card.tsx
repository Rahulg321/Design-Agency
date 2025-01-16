import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface ProjectCardProps {
    title: string
    image: string
    href: string
}

export function ProjectCard({ title, image, href }: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="group relative block aspect-[4/3] overflow-hidden rounded-lg bg-gray-900"
        >
            <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={600}
                height={450}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 flex w-full items-center justify-between p-4">
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <ChevronRight className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
        </Link>
    )
}
