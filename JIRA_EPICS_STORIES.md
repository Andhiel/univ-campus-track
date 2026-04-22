# Épicos y User Stories para Jira - UniControl

## 1. Épicos Principales

### EPIC-001: Sistema de Autenticación y Gestión de Usuarios
**Componente**: AUTH  
**Prioridad**: Highest  
**Espiral**: 1

#### User Stories:
- **US-001**: Como administrador, quiero crear y gestionar cuentas de usuarios para controlar el acceso al sistema
- **US-002**: Como usuario, quiero iniciar sesión con credenciales seguras para acceder a mis funciones
- **US-003**: Como administrador, quiero asignar roles y permisos a los usuarios para controlar el acceso a funcionalidades
- **US-004**: Como usuario, quiero recuperar mi contraseña si la olvido para mantener el acceso a mi cuenta
- **US-005**: Como administrador, quiero ver el historial de actividades de los usuarios para auditoría de seguridad

---

### EPIC-002: Control de Asistencia
**Componente**: ATTEND  
**Prioridad**: Highest  
**Espiral**: 1

#### User Stories:
- **US-006**: Como docente, quiero registrar la asistencia de mis estudiantes mediante código QR para agilizar el proceso
- **US-007**: Como estudiante, quiero registrar mi presencia escaneando un código QR para marcar mi asistencia
- **US-008**: Como docente, quiero ver estadísticas de asistencia en tiempo real para monitorear el rendimiento
- **US-009**: Como coordinador, quiero generar reportes de asistencia por período para análisis institucional
- **US-010**: Como estudiante, quiero consultar mi historial de asistencias para verificar mi registro
- **US-011**: Como administrador, quiero configurar métodos de registro de asistencia para adaptarse a diferentes necesidades

---

### EPIC-003: Gestión de Proyectos Académicos
**Componente**: PROJECT  
**Prioridad**: High  
**Espiral**: 2

#### User Stories:
- **US-012**: Como docente, quiero crear proyectos académicos y asignarlos a estudiantes para organizar el trabajo
- **US-013**: Como estudiante, quiero ver los proyectos asignados y sus fechas de entrega para planificar mi trabajo
- **US-014**: Como docente, quiero definir hitos y entregables para estructurar el desarrollo del proyecto
- **US-015**: Como estudiante, quiero actualizar el progreso de mis proyectos para informar sobre mi avance
- **US-016**: Como coordinador, quiero ver el estado general de todos los proyectos para supervisar el rendimiento académico
- **US-017**: Como docente, quiero evaluar entregas y proporcionar retroalimentación para guiar a los estudiantes

---

### EPIC-004: Dashboard y Analítica
**Componente**: ANALYTICS  
**Prioridad**: High  
**Espiral**: 3

#### User Stories:
- **US-018**: Como administrador, quiero ver un dashboard con métricas clave para tomar decisiones informadas
- **US-019**: Como coordinador, quiero generar reportes personalizados de asistencia y rendimiento para análisis detallados
- **US-020**: Como docente, quiero visualizar el progreso de mis estudiantes en gráficos interactivos para identificar tendencias
- **US-021**: Como administrador, quiero exportar datos a diferentes formatos para compartir con otras áreas
- **US-022**: Como coordinador, quiero recibir alertas automáticas sobre anomalías en la asistencia para intervención temprana

---

### EPIC-005: Sistema de Notificaciones
**Componente**: NOTIFY  
**Prioridad**: Medium  
**Espiral**: 2

#### User Stories:
- **US-023**: Como estudiante, quiero recibir notificaciones sobre próximas fechas de entrega para no perder plazos
- **US-024**: Como docente, quiero enviar recordatorios automáticos a los estudiantes para mejorar la comunicación
- **US-025**: Como administrador, quiero configurar plantillas de notificaciones para mantener consistencia
- **US-026**: Como usuario, quiero elegir mis preferencias de notificación para controlar la comunicación
- **US-027**: Como coordinador, quiero recibir alertas sobre problemas críticos para tomar acción inmediata

---

### EPIC-006: Aplicación Móvil
**Componente**: MOBILE  
**Prioridad**: Medium  
**Espiral**: 4

#### User Stories:
- **US-028**: Como estudiante, quiero acceder al sistema desde mi móvil para registrar asistencia sobre la marcha
- **US-029**: Como docente, quiero gestionar asistencia desde mi móvil para mayor flexibilidad
- **US-030**: Como usuario, quiero recibir notificaciones push en mi móvil para estar siempre informado
- **US-031**: Como estudiante, quiero consultar mi progreso académico desde el móvil para seguimiento constante

---

### EPIC-007: Panel Administrativo
**Componente**: ADMIN  
**Prioridad**: High  
**Espiral**: 3

#### User Stories:
- **US-032**: Como administrador, quiero configurar facultades y carreras para adaptar el sistema a la institución
- **US-033**: Como administrador, quiero gestionar períodos académicos para controlar el calendario
- **US-034**: Como coordinador, quiero asignar docentes a materias para organizar la carga académica
- **US-035**: Como administrador, quiero importar datos masivamente para inicializar el sistema rápidamente
- **US-036**: Como administrador, quiero configurar parámetros del sistema para personalizar la experiencia

---

## 2. Estructura de Issues en Jira

### 2.1 Formato de User Stories
```
Como [rol de usuario],
quiero [funcionalidad específica]
para [beneficio/valor obtenido]

Criterios de Aceptación:
- [CA1] Descripción del criterio
- [CA2] Descripción del criterio
- [CA3] Descripción del criterio

Notas técnicas:
- [Nota1] Requisito técnico
- [Nota2] Dependencia

Story Points: [estimación]
Prioridad: [Highest/High/Medium/Low]
```

### 2.2 Ejemplo Completo de Issue

**Título**: US-006: Registro de asistencia mediante código QR

**Descripción**:
```
Como docente,
quiero generar y mostrar códigos QR para que mis estudiantes registren su asistencia
para agilizar el proceso de registro y reducir errores manuales.

Criterios de Aceptación:
- [CA1] El sistema debe generar un QR único por clase/materia
- [CA2] El QR debe tener validez temporal (configurable)
- [CA3] Los estudiantes deben poder escanear el QR con sus dispositivos
- [CA4] El registro debe ser timestamp y geolocalización (opcional)
- [CA5] El docente debe ver en tiempo real los registros exitosos

Notas técnicas:
- [NT1] Usar biblioteca qrcode.js para generación
- [NT2] Implementar WebSocket para actualizaciones en tiempo real
- [NT3] Validar que el QR no haya sido usado previamente

Story Points: 8
Prioridad: Highest
Componente: ATTEND
Espiral: 1
```

## 3. Dependencias entre Stories

### 3.1 Dependencias Críticas
- **US-001** (Crear usuarios) debe completarse antes de **US-002** (Login)
- **US-003** (Roles/permisos) antes de cualquier story funcional
- **US-006** (QR asistencia) depende de **US-001** y **US-002**

### 3.2 Dependencias Técnicas
- Todas las stories móviles (US-028 a US-031) dependen de las versiones web equivalentes
- Stories de analítica (US-018 a US-022) dependen de la recolección de datos básicos

## 4. Priorización por Espiral

### Espiral 1 (MVP) - Prioridad Highest
- EPIC-001: Autenticación completa
- EPIC-002: Control de asistencia básico
- US-032: Configuración básica administrativa

### Espiral 2 - Prioridad High
- EPIC-003: Gestión de proyectos
- EPIC-005: Notificaciones básicas
- US-034: Asignación de docentes

### Espiral 3 - Prioridad Medium
- EPIC-004: Dashboard y analítica
- EPIC-007: Panel administrativo avanzado
- US-036: Configuración avanzada

### Espiral 4 - Prioridad Low/Medium
- EPIC-006: Aplicación móvil
- Funcionalidades avanzadas y optimización

## 5. Estimación de Story Points

### Guía de Estimación:
- **1-2 puntos**: Tareas simples (< 4 horas)
- **3-5 puntos**: Tareas medias (4-8 horas)
- **8 puntos**: Tareas complejas (8-16 horas)
- **13 puntos**: Tareas muy complejas (16-24 horas)
- **21+ puntos**: Epic (dividir en stories más pequeñas)

### Ejemplos de Estimación:
- **US-002**: Login básico = 3 puntos
- **US-006**: QR asistencia = 8 puntos
- **US-012**: Creación de proyectos = 5 puntos
- **US-018**: Dashboard principal = 13 puntos

## 6. Definición de "Done" (DoD)

### Criterios Generales:
- [ ] Código revisado y aprobado por al menos 2 desarrolladores
- [ ] Tests unitarios con coverage >80%
- [ ] Tests de integración pasando
- [ ] Documentación técnica actualizada
- [ ] Deploy en staging verificado
- [ ] Performance test aprobado (<2s respuesta)
- [ ] Security scan sin vulnerabilidades críticas
- [ ] User acceptance testing completado

### Criterios Específicos por Componente:
- **Frontend**: Responsive design, accessibility WCAG 2.1
- **Backend**: API documentation, error handling
- **Mobile**: Offline functionality básica
- **Analytics**: Data validation, privacy compliance

---

**Documento Version**: 1.0  
**Last Updated**: 2025-04-21  
**Jira Project Key**: UNIC  
**Board**: UniControl Development
