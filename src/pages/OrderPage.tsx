import { ArrowLeft, ShoppingCart, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderPage = () => {
  const navigate = useNavigate();
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  const pricingData = [
    {
      id: "small",
      name: "Small Pack",
      units: "10 Bands",
      retail: 15.0,
      description: "Ideal for home gardeners",
      highlight: false,
    },
    {
      id: "standard",
      name: "Standard Pack",
      units: "25 Bands",
      retail: 40.0,
      description: "Most popular for small farms",
      highlight: true,
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
              Order <span className="text-accent">NeemShield</span> Today
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the pack size that fits your needs. Free shipping on orders over AED 200.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {pricingData.map((pack) => (
                <div
                  key={pack.id}
                  className={`relative bg-card rounded-xl p-6 border-2 transition-all cursor-pointer ${
                    pack.highlight
                      ? "border-accent shadow-lg scale-105"
                      : selectedPack === pack.id
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedPack(pack.id)}
                >
                  {pack.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">{pack.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pack.units}</p>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-foreground mb-1">
                      AED {pack.retail}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{pack.description}</p>

                  <Button 
                    variant={selectedPack === pack.id ? "default" : "outline"} 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPack(pack.id);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Why Order from Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Free Shipping</h3>
                <p className="text-muted-foreground">On all orders over AED 200</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Bulk Discounts</h3>
                <p className="text-muted-foreground">Special pricing for FPOs and cooperatives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Support</h3>
                <p className="text-muted-foreground">Agronomist guidance included with every order</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of farmers who've chosen the natural path to pest-free farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              asChild
            >
              <a href="mailto:orders@neemshield.com?subject=Order%20Inquiry">
                Place Your Order
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => navigate("/faq")}
            >
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
