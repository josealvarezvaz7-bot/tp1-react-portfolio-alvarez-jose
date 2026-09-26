Portfolio — José Miguel Alvarez

Trabajo Práctico Nº1 — "Mi Portfolio en React" UTN Facultad Regional Tucumán

🧾 Descripción

Portfolio personal de una sola página (single page) construido con React y Vite. Presenta mi perfil como estudiante de programación, mi stack actual, algunos proyectos y mis datos de contacto.

🛠️ Tecnologías utilizadas
React 18
Vite
JavaScript (JSX)
CSS puro (sin frameworks de estilos)
✅ Requisitos previos
Node.js versión 18 o superior
npm (viene incluido con Node.js)
📦 Instalación

Clonar el repositorio e instalar las dependencias:

bash
git clone https://github.com/josealvarezvaz7-bot/tp1-react-portfolio-alvarez-jose.git
cd tp1-react-portfolio-alvarez-jose
npm install
▶️ Ejecución en desarrollo
bash
npm run dev

Esto levanta el proyecto en http://localhost:5173. Cualquier cambio en los archivos de src/ se refleja automáticamente en el navegador.

📜 Scripts disponibles
Comando Descripción
npm run dev Levanta el servidor de desarrollo con recarga en vivo
npm run build Genera la versión de producción en la carpeta dist/
npm run preview Sirve localmente la build de producción para probarla
📁 Estructura del proyecto
src/
├── App.jsx # Componente raíz, arma la página con los demás
├── main.jsx # Punto de entrada de React
├── styles.css # Estilos globales
├── data/
│ └── portfolioData.js # Datos de perfil, habilidades y proyectos
└── components/
├── Header.jsx # Navegación + menú mobile (useState)
├── Hero.jsx # Presentación inicial
├── About.jsx # Sección "Sobre mí"
├── Skills.jsx # Stack de tecnologías (map sobre array)
├── Projects.jsx # Lista de proyectos (map sobre array)
└── Footer.jsx # Datos de contacto

👤 Autor

José Miguel Alvarez Estudiante de Programación — Universidad

📧 Email: josealvarezvaz7@gmail.com
🐙 GitHub: @josealvarezvaz7-bot
