import { BarChart,BrainCircuit,LineChart } from "lucide-react";
import CV from "../cv/Resume_Phyothiha.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Data Analyst & Data Scientist
            </h3>

            <p className="text-muted-foreground">
                with strong skills in Python, SQL, Machine Learning, and Data Visualization. 
                Experienced in analyzing large datasets, building predictive models, 
                and delivering insights that support data-driven decisions.
            </p>

            <p className="text-muted-foreground">
                I’m passionate about uncovering patterns in complex datasets and 
                turning them into actionable solutions, while continuously learning 
                emerging technologies in analytics and machine learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={CV}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Analysis</h4>
                    <p className="text-muted-foreground">
                    Transforming raw data into actionable insights using Python, SQL, and visualization tools.
                    </p>
                </div>
                </div>
            </div>

            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                    <p className="text-muted-foreground">
                    Building predictive models to uncover patterns, forecast trends, and optimize decisions.
                    </p>
                </div>
                </div>
            </div>

            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Visualization</h4>
                    <p className="text-muted-foreground">
                    Creating clear and compelling dashboards with tools like Tableau, Power BI, and Plotly.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};