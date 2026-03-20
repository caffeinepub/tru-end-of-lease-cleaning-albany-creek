import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is bond cleaning and why is it required?",
    a: "Bond cleaning (also called end of lease cleaning) is a deep clean of your rental property before you move out. You do it so the property looks exactly like it did when you moved in. Your landlord or real estate agent checks the property after you leave. If it is not clean enough, they can take money out of your bond to pay for cleaning. A proper bond clean helps you get all your bond money back.",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because your bond is usually worth 4 weeks of rent. In Brisbane, that could be $2,000 or more! If the property is not cleaned to the required standard, the landlord can use your bond money to hire cleaners. A professional bond clean makes sure the property meets the real estate inspection checklist. It also saves you stress, time, and money.",
  },
  {
    q: "How much for a bond clean?",
    a: "The cost of a bond clean in Albany Creek depends on the size of your home. Here is a rough guide: Studio or 1-bedroom unit – $200 to $280. 2-bedroom unit or house – $280 to $380. 3-bedroom house – $380 to $480. 4-bedroom house – $450 to $600 or more. Carpet steam cleaning and oven cleaning are sometimes extra. Tru End of Lease Cleaning Albany Creek offers competitive prices and free quotes. Contact us on WhatsApp for an exact price.",
  },
  {
    q: "What is full bond cleaning?",
    a: "Full bond cleaning means a complete, top-to-bottom clean of every room in the rental property. It covers kitchens (including oven, stovetop and rangehood), bathrooms and toilets, all floors (vacuuming and mopping), windows (inside), walls (spot cleaning), skirting boards, light fittings, cupboards, and more. Some packages also include carpet steam cleaning and garage cleaning. A full bond clean meets the requirements of a real estate entry condition report.",
  },
  {
    q: "Which are the top rated bond cleaning companies near me?",
    a: `Here are five top-rated bond cleaning companies in the Brisbane area:

1. **Fantastic Cleaners Brisbane** – fantasticcleaners.com.au – Fantastic Cleaners is a well-known national brand with a strong presence in Brisbane. They offer bond cleaning packages with a re-clean guarantee. Their online booking system is easy to use and they cover most Brisbane suburbs. Customers praise their reliable, uniformed teams and detailed cleaning checklists.

2. **Jim's Cleaning Brisbane** – jimscleaning.com.au – Jim's Cleaning is part of the famous Jim's Group franchise. They have hundreds of local franchisees across Brisbane and the Moreton Bay region. They offer bond cleaning, carpet steam cleaning and more. Their franchise model means local knowledge with national standards.

3. **Spotless & Sparkling Bond Cleaners** – spotlesssparkling.com.au – A Brisbane-based independent company specialising in end of lease cleans. They are known for their affordable flat-rate pricing and satisfaction guarantee. Strong customer reviews across Google and Facebook for their thoroughness and punctuality in North Brisbane suburbs.

4. **Brilliance Cleaning Brisbane** – brilliancecleaning.com.au – Brilliance Cleaning has served Brisbane for over 10 years. They focus on eco-friendly cleaning products and detailed inspections before handover. They cover all major Brisbane suburbs including Albany Creek, Aspley and Chermside.

5. **Tru Bond Cleaning Brisbane** – trubondcleaningbrisbane.com – Tru Bond Cleaning is a trusted, locally operated cleaning company serving Albany Creek and greater Brisbane. They specialise in end of lease and bond cleaning with a 100% bond back guarantee. Their experienced team follows detailed REIQ checklists, uses professional-grade equipment, and delivers a spotless result every time. Affordable rates, flexible scheduling and excellent customer service make them a top choice in North Brisbane.`,
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "Professional bond cleaners use strong but safe products. Here are the best ones: Selleys Sugar Soap – great for walls and surfaces. Exit Mould Spray – removes mould from bathrooms. Easy Off Bam – cuts through grease in kitchens and ovens. White King Bleach – disinfects toilets and tiles. Shower Power – removes soap scum and hard water stains. Glen 20 – disinfects and deodorises. Microfibre cloths and mop heads are also essential for a streak-free finish. Always ventilate rooms well when using strong products.",
  },
  {
    q: "How much does a professional bond cleaning typically cost?",
    a: "A professional bond clean in Brisbane typically costs between $250 and $600, depending on the size of the property. A standard 3-bedroom house usually costs around $380 to $480. Add-ons like carpet steam cleaning ($80 to $150 extra) and oven cleaning ($50 to $80 extra) may apply. The price also depends on the condition of the property. Always get a written quote that includes a re-clean guarantee. Tru End of Lease Cleaning Albany Creek offers transparent, flat-rate pricing with no hidden fees.",
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: `For carpet bond cleaning, professionals use hot water extraction (steam cleaning) machines. For DIY, here are some top products:

- **Bissell Professional Pet Urine Eliminator** – available at Bunnings and Amazon AU. Great for odours and stains.
- **Woolite Carpet & Upholstery Cleaner** – available at Coles, Woolworths and Amazon AU. Gentle on fibres.
- **Resolve Carpet Foam** – widely available at supermarkets. Good for spot treatment before a steam clean.
- **Preen Carpet Stain Remover** – available at Bunnings. Strong formula for tough stains.

Note: DIY carpet cleaning rarely meets the standard required for bond return. We strongly recommend professional steam cleaning for your end of lease inspection.`,
  },
  {
    q: "How to choose a reliable bond cleaner?",
    a: "To find a reliable bond cleaner, look for these things: Check Google reviews – look for 4-star ratings or higher. Ask if they offer a re-clean or bond back guarantee. Make sure they follow the real estate inspection checklist. Ask if they are insured – accidents can happen. Get a written quote with all inclusions listed. Avoid the cheapest quote – very low prices often mean a rushed job. A reliable cleaner will communicate clearly and arrive on time. Tru End of Lease Cleaning Albany Creek ticks every one of these boxes.",
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes, you can! Many professional cleaning companies in Brisbane, including Tru End of Lease Cleaning Albany Creek, allow online bookings through their website or via WhatsApp. Look for companies that offer a 100% satisfaction guarantee or a free re-clean if the real estate is not happy. At Tru End of Lease Cleaning, we offer exactly that – book online or via WhatsApp at 0488 841 883, and if your real estate agent is not satisfied with any area, we will come back and re-clean it for free.",
  },
  {
    q: "How much is a cleaner per hour in Brisbane?",
    a: "The average cost of a cleaner per hour in Brisbane is between $35 and $55 per hour for a regular domestic clean. Specialised cleaning like end of lease or bond cleaning typically costs more – around $45 to $70 per hour – because it requires more detailed work and professional equipment. Most bond cleaning companies charge a flat rate for the whole job rather than hourly, so you know exactly what you will pay upfront.",
  },
  {
    q: "How much is end of lease clean in Australia?",
    a: "Across Australia, the average cost of an end of lease clean is: 1-bedroom property – $200 to $300. 2-bedroom property – $280 to $380. 3-bedroom property – $350 to $500. 4-bedroom property – $450 to $650. Prices vary between cities and states. Brisbane and South East Queensland prices are generally in the mid-range. Prices also depend on the condition of the property and any extras like carpet cleaning or outdoor areas.",
  },
  {
    q: "How much to pay a cleaner for 3 hours?",
    a: "For a general cleaner in Brisbane, 3 hours of cleaning typically costs between $105 and $165 (at $35 to $55 per hour). For a specialised bond cleaner, 3 hours could cost $135 to $210. However, for an end of lease clean, most professional companies charge a flat rate rather than hourly. This means a full bond clean is priced for the job, not the time. Always confirm pricing upfront and get a written quote.",
  },
  {
    q: "What is the 20 minute rule in cleaning?",
    a: "The 20 minute rule is a popular cleaning technique where you spend just 20 minutes on cleaning each day. The idea is to break big cleaning tasks into small, manageable chunks so the job does not feel overwhelming. It is great for keeping a property tidy day-to-day. However, for a bond clean, you need a much more thorough approach. A proper end of lease clean takes several hours and covers every single room in detail.",
  },
  {
    q: "What is end of lease cleaning?",
    a: "End of lease cleaning is a thorough, detailed clean of a rental property when a tenant moves out. It is designed to bring the property back to the condition it was in when the tenant first moved in (allowing for fair wear and tear). It covers kitchens, bathrooms, bedrooms, living areas, floors, walls, windows, and more. Real estate agents use a checklist to inspect the property. If the clean does not meet the standard, bond money can be withheld.",
  },
  {
    q: "Is bond cleaning required in QLD?",
    a: "Yes, bond cleaning is required in QLD. Under the Residential Tenancies and Rooming Accommodation Act 2008, tenants in Queensland must leave the property in the same condition it was in at the start of the tenancy (allowing for reasonable wear and tear). While the specific term 'bond cleaning' is not in the law, tenants are legally required to clean the property thoroughly before vacating. Failure to do so can result in bond deductions for professional cleaning costs.",
  },
  {
    q: "How long does a bond clean take?",
    a: "The time it takes to do a bond clean depends on the size and condition of the property. A 1-bedroom unit might take 3 to 5 hours. A 2-bedroom unit typically takes 5 to 7 hours. A 3-bedroom house usually takes 7 to 10 hours. A large 4-bedroom house could take 10 to 14 hours or more. At Tru End of Lease Cleaning Albany Creek, we send a team of experienced cleaners so the job is done faster without cutting corners.",
  },
  {
    q: "Do I need to be present during the bond clean?",
    a: "No, you do not need to be there during the bond clean. Most tenants choose to leave a key with us or arrange access through the real estate agent. This makes things easier as our cleaners can work without interruption. We recommend you do a walk-through with us at the end of the clean so you can check everything before the real estate inspection. Just let us know your preference when you book.",
  },
  {
    q: "What is not included in a bond clean?",
    a: "Standard bond cleaning usually does not include: carpet steam cleaning (this is usually an add-on), cleaning outside windows from a ladder (we clean inside and reachable outside panes), cleaning outdoor areas like gardens or lawns, pest control, rubbish removal, and high-pressure cleaning of driveways. Always check what is included in your quote. At Tru End of Lease Cleaning Albany Creek, we are upfront about what is and is not included so there are no surprises.",
  },
  {
    q: "Can I do my own bond cleaning in QLD?",
    a: "Yes, you can do your own bond cleaning in QLD. There is no law that says you must hire a professional. However, it is very hard to achieve the standard required by real estate agents on your own. Professionals have the right equipment, products, and experience to meet the inspection checklist. If the real estate agent is not happy with your clean, they can hire a professional at your expense – which often costs more. Many tenants find it is cheaper and less stressful to hire a professional from the start.",
  },
];

export default function FAQAccordion({ limit }: { limit?: number }) {
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {displayFaqs.map((faq) => (
        <AccordionItem
          key={faq.q}
          value={faq.q}
          className="bg-white border border-border rounded-lg px-6 shadow-xs"
        >
          <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 text-base">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm whitespace-pre-line">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
