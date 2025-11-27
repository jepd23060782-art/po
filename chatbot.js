// Base de conocimiento local del chatbot
const knowledge = {
    saludos: {
        palabras: ['hola', 'hi', 'hey', 'buenos días', 'buenas noches', 'buenas tardes', '¿qué tal?'],
        respuestas: [
            '¡Hola! Encantado de conocerte. ¿En qué puedo ayudarte?',
            '¡Hey! ¿Qué necesitas?',
            'Saludos, ¿cómo estás?',
            '¡Hola! Aquí estoy para ayudarte.'
        ]
    },
    información_jonatan: {
        palabras: ['jonathan', 'jona', 'nombre', 'quién eres', 'quién es', 'edad', 'nacimiento', 'género', 'ciudad', 'país', 'email', 'teléfono', 'carrera', 'semestre', 'ingeniería', 'sistemas'],
        respuestas: {
            nombre: '¿Preguntas sobre Jonathan? Te cuento: Su nombre completo es Jonathan Eduardo Dzib Pat.',
            jonathan: 'Jonathan Eduardo Dzib Pat es una persona apasionada por la programación y el desarrollo de software.',
            jona: 'Jona (Jonathan) tiene 18 años y es estudiante de primer semestre de Ingeniería en Sistemas.',
            edad: 'Jonathan tiene 18 años. Nació el 23 de junio de 2007.',
            nacimiento: 'Jonathan nació el 23 de junio de 2007.',
            género: 'Jonathan es de género masculino.',
            ciudad: 'Jonathan es de Valladolid, Yucatán.',
            país: 'Jonathan es de México, específicamente del estado de Yucatán.',
            email: 'El email de contacto de Jonathan es: jepd23060782@gmail.com',
            teléfono: 'El teléfono de Jonathan es: 99 841 703 20',
            carrera: 'Jonathan está estudiando Ingeniería en Sistemas.',
            semestre: 'Jonathan está actualmente en el primer semestre de su carrera.',
            ingeniería: 'Jonathan estudia Ingeniería en Sistemas, una carrera relacionada con programación y desarrollo de software.',
            sistemas: 'Jonathan estudia Ingeniería en Sistemas, una disciplina que combina tecnología y solución de problemas.'
        }
    },
    contacto: {
        palabras: ['contacto', 'cómo contactar', 'email', 'correo', 'teléfono', 'llamar', 'escribir'],
        respuestas: {
            contacto: 'Puedes contactar a Jonathan por:\n📧 Email: jepd23060782@gmail.com\n📱 Teléfono: 99 841 703 20',
            email: 'El email de Jonathan es: jepd23060782@gmail.com',
            correo: 'Puedes escribir a: jepd23060782@gmail.com',
            teléfono: 'El teléfono de Jonathan es: 99 841 703 20',
            llamar: 'Puedes llamar a Jonathan al: 99 841 703 20'
        }
    },
    programación: {
        palabras: ['javascript', 'python', 'html', 'css', 'código', 'programación', 'programar', 'desarrollador', 'desarrollo'],
        respuestas: {
            javascript: 'JavaScript es un lenguaje de programación versátil usado principalmente en desarrollo web. Se ejecuta en navegadores y permite crear interactividad en páginas. ¿Quieres saber algo más?',
            python: 'Python es un lenguaje potente y fácil de aprender. Se usa en ciencia de datos, automatización, web development y mucho más. ¿Te gustaría conocer más?',
            html: 'HTML es el lenguaje de marcado para crear la estructura de páginas web. Define elementos como títulos, párrafos, imágenes, etc.',
            css: 'CSS es usado para estilizar y diseñar elementos HTML. Controla colores, tamaños, posiciones, animaciones y más.',
            código: 'El código es un conjunto de instrucciones que escribimos para que las computadoras realicen tareas específicas.',
            programación: 'La programación es el arte de crear soluciones usando lenguajes de programación para resolver problemas.',
            desarrollador: 'Un desarrollador es una persona que escribe código para crear aplicaciones, sitios web y software.',
            desarrollo: 'El desarrollo de software es el proceso de crear aplicaciones y soluciones tecnológicas.'
        }
    },
    web: {
        palabras: ['web', 'sitio', 'página', 'internet', 'navegador', 'servidor'],
        respuestas: {
            web: 'Un sitio web es una colección de páginas conectadas que se acceden a través de internet usando un navegador.',
            sitio: 'Un sitio web está compuesto por HTML (estructura), CSS (diseño) y JavaScript (funcionalidad).',
            página: 'Una página web es un documento de hipertexto que se visualiza en un navegador.',
            internet: 'Internet es una red global de computadoras conectadas que permite compartir información.',
            navegador: 'Un navegador es un programa que permite acceder y ver páginas web (Chrome, Firefox, Safari, Edge).',
            servidor: 'Un servidor es una computadora que almacena archivos y los envía a otros dispositivos cuando los solicitan.'
        }
    },
    información_chatbot: {
        palabras: ['¿quién eres?', '¿qué eres?', 'eres', 'quién', 'qué soy', 'asistente', 'chatbot'],
        respuestas: {
            quién: 'Soy un asistente de IA creado localmente. No tengo conexión a internet, pero tengo muchos conocimientos almacenados sobre programación, tecnología y sobre Jonathan.',
            qué: 'Soy un chatbot inteligente diseñado para responder tus preguntas sobre programación, web, tecnología, y también información sobre Jonathan.',
            eres: 'Soy un programa de IA que funciona completamente sin conexión a internet.',
            asistente: 'Soy tu asistente personal de IA, aquí para ayudarte con cualquier duda.',
            chatbot: 'Soy un chatbot - un programa diseñado para conversar y responder preguntas de forma inteligente.'
        }
    },
    preguntas_tiempo: {
        palabras: ['hora', 'fecha', 'qué hora', 'qué día'],
        respuestas: {
            hora: () => `La hora actual es: ${new Date().toLocaleTimeString('es-ES')}`,
            fecha: () => `Hoy es: ${new Date().toLocaleDateString('es-ES', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}`
        }
    },
    ayuda: {
        palabras: ['ayuda', 'help', 'qué puedes hacer', 'puedes', '¿qué haces?'],
        respuestas: [
            'Puedo ayudarte con:\n• Preguntas sobre Jonathan y su información\n• Información de contacto\n• Preguntas sobre programación\n• Conceptos de desarrollo web\n• Explicar tecnologías\n• Responder preguntas generales\n• Decirte la hora y fecha\n\n¿Hay algo específico que quieras saber?',
            'Soy un asistente versátil. Puedo hablar sobre programming, web development, tecnología, y también tengo información sobre Jonathan. ¿Qué te interesa?'
        ]
    },
    despedidas: {
        palabras: ['adiós', 'chao', 'hasta luego', 'bye', 'nos vemos'],
        respuestas: [
            '¡Adiós! Fue un placer chatear contigo. ¡Vuelve pronto!',
            'Hasta luego, espero haber sido de ayuda.',
            'Chao, que tengas un excelente día.'
        ]
    }
};

// Elementos del DOM
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chatbot-container');

let chatOpen = true;

// Event listeners
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
chatToggle.addEventListener('click', toggleChat);

// Función principal para enviar mensaje
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    chatInput.value = '';
    
    showTyping();
    
    // Simulamos un pequeño delay para que se vea natural
    setTimeout(() => {
        removeTyping();
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 500 + Math.random() * 500);
}

// Función para generar respuesta basada en la entrada
function generateResponse(userMessage) {
    const lowercaseMessage = userMessage.toLowerCase().trim();
    
    // Buscar en cada categoría de conocimiento
    for (let category in knowledge) {
        const categoryData = knowledge[category];
        
        // Verificar si el mensaje contiene alguna palabra clave
        for (let keyword of categoryData.palabras) {
            if (lowercaseMessage.includes(keyword)) {
                // Si las respuestas son un objeto (como en programación y web)
                if (typeof categoryData.respuestas === 'object' && !Array.isArray(categoryData.respuestas)) {
                    for (let key in categoryData.respuestas) {
                        if (lowercaseMessage.includes(key)) {
                            const resp = categoryData.respuestas[key];
                            return typeof resp === 'function' ? resp() : resp;
                        }
                    }
                    // Si no encuentra coincidencia exacta, devuelve una respuesta genérica del objeto
                    const keys = Object.keys(categoryData.respuestas);
                    return categoryData.respuestas[keys[0]];
                }
                // Si son respuestas en array, devolver una aleatoria
                else if (Array.isArray(categoryData.respuestas)) {
                    return categoryData.respuestas[Math.floor(Math.random() * categoryData.respuestas.length)];
                }
            }
        }
    }
    
    // Respuestas por defecto si no encuentra coincidencia
    const defaultResponses = [
        'Esa es una pregunta interesante. Aunque no tengo información específica al respecto, te recomendaría investigar más. ¿Hay algo más en lo que pueda ayudarte?',
        'Interesante pregunta, pero no tengo datos sobre eso. ¿Puedo ayudarte con algo relacionado a programación o tecnología?',
        'Hmm, no estoy seguro sobre eso, pero puedo ayudarte con temas de programación, web development y tecnología. ¿Quieres preguntar algo de eso?',
        '¡Buena pregunta! No tengo información sobre ese tema específico. ¿Hay algo más en lo que pueda asistirte?'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Función para agregar mensaje al chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Indicador de escritura
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}

// Toggle minimizar/maximizar
function toggleChat() {
    chatOpen = !chatOpen;
    if (chatOpen) {
        chatContainer.style.height = '400px';
        chatToggle.textContent = '−';
    } else {
        chatContainer.style.height = '40px';
        chatToggle.textContent = '+';
    }
}

// Mensaje de bienvenida
window.addEventListener('load', () => {
    addMessage('¡Hola! Soy tu asistente de IA local. Puedo responder sobre Jonathan, su información de contacto, programación, desarrollo web y más. ¿En qué puedo ayudarte?', 'bot');
});
