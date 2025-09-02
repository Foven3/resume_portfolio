import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Proj1 from "../images/1.png";
import Proj2 from "../images/2.png";
import Proj3 from "../images/3.png";

const projects = [
  {
    id: 1,
    title: "SOM BI - Academic Performance Management System",
    description:
      "Project website of School of Management, Mae Fah Luang University",
    image: Proj1,
    tags: ["Vue", "Node", "Firebase", "MySQL"],
    demoUrl: "https://app.som-bi.work.gd",
    githubUrl: "https://github.com/kweephyo-pmt/senior_project",
  },
  {
    id: 2,
    title: "Restaurant Rating Predictor",
    description:
      "Machine learning-powered web application built with Streamlit and Predicts restaurant ratings",
    image: Proj2,
    tags: ["Python", "Streamlit", "Numpy", "Scikit-learn", "Joblib", "Plotly"],
    demoUrl: "https://foven3-restaurant-rating-app-app-w6zqy9.streamlit.app",
    githubUrl: "https://github.com/Foven3/restaurant-rating-app",
  },
  {
    id: 3,
    title: "Customer Car Price Estimator",
    description:
      "Predicts car sales prices using data preprocessing, feature engineering, and regression techniques",
    image: Proj3,
    tags: ["Python", "Gradio", "Numpy", "Scikit-learn", "Joblib", "Docker"],
    demoUrl: "https://car-sales-prediction-model1.onrender.com",
    githubUrl: "https://github.com/Foven3/Car-Sales-Prediction-Model",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        These are some of the projects I’ve built, combining modern tools and technologies to create functional,
         user-friendly, and impactful applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <a
              key={key}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* GitHub link separate */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()} // prevents opening demoUrl when clicking GitHub
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Foven3"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
