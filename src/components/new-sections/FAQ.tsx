import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible>
                        {[
                            {
                                q: 'What is included in the subscription?',
                                a: 'Our subscription includes UI/UX design, web development, mobile app development, and ongoing support based on your chosen plan.',
                            },
                            {
                                q: 'How long does a typical project take?',
                                a: 'Project timelines vary based on complexity. Simple projects can be completed in 1-2 weeks, while larger projects may take 4-8 weeks.',
                            },
                            {
                                q: 'Can I cancel my subscription anytime?',
                                a: "Yes, you can cancel your subscription at any time. You will continue to have access until the end of your billing period.",
                            },
                            {
                                q: 'Do you provide source files?',
                                a: 'Yes, we provide all source files including design files, code repositories, and documentation upon project completion.',
                            },
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger>{item.q}</AccordionTrigger>
                                <AccordionContent>{item.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
