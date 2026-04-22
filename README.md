# Documentación del Proyecto UniControl

## Estructura de Documentación

Esta carpeta contiene toda la documentación necesaria para el desarrollo del proyecto UniControl utilizando el modelo espiral y Jira como herramienta de gestión.

## Documentos Principales

### 1. [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)
Descripción completa del proyecto incluyendo:
- Visión general y objetivos
- Arquitectura técnica
- Modelo de desarrollo espiral
- Plan de calidad y gestión de riesgos
- Timeline y presupuesto
- Métricas de éxito

### 2. [JIRA_EPICS_STORIES.md](./JIRA_EPICS_STORIES.md)
Configuración detallada para Jira:
- Épicos principales del proyecto
- User stories completas con criterios de aceptación
- Estructura de issues y dependencias
- Estimación de story points
- Priorización por espiral

### 3. [SPIRAL_IMPLEMENTATION_GUIDE.md](./SPIRAL_IMPLEMENTATION_GUIDE.md)
Guía de implementación del modelo espiral:
- Estructura de las 4 espirales
- Gestión de riesgos por fase
- Métricas y KPIs
- Plan de comunicación
- Herramientas y automatización

### 4. [TECHNICAL_TEMPLATES.md](./TECHNICAL_TEMPLATES.md)
Plantillas de documentación técnica:
- API documentation
- Especificaciones técnicas
- Base de datos
- Test cases
- Code review
- Deployment plans
- Incident reports

## Flujo de Trabajo Recomendado

### Fase Inicial (Setup)
1. Leer **PROJECT_DOCUMENTATION.md** para entender el alcance
2. Configurar proyecto en Jira usando **JIRA_EPICS_STORIES.md**
3. Revisar **SPIRAL_IMPLEMENTATION_GUIDE.md** para entender el proceso

### Desarrollo (Por Espiral)
1. Planificar espiral actual usando la guía correspondiente
2. Crear issues en Jira basados en las user stories
3. Usar plantillas técnicas para documentación
4. Seguir proceso de code review y testing

### Mantenimiento
1. Actualizar documentación regularmente
2. Usar templates para nuevos componentes
3. Mantener registro de lecciones aprendidas

## Configuración de Jira

### Project Setup
```
Project Key: UNIC
Project Name: UniControl Development
Project Type: Software
```

### Boards Principales
- **Product Backlog**: Gestión de requisitos
- **Sprint Board**: Tareas del sprint actual
- **Kanban Board**: Flujo continuo
- **Bug Tracking**: Incidencias

### Components
- AUTH - Autenticación y Autorización
- USER - Gestión de Usuarios
- ATTEND - Control de Asistencia
- PROJECT - Gestión de Proyectos
- ANALYTICS - Analítica y Reportes
- NOTIFY - Sistema de Notificaciones
- MOBILE - Aplicación Móvil
- ADMIN - Panel Administrativo

## Estructura de Carpetas Adicional

Para mantener la organización, se recomienda crear las siguientes carpetas:

```
docs/
|-- README.md                     # Este archivo
|-- PROJECT_DOCUMENTATION.md      # Documentación principal
|-- JIRA_EPICS_STORIES.md         # Épicos y stories para Jira
|-- SPIRAL_IMPLEMENTATION_GUIDE.md # Guía del modelo espiral
|-- TECHNICAL_TEMPLATES.md        # Plantillas técnicas
|-- api/                          # Documentación de APIs
|   |-- authentication.md
|   |-- attendance.md
|   |-- projects.md
|   |-- analytics.md
|-- database/                     # Esquemas y migraciones
|   |-- schema.sql
|   |-- migrations/
|   |-- seeds/
|-- testing/                      # Documentación de tests
|   |-- unit/
|   |-- integration/
|   |-- e2e/
|-- deployment/                   # Guías de deployment
|   |-- staging.md
|   |-- production.md
|   |-- rollback.md
|-- meetings/                     # Minutas y seguimiento
|   |-- sprint-planning/
|   |-- reviews/
|   |-- retrospectives/
```

## Contactos y Responsabilidades

### Equipo de Proyecto
- **Project Manager**: [Nombre] - Gestión general y comunicación
- **Tech Lead**: [Nombre] - Arquitectura y decisiones técnicas
- **Product Owner**: [Nombre] - Priorización y requisitos
- **QA Lead**: [Nombre] - Calidad y testing
- **DevOps Lead**: [Nombre] - Infraestructura y deployment

### Stakeholders
- **Administradores Universitarios**: Usuarios finales del sistema
- **Coordinadores de Carrera**: Supervisores académicos
- **Docentes**: Usuarios principales de asistencia y proyectos
- **Estudiantes**: Usuarios finales de consulta y participación

## Proceso de Actualización

### Versionamiento
- **Major**: Cambios estructurales o nuevos módulos
- **Minor**: Nuevas funcionalidades o mejoras significativas
- **Patch**: Correcciones y actualizaciones menores

### Review Schedule
- **Semanal**: Revisión de progreso y ajustes menores
- **Mensual**: Revisión completa y actualización mayor
- **Por espiral**: Evaluación y lecciones aprendidas

## Herramientas Recomendadas

### Documentación
- **Confluence**: Documentación colaborativa
- **Markdown**: Formato estándar para archivos
- **Diagrams.net**: Diagramas técnicos
- **Swagger**: Documentación de APIs

### Comunicación
- **Slack**: Comunicación diaria
- **Jira**: Gestión de tareas
- **Email**: Comunicación oficial
- **Teams**: Reuniones y presentaciones

### Desarrollo
- **GitHub**: Control de versiones
- **VS Code**: Desarrollo
- **Postman**: Testing de APIs
- **Docker**: Contenerización

## Métricas de Seguimiento

### Progreso del Proyecto
- **Velocity**: Story points por sprint
- **Burndown**: Progreso vs tiempo
- **Cycle Time**: Tiempo de desarrollo
- **Lead Time**: Tiempo total de entrega

### Calidad
- **Bug Rate**: Número de bugs por sprint
- **Test Coverage**: Porcentaje de código cubierto
- **Code Review**: Tiempo y calidad de revisiones
- **Deployment Success**: Tasa de deployments exitosos

### Negocio
- **User Adoption**: Porcentaje de adopción
- **Satisfaction**: NPS y CSAT
- **Performance**: Tiempos de respuesta
- **Availability**: Uptime del sistema

## Próximos Pasos

1. **Setup Inicial** (Semana 1)
   - Configurar Jira project
   - Crear repositorios
   - Setup herramientas de comunicación

2. **Sprint 0** (Semana 2)
   - Planning detallado
   - Setup de infraestructura
   - Onboarding del equipo

3. **Espiral 1** (Semanas 3-6)
   - Desarrollo del MVP
   - Testing continuo
   - Feedback con usuarios

---

Para más información, contactar al Project Manager o Tech Lead del proyecto.

**Última Actualización**: 2025-04-21  
**Versión**: 1.0  
**Próxima Revisión**: 2025-04-28
