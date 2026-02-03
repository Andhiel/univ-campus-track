import { motion } from "framer-motion";
import { 
  UserCheck, 
  ClipboardList, 
  BarChart3, 
  Bell, 
  Shield, 
  Smartphone 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Control de Asistencia",
      description: "Registro automatizado de asistencia con múltiples métodos: QR, reconocimiento facial o manual.",
      color: "primary",
    },
    {
      icon: ClipboardList,
      title: "Gestión de Proyectos",
      description: "Seguimiento completo del avance de proyectos académicos con hitos y entregas programadas.",
      color: "accent",
    },
    {
      icon: BarChart3,
      title: "Reportes Analíticos",
      description: "Dashboards interactivos con métricas en tiempo real para tomar decisiones informadas.",
      color: "success",
    },
    {
      icon: Bell,
      title: "Notificaciones Inteligentes",
      description: "Alertas automáticas para estudiantes, profesores y coordinadores sobre eventos importantes.",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Seguridad Institucional",
      description: "Protección de datos con encriptación de nivel empresarial y cumplimiento normativo.",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Acceso Móvil",
      description: "Aplicación responsive que funciona perfectamente en cualquier dispositivo.",
      color: "success",
    },
  ];

  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
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
            Características
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas para una{" "}
            <span className="text-gradient">gestión eficiente</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Herramientas diseñadas específicamente para las necesidades de instituciones 
            educativas de nivel superior.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full gradient-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
