'use client'

import { cn } from "@/lib/utils"

interface CategoryNavProps {
    selectedCategory: string
    onSelectCategory: (category: string) => void
}

const categories = [
    "All",
    "Popular",
    "UI/UX design",
    "Graphic design",
    "Branding",
    "Typography",
    "3D",
    "Illustration",
    "Animation"
]

export default function BlogCategoryNav({ selectedCategory, onSelectCategory }: CategoryNavProps) {
    return (
        <nav className="mb-12 flex flex-wrap gap-6">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={cn(
                        "text-sm transition-colors hover:text-[#B4FF00]",
                        selectedCategory === category ? "text-[#B4FF00]" : "text-gray-400"
                    )}
                >
                    {category}
                </button>
            ))}
        </nav>
    )
}
