import { Card, CardContent } from '@/components/ui/card';
import { WebAppIllustration } from '@/components/illustrations/WebAppIllustration';
import { MobileAppIllustration } from '@/components/illustrations/MobileAppIllustration';
import { SaaSIllustration } from '@/components/illustrations/SaaSIllustration';

export function UseCases() {
    const solutions = [
        {
            title: 'Web Applications',
            description: 'Modern, responsive web apps built with the latest technologies',
            illustration: WebAppIllustration,
        },
        {
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications',
            illustration: MobileAppIllustration,
        },
        {
            title: 'SaaS Platforms',
            description: 'Scalable software-as-a-service solutions',
            illustration: SaaSIllustration,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Solutions for Every Need</h2>
                    <p className="text-xl text-gray-600">We design and develop across various platforms and industries</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-6">
                                <div className="mb-6 perspective-1000">
                                    <solution.illustration />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                                <p className="text-gray-600">{solution.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
