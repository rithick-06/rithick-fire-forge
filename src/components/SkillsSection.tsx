import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Database, 
  Cpu, 
  Eye, 
  MessageSquare, 
  Layers,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
    gradient: "volcanic-gradient"
  },
  {
    title: "AI/ML Frameworks",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "Scikit-learn"],
    gradient: "molten-gradient"
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: ["Docker", "Git", "Linux", "Flask", "Gradio"],
    gradient: "ember-gradient"
  },
  {
    title: "Vision Models",
    icon: Eye,
    skills: ["YOLOv8", "EfficientNet", "UNet", "ResNet", "OpenCV"],
    gradient: "volcanic-gradient"
  },
  {
    title: "NLP & LLMs",
    icon: MessageSquare,
    skills: ["LLAMA", "BERT", "GPT", "FAISS", "RAG"],
    gradient: "molten-gradient"
  },
  {
    title: "Deployment",
    icon: Zap,
    skills: ["AWS", "Azure", "Kubernetes", "MLOps", "CI/CD"],
    gradient: "ember-gradient"
  }
];

const SkillOrb = ({ skill, index, delay }: { skill: string; index: number; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        delay: delay, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Badge 
        variant="secondary" 
        className="px-4 py-2 text-sm font-medium volcanic-glow hover:shadow-volcanic transition-all duration-300 group-hover:shadow-glow-accent"
      >
        {skill}
      </Badge>
    </motion.div>
  );
};

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Card className="p-8 h-full volcanic-glow border-primary/20 hover:border-primary/40 hover:shadow-volcanic transition-all duration-500 relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.gradient} mb-6 group-hover:shadow-glow`}
          >
            <category.icon className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
            {category.title}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIndex) => (
              <SkillOrb 
                key={skill} 
                skill={skill} 
                index={skillIndex}
                delay={index * 0.1 + skillIndex * 0.05}
              />
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-5, 5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </Card>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-card to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse" />
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
            My <span className="volcanic-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 molten-gradient mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent applications and deploying AI solutions at scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Floating Network Nodes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${5 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 30}%`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};