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
          <div className="bg-card rounded-xl p-8 lg:p-12 shadow-sm border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="text-accent mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl text-foreground mb-6 leading-relaxed">
                  "पहले मैं महीने में तीन बार स्प्रे करता था। अब सिर्फ एक बार NeemShield बांधता हूं। 
                  बारिश में भी काम करता है। मेरी फसल स्वस्थ है, मिट्टी भी।"
                </p>
                <div>
                  <p className="font-semibold text-foreground text-lg">राजेश कुमार</p>
                  <p className="text-muted-foreground">धान किसान, बिहार</p>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="w-48 h-48 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Impact;