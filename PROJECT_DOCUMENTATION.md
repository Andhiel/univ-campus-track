# Documentación del Proyecto - UniControl Sistema de Gestión Universitaria

## 1. Visión General del Proyecto

### 1.1 Nombre del Proyecto
**UniControl** - Plataforma Integral de Gestión Universitaria

### 1.2 Descripción
UniControl es un sistema web moderno diseñado para instituciones educativas de nivel superior que permite gestionar eficientemente la asistencia estudiantil, seguimiento de proyectos académicos y generación de reportes analíticos en tiempo real.

### 1.3 Objetivos Principales
- Automatizar el control de asistencia mediante múltiples métodos
- Centralizar la gestión de proyectos académicos
- Proporcionar análisis de datos para toma de decisiones
- Mejorar la comunicación entre estudiantes, docentes y administradores

### 1.4 Stakeholders
- **Administradores Universitarios**: Gestión general del sistema
- **Coordinadores de Carrera**: Supervisión académica
- **Docentes**: Registro de asistencia y seguimiento de proyectos
- **Estudiantes**: Consulta de estado académico y participación

## 2. Modelo de Desarrollo - Espiral

### 2.1 Justificación del Modelo Espiral
El modelo espiral es ideal para este proyecto porque:
- Permite iteraciones incrementales con validación continua
- Gestiona eficazmente los riesgos en cada fase
- Facilita la retroalimentación de stakeholders
- Adapta el producto a necesidades cambiantes

### 2.2 Estructura de Espirales (4 Iteraciones Principales)

#### Espiral 1: Mínimo Producto Viable (MVP)
- **Duración**: 4 semanas
- **Enfoque**: Funcionalidades críticas de asistencia
- **Riesgos**: Validación de conceptos básicos

#### Espiral 2: Gestión de Proyectos
- **Duración**: 6 semanas
- **Enfoque**: Seguimiento de proyectos académicos
- **Riesgos**: Integración con sistemas existentes

#### Espiral 3: Analítica y Reportes
- **Duración**: 5 semanas
- **Enfoque**: Dashboard y análisis de datos
- **Riesgos**: Performance y escalabilidad

#### Espiral 4: Optimización y Expansión
- **Duración**: 4 semanas
- **Enfoque**: Mejoras y funcionalidades avanzadas
- **Riesgos**: Adopción por usuarios

## 3. Arquitectura Técnica

### 3.1 Stack Tecnológico
- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Base de Datos**: PostgreSQL + Redis (caching)
- **Autenticación**: JWT + OAuth 2.0
- **File Storage**: AWS S3 / Azure Blob
- **API**: RESTful + GraphQL (opcional)

### 3.2 Arquitectura de Microservicios
```
Frontend (React App)
    |
API Gateway
    |
    |-- Auth Service
    |-- User Service
    |-- Attendance Service
    |-- Project Service
    |-- Notification Service
    |-- Analytics Service
    |
Database Layer (PostgreSQL)
```

### 3.3 Infraestructura
- **Hosting**: AWS / Azure / Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Datadog / Sentry
- **Testing**: Jest + Cypress

## 4. Gestión de Proyecto con Jira

### 4.1 Estructura del Proyecto en Jira

#### Boards Principales
- **Product Backlog**: Gestión de requisitos
- **Sprint Board**: Tareas del sprint actual
- **Kanban Board**: Flujo de trabajo continuo
- **Bug Tracking**: Gestión de incidencias

#### Componentes/Modules
- AUTH - Autenticación y Autorización
- USER - Gestión de Usuarios
- ATTEND - Control de Asistencia
- PROJECT - Gestión de Proyectos
- ANALYTICS - Analítica y Reportes
- NOTIFY - Sistema de Notificaciones
- MOBILE - Aplicación Móvil
- ADMIN - Panel Administrativo

### 4.2 Tipos de Issues en Jira

#### Epic
- Representa módulos funcionales principales
- Ejemplo: "Sistema de Control de Asistencia"

#### Story
- Funcionalidades desde perspectiva del usuario
- Formato: "Como [rol], quiero [funcionalidad] para [beneficio]"

#### Task
- Tareas técnicas de desarrollo
- Ejemplo: "Implementar API de registro de asistencia"

#### Bug
- Errores o comportamientos no deseados
- Prioridades: Blocker, Critical, Major, Minor, Trivial

#### Sub-task
- Division de tareas complejas
- Ejemplo: "Crear base de datos de usuarios"

## 5. Plan de Calidad

### 5.1 Métricas de Calidad
- **Coverage**: >80% en código crítico
- **Performance**: <2s tiempo de respuesta
- **Availability**: 99.9% uptime
- **Security**: Sin vulnerabilidades críticas

### 5.2 Testing Strategy
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Supertest
- **E2E Tests**: Cypress
- **Performance Tests**: Lighthouse CI

### 5.3 Code Review Process
- Pull requests obligatorios
- Mínimo 2 revisores
- Automatización con SonarQube

## 6. Gestión de Riesgos

### 6.1 Riesgos Técnicos
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Performance en alta carga | Media | Alto | Load testing, caching |
| Seguridad de datos | Baja | Crítico | Encriptación, auditoría |
| Integración con sistemas legacy | Alta | Medio | API Gateway, adapters |

### 6.2 Riesgos de Proyecto
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Cambios en requisitos | Alta | Medio | Modelo espiral, feedback |
| Pérdida de personal clave | Media | Alto | Documentación, knowledge sharing |
| Retrasos en entrega | Media | Alto | Sprint planning, buffer time |

## 7. Entregables por Espiral

### Espiral 1 (MVP)
- [ ] Sistema de autenticación
- [ ] Registro básico de usuarios
- [ ] Control de asistencia manual
- [ ] Dashboard básico
- [ ] Documentación inicial

### Espiral 2 (Proyectos)
- [ ] Gestión de proyectos
- [ ] Asignación de tareas
- [ ] Seguimiento de progreso
- [ ] Notificaciones básicas
- [ ] API documentation

### Espiral 3 (Analítica)
- [ ] Dashboard avanzado
- [ ] Reportes personalizados
- [ ] Exportación de datos
- [ ] Análisis predictivo básico
- [ ] Performance optimization

### Espiral 4 (Optimización)
- [ ] Aplicación móvil
- [ ] Integraciones avanzadas
- [ ] Machine learning básico
- [ ] Sistema de recomendaciones
- [ ] Documentación completa

## 8. Timeline y Milestones

### Timeline General: 19 semanas (4.5 meses)

| Fase | Duración | Start | End | Milestone |
|------|----------|-------|-----|-----------|
| Planning & Design | 2 semanas | Semana 1 | Semana 2 | Requirements approved |
| Espiral 1 | 4 semanas | Semana 3 | Semana 6 | MVP Release |
| Espiral 2 | 6 semanas | Semana 7 | Semana 12 | Project Management Release |
| Espiral 3 | 5 semanas | Semana 13 | Semana 17 | Analytics Release |
| Espiral 4 | 4 semanas | Semana 18 | Semana 21 | Final Release |
| Testing & Deployment | 2 semanas | Semana 22 | Semana 23 | Production Launch |

### Critical Path
1. Diseño de arquitectura
2. Implementación de autenticación
3. Desarrollo de core features
4. Integración de sistemas
5. Testing y QA
6. Deployment

## 9. Presupuesto y Recursos

### 9.1 Equipo de Desarrollo
- **Project Manager**: 1 persona
- **Backend Developers**: 2 personas
- **Frontend Developers**: 2 personas
- **QA Engineers**: 1 persona
- **DevOps Engineer**: 1 persona
- **UX/UI Designer**: 1 persona

### 9.2 Costos Estimados
- **Personal**: $X por mes
- **Infraestructura**: $Y por mes
- **Licencias**: $Z por mes
- **Contingency**: 15% del total

## 10. Success Metrics

### 10.1 KPIs de Negocio
- **Adopción**: >80% de usuarios activos
- **Satisfacción**: NPS >50
- **Retención**: >90% mensual
- **ROI**: Retorno en 12 meses

### 10.2 KPIs Técnicos
- **Performance**: <2s respuesta
- **Availability**: 99.9% uptime
- **Bug Rate**: <5 bugs por sprint
- **Code Quality**: SonarQube A rating

---

**Documento Version**: 1.0  
**Last Updated**: 2025-04-21  
**Next Review**: 2025-04-28
