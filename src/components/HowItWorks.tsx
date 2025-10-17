import { Leaf, Shield, Clock } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Simple. Natural. <span className="text-accent">Powerful.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NeemShield works in three easy steps to create an invisible vapor barrier that pests cannot cross.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">1</span>
              </div>
              <div className="bg-card rounded-xl p-8 pt-12 shadow-sm border border-border h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Wrap & Tie
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simply wrap the biodegradable jute band around the plant stem or a nearby stake. 
                  Secure it loosely—no tools needed.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">2</span>
              </div>
              <div className="bg-card rounded-xl p-8 pt-12 shadow-sm border border-border h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Vapor Activates
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Neem oil, citronella, and lemongrass slowly release into the air, forming a protective 
                  vapor shield around your crop.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <div className="bg-card rounded-xl p-8 pt-12 shadow-sm border border-border h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  30+ Days Protection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pests stay away. Crops thrive. Rain or shine, the vapor barrier works continuously, 
                  biodegrading naturally when done.
                </p>
              </div>
            </div>
          </div>

          {/* Product Composition */}
          <div className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
              What's Inside NeemShield?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2" />
                <p className="font-medium text-foreground">Natural Jute Fiber</p>
                <p className="text-sm text-muted-foreground">Biodegradable base</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2" />
                <p className="font-medium text-foreground">Neem Oil Extract</p>
                <p className="text-sm text-muted-foreground">Natural pesticide</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2" />
                <p className="font-medium text-foreground">Citronella</p>
                <p className="text-sm text-muted-foreground">Insect repellent</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2" />
                <p className="font-medium text-foreground">Lemongrass</p>
                <p className="text-sm text-muted-foreground">Vapor enhancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
