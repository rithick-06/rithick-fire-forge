import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Database, Zap } from 'lucide-react';

const stats = [
  { icon: Brain, label: "AI Models Built", value: "15+" },
  { icon: Code, label: "Languages", value: "5+" },
  { icon: Database, label: "Projects", value: "20+" },
  { icon: Zap, label: "Years Experience", value: "3+" },
];

const highlights = [
  "Generative AI & Machine Learning",
  "Deep Learning Models",
  "Computer Vision",
  "Natural Language Processing",
  "Scalable Deployment"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-background to-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="volcanic-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 molten-gradient mx-auto rounded-full mb-8" />
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
            <Card className="p-8 volcanic-glow border-primary/20 hover:shadow-volcanic transition-all duration-500">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Driven <span className="text-primary font-semibold">Generative AI & Machine Learning Developer</span> specializing 
                in building intelligent, data-driven applications with cutting-edge deep learning models.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Skilled in <span className="text-accent font-semibold">generative models</span>, 
                <span className="text-primary font-semibold"> NLP</span>, and 
                <span className="text-accent font-semibold"> computer vision</span> with expertise 
                in scalable deployment and production-ready solutions.
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
                <Card className="p-6 text-center volcanic-glow border-primary/20 hover:shadow-volcanic transition-all duration-500 hover:border-primary/50">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full ember-gradient mb-4 group-hover:shadow-glow"
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
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
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