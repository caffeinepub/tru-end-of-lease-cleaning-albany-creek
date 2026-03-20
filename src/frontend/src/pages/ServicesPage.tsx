import { CheckCircle, Phone } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    id: "bond-cleaning",
    title: "End of Lease Cleaning / Bond Cleaning",
    icon: "🏠",
    image: "/assets/generated/bond-back-guarantee.dim_800x500.jpg",
    imageAlt:
      "Professional end of lease bond cleaning in Albany Creek by Tru Cleaning",
    description: `End of lease cleaning – also called bond cleaning – is the most important clean you will ever do in a rental property. When you move out, your landlord or real estate agent inspects the property against an entry condition report. If anything is not up to standard, they can deduct money from your bond to pay for professional cleaning.

At Tru End of Lease Cleaning Albany Creek, we take the stress out of moving. Our experienced bond cleaning team follows the Real Estate Institute of Queensland (REIQ) checklist to make sure every area of your home is cleaned to the standard required for a full bond refund.

**What We Clean in a Full Bond Package:**
We clean every room from top to bottom. In the kitchen, we degrease the oven, stovetop, rangehood and filter. We wipe down all bench tops, cupboard fronts and interiors, and clean the sink and tapware. In the bathrooms and toilets, we scrub tiles, remove mould and soap scum, clean shower screens, polish mirrors and disinfect toilets. In bedrooms and living areas, we dust and wipe all surfaces, clean light switches and power points, remove cobwebs, clean skirting boards and wipe window sills. Floors are vacuumed and mopped throughout.

**Why Albany Creek Tenants Trust Us:**
Our team knows what local property managers expect. We have completed hundreds of bond cleans across Albany Creek, Bridgeman Downs, Aspley, Eatons Hill and the surrounding suburbs. We know the difference between a rush job and a proper clean – and we always deliver a proper clean.

We bring our own commercial-grade cleaning products and equipment. You do not need to provide anything. We arrive on time, work systematically through the property, and leave it spotless.

**Our Bond Back Guarantee:**
We are so confident in our work that we offer a 100% bond back guarantee. If your real estate agent raises any issue after our clean, contact us within 72 hours and we will return to re-clean the area at no extra cost. We want you to walk away with your full bond – not just a clean house.

Get a free, no-obligation quote today by messaging us on WhatsApp at 0488 841 883.`,
    includes: [
      "Kitchen deep clean including oven",
      "Bathroom and toilet clean",
      "All floors vacuumed and mopped",
      "Windows (inside) cleaned",
      "Skirting boards and light fittings wiped",
      "Cobweb removal throughout",
    ],
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Steam Cleaning",
    icon: "🧹",
    image: "/assets/generated/service-carpet.dim_800x500.jpg",
    imageAlt:
      "Professional carpet steam cleaning for end of lease in Albany Creek",
    description: `Carpet steam cleaning is one of the most important parts of an end of lease clean. In most rental properties in QLD, carpets are specifically listed on the entry condition report. If you do not steam clean the carpets before you move out, the landlord can deduct the cost from your bond.

At Tru End of Lease Cleaning Albany Creek, we use professional hot water extraction equipment – the same machines used by major carpet cleaning companies. Hot water extraction (commonly called steam cleaning) is the most effective way to remove dirt, stains, allergens and odours from carpets. It works by injecting hot water and cleaning solution deep into the carpet fibres, then extracting everything – including the dirt – back out.

**What Our Carpet Steam Cleaning Service Includes:**
We pre-treat any visible stains and high-traffic areas before we begin the extraction process. This helps loosen stubborn dirt and improve results. We then use our hot water extraction machine to deep clean all carpeted areas. After cleaning, we apply a deodoriser to leave the carpet smelling fresh. We also use fast-dry techniques to reduce drying time so you are not waiting days for the carpet to dry.

**Common Carpet Issues We Treat:**
Pet hair and dander embedded in carpet fibres. Muddy footprint stains near entry areas. Food and drink spills in living areas. Dust mite build-up in bedrooms. General grime in hallways and high-traffic zones.

**Will Carpet Steam Cleaning Remove All Stains?**
Professional steam cleaning removes the vast majority of everyday stains. Some very old or deeply set stains – like bleach marks or permanent ink – may not fully come out. We will let you know before we start if we spot anything that might be permanent. Our honest approach means no nasty surprises.

**How Long Does It Take?**
A standard 3-bedroom home with all carpeted bedrooms and a carpeted lounge takes about 1.5 to 2.5 hours for carpet steam cleaning alone. We combine this with the full bond clean for maximum efficiency.

Ask us about our carpet and bond clean package deal and save money on your move-out clean.`,
    includes: [
      "Hot water extraction (steam cleaning)",
      "Pre-treatment of stains",
      "Deodorising spray",
      "Fast-dry technique",
      "All carpeted rooms covered",
      "Pet hair removal",
    ],
  },
  {
    id: "kitchen-clean",
    title: "Kitchen Deep Clean",
    icon: "🍳",
    image: "/assets/generated/service-kitchen.dim_800x500.jpg",
    imageAlt:
      "Professional kitchen deep clean for end of lease in Albany Creek - oven, stovetop and rangehood cleaning",
    description: `The kitchen is always the hardest room to clean in a bond clean. Grease builds up over months or years of cooking. The oven, rangehood and stovetop get coated in baked-on grime that is almost impossible to clean without the right products and techniques. Real estate agents pay very close attention to the kitchen during their inspection – it is one of the most common reasons tenants lose part of their bond.

At Tru End of Lease Cleaning Albany Creek, our kitchen deep clean service tackles every surface with professional-grade degreasers and detailed hand scrubbing. We do not cut corners. We clean the things that other cleaners skip.

**Oven Cleaning:**
Oven cleaning is one of the most time-consuming jobs in a bond clean. Our team removes oven racks and soaks them in a degreasing solution. We apply a professional oven cleaner to the interior, allow it to penetrate, then scrub and wipe every surface until it is grease-free and shining. We clean the oven door glass inside and out so it looks brand new.

**Rangehood and Filter Cleaning:**
The rangehood filter collects enormous amounts of grease over time. We remove the filter and soak it to dissolve the built-up grease. The rangehood body, light cover and underside are all wiped clean. This is a step that many DIY cleaners miss – and it is something real estate agents always check.

**Stovetop Cleaning:**
Gas burner caps, electric hotplates and ceramic cooktops are all cleaned thoroughly. We remove burner heads and grates on gas stovetops and clean them individually. Burnt-on food and grease are removed with appropriate cleaners to avoid scratching.

**Bench Tops, Sink and Tapware:**
All bench tops are wiped and sanitised. The sink is scrubbed and polished. Tapware is cleaned to remove water stains and limescale.

**Cupboards and Drawers:**
Inside and outside of all kitchen cupboards and drawers are wiped clean. We remove crumbs, spills and any residue left behind.

A clean kitchen is the difference between getting your full bond back and losing money. Let our team handle it.`,
    includes: [
      "Full oven clean (inside and out)",
      "Rangehood and filter degreasing",
      "Stovetop and burner clean",
      "Bench top and splashback wipe",
      "Cupboard fronts and interiors",
      "Sink and tapware polished",
    ],
  },
  {
    id: "bathroom-clean",
    title: "Bathroom & Toilet Cleaning",
    icon: "🚿",
    image: "/assets/generated/service-bathroom.dim_800x500.jpg",
    imageAlt: "Expert bathroom cleaning service for bond clean in Albany Creek",
    description: `Bathrooms and toilets are the second most scrutinised rooms in a bond clean inspection, right after the kitchen. Soap scum, mould, limescale and grime build up fast in wet areas. If they are not cleaned to a high standard, your real estate agent will notice immediately – and your bond will suffer.

Tru End of Lease Cleaning Albany Creek specialises in getting bathrooms sparkling clean. We know exactly where inspectors look – the grout lines, the shower screen corners, behind the toilet, under the vanity – and we clean every single one of those spots.

**Shower and Bath Cleaning:**
We remove soap scum and limescale from shower screens, shower walls and bathtub surfaces. We use specialised shower screen cleaners that cut through calcium deposits and leave glass streak-free. Shower floors and drains are scrubbed clean. If there is mould on grout or silicone, we treat it with targeted mould remover.

**Toilet Cleaning:**
Every part of the toilet is cleaned and disinfected – the bowl, under the rim, the seat, the lid, the cistern and the base. We use professional-grade disinfectants to leave the toilet hygienically clean.

**Tiles and Grout:**
Wall and floor tiles are wiped down. Grout lines are scrubbed to remove mould and discolouration. This is one of the most noticeable improvements in a bathroom clean.

**Vanity, Mirror and Tapware:**
The vanity basin and cupboard are cleaned inside and out. The mirror is polished to a streak-free finish. Tapware and fixtures are cleaned to remove water spots and limescale.

**Exhaust Fan:**
We remove and clean the exhaust fan cover. A dusty exhaust fan is a very common inspection failure point that many cleaners miss.

**Multiple Bathrooms:**
We clean all bathrooms and toilets in the property as part of our standard bond clean package. No matter how many bathrooms your property has, we cover them all.

Your bathroom will be left sparkling, hygienic and ready for inspection.`,
    includes: [
      "Shower screen and tiles descaled",
      "Grout mould treatment",
      "Toilet fully disinfected",
      "Mirror and vanity polished",
      "Tapware descaled and polished",
      "Exhaust fan cleaned",
    ],
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    icon: "🪟",
    image: "/assets/generated/hero-banner.dim_1200x600.jpg",
    imageAlt: "Professional window cleaning for bond clean in Albany Creek",
    description: `Clean windows make an immediate impact when you walk into a property. Smudgy, dirty windows are something real estate agents and landlords notice right away. Window cleaning is a standard requirement in most Queensland rental properties, and it is included in the real estate inspection checklist.

At Tru End of Lease Cleaning Albany Creek, we include inside window cleaning as a standard part of every bond clean package. We use professional window cleaning tools – squeegees, microfibre cloths and purpose-made window cleaning solutions – to deliver a streak-free result.

**What We Clean:**
All accessible interior window panes are cleaned and polished. Window tracks and sills are vacuumed and wiped to remove dirt, dust and insect residue. Fly screens are removed and cleaned where possible. Window frames are wiped down.

**Interior vs Exterior Windows:**
Our standard bond clean package covers all interior windows and accessible exterior windows (ground floor, reachable without a ladder). Windows that require ladder access on upper floors may be quoted separately for safety reasons. We will always let you know upfront what is included.

**Window Tracks and Sills:**
Window tracks accumulate an incredible amount of dirt, dust and dead insects. We vacuum and wipe every track so the windows glide smoothly and look clean from every angle. Sills are wiped down inside and outside (where accessible).

**Why Window Cleaning Matters for Your Bond:**
Many tenants forget to clean their windows before moving out. This is one of the most common reasons for bond deductions after inspection. By including window cleaning in your bond clean package with us, you make sure this important area is covered.

All windows are inspected at the end of our clean to confirm they meet the required standard before we leave the property.`,
    includes: [
      "All interior windows cleaned",
      "Accessible exterior windows",
      "Window tracks vacuumed and wiped",
      "Window sills cleaned",
      "Fly screens cleaned",
      "Streak-free finish guaranteed",
    ],
  },
  {
    id: "wall-cleaning",
    title: "Wall Spot Cleaning & Touch-ups",
    icon: "✨",
    image: "/assets/generated/bond-back-guarantee.dim_800x500.jpg",
    imageAlt:
      "Wall spot cleaning and mark removal for bond clean in Albany Creek",
    description: `Marks, scuffs and stains on walls are one of the most common reasons tenants have deductions made from their bond. Over the course of a tenancy, walls accumulate fingerprints, crayon, scuff marks from furniture, and small stains from everyday living. While fair wear and tear is accepted, noticeable marks and dirty walls are not.

Tru End of Lease Cleaning Albany Creek includes wall spot cleaning as a standard part of our bond clean service. Our cleaners check all walls throughout the property and treat any visible marks, smudges and light stains.

**What Wall Spot Cleaning Covers:**
Fingerprints and hand marks around light switches and door handles. Scuff marks from furniture and bags. Crayon or pen marks (where removable). Light stains and splashes. Marks near high-traffic areas like hallways and staircases.

**Our Technique:**
We use appropriate wall cleaning solutions that are safe for painted surfaces. For painted walls, we test the product in an inconspicuous area first to make sure it does not damage the finish. We use gentle circular motions to lift marks without stripping the paint. Microfibre cloths are used to avoid leaving lint or streaks.

**What We Cannot Fix:**
Deep gouges in walls, holes from picture hooks, significant paint peeling, and stains that have penetrated the paint are considered property damage rather than a cleaning issue. These may require patching or repainting, which is not part of a cleaning service. If we notice anything like this during our clean, we will point it out to you so you are prepared before the inspection.

**Skirting Boards:**
Skirting boards are included in our wall and surfaces clean. We vacuum and wipe all skirting boards to remove dust, scuffs and grime. This is a detail that many DIY cleaners miss but inspectors always notice.

**Door Frames and Door Surfaces:**
All door frames are wiped to remove dust and marks. Both sides of all internal doors are wiped clean, with extra attention to areas around door handles where fingerprints accumulate.

Wall cleaning is one of those jobs that really separates a good bond clean from a great one. Our attention to detail on walls and surfaces is one of the reasons so many Albany Creek tenants get their full bond back after using our service.`,
    includes: [
      "Spot clean all wall marks",
      "Skirting boards vacuumed and wiped",
      "Door frames cleaned",
      "Light switches wiped",
      "Internal door surfaces cleaned",
      "Hallway and staircase walls checked",
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title =
      "End of Lease Cleaning Services Albany Creek | Tru Bond Cleaning";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Full end of lease cleaning services in Albany Creek – bond cleaning, carpet steam cleaning, kitchen deep clean, bathroom cleaning, windows and more. Free quotes available.",
      );
    }
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            End of Lease Cleaning Services in Albany Creek
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a complete range of end of lease cleaning services in
            Albany Creek. Every service is backed by our 100% bond back
            guarantee.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, i) => (
            <section
              key={service.id}
              id={service.id}
              data-ocid={`services.item.${i + 1}`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="rounded-2xl shadow-card w-full object-cover aspect-video"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    {service.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm mb-8">
                    {service.description}
                  </div>
                  <div className="bg-secondary/40 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Included in This Service:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`services.primary_button.${i + 1}`}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    Get a Quote for This Service
                  </a>
                </div>
              </div>
              {i < services.length - 1 && (
                <div className="border-b border-border mt-24" />
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
