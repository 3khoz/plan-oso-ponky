# 🐕🐕 Plan Oso & Ponky - IA Adaptativa

App web progresiva (PWA) con análisis de IA para el plan de entrenamiento de 4 semanas de Oso y Ponky.

---

## 🎯 ¿Qué hace esta app?

Esta es una app **inteligente y adaptativa** que:

✅ **Plan estructurado de 4 semanas** con objetivos específicos por semana
✅ **Seguimiento detallado** de cada tarea con checkbox y comentarios
✅ **Análisis IA** que lee tus comentarios y genera sugerencias personalizadas
✅ **Ajuste automático** del plan basado en tu progreso real
✅ **Revisiones semanales** para reflexionar sobre progresos y dificultades
✅ **Exporta tus datos** para tener respaldo completo

---

## 📅 Estructura del plan de 4 semanas

### Semana 1: Bajar la base
**Objetivo:** Reducir la activación general de Oso y desacoplar emocionalmente a Ponky

**Tareas clave:**
- Presencia sin disponibilidad (2-3 bloques de 5-10 min)
- Paseos cortos y calmados
- PROHIBIDO: juegos intensos
- Observar sin intervenir

### Semana 2: Separación dosificada
**Objetivo:** Romper la cadena emocional Oso → Ponky mediante separaciones muy cortas

**Tareas clave:**
- Micro-salidas (30 seg - 3 min)
- Asimetría de premios (Ponky con tarea, Oso sin premio)
- Paseo separado semanal
- Comida separada (NUEVA REGLA obligatoria)

### Semana 3: Reactividad con control humano
**Objetivo:** Que Oso delegue decisiones sobre estímulos externos

**Tareas clave:**
- Oso atrás, Ponky adelante en paseos
- Giro 90° ANTES del ladrido cuando aparece gato
- Interrupción activa si Oso acapara recursos
- Protección corporal de Ponky
- Juegos separados

### Semana 4: Integración
**Objetivo:** Que funcionen juntos sin escalarse. Consolidar todo.

**Tareas clave:**
- Paseos juntos pero con distancia
- Salidas más largas (5-10 min)
- Re-introducción gradual de juguetes compartidos
- Evaluación: ¿Oso sigue controlando?
- Celebración de cierre

---

## 🤖 Análisis IA (Opcional pero recomendado)

La app puede usar **Claude AI** para:

1. **Leer todos tus comentarios** en cada tarea
2. **Analizar tu revisión semanal**
3. **Detectar patrones** (ej: "Oso sigue controlando", "Ponky tiene miedo")
4. **Generar 3-4 sugerencias concretas** para la próxima semana
5. **Ajustar el enfoque** si detecta retrocesos o progresos excepcionales

### Cómo activar el análisis IA:

1. Ve a **Configuración** (⚙️ Ajustes)
2. Obtén una clave API gratuita en: https://console.anthropic.com
3. Pega tu clave en "Clave API de IA"
4. Selecciona modelo:
   - **Claude 3.5 Sonnet** (recomendado, más inteligente)
   - **Claude 3.5 Haiku** (más rápido y económico)
5. Frecuencia:
   - **Diario**: Analiza cada vez que completas todas las tareas del día
   - **Semanal**: Analiza cuando completas la semana
   - **Manual**: Solo cuando tú lo pidas (botón 🤖 Analizar con IA)

**Sin API:**
- La app funciona perfectamente sin API
- Usará análisis local básico (palabras clave, porcentaje de progreso)
- No tendrás sugerencias personalizadas avanzadas

---

## 📱 Instalación

### Opción A: Directo desde celular (sin internet)

1. Copia la carpeta `plan-oso-ponky` a tu celular
2. Abre `index.html` con Chrome
3. Menú ⋮ → "Agregar a pantalla principal"

### Opción B: GitHub Pages (recomendado)

Ver archivo `GITHUB-PAGES-PASO-A-PASO.md` para instrucciones detalladas.

**Resumen:**
1. Crea repo en GitHub (público)
2. Sube todos los archivos
3. Activa Pages: Settings → Pages → Branch: main, Folder: /(root)
4. Tu URL: `https://TU-USUARIO.github.io/plan-oso-ponky/`

---

## 📝 Cómo usar la app (flujo completo)

### Primer uso:

1. **Abre la app**
2. **Click en "📚 Cargar plan completo"** (botón grande abajo)
3. **Revisa el objetivo de la Semana 1**
4. **Empieza con las tareas**

### Uso diario:

1. **Marca tareas completadas** (checkbox)
2. **Agrega comentarios** en cada tarea:
   - ¿Cómo reaccionó Oso?
   - ¿Ponky estuvo más tranquilo o ansioso?
   - ¿Hubo conflictos?
   - ¿Qué fue difícil?
3. **Al final del día**: Revisa tu progreso semanal

### Al final de cada semana:

1. **Escribe revisión semanal** (📝 sección arriba)
   - ¿Qué mejoró?
   - ¿Qué sigue trabado?
   - ¿Oso controla menos? ¿Ponky tiene menos miedo?
2. **Click "🤖 Analizar con IA"** (o automático si está configurado)
3. **Lee las sugerencias** de la IA
4. **Click "✅ Completar semana"** para avanzar a la siguiente

---

## 🔍 Características especiales

### Sistema de comentarios por tarea
Cada tarea tiene su propia sección de comentarios. **Esto es clave** porque:
- La IA lee estos comentarios para entender qué está pasando
- Puedes volver atrás y ver qué funcionó o no
- Creas un "diario" del proceso

### Navegación por semanas
Puedes:
- Ver cualquier semana (click en Semana 1, 2, 3, 4)
- Ver el progreso de cada semana
- Volver a semanas anteriores si necesitas revisar

### Análisis local (sin API)
Si no usas la API de Claude, la app hace análisis básico:
- Porcentaje de tareas completadas
- Detección de palabras clave ("difícil", "agresivo", "mejoró")
- Sugerencias genéricas basadas en tu progreso

### Exportación de datos
- Click en "📤 Exportar datos"
- Se descarga un JSON con TODO (tareas, comentarios, análisis IA, revisiones)
- Útil para:
  - Backup
  - Compartir con entrenador/veterinario
  - Cambiar de dispositivo

---

## 🎨 Personalizar con fotos de Oso y Ponky

Ver `INSTRUCCIONES.html` sección "Personalizar con fotos".

**Resumen rápido:**
1. Guarda fotos como `oso.jpg` y `ponky.jpg`
2. Súbelas al repositorio (si usas GitHub Pages)
3. Edita `index.html` líneas 562-568:
   ```html
   <div class="pet-avatar">🐕</div>
   ```
   Cambia por:
   ```html
   <img src="oso.jpg" class="pet-avatar" alt="Oso" />
   ```

---

## 🔒 Privacidad

- **Sin servidores**: Todo se guarda en `localStorage` (tu celular)
- **Sin tracking**: Cero conexiones externas (excepto API de Claude si la activas)
- **Sin cookies**: No hay cookies de terceros
- **Tu API key**: Se guarda solo en tu dispositivo, nunca se comparte

Si usas la API de Claude:
- Solo se envían tus comentarios y revisiones a la API
- Anthropic (Claude) tiene su propia política de privacidad
- Puedes usar la app sin API (análisis local)

---

## ⚠️ Notas importantes del plan

### Control de recursos (Oso → Ponky):

**CRÍTICO:** Si Oso sigue quitando comida/juguetes a Ponky:
- **Semana 2:** Comida SIEMPRE separada (no negociable)
- **Semana 3:** Intervención inmediata + Oso pierde acceso
- **Semana 4:** NO reintroducir juguetes compartidos hasta que esto esté resuelto

### Señales de alerta:

Si ves:
- Ponky con miedo creciente
- Oso escalando en agresividad
- Conflictos físicos (embestidas, mordidas)

→ **DETÉN el plan** y consulta con un etólogo/entrenador profesional.

Esta app NO reemplaza ayuda profesional en casos graves.

### Retrocesos son normales:

- Semana 3-4 suele haber retrocesos ("el sistema viejo pelea por volver")
- Si retrocedes, vuelve a la semana anterior
- La IA te avisará si detecta esto en tus comentarios

---

## 🆘 Soporte y problemas

### La app no carga:
- Verifica que todos los archivos estén en la misma carpeta
- Usa Chrome (otros navegadores pueden tener problemas con PWAs)
- Revisa la consola de errores (F12)

### El análisis IA no funciona:
- Verifica tu clave API en Configuración
- Asegúrate de tener créditos en tu cuenta de Anthropic
- Revisa la consola de errores para ver el mensaje específico

### Perdí mis datos:
- Si exportaste antes: importa el JSON (función próximamente)
- Si usaste GitHub Pages: los datos están en `localStorage` del navegador
- Si limpiaste caché del navegador: se perdieron (por eso exporta semanalmente)

---

## 🚀 Roadmap (futuras mejoras)

Posibles mejoras según feedback:

- [ ] Importar JSON de backup
- [ ] Gráficas de progreso semanal
- [ ] Notificaciones recordatorias (usar calendario .ics mientras tanto)
- [ ] Modo multi-mascota (más de 2 perros)
- [ ] Integración con vet/etólogo (compartir enlace de solo lectura)
- [ ] Versión desktop (Electron)

---

## 📜 Créditos

**Plan de entrenamiento diseñado para:**
- **Oso**: Regulador tenso, controla recursos por inseguridad
- **Ponky**: Amplificador emocional, sensible al clima de Oso

**Objetivo:** Reducir ansiedad por separación, reactividad externa (gatos), y control de recursos.

**Tecnologías:**
- HTML5 + CSS3 + JavaScript vanilla
- PWA (Service Worker)
- LocalStorage para persistencia
- API de Claude (opcional)

---

**¡Mucha suerte con Oso y Ponky!** 🐕🐕

Recuerda: **Consistencia > Perfección**

Los pequeños cambios sostenidos son más poderosos que los grandes esfuerzos esporádicos.
