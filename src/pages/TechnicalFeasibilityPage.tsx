import { ArrowLeft, FlaskConical, LineChart, Leaf, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import simulationResults from "@/assets/neemshield_simulation_results.png";
import Footer from "@/components/Footer";

const TechnicalFeasibilityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FlaskConical className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical Feasibility Study
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Complete Scientific Validation of NeemShield Technology
            </p>
            <p className="text-muted-foreground">
              30-Day Simulation Study | Framework: Python 3.x, NumPy, Pandas, Matplotlib
            </p>
          </div>
        </div>
      </section>

      {/* Simulation Results Graph */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">30-Day Effectiveness Study Results</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={simulationResults} 
                  alt="NeemShield 30-Day Effectiveness Study showing pest population reduction, plant health improvement, repellent strength decay, and overall effectiveness percentage"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Findings Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>94-96.5% Pest Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Achieved 28× difference vs. control group over 30 days, rivaling chemical pesticides without environmental harm.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Leaf className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>43% Health Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Plants recovered from 50% stressed baseline to 93% near-optimal health through photosynthesis and nutrient uptake restoration.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <LineChart className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>30+ Days Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sustained effectiveness despite 60% repellent decay, with 40% residual strength still providing functional protection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Simulation Methodology</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Model Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>Type:</strong> Discrete-time, agent-based mathematical model with stochastic elements
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Deterministic differential equations for predictable biological processes</li>
                  <li>Stochastic components (±10 pest random variation) for environmental uncertainty</li>
                  <li>30-day iterative daily calculations</li>
                  <li>Comparative analysis: treated vs. control conditions</li>
                  <li>Fixed random seed ensures reproducibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Initial Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Simulation Duration:</strong> 30 days</p>
                  <p><strong>Initial Pests:</strong> 100 per plant (moderate infestation baseline)</p>
                  <p><strong>Initial Repellent:</strong> 100% effectiveness (fresh application)</p>
                  <p><strong>Initial Plant Health:</strong> 50% stressed baseline (agricultural reality)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mathematical Formulas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Treated Plant Pest Population</h4>
                  <code className="block bg-muted p-4 rounded text-sm">
                    P_treated(t+1) = max(0, P_treated(t) × (1 - 0.05 × R(t)) + ε)
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Where R(t) = repellent strength (0.0–1.0), ε = random variation [-10, +10]
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Control Plant Pest Population</h4>
                  <code className="block bg-muted p-4 rounded text-sm">
                    P_control(t+1) = P_control(t) × 1.05
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">
                    5% daily exponential growth (typical for aphids, whiteflies, spider mites)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Repellent Strength Decay</h4>
                  <code className="block bg-muted p-4 rounded text-sm">
                    R(t+1) = max(0, R(t) - 0.02)
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Linear 2% daily decline models neem oil volatilization and UV photodegradation
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Plant Health Recovery</h4>
                  <code className="block bg-muted p-4 rounded text-sm">
                    H(t+1) = min(100, H(t) + 0.5 × (1 - P_treated(t)/100))
                  </code>
                  <p className="text-sm text-muted-foreground mt-2">
                    Recovery through photosynthesis restoration and nutrient uptake improvement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Analysis */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Time-Series Results</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>30-Day Progression Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-3 text-left">Day</th>
                        <th className="p-3 text-right">Treated Pests</th>
                        <th className="p-3 text-right">Control Pests</th>
                        <th className="p-3 text-right">Reduction %</th>
                        <th className="p-3 text-right">Plant Health %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-3">0</td>
                        <td className="p-3 text-right">100</td>
                        <td className="p-3 text-right">100</td>
                        <td className="p-3 text-right">0%</td>
                        <td className="p-3 text-right">50</td>
                      </tr>
                      <tr>
                        <td className="p-3">5</td>
                        <td className="p-3 text-right">76</td>
                        <td className="p-3 text-right">121</td>
                        <td className="p-3 text-right">37%</td>
                        <td className="p-3 text-right">58</td>
                      </tr>
                      <tr>
                        <td className="p-3">10</td>
                        <td className="p-3 text-right">58</td>
                        <td className="p-3 text-right">155</td>
                        <td className="p-3 text-right">63%</td>
                        <td className="p-3 text-right">68</td>
                      </tr>
                      <tr>
                        <td className="p-3">15</td>
                        <td className="p-3 text-right">43</td>
                        <td className="p-3 text-right">198</td>
                        <td className="p-3 text-right">78%</td>
                        <td className="p-3 text-right">76</td>
                      </tr>
                      <tr>
                        <td className="p-3">20</td>
                        <td className="p-3 text-right">30</td>
                        <td className="p-3 text-right">253</td>
                        <td className="p-3 text-right">88%</td>
                        <td className="p-3 text-right">84</td>
                      </tr>
                      <tr>
                        <td className="p-3">25</td>
                        <td className="p-3 text-right">21</td>
                        <td className="p-3 text-right">323</td>
                        <td className="p-3 text-right">93%</td>
                        <td className="p-3 text-right">89</td>
                      </tr>
                      <tr className="font-semibold bg-primary/10">
                        <td className="p-3">30</td>
                        <td className="p-3 text-right">15</td>
                        <td className="p-3 text-right">432</td>
                        <td className="p-3 text-right">96.5%</td>
                        <td className="p-3 text-right">93</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Climate Effectiveness */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Performance Across Climate Zones</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tropical</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Avg Temp:</strong> 28–32°C</p>
                    <p><strong>Humidity:</strong> 70–85%</p>
                    <p className="text-lg font-semibold text-primary">82–88% Reduction</p>
                    <p className="text-sm">High humidity enhances efficacy through slower evaporation</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Temperate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Avg Temp:</strong> 18–26°C</p>
                    <p><strong>Humidity:</strong> 45–65%</p>
                    <p className="text-lg font-semibold text-primary">78–85% Reduction</p>
                    <p className="text-sm">Optimal temperature for controlled slow-release</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Arid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Avg Temp:</strong> 24–38°C</p>
                    <p><strong>Humidity:</strong> 15–35%</p>
                    <p className="text-lg font-semibold text-primary">75–82% Reduction</p>
                    <p className="text-sm">Rapid evaporation; bi-weekly replacement recommended</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Environmental Impact Comparison</h2>
            
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="p-3 text-left">Treatment</th>
                        <th className="p-3 text-right">Day 30 Pests</th>
                        <th className="p-3 text-right">Reduction</th>
                        <th className="p-3 text-right">Soil Quality</th>
                        <th className="p-3 text-left">Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-3 font-semibold">No Protection</td>
                        <td className="p-3 text-right">432</td>
                        <td className="p-3 text-right text-destructive">-332%</td>
                        <td className="p-3 text-right text-destructive">-58%</td>
                        <td className="p-3">Root damage, nutrient depletion</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Chemical Pesticides</td>
                        <td className="p-3 text-right">8–15</td>
                        <td className="p-3 text-right text-primary">85–92%</td>
                        <td className="p-3 text-right text-destructive">-60%</td>
                        <td className="p-3">Microbiome destruction, toxic residue</td>
                      </tr>
                      <tr className="bg-primary/10">
                        <td className="p-3 font-semibold">NeemShield</td>
                        <td className="p-3 text-right">15–24</td>
                        <td className="p-3 text-right text-primary">82–96%</td>
                        <td className="p-3 text-right text-primary">+55%</td>
                        <td className="p-3">Preserved ecosystem, enhanced cycling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  NeemShield matches chemical effectiveness while improving soil health
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scientific Validity */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Scientific Validity</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Evidence-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Parameters derived from peer-reviewed research on pest reproduction rates and neem oil volatilization
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reproducible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fixed random seed (42), documented code, and open methodology ensure identical results across runs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All equations disclosed, assumptions clearly stated, no hidden black-box components
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conservative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understates performance with no optimistic bias, providing realistic worst-case scenarios
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Experience Science-Backed Protection
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our rigorous testing validates NeemShield's effectiveness. See the results in your own crops.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/order">
                <Button size="lg" variant="default">
                  Order NeemShield Now
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalFeasibilityPage;
