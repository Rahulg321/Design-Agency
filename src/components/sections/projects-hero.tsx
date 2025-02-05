'use client'

import { useState } from 'react'
import { ProjectCard } from '../project-card'
import { Pagination } from '../ui/pagination'
import ProjectPagination from '../project-pagination'

const projects = [
    {
        title: 'Green House Gardening Landing Page',
        image: 'https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/projects/green-house'
    },
    {
        title: 'Future Construction Landing Page',
        image: 'https://plus.unsplash.com/premium_photo-1700165319849-19f5f7ab8ba7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/projects/future-construction'
    },
    {
        title: 'Logistics Dashboard',
        image: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/projects/logistics'
    },
    {
        title: 'Spotify Spatial Design',
        image: 'https://plus.unsplash.com/premium_photo-1705075389954-b30e737bf2c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        href: '/projects/spotify'
    }
]

export default function ProjectsHero() {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <section className=" px-4 py-16 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-sm font-medium text-[#B4FF00]">Our Work</p>
                    <h1 className="mb-4 text-4xl font-bold  md:text-5xl">Our Projects</h1>
                    <p className="">
                        Learn more about the projects and the team behind it.
                    </p>
                </div>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            image={project.image}
                            href={project.href}
                        />
                    ))}
                </div>

                <ProjectPagination total={10}
                    current={currentPage}
                    onPageChange={setCurrentPage} />
            </div>
        </section>
    )
}
