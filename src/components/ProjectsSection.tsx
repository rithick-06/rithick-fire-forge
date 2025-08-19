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
    title: "RAG-Based Chatbot with LLAMA",
    description: "Intelligent conversational AI system using Retrieval-Augmented Generation with LLAMA models, Flask backend, and FAISS vector database for efficient document retrieval and context-aware responses.",
    icon: MessageSquare,
    tech: ["Python", "LLAMA", "Flask", "FAISS", "Hugging Face", "RAG"],
    gradient: "primary-gradient",
    features: [
      "Advanced document retrieval with FAISS",
      "Context-aware conversational AI",
      "Real-time response generation",
      "Scalable Flask architecture"
    ]
  },
  {
    title: "Manufacturing Defect Detection",
    description: "Computer vision system for automated quality control in manufacturing, utilizing EfficientNet, YOLOv8, ResNet, and UNet models for precise defect identification and classification.",
    icon: Eye,
    tech: ["PyTorch", "YOLOv8", "EfficientNet", "ResNet", "UNet", "OpenCV"],
    gradient: "subtle-gradient",
    features: [
      "Multi-model ensemble approach",
      "Real-time defect detection",
      "High accuracy classification",
      "Production-ready deployment"
    ]
  },
  {
    title: "Comment Toxicity Detection",
    description: "Hybrid deep learning model combining CNN, RNN, and LSTM architectures for detecting and classifying toxic content in user-generated comments with high accuracy and low latency.",
    icon: AlertTriangle,
    tech: ["TensorFlow", "CNN", "RNN", "LSTM", "NLP", "Keras"],
    gradient: "dark-gradient",
    features: [
      "Hybrid CNN + RNN + LSTM architecture",
      "Multi-class toxicity classification",
      "Real-time content moderation",
      "Scalable inference pipeline"
    ]
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
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${project.gradient} mb-6 group-hover:shadow-glow`}
          >
            <project.icon className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3 text-primary" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

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
            >
              <Github className="w-4 h-4 mr-2 group-hover/btn:animate-bounce-slow" />
              View Code
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-primary/50 hover:border-primary hover:shadow-glow"
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
          <Button size="lg" className="clean-glow group">
            <Github className="w-5 h-5 mr-2 group-hover:animate-bounce-slow" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};