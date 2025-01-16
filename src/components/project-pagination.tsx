interface PaginationProps {
    total: number
    current: number
    onPageChange: (page: number) => void
}

export default function ProjectPagination({ total, current, onPageChange }: PaginationProps) {
    return (
        <div className="flex items-center justify-center gap-2">
            {Array.from({ length: total }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`h-2 w-2 rounded-full transition-all ${current === i + 1
                        ? 'bg-[#B4FF00] w-4'
                        : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                    aria-label={`Page ${i + 1}`}
                />
            ))}
        </div>
    )
}
