import { Clock, DollarSign } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Job } from '@/lib/types'

interface JobListingsProps {
    jobs: Job[]
}

export default function JobListings({ jobs }: JobListingsProps) {
    return (
        <div className="space-y-4 max-w-2xl mx-auto p-4">
            {jobs.map((job, index) => (
                <Link href="#" key={index}>
                    <Card className="p-6 bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                        <h3 className="text-[#CCFF00] text-xl font-medium mb-2">
                            {job.title}
                        </h3>
                        <p className="text-zinc-300 mb-4">
                            {job.description}
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{job.type}</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-400">
                                <DollarSign className="w-4 h-4" />
                                <span className="text-sm">{job.salary}</span>
                            </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
