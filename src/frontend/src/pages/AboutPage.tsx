import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Tru End of Lease Cleaning Albany Creek";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn about Tru End of Lease Cleaning Albany Creek – a locally owned bond cleaning company dedicated to helping tenants in Albany Creek get their full bond back.",
      );
    }
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            We Are Tru End of Lease Cleaning Albany Creek
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A locally owned and operated cleaning company dedicated to helping
            Albany Creek tenants get their full bond back.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="/assets/generated/bond-back-guarantee.dim_800x500.jpg"
              alt="Tru End of Lease Cleaning Albany Creek team - professional bond cleaners"
              className="rounded-2xl shadow-card w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tru End of Lease Cleaning Albany Creek was founded because we saw
              how stressful the moving process is for tenants in our local
              community. People were losing hundreds of dollars from their bond
              for cleaning issues that could have been avoided with the right
              help.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We set out to build a cleaning service that tenants could truly
              trust – one that delivers results, communicates clearly and backs
              its work with a real guarantee. Our name says it all: <em>Tru</em>{" "}
              – because we are honest, thorough and true to our word.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are based right here in Albany Creek and we clean properties
              across the northern Brisbane suburbs every day. We know the local
              rental market, we know what local property managers expect, and we
              know how to deliver a clean that gets bonds back.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are in Albany Creek, Bridgeman Downs, Aspley, Eatons
              Hill, Warner or anywhere nearby, our team is ready to help you
              move out with confidence.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-secondary/30 rounded-3xl p-10 mb-16">
          <h2 className="font-serif text-3xl text-foreground text-center mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "✅",
                title: "Honesty",
                desc: "We give you a clear, upfront quote with no hidden fees. What we promise, we deliver.",
              },
              {
                emoji: "💪",
                title: "Thoroughness",
                desc: "We clean every corner, not just the obvious stuff. Our attention to detail is what sets us apart.",
              },
              {
                emoji: "🤝",
                title: "Community",
                desc: "We are proud to serve the Albany Creek community. We treat every property like it is our own home.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="text-5xl mb-4">{v.emoji}</div>
                <h3 className="font-semibold text-foreground text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Cover */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground mb-6">
            Areas We Service
          </h2>
          <p className="text-muted-foreground mb-6">
            We clean properties across northern Brisbane suburbs including:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Albany Creek",
              "Bridgeman Downs",
              "Aspley",
              "Eatons Hill",
              "Warner",
              "Brendale",
              "Strathpine",
              "Bray Park",
              "Chermside",
              "Everton Park",
            ].map((suburb) => (
              <span
                key={suburb}
                className="flex items-center gap-2 bg-white border border-border px-4 py-2 rounded-full text-sm font-medium text-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
