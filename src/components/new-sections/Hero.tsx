import { Button } from '@/components/ui/button';
import {
    PenTool,
    Figma,
    Layout,
    Code2,
    Database,
    Globe,
    MonitorSmartphone,
    Sparkles,
} from 'lucide-react';
import { DesignSketch, DevelopmentSketch } from '@/components/illustrations/SaaSSketchIllustrations';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#F97B5C]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left content */}
                    <div className="flex-1 text-left">
                        <div className="inline-block">
                            <span className="text-[#F97B5C] font-medium mb-4 inline-block">All-In-One</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-medium mb-6 leading-tight">
                            Product Design
                            <br />
                            <span className="text-[#F97B5C]">Subscription</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-xl">
                            Simplify your MVP development, product design, and website creation with our high-quality, flexible subscription service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-[#F97B5C] hover:bg-[#e66a4d] text-white px-8">
                                Launch your Idea
                            </Button>
                            <Button size="lg" variant="outline" className="border-gray-300">
                                Book an Intro Call
                            </Button>
                        </div>
                    </div>

                    {/* Right Section with Design & Development Illustration */}
                    <div className="flex-1 relative">
                        <div className="relative z-10">
                            <div className="relative w-full aspect-square">
                                {/* Main Canvas */}
                                <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform perspective-1000 rotate-y-12 rotate-x-12">
                                    <div className="absolute inset-4">
                                        {/* Design to Development Flow */}
                                        <div className="relative h-full w-full">
                                            {/* Background Elements */}
                                            <div className="absolute inset-0">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#F97B5C]/5 to-blue-500/5 rounded-xl" />
                                                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-5">
                                                    {Array.from({ length: 144 }).map((_, i) => (
                                                        <div key={i} className="bg-gray-400 rounded-sm" />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Design Section (Left) */}
                                            <div className="absolute top-8 left-8 space-y-4">
                                                <div className="bg-[#F97B5C]/10 p-4 rounded-xl">
                                                    <PenTool className="h-8 w-8 text-[#F97B5C]" />
                                                </div>
                                                <div className="bg-white shadow-lg p-3 rounded-lg transform -rotate-6 animate-float">
                                                    <Figma className="h-6 w-6 text-[#F97B5C]" />
                                                </div>
                                                <div className="bg-white shadow-lg p-3 rounded-lg transform rotate-6 animate-float-slow">
                                                    <Layout className="h-6 w-6 text-[#F97B5C]" />
                                                </div>
                                            </div>

                                            {/* Development Section (Right) */}
                                            <div className="absolute top-8 right-8 space-y-4">
                                                <div className="bg-blue-500/10 p-4 rounded-xl">
                                                    <Code2 className="h-8 w-8 text-blue-500" />
                                                </div>
                                                <div className="bg-white shadow-lg p-3 rounded-lg transform rotate-6 animate-float">
                                                    <Database className="h-6 w-6 text-blue-500" />
                                                </div>
                                                <div className="bg-white shadow-lg p-3 rounded-lg transform -rotate-6 animate-float-slow">
                                                    <Globe className="h-6 w-6 text-blue-500" />
                                                </div>
                                            </div>

                                            {/* Central Flow Illustration */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="relative w-48 h-48">
                                                    {/* Flow Lines */}
                                                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0,50 C50,50 50,100 100,100 C150,100 150,50 200,50"
                                                            fill="none"
                                                            stroke="url(#gradient)"
                                                            strokeWidth="3"
                                                            className="animate-draw"
                                                        />
                                                        <defs>
                                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                <stop offset="0%" stopColor="#F97B5C" />
                                                                <stop offset="100%" stopColor="#3B82F6" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                    {/* Central Device Mockup */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="bg-white shadow-xl p-6 rounded-2xl transform rotate-12">
                                                            <MonitorSmartphone className="h-12 w-12 text-gray-800" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Floating Elements */}
                                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#F97B5C] to-blue-500 rounded-xl shadow-lg transform rotate-12 animate-float-slow">
                                                <div className="absolute inset-0.5 bg-white rounded-[10px] flex items-center justify-center">
                                                    <Sparkles className="h-8 w-8 text-[#F97B5C]" />
                                                </div>
                                            </div>

                                            {/* Design and Development Sketches */}
                                            <DesignSketch />
                                            <DevelopmentSketch />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
