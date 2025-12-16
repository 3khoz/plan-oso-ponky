// ============= CONFIGURACIÓN DEL PLAN DE 4 SEMANAS =============

const WEEK_PLAN = {
  1: {
    theme: "Bajar la base",
    objective: "Reducir la activación general de Oso y desacoplar emocionalmente a Ponky",
    focus: ["Presencia sin disponibilidad", "Paseos tranquilos", "Evitar sobreestimulación"],
    tasks: [
      {
        title: "Presencia sin disponibilidad (2-3 bloques de 5-10 min)",
        desc: "Tú en otra pieza, puerta cerrada, sin hablar/mirar. Objetivo: Oso deja de sentir que debe vigilar.",
        tag: "separacion",
        freq: "daily"
      },
      {
        title: "Paseos cortos y calmados (20-30 min)",
        desc: "Sin buscar estímulos. Ritmo constante. Mejor volver aburridos que sobreexcitados.",
        tag: "paseo",
        freq: "daily"
      },
      {
        title: "PROHIBIDO: juegos intensos o entrenamientos en calle",
        desc: "Esta semana es para bajar revoluciones, no para subir. Nada de fuerza, solo calma.",
        tag: "calma",
        freq: "daily"
      },
      {
        title: "Observar sin intervenir si Oso se inquieta",
        desc: "Cuando hagas presencia sin disponibilidad: NO corrijas, NO calmes. Solo observa. Anota qué pasa.",
        tag: "separacion",
        freq: "daily"
      }
    ]
  },
  2: {
    theme: "Separación dosificada",
    objective: "Romper la cadena emocional Oso → Ponky mediante separaciones muy cortas y asimétricas",
    focus: ["Micro-salidas", "Asimetría de premios", "Retorno neutro"],
    tasks: [
      {
        title: "Micro-salida (30 seg - 3 min) 1-2 veces al día",
        desc: "Llaves, zapatos, sales. Al volver: CERO saludo por 2-3 min. Mensaje: no hubo nada que reparar.",
        tag: "separacion",
        freq: "daily"
      },
      {
        title: "Asimetría clave: Ponky con tarea, Oso sin premio",
        desc: "Ponky recibe kong blando o alfombra olfativa. Oso no recibe nada especial. Objetivo: Oso aprende que no es responsable del bienestar de todos.",
        tag: "separacion",
        freq: "daily"
      },
      {
        title: "Paseo separado (aunque uno llore un poco)",
        desc: "Un paseo semanal donde uno sale y el otro queda. Es terapéutico, no cruel. Anota cómo reaccionan.",
        tag: "separacion",
        freq: "custom",
        days: [3, 6]
      },
      {
        title: "Continuar: presencia sin disponibilidad",
        desc: "Mantén 1-2 bloques diarios. Ya deberías ver que Oso se relaja más rápido.",
        tag: "separacion",
        freq: "daily"
      },
      {
        title: "Comida separada (NUEVA REGLA)",
        desc: "Oso y Ponky comen en espacios diferentes. No negociable. Si Oso controla recursos, esto es obligatorio.",
        tag: "recursos",
        freq: "daily"
      }
    ]
  },
  3: {
    theme: "Reactividad con control humano",
    objective: "Que Oso delegue decisiones sobre estímulos externos (gatos, personas, etc.)",
    focus: ["Giro 90° temprano", "Oso atrás, Ponky adelante", "Intervención en control de recursos"],
    tasks: [
      {
        title: "Paseo: Oso atrás, Ponky adelante (correas distintas)",
        desc: "Oso deja de ser el explorador primario. Ponky empieza a ocupar espacio sin liderar. Al principio se verá raro. Eso es buena señal.",
        tag: "paseo",
        freq: "daily"
      },
      {
        title: "Giro 90° cuando aparece gato (ANTES del ladrido)",
        desc: "No órdenes. No premios. Solo: cuello rígido de Oso → giro de 90° y sigues caminando. Mensaje: esto no es asunto tuyo.",
        tag: "reactividad",
        freq: "daily"
      },
      {
        title: "Interrupción activa si Oso acapara recursos",
        desc: "Si Oso le quita juguete/comida a Ponky o ladra para desplazar: intervención inmediata. Oso pierde acceso. Ponky se queda.",
        tag: "recursos",
        freq: "daily"
      },
      {
        title: "Protección corporal de Ponky",
        desc: "Si Oso intimida: te paras entre ellos. Cuerpo erguido, sin hablar. Mensaje: no es tu rol.",
        tag: "recursos",
        freq: "daily"
      },
      {
        title: "Juegos: separación total (por ahora)",
        desc: "Nada de juguetes compartidos. Oso juega solo. Ponky juega solo. O juntos, pero sin objetos (olfato, caminatas).",
        tag: "calma",
        freq: "daily"
      }
    ]
  },
  4: {
    theme: "Integración",
    objective: "Que funcionen juntos sin escalarse. Consolidar todo lo aprendido.",
    focus: ["Paseos juntos sin sincronía", "Salidas más largas", "Revisión de progresos"],
    tasks: [
      {
        title: "Paseos juntos, pero con distancia entre ellos",
        desc: "Mantén correas a diferentes largos. Menos sincronía. Objetivo: que se regulen sin copiarse.",
        tag: "paseo",
        freq: "daily"
      },
      {
        title: "Salidas de casa un poco más largas (5-10 min)",
        desc: "Mantienes asimetría de premios. Si esta semana hay retrocesos: es normal. El sistema viejo pelea por volver.",
        tag: "separacion",
        freq: "daily"
      },
      {
        title: "Re-introducción gradual de juguetes compartidos",
        desc: "SOLO si en semana 3 no hubo conflictos. Empieza con objetos de bajo valor (cartón, pelota vieja). Tú presente.",
        tag: "recursos",
        freq: "custom",
        days: [2, 4, 6]
      },
      {
        title: "Evaluación semanal: ¿Oso sigue controlando?",
        desc: "Observa si Oso todavía desplaza a Ponky. Si sí: vuelve a semana 3. Si no: sigue adelante.",
        tag: "recursos",
        freq: "custom",
        days: [7]
      },
      {
        title: "Celebración de cierre de mes",
        desc: "Anota TODO lo que cambió. Tanto lo que mejoró como lo que sigue trabado. Esto alimenta el siguiente ciclo.",
        tag: "calma",
        freq: "custom",
        days: [7]
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

  const container = $('weekObjectiveContainer');
  container.innerHTML = `
    <div class="week-objective">
      <h3>🎯 Objetivo de la Semana ${week}</h3>
      <p><strong>${plan.objective}</strong></p>
      <p style="margin-top:10px;font-size:12px;opacity:.8">
        <strong>Foco:</strong> ${plan.focus.join(' • ')}
      </p>
    </div>
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
            ${task.freq === 'daily' ? '<span class="tag">Diaria</span>' : `<span class="tag">Días: ${task.days?.join(',') || 'Custom'}</span>`}
          </div>
          <div class="task-desc">${escapeHtml(task.desc)}</div>
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

  const summary = `Has completado ${completed} de ${total} tareas (${progress}%). ${
    progress >= 80 ? 'Excelente progreso!' :
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

// ============= INIT =============

initializeWeeks();
saveState();
render();
