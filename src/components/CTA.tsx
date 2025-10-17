import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Wrap. Repel. <span className="text-accent">Reclaim Your Harvest.</span>
          </h2>
          
          <p className="text-xl sm:text-2xl mb-10 text-primary-foreground/90 leading-relaxed">
            Join 50,000+ farmers who've chosen the natural path to pest-free farming. 
            Your soil will thank you. Your harvest will prove it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-10 py-6 h-auto"
            >
              Order NeemShield Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales Team
            </Button>
          </div>

          {/* Additional Info */}
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-primary-foreground/80">
            <div>
              <p className="font-semibold text-primary-foreground mb-1">Free Shipping</p>
              <p>On orders over ₹5,000</p>
            </div>
            <div>
              <p className="font-semibold text-primary-foreground mb-1">Bulk Discounts</p>
              <p>For FPOs and cooperatives</p>
            </div>
            <div>
              <p className="font-semibold text-primary-foreground mb-1">Expert Support</p>
              <p>Agronomist guidance included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
