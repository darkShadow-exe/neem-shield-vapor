import { Droplet, Skull, TrendingDown } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Opening Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              When the Rain Falls, <span className="text-destructive">Hope Fades</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Millions of farmers watch their hard work destroyed—not by drought, but by pests. 
              Chemical sprays wash away in monsoons. Sticky traps fail. Soil degrades. Health suffers. 
              The cycle repeats.
            </p>
          </div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Skull className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Toxic & Expensive</h3>
              <p className="text-muted-foreground">
                Chemical pesticides harm soil health, contaminate water, and cost farmers dearly in 
                repeated application cycles.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Monsoon Failure</h3>
              <p className="text-muted-foreground">
                Rain washes away sprays within hours. Farmers lose protection right when crops need it most, 
                leading to devastating crop loss.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Declining Yields</h3>
              <p className="text-muted-foreground">
                Unreliable pest control means unpredictable harvests, crushing income, and mounting debt 
                for farming families.
              </p>
            </div>
          </div>

          {/* Transition Statement */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-medium text-foreground">
              There's a better way. <span className="text-primary">Ancient wisdom, modern science.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
