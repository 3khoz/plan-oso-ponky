# 🐕 Plan Oso & Ponky

App web progresiva (PWA) para seguimiento del plan de entrenamiento de Oso y Ponky.

## 📱 Cómo instalar en Android

### Método 1: Abrir directamente (sin GitHub)

1. Conecta tu celular al computador
2. Copia la carpeta `plan-oso-ponky` a tu celular (en Descargas o donde prefieras)
3. Abre el archivo `index.html` con **Chrome**
4. Menú ⋮ → **"Agregar a pantalla principal"**
5. ¡Listo! Ahora tienes la app instalada

### Método 2: Usando GitHub Pages (recomendado)

1. **Crea una cuenta** en [github.com](https://github.com) (gratis)

2. **Crea un nuevo repositorio**:
   - Click en "+" arriba → "New repository"
   - Nombre: `plan-oso-ponky`
   - Marca "Public"
   - Click "Create repository"

3. **Sube los archivos**:
   - Click "uploading an existing file"
   - Arrastra TODOS los archivos de esta carpeta
   - Click "Commit changes"

4. **Activa GitHub Pages**:
   - Ve a Settings (arriba)
   - En el menú izquierdo → Pages
   - En "Branch" elige: **main** y carpeta **/ (root)**
   - Click "Save"

5. **Tu enlace estará listo** en 1 minuto:
   ```
   https://TU-USUARIO.github.io/plan-oso-ponky/
   ```

6. **En tu celular**:
   - Abre ese enlace en Chrome
   - Menú ⋮ → "Agregar a pantalla principal"

---

## 🎨 Personalizar con fotos de Oso y Ponky

Actualmente la app usa emojis 🐕 como placeholders.

### Opción A: Fotos reales

1. Toma fotos de Oso y Ponky (cuadradas preferiblemente)
2. Nómbralas: `oso.jpg` y `ponky.jpg`
3. Súbelas a la misma carpeta que `index.html`
4. En `index.html` busca estas líneas (aprox. línea 400):
   ```html
   <div class="pet-avatar" id="oso-avatar">🐕</div>
   ...
   <div class="pet-avatar" id="ponky-avatar">🐕</div>
   ```
5. Cámbialas por:
   ```html
   <img src="oso.jpg" class="pet-avatar" alt="Oso" />
   ...
   <img src="ponky.jpg" class="pet-avatar" alt="Ponky" />
   ```

### Opción B: Crear avatares tipo caricatura

Usa herramientas gratuitas como:

- **Canva** (canva.com) → plantillas de mascotas
- **Bitmoji** → crear avatares tipo cartoon
- **AI Image Generator** → "cartoon dog portrait"

Luego sigue los pasos de la Opción A.

---

## 🔔 Recordatorios

La app tiene **DOS tipos** de recordatorios:

### 1. Notificaciones del navegador
- Funcionan mientras la app esté abierta (o en segundo plano)
- Click en ⚙️ Gestión → ⏰ Recordatorios → "Activar notifs"

### 2. Calendario (recomendado para recordatorios reales)
- Click en ⚙️ Gestión → ⏰ Recordatorios → 📅 "Descargar para calendario"
- Se descarga un archivo `.ics`
- Ábrelo desde tu celular → se importa a Google Calendar
- **Funciona aunque cierres la app**

---

## 📦 Archivos incluidos

```
plan-oso-ponky/
├── index.html          ← App principal
├── manifest.json       ← Configuración PWA
├── sw.js              ← Service worker (funciona offline)
├── icon-192.png       ← Ícono app (192x192)
├── icon-512.png       ← Ícono app (512x512)
└── README.md          ← Este archivo
```

---

## 🛠️ Funcionalidades

✅ **Checklist diario** de tareas
✅ **Plan completo precargado** (separación, reactividad, recursos)
✅ **Racha de días** consecutivos con >60% completado
✅ **Notas del día** para registrar gatillos, progresos, conflictos
✅ **Recordatorios** configurables
✅ **Exportar datos** (backup en JSON)
✅ **Funciona offline** después de la primera carga
✅ **Instalable** como app nativa
✅ **Todo se guarda** en tu celular (localStorage)

---

## 🔒 Privacidad

- **Cero servidores**: todo queda en tu teléfono
- **Sin tracking**: no envía datos a ningún lado
- **Sin internet**: funciona offline después de instalar

---

## 💡 Soporte

Si algo no funciona:

1. Asegúrate de usar **Chrome** (otros navegadores pueden tener problemas con PWAs)
2. Verifica que los archivos estén en la misma carpeta
3. Si usas GitHub Pages, espera 1-2 minutos después de activarlo

---

## 📝 Créditos

Plan de entrenamiento diseñado específicamente para:
- **Oso**: el regulador tenso (control por inseguridad)
- **Ponky**: el amplificador emocional (sensible al clima de Oso)

Objetivo: reducir ansiedad por separación, reactividad y control de recursos.

---

¡Mucha suerte con Oso y Ponky! 🐕🐕
