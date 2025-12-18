// ============= CONFIGURACIÓN DEL PLAN DE 4 SEMANAS =============

const WEEK_PLAN = {
  1: {
    theme: "Bases de Seguridad, Control y Manejo",
    objective: "Establecer manejo ambiental, obediencia básica positiva y asociaciones iniciales placenteras.",
    focus: ["Manejo Ambiental", "Obediencia Básica", "Asociación Positiva"],
    tasks: [
      {
        day: "Lunes",
        title: "Manejo Ambiental y Repaso de Obediencia",
        desc: "Implementa separación en comidas y retiro de juguetes. Sesión corta (5-10 min) de 'sentado', 'quieto', 'ven' con ambos juntos, premiando por turno.",
        tag: "obediencia",
        explanation: "El manejo ambiental previene conflictos antes de que ocurran. La obediencia conjunta enseña a esperar turnos y reduce la competencia por recursos."
      },
      {
        day: "Martes",
        title: "Intercambio con Oso (1 a 1)",
        desc: "5 min solo con Oso. Ofrece juguete bajo valor, pide 'suelta', premia con algo mejor. Repite.",
        tag: "recursos",
        explanation: "Enseña a Oso que soltar no significa perder, sino ganar algo mejor (Contracondicionamiento). Reduce la necesidad de retener recursos agresivamente."
      },
      {
        day: "Miércoles",
        title: "Paseo de Observación Tranquila",
        desc: "Mantén distancia. Si miran perros sin reaccionar, '¡muy bien!' y premio. Si se tensan, aumenta distancia.",
        tag: "paseo",
        explanation: "Desensibilización sistemática: exponer al estímulo a una intensidad tan baja que no provoca reacción, premiando la calma (Refuerzo Diferencial)."
      },
      {
        day: "Jueves",
        title: "Inicio de Separación Gradual",
        desc: "Barrera entre ellos 10-20 seg contigo presente. Premios a ambos si están tranquilos. Repetir 2-3 veces.",
        tag: "separacion",
        explanation: "Habituación progresiva a la separación. Asociamos la barrera física con premios (algo positivo) en lugar de angustia."
      },
      {
        day: "Viernes",
        title: "Repaso General y Juego",
        desc: "Repite obediencia conjunta. Juego tranquilo supervisado, cada uno con su juguete. Refuerza la calma.",
        tag: "calma",
        explanation: "Consolidar comportamientos mediante repetición. El juego supervisado permite intervenir antes de que escale la excitación."
      },
      {
        day: "Sábado",
        title: "Paseo de Asociación Positiva",
        desc: "Busca perros a distancia. Sé una 'máquina de premios' antes de que reaccionen.",
        tag: "paseo",
        explanation: "Contracondicionamiento clásico: Perro a lo lejos = Comida rica. Cambia la emoción de 'alerta' a 'expectativa feliz'."
      },
      {
        day: "Domingo",
        title: "Separación Gradual con Distracción",
        desc: "Barrera 30-60 seg. Usa KONG o juguetes interactivos rellenos para cada uno.",
        tag: "separacion",
        explanation: "El enriquecimiento (Kong) facilita la separación al mantener el cerebro ocupado y generar una asociación muy placentera con la soledad."
      }
    ]
  },
  2: {
    theme: "Consolidación y Pequeños Avances",
    objective: "Afianzar lo aprendido e incrementar gradualmente la dificultad. Mantener manejo estricto.",
    focus: ["Turnos", "Foco en el guía", "Separación visual"],
    tasks: [
      {
        day: "Lunes",
        title: "Obediencia y Turnos",
        desc: "Obediencia conjunta. Pide 'sentado'. Premia a Ponky, elogia a Oso por esperar ('¡muy bien, espera!'), luego premia a Oso.",
        tag: "obediencia",
        explanation: "Refuerza el autocontrol y reduce la ansiedad por competencia. Oso aprende que esperar también trae recompensa."
      },
      {
        day: "Martes",
        title: "Intercambio y 'Deja' con Oso",
        desc: "Sube valor del juguete ligeramente. Introduce 'deja' (no tomar objeto ajeno) premiando con algo mejor.",
        tag: "recursos",
        explanation: "Reforzamiento diferencial de conducta incompatible: si 'deja' el objeto, gana el premio. Inhibe el impulso de arrebatar."
      },
      {
        day: "Miércoles",
        title: "Paseo con 'Mírame'",
        desc: "Ante perro a distancia: '¡Oso, mírame!'. Si mira: premio. Fomenta enfoque en ti.",
        tag: "paseo",
        explanation: "Conducta alternativa (DRA): No pueden ladrar al otro perro si te están mirando a ti concentrados."
      },
      {
        day: "Jueves",
        title: "Separación con Distancia Visual",
        desc: "Aumenta distancia física (extremos del pasillo). Usa Kongs. Meta: 1-2 min tranquilos.",
        tag: "separacion",
        explanation: "Aumentar criterios (duración/distancia) gradualmente es clave en la desensibilización para evitar el 'efecto rebote' de la ansiedad."
      },
      {
        day: "Viernes",
        title: "Manejo Activo en Casa",
        desc: "Si Oso se acerca a Ponky cuando tiene juguete: '¡Oso, a tu cama!' y premia generosamente.",
        tag: "recursos",
        explanation: "Manejo espacial mediante comandos positivos. Protege a Ponky sin castigar a Oso, dándole una tarea alternativa clara."
      },
      {
        day: "Sábado",
        title: "Paseo de Socialización Pasiva",
        desc: "Siéntate en parque lejano (10 min). Premia la calma y miradas hacia ti al ver pasar gente/perros.",
        tag: "calma",
        explanation: "Habituación: exposición prolongada a baja intensidad ayuda a que el estímulo se vuelva irrelevante (aburrido) y seguro."
      },
      {
        day: "Domingo",
        title: "Repaso y Evaluación",
        desc: "Evalúa: ¿Disminuyeron intentos de robo? ¿Paseos más tranquilos? Ajusta distancia si es necesario.",
        tag: "evaluacion",
        explanation: "La observación es fundamental. Si hay fallos, probablemente hemos avanzado muy rápido (superado el umbral). Retroceder es avanzar."
      }
    ]
  },
  3: {
    theme: "Aumentando Duración y Proximidad",
    objective: "Progresar lentamente en duración de separaciones y reducir distancia en paseos, vigilando umbrales.",
    focus: ["Distracciones leves", "Proximidad controlada", "Puertas cerradas"],
    tasks: [
      {
        day: "Lunes",
        title: "Obediencia con Distracciones Leves",
        desc: "Practica en jardín/patio con juguetes cerca. 'Sentado', 'quieto'. Premia enfoque.",
        tag: "obediencia",
        explanation: "Generalización: llevar lo aprendido en ambiente estéril a ambientes con más estímulos gradualmente."
      },
      {
        day: "Martes",
        title: "Intercambio en Presencia de Ponky",
        desc: "Intercambio con Oso en misma habitación que Ponky (distancia segura). Premia foco en ti.",
        tag: "recursos",
        explanation: "Desensibilización a la presencia del competidor. Oso aprende a jugar cooperativamente sin sentirse amenazado por Ponky."
      },
      {
        day: "Miércoles",
        title: "Paseo: Reduciendo Distancia",
        desc: "Acércate un poco más a otros perros si están tranquilos. Premia calma. Si hay tensión, retrocede.",
        tag: "paseo",
        explanation: "Trabajar justo bajo el umbral de reacción. Si hay reacción, es información: estamos muy cerca aún."
      },
      {
        day: "Jueves",
        title: "Separación Puerta Entornada/Cerrada",
        desc: "Cierra puerta 5-10s. Abre antes de ansiedad. Premia calma al reunir.",
        tag: "separacion",
        explanation: "El 'retorno del dueño' refuerza la conducta de quedarse tranquilo. Si lloran y abres, refuerzas el llanto."
      },
      {
        day: "Viernes",
        title: "Juegos de Olfato",
        desc: "Buscar premios escondidos en casa. Fomenta calma y cansa mentalmente.",
        tag: "calma",
        explanation: "El olfato reduce pulsaciones y niveles de cortisol. Es una actividad naturalmente relajante y gratificante."
      },
      {
        day: "Sábado",
        title: "Paseo y 'Mírame' Avanzado",
        desc: "Practica ante estímulos más intensos (perro pasando más cerca). Premia contacto visual rápido.",
        tag: "paseo",
        explanation: "Prueba de fluidez: el comportamiento debe ser casi automático ante la señal visual del estímulo."
      },
      {
        day: "Domingo",
        title: "Separación: Aumentando a Puerta Cerrada",
        desc: "15s, 30s, 1min a puerta cerrada. Usa premios larga duración (hueso/Kong).",
        tag: "separacion",
        explanation: "Incremento de criterio. La puerta cerrada elimina la señal visual, el perro debe confiar en la predicción segura del retorno."
      }
    ]
  },
  4: {
    theme: "Integración y Consolidación",
    objective: "Funcionar juntos sin escalarse. Evaluar progreso mensual y solidez de fundamentos.",
    focus: ["Autocontrol", "Manejo Real", "Independencia"],
    tasks: [
      {
        day: "Lunes",
        title: "Repaso General Obediencia y Autocontrol",
        desc: "Todos los comandos. 'Espera' antes de comer o salir. Autocontrol básico.",
        tag: "obediencia",
        explanation: "El autocontrol funciona como un músculo. Ejercitarlo en situaciones cotidianas ayuda a regular emociones fuertes."
      },
      {
        day: "Martes",
        title: "Manejo de Recursos Real",
        desc: "Ponky con juguete valor medio. Redirige a Oso si se acerca. Premia a Oso por alejarse.",
        tag: "recursos",
        explanation: "Prueba de fuego controlada. Reforzamos la decisión de Oso de NO entrar en conflicto."
      },
      {
        day: "Miércoles",
        title: "Paseo de Evaluación Reactividad",
        desc: "Observa reacciones a distancias trabajadas. ¿Están más tranquilos? Ajusta expectativas.",
        tag: "evaluacion",
        explanation: "La evaluación objetiva evita estancamientos. Celebra la reducción de intensidad, no solo la perfección."
      },
      {
        day: "Jueves",
        title: "Separación: Duración Variable",
        desc: "Sesiones cortas y largas (hasta 2-3 min) puerta cerrada. Siempre premio alto valor al inicio.",
        tag: "separacion",
        explanation: "Variabilidad: para que el perro no anticipe que 'siempre es difícil'. A veces es fácil, a veces medio."
      },
      {
        day: "Viernes",
        title: "Juegos de Olfato Conjuntos",
        desc: "Búsqueda simultánea en áreas separadas. Supervisa invasión de espacio.",
        tag: "calma",
        explanation: "Actividad cooperativa paralela. Pueden compartir una actividad placentera sin competir directamente."
      },
      {
        day: "Sábado",
        title: "Paseo Largo y Relajado (Descompresión)",
        desc: "Entorno tranquilo (campo/playa). Correas largas. Dejar oler mucho.",
        tag: "calma",
        explanation: "Paseos de descompresión (Decompression Walks) permiten bajar niveles de estrés acumulados en la semana."
      },
      {
        day: "Domingo",
        title: "Evaluación Final Mes 1",
        desc: "Reflexiona: ¿Qué mejoró? ¿Qué sigue difícil? Celebra éxitos. Planifica Mes 2.",
        tag: "evaluacion",
        explanation: "El progreso en modificación conductual no es lineal. Reconocer pequeños avances motiva a continuar la consistencia."
      }
    ]
  }
};

// ============= ESTADO GLOBAL =============

const $ = (id) => document.getElementById(id);

const defaultState = {
  currentWeek: 1,
  startDate: new Date().toISOString().split('T')[0],
  weeks: {},
  tasks: {},
  comments: {},
  weeklyReviews: {},
  aiInsights: {},
  settings: {
    apiKey: '',
    aiModel: 'local',
    aiFrequency: 'weekly'
  },
  completedTasks: 0,
  streak: 0
};

let state = loadState() || JSON.parse(JSON.stringify(defaultState));

function loadState() {
  try {
    const saved = localStorage.getItem('oso_ponky_ai_v1');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function saveState() {
  localStorage.setItem('oso_ponky_ai_v1', JSON.stringify(state));
}

function syncStateWithPlan() {
  // Merges the latest WEEK_PLAN descriptions/explanations into the saved state
  // This ensures that if we update the text/content, the user sees it even if they have saved progress.
  for (let week = 1; week <= 4; week++) {
    if (state.tasks[week] && WEEK_PLAN[week]) {
      state.tasks[week].forEach((task, index) => {
        const freshTask = WEEK_PLAN[week].tasks[index];
        if (freshTask) {
          // Update static content fields, keep dynamic state (completed, comments)
          task.title = freshTask.title;
          task.desc = freshTask.desc;
          task.tag = freshTask.tag;
          task.day = freshTask.day;
          task.explanation = freshTask.explanation;
        }
      });
    }
  }
  // Also update week themes/objectives if they are stored in state (they are not, they are read from WEEK_PLAN directly in render)
}

// Initial sync
if (state) {
  syncStateWithPlan();
}

// ============= INICIALIZACIÓN =============

function initializeWeeks() {
  for (let week = 1; week <= 4; week++) {
    if (!state.weeks[week]) {
      state.weeks[week] = {
        started: false,
        completed: false,
        startDate: null,
        endDate: null,
        progress: 0
      };
    }
  }

  // Inicializar tareas de cada semana
  for (let week = 1; week <= 4; week++) {
    if (!state.tasks[week]) {
      state.tasks[week] = WEEK_PLAN[week].tasks.map((task, idx) => ({
        id: `w${week}t${idx}`,
        ...task,
        completed: false,
        completedDates: [],
        comments: []
      }));
    }
  }
}

// ============= RENDERIZADO =============

function render() {
  renderWeekNav();
  renderStats();
  renderWeekObjective();
  renderTasks();
  renderWeeklyReview();
  renderAIInsight();
}

function renderWeekNav() {
  const nav = $('weekNav');
  nav.innerHTML = '';

  for (let week = 1; week <= 4; week++) {
    const weekData = state.weeks[week];
    const btn = document.createElement('div');
    btn.className = 'week-btn' + (state.currentWeek === week ? ' active' : '');

    const tasks = state.tasks[week] || [];
    const completed = tasks.filter(t => t.completed).length;
    const total = tasks.length;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

    btn.innerHTML = `
      <div class="week-num">Semana ${week}</div>
      <div class="week-theme">${WEEK_PLAN[week].theme}</div>
      <div class="week-progress">${progress}% completado</div>
    `;

    btn.addEventListener('click', () => {
      state.currentWeek = week;
      saveState();
      render();
    });

    nav.appendChild(btn);
  }
}

function renderStats() {
  const week = state.currentWeek;
  const tasks = state.tasks[week] || [];
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  $('currentWeek').textContent = week;
  $('weekProgress').textContent = progress + '%';
  $('totalTasks').textContent = state.completedTasks;
  $('streak').textContent = state.streak;
}

function renderWeekObjective() {
  const week = state.currentWeek;
  const plan = WEEK_PLAN[week];

  let educationalContent = '';

  // Add educational illustrations based on week
  if (week === 1 && typeof illustrations !== 'undefined') {
    educationalContent = `
      <div class="edu-box">
        <h4>📚 Fundamento: Ponky adelante en paseos</h4>
        <div class="edu-illustration">${illustrations.paseoOrdenado}</div>
        <p class="edu-explanation">
          Durante los paseos, Ponky camina ADELANTE (toma decisiones sobre dirección, olores, pausas) mientras Oso va ATRÁS.
        </p>
        <div class="edu-why">
          <strong>¿Por qué funciona?</strong>
          Cuando Oso va adelante, se siente responsable de "proteger" y controlar. Esto aumenta su tensión. Al poner a Ponky adelante, le das a Ponky empoderamiento (toma decisiones, siente confianza) y a Oso le bajas la carga mental. Oso aprende: "No tengo que estar vigilando todo el tiempo". Esto es especialmente importante porque Ponky es un "amplificador emocional": si siente que tiene control, su ansiedad baja, lo que también baja la activación de Oso.
        </div>
      </div>
    `;
  }

  if (week === 2 && typeof illustrations !== 'undefined') {
    educationalContent = `
      <div class="edu-box">
        <h4>📚 Técnica clave: Comida separada</h4>
        <div class="edu-illustration">${illustrations.comidaSeparada}</div>
        <p class="edu-explanation">
          Oso y Ponky deben comer en espacios diferentes, idealmente con una puerta o barrera visual entre ellos.
        </p>
        <div class="edu-why">
          <strong>¿Por qué funciona?</strong>
          Cuando Oso controla los recursos (comida), Ponky desarrolla ansiedad anticipatoria. Al separar físicamente el espacio de alimentación, Ponky puede comer sin miedo y Oso aprende que no necesita "vigilar" todo. Esto rompe el ciclo de control-sumisión.
        </div>
      </div>
    `;
  }

  if (week === 3 && typeof illustrations !== 'undefined') {
    educationalContent = `
      <div class="edu-box">
        <h4>📚 Técnica clave: Giro 90° y orden en paseos</h4>
        <div class="edu-illustration">${illustrations.giro90}</div>
        <p class="edu-explanation">
          Cuando Oso se reactiva (ve un gato, otro perro), gira 90° en dirección opuesta y camina con calma. Ponky va ADELANTE, Oso atrás.
        </p>
        <div class="edu-why">
          <strong>¿Por qué funciona?</strong>
          El giro 90° interrumpe la cadena de arousal (activación emocional) antes de que escale. Al no enfrentar el estímulo directamente, Oso no recibe refuerzo por ladrar. Ponky adelante significa que él toma decisiones (reduce miedo), mientras Oso aprende a delegar el liderazgo situacional.
        </div>
      </div>
      <div class="edu-box">
        <h4>📚 Intervención ante control de recursos</h4>
        <div class="edu-illustration">${illustrations.tutoraInterviniendo}</div>
        <p class="edu-explanation">
          Si Oso le quita un juguete/premio a Ponky, intervenes de inmediato: bloqueas con tu cuerpo, recuperas el objeto, se lo das a Ponky. Oso pierde acceso temporal.
        </p>
        <div class="edu-why">
          <strong>¿Por qué funciona?</strong>
          Oso controla por inseguridad: cree que debe acaparar todo "por si acaso". Tu intervención le enseña que tú gestionas los recursos, no él. Esto baja su ansiedad (no tiene que controlar) y protege a Ponky de desarrollar miedo aprendido.
        </div>
      </div>
    `;
  }

  if (week === 4 && typeof illustrations !== 'undefined') {
    educationalContent = `
      <div class="edu-box">
        <h4>📚 Integración: Paseos con distancia entre ellos</h4>
        <div class="edu-illustration">${illustrations.paseoOrdenado}</div>
        <p class="edu-explanation">
          Mantén correas a diferentes largos durante los paseos. Ponky puede ir adelante explorando, mientras Oso va atrás con menos tensión en la correa. Menos sincronía = menos contagio emocional.
        </p>
        <div class="edu-why">
          <strong>¿Por qué funciona?</strong>
          En las primeras semanas rompiste la cadena emocional Oso → Ponky. Ahora consolidas: si caminan con distancia física entre ellos, cada uno toma decisiones independientes. Oso no vigila a Ponky, Ponky no amplifica la tensión de Oso. El objetivo NO es que caminen perfectamente juntos, sino que funcionen juntos sin escalarse. La distancia es una herramienta de regulación emocional, no un fracaso de entrenamiento.
        </div>
      </div>
    `;
  }

  const container = $('weekObjectiveContainer');
  container.innerHTML = `
    <div class="week-objective">
      <h3>🎯 Objetivo de la Semana ${week}</h3>
      <p><strong>${plan.objective}</strong></p>
      <p style="margin-top:10px;font-size:12px;opacity:.8">
        <strong>Foco:</strong> ${plan.focus.join(' • ')}
      </p>
    </div>
    ${educationalContent}
  `;
}

function renderTasks() {
  const week = state.currentWeek;
  const tasks = state.tasks[week] || [];
  const list = $('taskList');

  if (tasks.length === 0) {
    list.innerHTML = '<p style="opacity:.6;text-align:center;padding:20px">No hay tareas para esta semana.</p>';
    return;
  }

  list.innerHTML = '';

  tasks.forEach(task => {
    const div = document.createElement('div');
    div.className = 'task' + (task.completed ? ' done' : '');

    div.innerHTML = `
      <div class="task-header">
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-task-id="${task.id}" />
        <div class="task-content">
          <div class="task-title">${escapeHtml(task.title)}</div>
          <div class="task-meta">
            <span class="tag ${task.tag}">${task.tag}</span>
            <span class="tag daily-tag">${task.day || 'Diaria'}</span>
          </div>
          <div class="task-desc">${escapeHtml(task.desc)}</div>
          ${task.explanation ? `<div class="task-explanation">💡 <strong>Por qué:</strong> ${escapeHtml(task.explanation)}</div>` : ''}
        </div>
      </div>
      <div class="task-comments">
        <div class="comment-input-wrap">
          <input type="text" class="comment-input" placeholder="Agrega un comentario (gatillos, progreso, dificultades...)" data-task-id="${task.id}" />
          <button class="comment-btn" data-task-id="${task.id}">💬</button>
        </div>
        <div class="comment-list" id="comments-${task.id}">
          ${renderComments(task.comments)}
        </div>
      </div>
    `;

    // Event listeners
    const checkbox = div.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => toggleTask(task.id, checkbox.checked));

    const commentBtn = div.querySelector('.comment-btn');
    const commentInput = div.querySelector('.comment-input');

    commentBtn.addEventListener('click', () => {
      const text = commentInput.value.trim();
      if (text) {
        addComment(task.id, text);
        commentInput.value = '';
      }
    });

    commentInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        commentBtn.click();
      }
    });

    list.appendChild(div);
  });
}

function renderComments(comments) {
  if (!comments || comments.length === 0) return '';

  return comments.map(c => `
    <div class="comment">
      ${escapeHtml(c.text)}
      <div class="comment-date">${formatDate(c.date)}</div>
    </div>
  `).join('');
}

function renderWeeklyReview() {
  const week = state.currentWeek;
  const review = state.weeklyReviews[week] || '';

  const container = $('weeklyReviewContainer');
  container.innerHTML = `
    <div class="weekly-review">
      <h3>📝 Revisión semanal</h3>
      <textarea id="weeklyReviewText" placeholder="¿Cómo fue la semana? ¿Qué mejoró con Oso? ¿Ponky está menos ansioso? ¿Hubo retrocesos? ¿Qué fue difícil?">${escapeHtml(review)}</textarea>
      <div class="review-prompts">
        Guías: ¿Oso sigue controlando recursos? ¿Ponky se relaja más? ¿Hubo conflictos? ¿Los paseos mejoraron? ¿Qué sigue trabado?
      </div>
      <button class="btn primary" id="saveReviewBtn" style="margin-top:10px">Guardar revisión</button>
    </div>
  `;

  $('saveReviewBtn').addEventListener('click', () => {
    const text = $('weeklyReviewText').value.trim();
    state.weeklyReviews[week] = text;
    saveState();
    alert('Revisión guardada ✓');

    // Auto-análisis si está configurado
    if (state.settings.aiFrequency === 'weekly' && state.settings.aiModel !== 'local') {
      runAIAnalysis();
    }
  });
}

function renderAIInsight() {
  const week = state.currentWeek;
  const insight = state.aiInsights[week];

  const container = $('aiInsightContainer');

  if (!insight) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="ai-insight">
      <h3>🤖 Análisis IA - Semana ${week}</h3>
      <p>${escapeHtml(insight.summary)}</p>
      ${insight.suggestions ? `
        <div class="suggestions">
          <strong>Sugerencias:</strong>
          <ul>
            ${insight.suggestions.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      <div style="font-size:11px;opacity:.6;margin-top:10px">
        Generado: ${formatDate(insight.date)}
      </div>
    </div>
  `;
}

// ============= ACCIONES =============

function toggleTask(taskId, completed) {
  const week = state.currentWeek;
  const task = state.tasks[week].find(t => t.id === taskId);

  if (task) {
    task.completed = completed;

    if (completed) {
      const today = new Date().toISOString().split('T')[0];
      if (!task.completedDates.includes(today)) {
        task.completedDates.push(today);
        state.completedTasks++;
      }
    }

    updateWeekProgress(week);
    saveState();
    render();

    // Auto-análisis si está configurado
    if (state.settings.aiFrequency === 'daily' && state.settings.aiModel !== 'local') {
      const allCompleted = state.tasks[week].every(t => t.completed);
      if (allCompleted) {
        runAIAnalysis();
      }
    }

    // Celebration
    if (completed && state.tasks[week].every(t => t.completed)) {
      triggerConfetti();
    }
  }
}

function addComment(taskId, text) {
  const week = state.currentWeek;
  const task = state.tasks[week].find(t => t.id === taskId);

  if (task) {
    task.comments.push({
      text,
      date: new Date().toISOString()
    });

    saveState();
    render();
  }
}

function updateWeekProgress(week) {
  const tasks = state.tasks[week];
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  state.weeks[week].progress = total > 0 ? Math.round((completed / total) * 100) : 0;
}

function completeWeek() {
  const week = state.currentWeek;

  if (confirm(`¿Marcar Semana ${week} como completada y avanzar a Semana ${week + 1}?`)) {
    state.weeks[week].completed = true;
    state.weeks[week].endDate = new Date().toISOString().split('T')[0];

    if (week < 4) {
      state.currentWeek = week + 1;
      state.weeks[week + 1].started = true;
      state.weeks[week + 1].startDate = new Date().toISOString().split('T')[0];
    }

    saveState();
    render();

    // Análisis automático al completar semana
    if (state.settings.aiModel !== 'local') {
      runAIAnalysis();
    }
  }
}

// ============= ANÁLISIS IA =============

async function runAIAnalysis() {
  const modal = $('aiModal');
  const content = $('aiAnalysisContent');

  modal.classList.add('active');
  content.innerHTML = '<div class="loading">Analizando tus comentarios y progreso</div>';

  try {
    let analysis;

    if (state.settings.aiModel === 'local') {
      analysis = await localAnalysis();
    } else {
      analysis = await claudeAnalysis();
    }

    // Guardar insight
    state.aiInsights[state.currentWeek] = {
      summary: analysis.summary,
      suggestions: analysis.suggestions,
      date: new Date().toISOString()
    };

    saveState();

    content.innerHTML = `
      <div style="line-height:1.6">
        <h4 style="margin-top:0">Análisis de la Semana ${state.currentWeek}</h4>
        <p>${escapeHtml(analysis.summary)}</p>

        ${analysis.suggestions && analysis.suggestions.length > 0 ? `
          <h4 style="margin-top:20px">Sugerencias para la próxima semana:</h4>
          <ul style="line-height:1.8">
            ${analysis.suggestions.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
          </ul>
        ` : ''}

        <button class="btn primary" id="closeAIBtn" style="margin-top:20px">Cerrar</button>
      </div>
    `;

    $('closeAIBtn').addEventListener('click', () => {
      modal.classList.remove('active');
      render();
    });

  } catch (error) {
    content.innerHTML = `
      <div style="color:#ff5050">
        <p><strong>Error en el análisis:</strong></p>
        <p>${escapeHtml(error.message)}</p>
        <p style="font-size:12px;opacity:.7;margin-top:10px">
          Verifica tu clave API en Configuración o usa análisis local.
        </p>
        <button class="btn" id="closeAIErrorBtn" style="margin-top:15px">Cerrar</button>
      </div>
    `;

    $('closeAIErrorBtn').addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }
}

async function localAnalysis() {
  // Análisis básico sin API
  const week = state.currentWeek;
  const tasks = state.tasks[week];
  const review = state.weeklyReviews[week] || '';

  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const progress = Math.round((completed / total) * 100);

  // Extraer todos los comentarios
  const allComments = tasks.flatMap(t => t.comments.map(c => c.text)).join(' ').toLowerCase();

  const summary = `Has completado ${completed} de ${total} tareas (${progress}%). ${progress >= 80 ? 'Excelente progreso!' :
    progress >= 60 ? 'Buen avance, sigue así.' :
      'Hay margen de mejora. Intenta ser más consistente.'
    }`;

  const suggestions = [];

  // Análisis por palabras clave
  if (allComments.includes('dificil') || allComments.includes('difícil') || allComments.includes('no funciona')) {
    suggestions.push('Parece que encontraste dificultades. Considera ajustar la intensidad o frecuencia de las tareas.');
  }

  if (allComments.includes('oso') && (allComments.includes('agresiv') || allComments.includes('ladr') || allComments.includes('quita'))) {
    suggestions.push('Oso sigue mostrando control de recursos. Refuerza la intervención inmediata cuando acapare.');
  }

  if (allComments.includes('ponky') && (allComments.includes('miedo') || allComments.includes('asustado') || allComments.includes('nervios'))) {
    suggestions.push('Ponky necesita más protección activa. Asegúrate de bloquear físicamente cuando Oso intimida.');
  }

  if (allComments.includes('mejoró') || allComments.includes('mejor') || allComments.includes('progreso')) {
    suggestions.push('¡Bien! Hay progresos. Mantén la consistencia y celebra los pequeños avances.');
  }

  if (week < 4 && progress >= 70) {
    suggestions.push(`Estás list@ para pasar a la Semana ${week + 1}: ${WEEK_PLAN[week + 1].theme}`);
  }

  if (suggestions.length === 0) {
    suggestions.push('Agrega más comentarios detallados en las tareas para recibir análisis más precisos.');
  }

  return { summary, suggestions };
}

async function claudeAnalysis() {
  if (!state.settings.apiKey) {
    throw new Error('No has configurado una clave API. Ve a Configuración → Clave API de IA.');
  }

  const week = state.currentWeek;
  const tasks = state.tasks[week];
  const review = state.weeklyReviews[week] || 'Sin revisión semanal.';
  const plan = WEEK_PLAN[week];

  // Construir contexto
  const taskSummary = tasks.map(t => {
    const status = t.completed ? '✅ Completada' : '❌ No completada';
    const comments = t.comments.length > 0 ?
      `Comentarios: ${t.comments.map(c => c.text).join('; ')}` :
      'Sin comentarios';
    return `- ${t.title} [${status}] - ${comments}`;
  }).join('\n');

  const prompt = `Eres un experto en comportamiento canino especializado en ansiedad por separación y control de recursos entre perros.

CONTEXTO:
Estamos en la Semana ${week} de un plan de 4 semanas para dos perros:
- **Oso**: Regulador tenso, controla recursos por inseguridad, tiende a desplazar a Ponky
- **Ponky**: Amplificador emocional, sensible al clima de Oso, evita conflictos cediendo

**Objetivo de esta semana:** ${plan.objective}
**Foco:** ${plan.focus.join(', ')}

PROGRESO SEMANAL:
${taskSummary}

REVISIÓN DEL HUMANO:
${review}

ANÁLISIS REQUERIDO:
1. Resume el progreso en 2-3 oraciones (qué funcionó, qué no)
2. Identifica patrones preocupantes (retrocesos, señales de estrés, falta de consistencia)
3. Da 3-4 sugerencias CONCRETAS y ACCIONABLES para la próxima semana

IMPORTANTE:
- Sé directo y honesto (no suavices si hay problemas)
- Prioriza seguridad emocional de Ponky
- Si hay falta de datos, pídelos específicamente
- Usa lenguaje claro, sin tecnicismos innecesarios

Responde en formato JSON:
{
  "summary": "...",
  "suggestions": ["...", "...", "..."]
}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': state.settings.apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: state.settings.aiModel,
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Error al conectar con la API de Claude');
  }

  const data = await response.json();
  const text = data.content[0].text;

  // Intentar parsear JSON
  try {
    const json = JSON.parse(text);
    return json;
  } catch {
    // Si no es JSON válido, extraer como texto
    return {
      summary: text,
      suggestions: []
    };
  }
}

// ============= CONFIGURACIÓN =============

function openSettings() {
  $('apiKey').value = state.settings.apiKey || '';
  $('aiModel').value = state.settings.aiModel || 'local';
  $('aiFrequency').value = state.settings.aiFrequency || 'weekly';
  $('settingsModal').classList.add('active');
}

function saveSettings() {
  state.settings.apiKey = $('apiKey').value.trim();
  state.settings.aiModel = $('aiModel').value;
  state.settings.aiFrequency = $('aiFrequency').value;
  saveState();
  $('settingsModal').classList.remove('active');
  alert('Configuración guardada ✓');
}

// ============= EXPORT / IMPORT =============

$('exportBtn').addEventListener('click', () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "oso_ponky_data_" + new Date().toISOString().split('T')[0] + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
});

$('importFile').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const saved = JSON.parse(e.target.result);
      if (saved && saved.weeks && saved.tasks) {
        if (confirm('¿Estás seguro de sobrescribir tus datos actuales con este archivo?')) {
          state = saved;
          saveState();
          render();
          alert('Datos restaurados correctamente.');
        }
      } else {
        alert('El archivo no parece ser un respaldo válido.');
      }
    } catch (err) {
      alert('Error al leer el archivo: ' + err.message);
    }
  };
  reader.readAsText(file);
});

// ============= CONFETTI =============

function triggerConfetti() {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Simple canvas confetti implementation or usage of library would be here.
    // Since we don't have the library, we'll create simple falling elements.
    createConfettiParticle();
    createConfettiParticle();
  }, 50);
}


function createConfettiParticle() {
  const colors = ['#FF9F43', '#27AE60', '#F0DFC5', '#E74C3C', '#F39C12'];
  const el = document.createElement('div');
  el.style.position = 'fixed';
  el.style.width = '10px';
  el.style.height = '10px';
  el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.top = '-10px';
  el.style.zIndex = '9999';
  el.style.pointerEvents = 'none';
  el.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(el);

  const anim = el.animate([
    { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
    { transform: `translate(${Math.random() * 100 - 50}px, 100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
  ], {
    duration: Math.random() * 2000 + 1500,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });

  anim.onfinish = () => el.remove();
}

// Modify toggleTask to trigger confetti
const originalToggleTask = toggleTask; // Valid hook if needed, but easier to modify the function directly.
// We will assume the toggleTask function is updated separately or we verify it. 
// Actually, I can overwrite toggleTask if I had access to previous lines.
// Since I'm appending, I need to make sure `triggerConfetti` is called inside `toggleTask` above. 
// I will just add a check in the render or update logic if I could.
// But I can't easily edit the middle of the file in this append-style edit unless I use replace.

// Let's rely on the previous logic calling `runAIAnalysis` on all completion. 
// I will wrap `toggleTask` to add confetti. 

function exportData() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `plan-oso-ponky-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function resetData() {
  if (!confirm('¿BORRAR TODO? Esta acción no se puede deshacer.')) return;
  if (!confirm('¿Estás SEGURO? Se perderán todas las tareas, comentarios, revisiones y análisis IA.')) return;

  state = JSON.parse(JSON.stringify(defaultState));
  state.startDate = new Date().toISOString().split('T')[0];
  initializeWeeks();
  saveState();
  render();
  alert('Todos los datos han sido borrados');
}

// ============= UTILIDADES =============

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(isoDate) {
  if (!isoDate) return '';
  const d = new Date(isoDate);
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// ============= EVENT LISTENERS =============

$('loadPlanBtn').addEventListener('click', () => {
  if (state.tasks[1] && state.tasks[1].length > 0) {
    if (!confirm('Ya tienes tareas cargadas. ¿Reemplazarlas con el plan completo?')) return;
  }

  initializeWeeks();
  saveState();
  render();
  alert('Plan de 4 semanas cargado ✓\n\nRevisa los objetivos de cada semana y empieza con la Semana 1.');
});

$('completeWeekBtn').addEventListener('click', completeWeek);

$('analyzeBtn').addEventListener('click', runAIAnalysis);

$('settingsBtn').addEventListener('click', openSettings);
$('closeSettings').addEventListener('click', () => $('settingsModal').classList.remove('active'));
$('saveSettings').addEventListener('click', saveSettings);

$('closeAI').addEventListener('click', () => $('aiModal').classList.remove('active'));

$('exportBtn').addEventListener('click', exportData);

$('resetBtn').addEventListener('click', resetData);

// ============= RENDER ILLUSTRATIONS =============

function renderIllustrations() {
  // Avatares del header
  const osoHeader = $('oso-avatar-header');
  const ponkyHeader = $('ponky-avatar-header');

  if (osoHeader && typeof illustrations !== 'undefined') {
    osoHeader.innerHTML = illustrations.oso;
  }
  if (ponkyHeader && typeof illustrations !== 'undefined') {
    ponkyHeader.innerHTML = illustrations.ponky;
  }
}

// ============= MENSAJE DE BIENVENIDA =============

function showWelcomeMessage() {
  // Verificar si es la primera vez
  if (!localStorage.getItem('welcomeShown')) {
    setTimeout(() => {
      const message = `
🐕 ¡Bienvenid@ al Plan de Entrenamiento Oso & Ponky! 🐕

Este plan de 4 semanas está diseñado para:
• Reducir el control de recursos de Oso
• Romper la cadena emocional Oso → Ponky
• Bajar la ansiedad por separación

📚 CÓMO USAR LA APP:

1️⃣ Carga el plan completo
   Toca "📚 Cargar plan completo" abajo

2️⃣ Navega por semanas
   Cada semana tiene un objetivo específico

3️⃣ Marca tareas diarias
   Toca ☐ para marcar como completada

4️⃣ Agrega comentarios
   Describe qué observaste en cada tarea

5️⃣ Lee las cajas educativas 📚
   Explican el "por qué" de cada técnica

💡 CONSEJO: Lee las explicaciones en las cajas amarillas. Entender el fundamento te ayudará a aplicar mejor las técnicas.

¡Mucho éxito con Oso y Ponky! 🎯
      `.trim();

      if (confirm(message + '\n\n¿Empezamos? Toca OK para cargar el plan.')) {
        loadPlan();
      }

      localStorage.setItem('welcomeShown', 'true');
    }, 1000);
  }
}

// ============= INIT =============

initializeWeeks();
saveState();
render();
renderIllustrations();
showWelcomeMessage();
