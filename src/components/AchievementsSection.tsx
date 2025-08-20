import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Zap } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  {
    id: 1,
    title: "India Skills 2024 — Bronze Medal",
    description: "Fabric Design and Development, among 100+ participants",
    category: "National Competition",
    icon: Medal,
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/30",
    delay: 0.1
  },
  {
    id: 2,
    title: "Finalist — IITDM National Conference",
    description: "Osteoporosis Detection using Deep Learning",
    category: "Research & Innovation",
    icon: Trophy,
    color: "from-purple-500 to-pink-600",
    glow: "shadow-purple-500/30",
    delay: 0.2
  },
  {
    id: 3,
    title: "Finalist — ASET International Conference",
    description: "ITC Best Practices for Green IT",
    category: "International Recognition",
    icon: Award,
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    delay: 0.3
  },
  {
    id: 4,
    title: "Caterpillar Innovation Challenge",
    description: "Sustainable Manufacturing Solutions",
    category: "Corporate Innovation",
    icon: Trophy,
    color: "from-green-500 to-emerald-600",
    glow: "shadow-green-500/30",
    delay: 0.4
  }
];

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: achievement.delay }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ${achievement.glow}`} />
      
      {/* Main Card */}
      <div className="relative bg-card/50 backdrop-blur-xl border border-border/20 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-card/70 hover:border-border/40 group-hover:shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: achievement.delay + 0.1 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3"
            >
              <Star className="w-3 h-3 mr-1" />
              {achievement.category}
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: achievement.delay + 0.2 }}
              className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
            >
              {achievement.title}
            </motion.h3>
          </div>
          
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: achievement.delay + 0.3 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </motion.div>
        </div>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: achievement.delay + 0.4 }}
          className="text-muted-foreground leading-relaxed"
        >
          {achievement.description}
        </motion.p>
        
        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: achievement.delay + 0.5 }}
          className="mt-4 flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Achievement #{achievement.id}</span>
          </div>
          
          {/* Animated Border */}
          <div className="w-8 h-8 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      id="achievements" 
      className="relative py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            <Trophy className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Recognition & Awards</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Achievements & Awards
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Celebrating milestones and recognition in my journey through innovation, 
            research, and technical excellence across national and international platforms.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
                        <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
                >
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-medium">
            <Star className="w-5 h-5 mr-2 animate-pulse" />
            <span>More achievements coming soon...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
