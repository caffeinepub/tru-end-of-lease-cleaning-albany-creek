import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const serviceOptions = [
  "End of Lease / Bond Cleaning",
  "Carpet Steam Cleaning",
  "Kitchen Deep Clean",
  "Bathroom & Toilet Cleaning",
  "Window Cleaning",
  "Wall Spot Cleaning",
  "Full Bond Clean Package",
];

export default function ContactPage() {
  const { actor } = useActor();
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  useEffect(() => {
    document.title =
      "Contact Tru End of Lease Cleaning Albany Creek | Free Quote";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Contact Tru End of Lease Cleaning Albany Creek for a free quote. Message us on WhatsApp at 0488 841 883 or fill in our enquiry form.",
      );
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.serviceType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsPending(true);
    try {
      // Submit to backend
      if (actor) {
        await actor.submitContactForm(
          form.name,
          form.email,
          form.phone,
          form.serviceType,
          form.message,
        );
      }

      // Open mailto link from customer's email client
      const subject = encodeURIComponent(
        `Bond Cleaning Enquiry - ${form.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.serviceType}\n\nMessage:\n${form.message}`,
      );
      window.open(
        `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${body}`,
        "_blank",
      );

      setSubmitted(true);
      toast.success("Enquiry sent! We will get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Get Your Free Bond Cleaning Quote
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fill in the form below or message us on WhatsApp. We respond fast
            and offer free, no-obligation quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.primary_button"
                  className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl p-4 hover:bg-green-100 transition-colors"
                >
                  <div className="bg-green-500 text-white rounded-full p-2">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      WhatsApp
                    </p>
                    <p className="text-muted-foreground text-sm">
                      0488 841 883
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-2">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Location
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Albany Creek, QLD 4035
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/40 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Why Contact Us?
              </h3>
              <ul className="space-y-2">
                {[
                  "Free quotes with no obligation",
                  "Fast response – usually within 1 hour",
                  "Flexible scheduling 7 days a week",
                  "100% bond back guarantee",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Enquiry Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your enquiry. We will get back to you very soon.
                  In the meantime, you can also message us on WhatsApp for a
                  faster response.
                </p>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-ocid="contact.modal"
                className="bg-white border border-border rounded-2xl p-8 shadow-card"
              >
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Send an Enquiry
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.input"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.input"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.input"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium"
                    >
                      Service Type <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={form.serviceType}
                      onValueChange={(v) => handleChange("serviceType", v)}
                    >
                      <SelectTrigger data-ocid="contact.select" id="service">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-6">
                  <Label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your property – bedrooms, bathrooms, any special requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isPending}
                  size="lg"
                  className="w-full rounded-full"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, your email client will open to send
                  the message directly. We will never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
