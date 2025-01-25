import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-[#F97B5C]">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Ideas?</h2>
        <p className="text-xl mb-8 opacity-90">Start your design journey today with our expert team</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#F97B5C] hover:bg-gray-100">
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}