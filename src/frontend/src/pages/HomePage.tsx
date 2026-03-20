import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";
import { useEffect } from "react";
import FAQAccordion from "../components/FAQAccordion";

const services = [
  {
    title: "End of Lease / Bond Cleaning",
    icon: "🏠",
    desc: "Full top-to-bottom bond clean that meets real estate inspection standards.",
  },
  {
    title: "Carpet Steam Cleaning",
    icon: "🧹",
    desc: "Hot water extraction carpet cleaning that removes dirt, stains and odours.",
  },
  {
    title: "Kitchen Deep Clean",
    icon: "🍳",
    desc: "Oven, rangehood, stovetop, cupboards and benchtops – spotlessly clean.",
  },
  {
    title: "Bathroom & Toilet Cleaning",
    icon: "🚿",
    desc: "Grout, tiles, screens, vanities and toilets cleaned to a sparkling standard.",
  },
  {
    title: "Window Cleaning",
    icon: "🪟",
    desc: "Streak-free inside window cleaning included in every bond clean package.",
  },
  {
    title: "Wall Spot Cleaning",
    icon: "✨",
    desc: "Mark and scuff removal on walls so the property looks fresh for inspection.",
  },
];

const whyUs = [
  {
    icon: <Shield className="w-7 h-7 text-primary" />,
    title: "100% Bond Back Guarantee",
    desc: "If your real estate is not happy, we come back and re-clean for free.",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-primary" />,
    title: "REIQ Checklist Compliant",
    desc: "We follow the official real estate inspection checklist every single time.",
  },
  {
    icon: <Clock className="w-7 h-7 text-primary" />,
    title: "Flexible Scheduling",
    desc: "We work around your move-out date, including weekends and short notice.",
  },
  {
    icon: <Award className="w-7 h-7 text-primary" />,
    title: "Experienced Local Team",
    desc: "Our cleaners know Albany Creek rentals and what local agents expect.",
  },
  {
    icon: <ThumbsUp className="w-7 h-7 text-primary" />,
    title: "Fully Insured",
    desc: "We carry full public liability insurance so you are always protected.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-primary" />,
    title: "Professional Equipment",
    desc: "We use commercial-grade products and tools for a deeper, lasting clean.",
  },
];

export default function HomePage() {
  useEffect(() => {
    document.title =
      "Bond Cleaning Albany Creek | Tru End of Lease Cleaning | Bond Back Guarantee";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Tru End of Lease Cleaning Albany Creek – professional bond cleaning, carpet steam cleaning, kitchen deep clean and more. 100% bond back guarantee. Call now for a free quote!",
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "Tru End of Lease Cleaning Albany Creek – professional bond cleaning, carpet steam cleaning, kitchen deep clean and more. 100% bond back guarantee. Call now for a free quote!";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1200x600.jpg"
            alt="Professional bond cleaners in Albany Creek delivering spotless end of lease cleaning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                <Star
                  key={sk}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-white/80 text-sm ml-1">
                5-Star Rated in Albany Creek
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Albany Creek's #1 Bond Cleaning Experts
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
              Get Your Full Bond Back, Guaranteed!
            </p>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl">
              We are Albany Creek's most trusted end of lease cleaning team. We
              follow the real estate inspection checklist so you get every
              dollar of your bond back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote on WhatsApp
              </a>
              <Link
                to="/services"
                data-ocid="hero.secondary_button"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Albany Creek's Trusted Bond Cleaning Specialists
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            At{" "}
            <strong className="text-foreground">
              Tru End of Lease Cleaning Albany Creek
            </strong>
            , we help tenants in Albany Creek and surrounding suburbs get their
            full bond back without the stress. We know exactly what local real
            estate agents look for, and we clean to that standard every single
            time.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Moving out is hard work. Packing boxes, organising removalists,
            changing your address – it is a lot. The last thing you need is to
            worry about whether the property is clean enough. That is where we
            come in. Our experienced team handles the entire end of lease clean
            so you can focus on your move.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We cover every room from top to bottom using professional equipment
            and commercial-grade cleaning products. From the oven to the
            skirting boards, from the shower screen to the window tracks – we
            clean it all. And if your real estate agent is not happy, we come
            back and re-clean for free. That is our promise to you.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              6 Reasons Albany Creek Tenants Choose Tru Cleaning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <Card
                key={item.title}
                className="border-0 shadow-card hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Complete Bond Cleaning Services in Albany Creek
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Everything you need for a successful real estate inspection – all
              under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                data-ocid={`services.item.${s.title}`}
              >
                <Card className="border border-border hover:border-primary hover:shadow-card transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{s.icon}</div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" data-ocid="services.primary_button">
              <Button size="lg" className="rounded-full px-10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bond Back Guarantee */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/generated/bond-back-guarantee.dim_800x500.jpg"
                alt="Happy tenants getting their bond back after professional end of lease cleaning in Albany Creek"
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </div>
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
                Our Promise
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                100% Bond Back Guarantee
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are so confident in the quality of our work that we offer a
                100% bond back guarantee. If your real estate agent finds
                anything that does not meet their standard after our clean, we
                will come back and fix it for free.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                No hidden fees. No excuses. Just a clean property and your bond
                money back in your pocket.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free re-clean if real estate is not satisfied",
                  "Detailed checklist provided after clean",
                  "Photo documentation available on request",
                  "Available 7 days a week including public holidays",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="guarantee.primary_button"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Book Now – Get Your Bond Back
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Frequently Asked Questions About Bond Cleaning in Albany Creek
            </h2>
          </div>
          <FAQAccordion />
          <div className="text-center mt-10">
            <Link to="/faq" data-ocid="faq.primary_button">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10"
              >
                See All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contact Tru End of Lease Cleaning Albany Creek today. We offer free
            quotes, flexible scheduling, and a 100% bond back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.primary_button"
              className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp: 0488 841 883
            </a>
            <Link
              to="/contact"
              data-ocid="cta.secondary_button"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
