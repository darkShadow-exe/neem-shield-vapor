import { ArrowLeft, Droplets, Shield, Leaf, Wind, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HowItWorksPage = () => {
  const navigate = useNavigate();

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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              The Science Behind <span className="text-accent">NeemShield</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A biodegradable pest-repelling system that protects crops using natural essential oils 
              through controlled vapor release and olfactory disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-card-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                NeemShield is a biodegradable pest-repelling band designed to protect crops using natural essential oils rather than synthetic pesticides.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The band is wrapped around the stem or branch of a plant, where it functions as a controlled-release system that emits vapors of plant-derived bioactive compounds.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These vapors act through <strong>olfactory disruption</strong> and <strong>behavioral repellency</strong>, discouraging insect approach and feeding without harming the plant, soil, or ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Composition */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Composition</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Biodegradable Matrix Core</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Made from natural polymers such as starch-based bioplastic or compressed cellulose fiber</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Provides structural support and allows slow, uniform diffusion of volatile oils</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Infusion of Active Compounds</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Natural repellents: neem oil, citronella oil, and geraniol</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Contains azadirachtin (neem), citronellal (citronella), and geraniol (lemongrass)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Creates a synergistic, broad-spectrum deterrent against aphids, beetles, leafhoppers, and other pests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mode of Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Mode of Action</h2>

            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wind className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Controlled Volatile Release</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Upon exposure to sunlight and ambient heat, the band's surface microstructure enables gradual vaporization of the embedded essential oils.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      This diffusion-based release follows an exponential decay pattern, with high emission rates initially and stable low-level release over 30–45 days.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The biodegradable substrate regulates this process by slowing evaporation and preventing oil oxidation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Olfactory Repellency</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      The released vapors alter the chemical sensory field around the plant. Insects rely on olfactory cues to locate host plants; NeemShield's compounds mask these cues or overstimulate pest chemoreceptors.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      This causes avoidance behavior, feeding deterrence, and in some species, disrupted mating communication.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Unlike toxic pesticides, this mechanism does not kill</strong> — it simply prevents pests from landing or feeding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Indirect Plant Protection</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      By reducing pest visitation frequency and feeding damage, the plant experiences less physiological stress.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Lower stress correlates with improved leaf turgor, chlorophyll retention, and nutrient allocation — measurable as an increase in the Plant Health Index (PHI). This secondary benefit can result in higher yields and faster recovery from minor infestations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Key Advantages</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Passive Protection", desc: "Requires no reapplication or equipment" },
                { title: "Chemical-Free Defense", desc: "Avoids toxic residues completely" },
                { title: "Resistance-Proof", desc: "Pests cannot genetically adapt to natural complex repellents" },
                { title: "Scalable", desc: "Suitable for home gardens, small farms, and low-resource areas" },
                { title: "Self-Degrading", desc: "No retrieval or disposal needed" },
                { title: "Eco-Friendly", desc: "Biodegradable and non-toxic to pollinators" },
              ].map((advantage, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Functional Duration */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-card-foreground">Functional Duration</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    In most environments, NeemShield remains effective for approximately <strong>30 days</strong>, with efficiency depending on:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Temperature and sunlight (which accelerate oil diffusion)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Humidity and rainfall (which can wash away volatile oils)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Wind speed (which influences vapor spread radius)</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Through controlled composition and biodegradable encapsulation, the system maintains functional repellent concentrations within 10–15 cm of the plant surface throughout its operational life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Protect Your Crops?</h2>
          <Button variant="hero" size="lg" onClick={() => navigate("/order")}>
            Order NeemShield Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
