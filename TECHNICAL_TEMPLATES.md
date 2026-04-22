# Plantillas de Documentación Técnica - UniControl

## 1. Plantilla de Documentación de API

### 1.1 Estructura Base
```markdown
# [Nombre del API] - API Documentation

## Overview
[Breve descripción del propósito del API]

## Base URL
```
https://api.unicontrol.edu/v1
```

## Authentication
- **Type**: JWT Bearer Token
- **Header**: `Authorization: Bearer <token>`
- **Expiry**: 24 hours

## Endpoints

### [Método] [Endpoint]
**Descripción**: [Breve descripción de lo que hace el endpoint]

**URL**: `/path/to/endpoint`

**Headers**:
```
Content-Type: application/json
Authorization: Bearer <token>
```

**Request Body**:
```json
{
  "field1": "type",
  "field2": "type"
}
```

**Response**:
```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

**Error Responses**:
- **400**: Bad Request - Invalid input
- **401**: Unauthorized - Invalid token
- **403**: Forbidden - Insufficient permissions
- **404**: Not Found - Resource doesn't exist
- **500**: Internal Server Error

**Example**:
```bash
curl -X POST https://api.unicontrol.edu/v1/endpoint \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"field1": "value"}'
```
```

### 1.2 Ejemplo: API de Autenticación
```markdown
# Authentication API

## Overview
Maneja la autenticación y autorización de usuarios en el sistema UniControl.

## POST /auth/login
**Descripción**: Autentica un usuario y retorna un token JWT

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "role": "student",
      "name": "John Doe"
    },
    "expiresIn": "24h"
  }
}
```
```

## 2. Plantilla de Especificación Técnica

### 2.1 Estructura Base
```markdown
# Especificación Técnica - [Nombre del Componente]

## 1. Información General
- **Componente**: [Nombre]
- **Versión**: [X.X]
- **Autor**: [Nombre]
- **Fecha**: [YYYY-MM-DD]
- **Estado**: [Diseño/Desarrollo/Testing/Producción]

## 2. Propósito
[Descripción detallada del propósito y alcance del componente]

## 3. Requisitos Funcionales
- [FR-001] [Descripción del requisito funcional]
- [FR-002] [Descripción del requisito funcional]

## 4. Requisitos Técnicos
- [TR-001] [Descripción del requisito técnico]
- [TR-002] [Descripción del requisito técnico]

## 5. Arquitectura
### 5.1 Componentes
- [Componente 1]: [Descripción]
- [Componente 2]: [Descripción]

### 5.2 Diagrama de Arquitectura
[Insertar diagrama o descripción]

## 6. Flujo de Datos
[Describir cómo fluyen los datos a través del componente]

## 7. Interfaces
### 7.1 APIs Externas
- [API 1]: [Descripción y detalles de integración]

### 7.2 Base de Datos
- [Tabla 1]: [Descripción de estructura]
- [Tabla 2]: [Descripción de estructura]

## 8. Seguridad
- [Autenticación]: [Método y detalles]
- [Autorización]: [Roles y permisos]
- [Validación]: [Reglas de validación de datos]

## 9. Performance
- [Requisitos]: [Tiempo de respuesta, throughput, etc.]
- [Métricas]: [Cómo se medirá el performance]

## 10. Testing
### 10.1 Unit Tests
- [Coverage esperado]: [%]
- [Frameworks]: [Jest, Mocha, etc.]

### 10.2 Integration Tests
- [Escenarios]: [Descripción de escenarios de prueba]

### 10.3 E2E Tests
- [Casos de uso]: [Descripción de casos de uso]

## 11. Despliegue
### 11.1 Requisitos
- [Hardware]: [Especificaciones]
- [Software]: [Dependencias]
- [Configuración]: [Variables de entorno]

### 11.2 Proceso
[Descripción paso a paso del proceso de despliegue]

## 12. Monitoreo y Logging
- [Métricas]: [Qué se monitorea]
- [Logs]: [Qué se registra y nivel]

## 13. Mantenimiento
- [Tareas programadas]: [Descripción]
- [Backup]: [Estrategia de backup]

## 14. Riesgos y Mitigación
- [Riesgo 1]: [Descripción y estrategia de mitigación]
- [Riesgo 2]: [Descripción y estrategia de mitigación]

## 15. Apéndices
- [A. Referencias]: [Links a documentación relevante]
- [B. Glosario]: [Términos técnicos definidos]
```

## 3. Plantilla de Base de Datos

### 3.1 Estructura de Tabla
```sql
-- Table: [table_name]
-- Description: [Descripción del propósito de la tabla]
-- Created: [YYYY-MM-DD]
-- Modified: [YYYY-MM-DD]

CREATE TABLE [table_name] (
    [column_name] [data_type] [constraints] [COMMENT 'description'],
    
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Foreign Keys
    [foreign_key_column] UUID REFERENCES [related_table](id),
    
    -- Indexes
    -- CREATE INDEX idx_[table_name]_[column] ON [table_name]([column]);
    
    -- Constraints
    -- CONSTRAINT [constraint_name] CHECK ([condition])
);

-- Triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_[table_name]_updated_at
    BEFORE UPDATE ON [table_name]
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

### 3.2 Ejemplo: Tabla de Usuarios
```sql
-- Table: users
-- Description: Almacena información básica de usuarios del sistema
-- Created: 2025-04-21
-- Modified: 2025-04-21

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id UUID NOT NULL REFERENCES roles(id),
    is_active BOOLEAN DEFAULT true,
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role_id ON users(role_id);
CREATE INDEX idx_users_is_active ON users(is_active);

-- Constraints
ALTER TABLE users ADD CONSTRAINT chk_users_email_format 
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
```

## 4. Plantilla de Test Cases

### 4.1 Estructura de Test Case
```markdown
# Test Case: [ID] - [Nombre del Test]

## Información General
- **ID**: [TC-XXX]
- **Módulo**: [Nombre del módulo]
- **Prioridad**: [High/Medium/Low]
- **Tipo**: [Unit/Integration/E2E]
- **Autor**: [Nombre]
- **Fecha**: [YYYY-MM-DD]

## Descripción
[Breve descripción de lo que se está probando]

## Precondiciones
- [Precondición 1]
- [Precondición 2]

## Pasos de Ejecución
1. [Paso 1 con detalles específicos]
2. [Paso 2 con detalles específicos]
3. [Paso 3 con detalles específicos]

## Resultados Esperados
- [Resultado esperado 1]
- [Resultado esperado 2]

## Datos de Prueba
```json
{
  "input": "valor",
  "expected": "resultado_esperado"
}
```

## Criterios de Aceptación
- [ ] [Criterio 1]
- [ ] [Criterio 2]

## Post-condiciones
- [Post-condición 1]
- [Post-condición 2]

## Notas
[Notas adicionales o consideraciones especiales]
```

### 4.2 Ejemplo: Test de Login
```markdown
# Test Case: TC-AUTH-001 - Login Exitoso

## Información General
- **ID**: TC-AUTH-001
- **Módulo**: Authentication
- **Prioridad**: High
- **Tipo**: Integration
- **Autor**: QA Team
- **Fecha**: 2025-04-21

## Descripción
Verificar que un usuario puede iniciar sesión exitosamente con credenciales válidas.

## Precondiciones
- Usuario existe en la base de datos
- Usuario tiene contraseña válida
- Usuario está activo

## Pasos de Ejecución
1. Enviar POST request a /auth/login con email y password válidos
2. Verificar respuesta HTTP 200
3. Verificar que response contiene token JWT
4. Verificar que token es válido

## Resultados Esperados
- HTTP Status: 200 OK
- Response body contiene token JWT
- Token expira en 24 horas
- User data en response es correcto

## Datos de Prueba
```json
{
  "request": {
    "email": "test@unicontrol.edu",
    "password": "TestPassword123!"
  },
  "response": {
    "success": true,
    "data": {
      "token": "jwt_token_here",
      "user": {
        "id": "user_uuid",
        "email": "test@unicontrol.edu",
        "role": "student"
      }
    }
  }
}
```

## Criterios de Aceptación
- [ ] Login exitoso con credenciales correctas
- [ ] Token JWT válido retornado
- [ ] Información de usuario correcta
- [ ] Tiempo de respuesta < 2 segundos

## Post-condiciones
- Usuario marcado como logged in
- Token almacenado en sistema
- Last login timestamp actualizado
```

## 5. Plantilla de Code Review

### 5.1 Checklist de Code Review
```markdown
# Code Review - [PR #] - [Título]

## Información General
- **PR Number**: #[Número]
- **Autor**: [Nombre]
- **Revisor(es)**: [Nombres]
- **Componente**: [Nombre]
- **Fecha**: [YYYY-MM-DD]

## Checklist General
### Funcionalidad
- [ ] El código implementa la funcionalidad requerida
- [ ] Los tests pasan exitosamente
- [ ] No introduce regresiones
- [ ] Maneja casos edge correctamente

### Calidad de Código
- [ ] Código limpio y legible
- [ ] Nombres de variables/funciones descriptivos
- [ ] No hay código duplicado
- [ ] Comentarios donde sea necesario

### Performance
- [ ] No hay impacto negativo en performance
- [ ] Queries optimizados
- [ ] Uso eficiente de memoria
- [ ] Caching apropiado

### Seguridad
- [ ] No hay vulnerabilidades de seguridad
- [ ] Input validation adecuado
- [ ] Sanitización de datos
- [ ] Permisos correctos

### Testing
- [ ] Tests unitarios incluidos
- [ ] Coverage apropiado (>80%)
- [ ] Tests de integración si aplica
- [ ] Tests E2E si aplica

### Documentación
- [ ] Código documentado
- [ ] README actualizado si es necesario
- [ ] API documentation actualizada
- [ ] Changelog actualizado

## Issues Encontrados
### [High/Critical]
- [ ] [Issue 1]

### [Medium]
- [ ] [Issue 2]

### [Low/Suggestions]
- [ ] [Issue 3]

## Recomendaciones
[Recomendaciones para mejorar el código]

## Decisión
- [ ] **Approve**: Sin issues críticos
- [ ] **Request Changes**: Issues que deben ser resueltos
- [ ] **Comment**: Solo comentarios/sugerencias

## Comentarios Adicionales
[Comentarios adicionales del revisor]
```

## 6. Plantilla de Deployment

### 6.1 Deployment Plan
```markdown
# Deployment Plan - [Versión] - [Fecha]

## Información General
- **Versión**: [X.X.X]
- **Fecha**: [YYYY-MM-DD]
- **Ambiente**: [Staging/Production]
- **Autor**: [Nombre]
- **Aprobado por**: [Nombre]

## Pre-requisitos
- [ ] Tests pasando en ambiente de desarrollo
- [ ] Code review completado y aprobado
- [ ] Documentation actualizada
- [ ] Backup de base de datos actual
- [ ] Rollback plan preparado

## Checklist de Pre-deployment
### Infrastructure
- [ ] Servidores listos y configurados
- [ ] Base de datos accessible
- [ ] Redes y firewall configurados
- [ ] SSL certificates válidos

### Application
- [ ] Build exitoso
- [ ] Artefactos generados
- [ ] Variables de entorno configuradas
- [ ] Secrets actualizados

### Monitoring
- [ ] Logging configurado
- [ ] Metrics dashboards listos
- [ ] Alert rules configuradas
- [ ] Health checks activos

## Pasos de Deployment
1. **Preparación** (5 min)
   - [ ] Notificar a stakeholders
   - [ ] Poner sistema en maintenance mode
   - [ ] Verificar pre-requisitos

2. **Backup** (10 min)
   - [ ] Backup de base de datos
   - [ ] Backup de archivos estáticos
   - [ ] Backup de configuración

3. **Deployment** (15 min)
   - [ ] Deploy nueva versión
   - [ ] Run database migrations
   - [ ] Clear caches
   - [ ] Restart services

4. **Verification** (10 min)
   - [ ] Health checks
   - [ ] Smoke tests
   - [ ] Verify key functionality
   - [ ] Check logs for errors

5. **Post-deployment** (5 min)
   - [ ] Disable maintenance mode
   - [ ] Monitor system metrics
   - [ ] Notify stakeholders

## Rollback Plan
Si ocurre algún problema crítico:
1. [ ] Identificar issue
2. [ ] Decidir rollback
3. [ ] Ejecutar rollback commands
4. [ ] Verificar sistema funcionando
5. [ ] Investigar causa del problema

## Post-deployment Verification
### Functional Tests
- [ ] Login funciona
- [ ] Registro de asistencia funciona
- [ ] Dashboard carga correctamente
- [ ] API endpoints responden

### Performance Tests
- [ ] Response time < 2s
- [ ] CPU usage < 80%
- [ ] Memory usage normal
- [ ] No errors en logs

### Security Tests
- [ ] Authentication funciona
- [ ] Authorization correcto
- [ ] No vulnerabilidades críticas

## Communication Plan
### Pre-deployment
- **Team**: Slack #deployment
- **Stakeholders**: Email 24h antes
- **Users**: Banner en sistema 1h antes

### During deployment
- **Team**: Live updates en Slack
- **Stakeholders**: Status updates cada 15 min

### Post-deployment
- **Team**: Summary en Slack
- **Stakeholders**: Email de confirmación
- **Users**: Notificación de sistema estable

## Emergency Contacts
- **DevOps Lead**: [Nombre] - [Phone]
- **Tech Lead**: [Nombre] - [Phone]
- **Product Owner**: [Nombre] - [Phone]
- **Infrastructure**: [Nombre] - [Phone]

## Lessons Learned
[Documentar lecciones aprendidas después del deployment]
```

## 7. Plantilla de Incident Report

### 7.1 Incident Report Template
```markdown
# Incident Report - INC-[Número]

## Información Básica
- **ID**: INC-[Número]
- **Severidad**: [Critical/High/Medium/Low]
- **Estado**: [Open/Investigating/Mitigated/Resolved]
- **Fecha de Detección**: [YYYY-MM-DD HH:MM]
- **Fecha de Resolución**: [YYYY-MM-DD HH:MM]
- **Duración**: [X horas/minutos]
- **Reportado por**: [Nombre]

## Impacto
### Usuarios Afectados
- **Número**: [Cantidad]
- **Regiones**: [Lista]
- **Funcionalidades**: [Lista]

### Impacto de Negocio
- **Revenue Impact**: [Descripción]
- **Customer Impact**: [Descripción]
- **Reputation Impact**: [Descripción]

## Descripción del Incidente
### Resumen
[Breve descripción del incidente]

### Timeline
- **HH:MM**: [Evento 1]
- **HH:MM**: [Evento 2]
- **HH:MM**: [Evento 3]

### Síntomas
- [Symptom 1]
- [Symptom 2]
- [Symptom 3]

## Análisis de Causa Raíz (Root Cause Analysis)
### Causa Inmediata
[Descripción de la causa directa]

### Causas Contribuyentes
- [Causa 1]
- [Causa 2]

### Causa Raíz
[Descripción de la causa fundamental]

## Acciones Tomadas
### Inmediatas (Mitigation)
- [Acción 1]
- [Acción 2]

### Corto Plazo (Fix)
- [Acción 1]
- [Acción 2]

### Largo Plazo (Prevention)
- [Acción 1]
- [Acción 2]

## Comunicación
### Internal Communication
- [Team]: [Mensaje y cuándo]
- [Management]: [Mensaje y cuándo]

### External Communication
- [Customers]: [Mensaje y cuándo]
- [Public]: [Mensaje y cuándo]

## Lecciones Aprendidas
### What Went Well
- [Aspecto 1]
- [Aspecto 2]

### What Could Be Improved
- [Mejora 1]
- [Mejora 2]

### Action Items
- [ ] [Action item 1] - [Responsable] - [Fecha]
- [ ] [Action item 2] - [Responsable] - [Fecha]

## Apéndices
### Logs Relevantes
[Attach relevant logs]

### Metrics
[Attach relevant metrics/screenshots]

### References
[Links to relevant documentation]
```

---

**Documento Version**: 1.0  
**Last Updated**: 2025-04-21  
**Maintainer**: Technical Lead  
**Review Frequency**: Monthly
