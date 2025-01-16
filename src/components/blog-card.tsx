import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BlogCardProps {
    category: string
    title: string
    description: string
    image: string
    author: {
        name: string
        avatar: string
        date: string
    }
    href: string
}

export function BlogCard({
    category,
    title,
    description,
    image,
    author,
    href
}: BlogCardProps) {
    return (
        <Link
            href={href}
            className="group block rounded-lg bg-gray-900/50 p-4 transition-colors hover:bg-gray-900"
        >
            <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="mb-4">
                <p className="mb-2 text-sm text-[#B4FF00]">{category}</p>
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-[#B4FF00]" />
                </div>
                <p className="mt-2 text-sm text-gray-400">{description}</p>
            </div>
            <div className="flex items-center gap-3">
                <Image
                    src={author.avatar || "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={author.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
                <div className="text-sm">
                    <p className="text-white">{author.name}</p>
                    <p className="text-gray-400">{author.date}</p>
                </div>
            </div>
        </Link>
    )
}
