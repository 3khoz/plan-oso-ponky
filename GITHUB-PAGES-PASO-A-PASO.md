# 📘 Activar GitHub Pages - Paso a Paso Detallado

Esta guía te muestra **exactamente** cómo activar GitHub Pages para tu app Plan Oso & Ponky.

---

## 🎯 Antes de empezar

Asegúrate de tener:
- ✅ Cuenta en GitHub (gratis en github.com)
- ✅ Repositorio creado (público)
- ✅ Archivos subidos al repositorio

Si no tienes esto listo, primero lee `INSTRUCCIONES.html`.

---

## 🔧 Activar GitHub Pages (paso a paso)

### Paso 1: Entrar a tu repositorio

1. Ve a [github.com](https://github.com)
2. Inicia sesión
3. Click en tu foto de perfil (arriba derecha) → **Your repositories**
4. Click en **plan-oso-ponky** (o como lo hayas llamado)

---

### Paso 2: Abrir Settings

1. Arriba verás pestañas: `Code` | `Issues` | `Pull requests` | ... | **`Settings`**
2. Click en **Settings** (última pestaña a la derecha)

**⚠️ Problema común:** Si no ves Settings:
- Verifica que el repositorio sea **Public** (no Private)
- Verifica que seas el dueño del repositorio

---

### Paso 3: Buscar Pages en el menú

1. En la pantalla de Settings, mira **el menú de la izquierda**
2. Baja hasta encontrar una sección llamada **"Code and automation"**
3. Dentro de esa sección, verás: **Pages**
4. Click en **Pages**

**📱 En móvil:** El menú puede estar contraído. Busca un ícono de hamburguesa ≡ para expandirlo.

---

### Paso 4: Configurar la fuente (Source)

Ahora verás la pantalla de **GitHub Pages**.

En la sección **"Build and deployment"**, verás:

```
Source
┌─────────────────────────┐
│ Deploy from a branch ▼  │
└─────────────────────────┘
```

1. **Verifica** que diga `Deploy from a branch`
   - Si dice otra cosa, haz click y selecciona `Deploy from a branch`

---

### Paso 5: Elegir la Branch (rama)

Justo debajo de "Source", verás:

```
Branch
┌──────────┐  ┌──────────┐
│  None  ▼ │  │ /(root) ▼│
└──────────┘  └──────────┘
```

**Primer dropdown (Branch):**
1. Click en el primer dropdown (donde dice `None`)
2. Verás opciones como:
   - `main`
   - `master`
   - Otras ramas (si las tienes)
3. **Selecciona `main`** (o `master` si no aparece `main`)

**Segundo dropdown (Folder):**
1. Click en el segundo dropdown
2. Verás opciones:
   - `/ (root)` ← **SELECCIONA ESTA**
   - `/docs`
3. **Asegúrate de elegir `/ (root)`**

**⚠️ MUY IMPORTANTE:**
- **NO escribas** "/root" a mano
- **SELECCIONA** la opción `/ (root)` del menú
- La carpeta DEBE ser `/ (root)`, no `/docs`

---

### Paso 6: Guardar

1. Una vez que hayas elegido:
   - Branch: `main` (o `master`)
   - Folder: `/ (root)`
2. Click en el botón **Save** que aparece a la derecha

**El botón Save solo aparece después de elegir una branch.**

---

### Paso 7: Esperar y obtener tu URL

1. Después de hacer click en Save, **espera 30-60 segundos**
2. **Refresca la página** (F5 o Ctrl+R)
3. Arriba aparecerá un mensaje:

```
✅ Your site is live at https://TU-USUARIO.github.io/plan-oso-ponky/
```

4. **Copia esa URL** (es tu enlace permanente)

---

## 🎉 ¡Listo! ¿Y ahora qué?

### Probar tu app:

1. Abre la URL en cualquier navegador
2. Deberías ver tu app cargarse
3. Si sale error 404: espera 1-2 minutos más y recarga

### Instalar en tu celular:

1. En tu celular Android, abre **Chrome**
2. Ve a tu URL: `https://TU-USUARIO.github.io/plan-oso-ponky/`
3. Espera a que cargue
4. Menú ⋮ (arriba derecha) → **"Agregar a pantalla principal"**
5. Toca **Agregar** o **Instalar**
6. ¡Ya tienes la app instalada! 🎉

---

## 🔍 ¿Qué pasó exactamente?

Lo que hiciste fue:

1. **Source:** Le dijiste a GitHub "quiero publicar mi repo como sitio web"
2. **Branch:** Le dijiste "usa los archivos de la rama `main`"
3. **Folder:** Le dijiste "publícalos desde la raíz (no desde una subcarpeta)"
4. **Save:** GitHub construyó tu sitio en: `https://TU-USUARIO.github.io/NOMBRE-REPO/`

---

## ❓ Solución de problemas

### "No veo Settings"
→ El repo probablemente sea Private. Cámbialo a Public:
1. En el repo → Settings (si puedes abrirlo)
2. Baja hasta "Danger Zone"
3. Change visibility → Make public

### "No veo Pages en el menú"
→ Verifica que:
- Estés en Settings (no en Code)
- Hayas bajado en el menú de la izquierda
- El repo sea Public

### "Elegí main y /(root) pero no aparece Save"
→ Refresca la página y vuelve a intentar

### "Mi sitio muestra 404"
→ Espera 2-3 minutos. GitHub tarda en construir el sitio la primera vez.

### "Los archivos están en una carpeta dentro del repo"
→ Los archivos deben estar en la raíz (no dentro de otra carpeta).
- ❌ Incorrecto: `plan-oso-ponky/plan-oso-ponky/index.html`
- ✅ Correcto: `plan-oso-ponky/index.html`

Si están mal, bórralos y vuelve a subirlos directamente a la raíz.

---

## 📸 Referencia visual (texto)

```
Repositorio: plan-oso-ponky
├── Code (pestaña)
├── Issues
├── ...
└── Settings (pestaña) ← Click aquí
    │
    Menú izquierdo:
    ├── General
    ├── Collaborators
    ├── ...
    └── Code and automation
        └── Pages ← Click aquí
            │
            Build and deployment:
            ├── Source: [Deploy from a branch ▼]
            ├── Branch: [main ▼] [/(root) ▼] [Save] ← Configurar aquí
            └── ...
```

---

## 🔗 Tu URL final será:

```
https://[TU-USUARIO].github.io/plan-oso-ponky/
```

**Ejemplo:**
- Si tu usuario es `juanperez`
- Y tu repo es `plan-oso-ponky`
- Tu URL será: `https://juanperez.github.io/plan-oso-ponky/`

---

## ✅ Checklist final

Antes de publicar, verifica:

- [ ] Repositorio es **Public**
- [ ] Archivos están en la **raíz** (no en carpeta)
- [ ] Existe el archivo `index.html` en la raíz
- [ ] Elegiste Branch: **main** (o master)
- [ ] Elegiste Folder: **/ (root)**
- [ ] Hiciste click en **Save**
- [ ] Esperaste 30-60 segundos
- [ ] Refrescaste la página de Settings > Pages

Si todo está ✅, deberías ver tu URL publicada.

---

## 🆘 Si nada funciona

Si después de seguir TODO esto paso a paso NO funciona:

1. **Revisa la consola de errores:**
   - En tu repositorio → Actions (pestaña)
   - Verás si hubo algún error al construir

2. **Verifica los archivos:**
   - Click en `index.html` en GitHub
   - ¿Se ve el código HTML correcto?

3. **Crea un issue en tu repo:**
   - Describe exactamente qué mensaje ves en Pages
   - Copia el error si hay alguno

---

**¡Mucha suerte! 🚀**

Si todo salió bien, ahora tienes una app profesional, instalable, con URL permanente, y completamente gratis.
