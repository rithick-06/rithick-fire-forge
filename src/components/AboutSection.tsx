import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Database, Zap } from 'lucide-react';

const stats = [
  { icon: Brain, label: "AI Models Built", value: "3+" },
  { icon: Code, label: "Languages", value: "3+" },
  { icon: Database, label: "Projects", value: "3+" },
  { icon: Zap, label: "Years Experience", value: "0+" },
];

const highlights = [
  "Generative AI & Machine Learning",
  "LLMs & Diffusion Models",
  "Computer Vision",
  "Natural Language Processing",
  "Scalable AI Deployment"
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,255,0.05),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
              <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="primary-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 subtle-gradient mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 clean-glow border-primary/20 hover:shadow-clean transition-all duration-500 bg-card/50 backdrop-blur-xl hover:bg-card/70 hover:border-primary/40 shadow-xl hover:shadow-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Driven <span className="text-primary font-semibold">Generative AI & Machine Learning Developer</span> specializing in 
                building intelligent, data-driven applications with cutting-edge deep learning models.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Expertise includes <span className="text-accent font-semibold">generative models</span>, 
                <span className="text-primary font-semibold"> LLMs</span>, 
                <span className="text-accent font-semibold"> diffusion models</span>, 
                <span className="text-primary font-semibold"> NLP</span>, and 
                <span className="text-accent font-semibold"> computer vision</span>. Skilled in 
                <span className="text-primary font-semibold"> scalable AI deployment</span>, full-stack integration, and fine-tuning domain-specific architectures.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 hover:shadow-glow transition-shadow">
                        {highlight}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="group"
              >
                <Card className="p-6 text-center clean-glow border-primary/20 hover:shadow-clean transition-all duration-500 hover:border-primary/50 bg-card/50 backdrop-blur-xl hover:bg-card/70 shadow-xl hover:shadow-2xl">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full dark-gradient mb-4 group-hover:shadow-glow"
                  >
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-3xl font-bold text-primary mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'w-3 h-3 bg-primary/30' : 
                i % 3 === 1 ? 'w-2 h-2 bg-accent/30' : 
                'w-1 h-1 bg-cyan-400/40'
              }`}
              style={{
                left: `${5 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [-30, 30],
                x: [-10, 10],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};