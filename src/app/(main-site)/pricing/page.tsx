import { auth } from '@/auth';
import CalComEmbedSection from '@/components/new-sections/cal-embed'
import PricingSection from '@/components/new-sections/Pricing'
import { PricingCard } from '@/components/pricing-card';
import { getCurrentUserById } from '@/lib/data/current-user';
import React from 'react'

 const pricingData = [
   {
     title: "Design",
     price: "$1,895",
     priceId: "price_1Qp84BRoNUBKffuOyUAPZLWN",
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
     priceId: "price_1Qp85VRoNUBKffuORZvT2A5s",
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
     priceId: "price_1Qp86VRoNUBKffuO03jNBdwG",
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



const PricingPage = async () => {

  const userSession = await auth()
  const userId = userSession?.user.id

  let currentUser = null

  if(userId){
   currentUser = await getCurrentUserById(userId!)
  }

  return (
    <section className="py-16 px-4">
         <div className="max-w-7xl mx-auto">
           <h2 className="text-center text-4xl font-medium mb-12">
             Simple <span className="text-[#F15A2B]">pricing</span>
           </h2>


            <div className="grid md:grid-cols-3 gap-8">
              {pricingData.map((plan, index) => (
                <PricingCard key={index} {...plan} user={currentUser}/>
              ))}
            </div>
           <div className='mt-6'>
            <h1>Book A Call</h1>
            <div className='mt-4'>
              <CalComEmbedSection/>
            </div>
           </div>
         </div>
       </section>
  )
}

export default PricingPage