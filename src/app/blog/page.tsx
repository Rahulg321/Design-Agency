import Newsletter from '@/components/newsletter'
import BlogHero from '@/components/sections/blog-hero'
import BlogSection from '@/components/sections/blog-section'
import React from 'react'

const BlogPage = () => {
    return (
        <div>
            <BlogHero />
            <BlogSection />
            <Newsletter />
        </div>
    )
}

export default BlogPage
