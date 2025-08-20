import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  MessageSquare, 
  Eye, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const projects = [
  {
    title: "Chatbot with LLAMA (RAG-based)",
    description: "Built a Retrieval-Augmented Generation (RAG) chatbot using Flask, FAISS, and Hugging Face embeddings. Integrated Ollama LLM with RetrievalQA for contextual responses, boosting accuracy by 32%.",
    tech: ["Flask", "FAISS", "Hugging Face", "Ollama", "RAG"],
    link: "#",
    github: "https://github.com/rithick-06/llama-rag-chatbot",
    image: "/placeholder.svg"
  },
  {
    title: "Defect Detection for Manufacturing",
    description: "Developed a two-stage vision pipeline for defect classification and localization. Stage 1: EfficientNet for classification; Stage 2: YOLOv8, ResNet, UNet for defect detection. Achieved 95% accuracy on validation dataset.",
    tech: ["EfficientNet", "YOLOv8", "ResNet", "UNet", "Computer Vision"],
    link: "#",
    github: "https://github.com/rithick-06/defect-detection",
    image: "/placeholder.svg"
  },
  {
    title: "Comment Toxicity Detection",
    description: "Designed a CNN-RNN-LSTM hybrid model for real-time toxicity detection. Reached an 87.6% F1 score, improving over baseline by 18%.",
    tech: ["CNN", "RNN", "LSTM", "NLP", "Deep Learning"],
    link: "#",
    github: "https://github.com/rithick-06/toxicity-detection",
    image: "/placeholder.svg"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ 
        y: -15,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Card className="p-8 h-full clean-glow border-primary/20 hover:border-primary/40 hover:shadow-clean transition-all duration-500 relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Particles */}
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [-10, 10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        <div className="relative z-10 flex flex-col h-full">
          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-xs hover:shadow-glow transition-shadow">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <Button 
              size="sm" 
              className="flex-1 clean-glow group/btn"
              variant="default"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-4 h-4 mr-2 group-hover/btn:animate-bounce-slow" />
              View Code
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-primary/50 hover:border-primary hover:shadow-glow"
              onClick={() => window.open(project.link, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-background to-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="primary-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 subtle-gradient mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions showcasing expertise in deep learning, computer vision, and natural language processing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="clean-glow group"
            onClick={() => window.open('https://github.com/rithick-06', '_blank')}
          >
            <Github className="w-5 h-5 mr-2 group-hover:animate-bounce-slow" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};