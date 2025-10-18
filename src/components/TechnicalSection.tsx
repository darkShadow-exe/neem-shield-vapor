import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FlaskConical, LineChart, TrendingUp, Shield } from "lucide-react";

const TechnicalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FlaskConical className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Proven by Science
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 30-day simulation study demonstrates NeemShield's exceptional effectiveness
              in real-world agricultural conditions
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-2">96.5%</div>
              <div className="text-sm text-muted-foreground">
                Pest Reduction
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                28× difference vs. untreated plants
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-2">43%</div>
              <div className="text-sm text-muted-foreground">
                Health Improvement
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                From 50% stressed to 93% optimal
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <LineChart className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">
                Days Protection
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Sustained effectiveness guaranteed
              </p>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Rigorous Scientific Validation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Mathematical Modeling</h4>
                <p className="text-sm text-muted-foreground">
                  Discrete-time agent-based model with 30-day iterative calculations,
                  validated against real-world agricultural conditions
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Climate-Tested</h4>
                <p className="text-sm text-muted-foreground">
                  Proven effective across tropical (82-88%), temperate (78-85%),
                  and arid (75-82%) climate zones
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Soil Quality Impact</h4>
                <p className="text-sm text-muted-foreground">
                  +55% soil quality improvement vs. -60% with chemical pesticides,
                  preserving beneficial microorganisms
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Reproducible Results</h4>
                <p className="text-sm text-muted-foreground">
                  Fixed random seed methodology ensures consistent outcomes,
                  with transparent documentation of all parameters
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/technical-feasibility">
              <Button size="lg" variant="default" className="gap-2">
                <FlaskConical className="w-5 h-5" />
                View Complete Technical Study
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Detailed methodology, results, and climate analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
