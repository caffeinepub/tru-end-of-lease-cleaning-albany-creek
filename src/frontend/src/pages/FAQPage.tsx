import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useEffect } from "react";
import FAQAccordion from "../components/FAQAccordion";

export default function FAQPage() {
  useEffect(() => {
    document.title =
      "Bond Cleaning FAQs Albany Creek | Tru End of Lease Cleaning";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Answers to all your bond cleaning questions in Albany Creek. Learn about costs, inclusions, QLD requirements and how to choose the right bond cleaner.",
      );
    }
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Help Centre
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Bond Cleaning FAQs – Albany Creek
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about bond cleaning in Albany Creek and
            Brisbane. We answer the most common questions so you can move out
            with confidence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>

        {/* Tru Bond Cleaning Backlink */}
        <div className="mt-12 max-w-3xl mx-auto bg-muted/40 border border-border rounded-2xl p-6">
          <p className="text-sm text-muted-foreground">
            Looking for bond cleaning across Brisbane?{" "}
            <a
              href="https://trubondcleaningbrisbane.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Tru Bond Cleaning Brisbane
            </a>{" "}
            offers professional end-of-lease cleaning services throughout the
            greater Brisbane area with a bond-back guarantee.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-primary/5 rounded-3xl p-12">
          <h2 className="font-serif text-3xl text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team is happy to answer any questions you have about your bond
            clean. Message us on WhatsApp for a fast response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="faq.primary_button"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ask Us on WhatsApp
            </a>
            <Link to="/contact" data-ocid="faq.secondary_button">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Send Us a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
