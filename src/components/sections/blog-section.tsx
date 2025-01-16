'use client'

import { useState } from 'react'
import BlogCategoryNav from '../blog-category-nav'
import { BlogCard } from '../blog-card'

const blogPosts = [
    {
        category: "Design",
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        image: "https://images.unsplash.com/photo-1645323927877-3de25b4f819c?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "Olivia Rhye",
            avatar: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "20 Jan 2024"
        },
        href: "/blog/ux-review-presentations"
    },
    {
        category: "Product",
        title: "Migrating to Linear 101",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        image: "https://images.unsplash.com/photo-1645323927877-3de25b4f819c?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "Phoenix Baker",
            avatar: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "19 Jan 2024"
        },
        href: "/blog/migrating-to-linear"
    },
    {
        category: "Software Engineering",
        title: "Building your API Stack",
        description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        image: "https://images.unsplash.com/photo-1645323927877-3de25b4f819c?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "Lana Steiner",
            avatar: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "18 Jan 2024"
        },
        href: "/blog/building-api-stack"
    },
]

export default function BlogSection() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory)

    return (
        <section className="bg-black px-4 py-16 md:py-24">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-8 text-4xl font-medium text-white md:text-5xl">
                    Select your category
                </h1>

                <BlogCategoryNav
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <BlogCard
                            key={post.title}
                            {...post}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
