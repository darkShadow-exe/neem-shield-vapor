import { TrendingUp, Users, Leaf, DollarSign } from "lucide-react";
const Impact = () => {
  return <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Real Farms. <span className="text-accent">Real Results.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NeemShield is transforming agriculture across India and Southeast Asia, one field at a time.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">75%</div>
              <p className="text-muted-foreground">Reduction in Chemical Pesticide Use</p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">50K+</div>
              <p className="text-muted-foreground">Potential Customers</p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">90%</div>
              <p className="text-muted-foreground">Improvement in Soil Health Index</p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">₹3,500</div>
              <p className="text-muted-foreground">Average Cost Saved Per Season</p>
            </div>
          </div>

          {/* Testimonial */}
          
        </div>
      </div>
    </section>;
};
export default Impact;