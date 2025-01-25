import { Sparkles } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="h-8 w-8 text-[#F97B5C]" />
                            <span className="text-xl font-bold">DesignPulse</span>
                        </div>
                        <p className="text-gray-400">Transforming ideas into exceptional digital experiences.</p>
                    </div>
                    {[
                        {
                            title: 'Services',
                            links: ['UI/UX Design', 'Web Development', 'Mobile Apps', 'Consulting'],
                        },
                        {
                            title: 'Company',
                            links: ['About', 'Careers', 'Blog', 'Contact'],
                        },
                        {
                            title: 'Legal',
                            links: ['Privacy', 'Terms', 'Security', 'Cookies'],
                        },
                    ].map((col, i) => (
                        <div key={i}>
                            <h3 className="font-bold mb-6">{col.title}</h3>
                            <ul className="space-y-4">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 DesignPulse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
