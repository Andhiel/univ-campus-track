import { motion } from "framer-motion";
import { Settings, Users, Zap, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "Configuración Inicial",
      description: "Configura tu institución, carreras, materias y usuarios en minutos con nuestro asistente guiado.",
    },
    {
      number: "02",
      icon: Users,
      title: "Registro de Participantes",
      description: "Importa estudiantes y docentes masivamente o regístralos individualmente con perfiles completos.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Seguimiento Automático",
      description: "El sistema registra asistencias y actualiza avances de proyectos automáticamente.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Análisis y Mejora",
      description: "Obtén insights valiosos para mejorar el rendimiento académico y la gestión institucional.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Proceso Simple
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comienza en <span className="text-gradient">4 pasos simples</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Implementa el sistema en tu universidad de forma rápida y sin complicaciones técnicas.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
