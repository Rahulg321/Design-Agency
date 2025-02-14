import { PricingCard } from "../pricing-card";

export default function PricingSection() {
  const pricingData = [
    {
      title: "Design",
      price: "$1,895",
      productId: "prod_RiZCBGR0w89CaY",
      mainFeatures: [
        { icon: "👤", text: "Designer" },
        { icon: "💎", text: "Top Quality" },
        { icon: "🔄", text: "1 active task" },
      ],
      features: [
        { text: "Unlimited Revisions" },
        { text: "Web Design" },
        { text: "Landing Page Design" },
        { text: "SaaS Design" },
        { text: "AI Design" },
      ],
    },
    {
      title: "All-in-One",
      productId: "prod_RiZDa2FF2nSXQR",
      price: "$2,995",
      highlighted: true,
      mainFeatures: [
        { icon: "👥", text: "Designer + Developer" },
        { icon: "💎", text: "Double Diamond Approach" },
        { icon: "🔄", text: "1 active task" },
      ],
      features: [
        { text: "Unlimited Revisions" },
        { text: "Web Design" },
        { text: "Product Design" },
        { text: "Framer Development" },
        { text: "Webflow Development" },
        { text: "AI Development with Bubble.io" },
      ],
    },
    {
      title: "Mobile App Development",
      price: "$1,125",
      productId: "prod_RiZEQfLvd1GtP0",
      mainFeatures: [
        { icon: "👨‍💻", text: "Mobile Developer" },
        { icon: "💎", text: "Top Quality" },
        { icon: "🔄", text: "1 active task" },
      ],
      features: [
        { text: "Unlimited Revisions" },
        { text: "Framer Development" },
        { text: "Webflow Development" },
        { text: "Bubble.io Development" },
        { text: "AI Development" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-medium mb-12">
          Simple <span className="text-[#F15A2B]">pricing</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
