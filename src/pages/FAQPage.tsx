import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is NeemShield?",
      answer: "NeemShield is a biodegradable pest-repellent band infused with neem, citronella, and lemongrass oils. It protects crops and garden plants naturally—without chemicals or electricity.",
    },
    {
      question: "How does it work?",
      answer: "Once tied to a plant stem or nearby stake, it releases essential oils in vapor form, creating a protective halo that repels common pests for up to 30 days.",
    },
    {
      question: "Is it safe for children, pets, and pollinators?",
      answer: "Yes. NeemShield uses plant-based oils and contains no toxic chemicals. It repels harmful pests while being safe for bees, butterflies, and humans.",
    },
    {
      question: "What plants can I use NeemShield on?",
      answer: "NeemShield works for vegetables, fruits, herbs, ornamentals, and orchard trees. It's suitable for school gardens, home backyards, and small farms.",
    },
    {
      question: "How long does one band last?",
      answer: "Each band lasts 25–35 days depending on weather. For orchards, seasonal reapplication is recommended.",
    },
    {
      question: "How do I apply it?",
      answer: "Simply tie it around the base of the plant or on a support stake nearby. No tools or sprays required.",
    },
    {
      question: "What sizes are available?",
      answer: "We offer NeemShield in packs of 10, 25, 50, and 1000 units for retail, garden centers, and bulk agricultural use.",
    },
    {
      question: "Is it better than chemical sprays or traps?",
      answer: "Yes. NeemShield avoids toxic residues, requires no re-spraying, reduces labor by 40–60%, and protects soil health long-term.",
    },
    {
      question: "Where is it made?",
      answer: "Proudly developed in the UAE and India using local jute and essential oils.",
    },
    {
      question: "Can I order in bulk for schools, farms, or FPOs?",
      answer: "Absolutely. Contact us for wholesale pricing and educational discounts.",
    },
    {
      question: "Is NeemShield weather-resistant?",
      answer: "Yes. The oil-infused jute is sealed with a semi-permeable resin that slows evaporation and protects it from UV and heat.",
    },
    {
      question: "Is NeemShield biodegradable?",
      answer: "Yes. It's made of natural jute, plant oils, and minimal resin—breaking down naturally in soil over time.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about NeemShield. Can't find what you're looking for? 
              Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Our team is here to help you make the switch to natural pest control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/order")}
            >
              Order NeemShield
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
