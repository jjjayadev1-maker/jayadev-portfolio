// ── JAYADEV ASSISTANT ──────────────────────────────────────────────────────

const BOT_NAME = "JJ Assistant";

const KB = {
  greeting: {
    patterns: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "howdy", "what's up", "sup"],
    response: () => `👋 Hi there! I'm <strong>${BOT_NAME}</strong>, Jayadev's personal assistant.<br><br>
I can help you learn about:<br>
• 💼 Work experience & projects<br>
• 🛠️ Technical skills<br>
• 🎓 Education & certifications<br>
• 📞 Contact details<br>
• 📄 Resume download<br><br>
What would you like to know?`
  },

  name: {
    patterns: ["who are you", "your name", "what is your name", "who is jayadev", "tell me about jayadev", "introduce", "about him", "about jayadev"],
    response: () => `👨‍💻 <strong>Jayadev Jigajinni</strong> is a <strong>Senior Java Full Stack Developer</strong> based in Bengaluru, India.<br><br>
He has <strong>5+ years of experience</strong> building enterprise-grade applications across domains like Insurance, Healthcare, Retail Analytics, Financial Recovery, and AI-powered Reporting.<br><br>
He currently works at <strong>Omnicom Media Group</strong> as a Software Engineer.`
  },

  experience: {
    patterns: ["experience", "work history", "career", "jobs", "companies", "worked", "employment", "professional background", "work experience"],
    response: () => `💼 <strong>Professional Experience:</strong><br><br>
<strong>1. Omnicom Media Group</strong> — Software Engineer<br>
&nbsp;&nbsp;&nbsp;📅 Jul 2024 – Present<br>
&nbsp;&nbsp;&nbsp;• Generative Reporting (GenAI)<br>
&nbsp;&nbsp;&nbsp;• Retail Sales Reporting & Scratchpad<br>
&nbsp;&nbsp;&nbsp;• Fee Recovery System<br><br>
<strong>2. Accolite Digital</strong> — Software Engineer<br>
&nbsp;&nbsp;&nbsp;📅 May 2021 – Jul 2024<br>
&nbsp;&nbsp;&nbsp;• Retail Medical Store – Global Health Line<br>
&nbsp;&nbsp;&nbsp;• India International Insurance – eBaoTech<br><br>
Total: <strong>5+ years</strong> across 5 enterprise domains.`
  },

  currentJob: {
    patterns: ["current job", "current company", "currently working", "present company", "where does he work", "omnicom", "current role", "current employer"],
    response: () => `🏢 Jayadev is currently working as a <strong>Software Engineer at Omnicom Media Group</strong> (Jul 2024 – Present).<br><br>
He works on:<br>
• <strong>Generative Reporting (GenAI)</strong> — AI-powered reporting with Spring Boot & Snowflake<br>
• <strong>Retail Sales Reporting</strong> — dashboards & REST APIs<br>
• <strong>Fee Recovery System</strong> — financial reconciliation microservices<br><br>
Tech stack: Java 17, Spring Boot, Microservices, ReactJS, Snowflake, AWS, Datadog, Jenkins.`
  },

  projects: {
    patterns: ["projects", "project", "what has he built", "portfolio projects", "work done", "applications built"],
    response: () => `🚀 <strong>Key Projects:</strong><br><br>
<strong>@ Omnicom Media Group:</strong><br>
• 🤖 Generative Reporting (GenAI) — AI-powered automated reports<br>
• 📊 Retail Sales Reporting & Scratchpad — analytics dashboards<br>
• 💰 Fee Recovery System — financial reconciliation<br><br>
<strong>@ Accolite Digital:</strong><br>
• 🏥 Retail Medical Store (Global Health Line) — pharmacy management<br>
• 🛡️ India International Insurance (eBaoTech) — enterprise insurance platform<br><br>
All projects involved Spring Boot microservices, REST APIs, and ReactJS frontends.`
  },

  skills: {
    patterns: ["skills", "technologies", "tech stack", "what does he know", "technical skills", "expertise", "tools", "programming", "languages", "frameworks"],
    response: () => `🛠️ <strong>Technical Skills:</strong><br><br>
<strong>Languages:</strong> Java 8, Java 17, JavaScript, SQL<br>
<strong>Backend:</strong> Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Microservices, REST APIs<br>
<strong>Frontend:</strong> ReactJS, HTML5, CSS3, Bootstrap, jQuery<br>
<strong>Databases:</strong> MySQL, Snowflake, Oracle SQL, SQL Server, Amazon Redshift<br>
<strong>Cloud & DevOps:</strong> AWS, Jenkins, Git, Maven, Gradle, CI/CD<br>
<strong>Quality:</strong> SonarQube, Snyk, Datadog, Swagger, Postman<br>
<strong>AI Tools:</strong> GitHub Copilot, Amazon Q, Claude Code`
  },

  java: {
    patterns: ["java", "spring boot", "spring", "hibernate", "microservices", "rest api", "jpa", "spring security", "spring mvc"],
    response: () => `☕ Jayadev is highly proficient in <strong>Java Full Stack Development</strong>:<br><br>
• <strong>Java 8 & 17</strong> — streams, lambdas, functional programming<br>
• <strong>Spring Boot</strong> — microservices, REST APIs, auto-configuration<br>
• <strong>Spring Security</strong> — JWT authentication & authorization<br>
• <strong>Spring Data JPA + Hibernate</strong> — ORM, query optimization<br>
• <strong>Microservices</strong> — service discovery, API gateway, distributed systems<br><br>
He has used these across all 5+ years of his career.`
  },

  frontend: {
    patterns: ["react", "reactjs", "frontend", "front end", "html", "css", "javascript", "ui", "user interface", "jquery", "bootstrap"],
    response: () => `⚛️ Jayadev's <strong>Frontend Skills:</strong><br><br>
• <strong>ReactJS</strong> — components, hooks, state management, dashboards<br>
• <strong>HTML5 & CSS3</strong> — semantic markup, responsive design<br>
• <strong>JavaScript</strong> — ES6+, async/await, DOM manipulation<br>
• <strong>Bootstrap & jQuery</strong> — rapid UI development<br><br>
He has built interactive dashboards, pharmacy management UIs, and insurance web portals.`
  },

  database: {
    patterns: ["database", "sql", "snowflake", "mysql", "oracle", "redshift", "db", "data"],
    response: () => `🗄️ Jayadev's <strong>Database Expertise:</strong><br><br>
• <strong>Snowflake</strong> — data warehousing, analytics, query optimization (primary at Omnicom)<br>
• <strong>MySQL</strong> — relational DB design, indexing, stored procedures<br>
• <strong>Oracle SQL</strong> — enterprise DB, PL/SQL (used at eBaoTech)<br>
• <strong>SQL Server & Amazon Redshift</strong> — cloud data warehousing<br><br>
He has optimized queries achieving up to <strong>40% performance improvement</strong>.`
  },

  cloud: {
    patterns: ["aws", "cloud", "devops", "jenkins", "ci/cd", "pipeline", "docker", "deployment", "git"],
    response: () => `☁️ Jayadev's <strong>Cloud & DevOps Skills:</strong><br><br>
• <strong>AWS</strong> — cloud infrastructure, services<br>
• <strong>Jenkins</strong> — CI/CD pipeline setup and management<br>
• <strong>Git & SVN</strong> — version control, branching strategies<br>
• <strong>Maven & Gradle</strong> — build automation<br>
• <strong>SonarQube & Snyk</strong> — code quality & security scanning<br>
• <strong>Datadog</strong> — application monitoring & alerting`
  },

  ai: {
    patterns: ["ai", "artificial intelligence", "generative ai", "genai", "github copilot", "amazon q", "claude", "copilot", "llm"],
    response: () => `🤖 Jayadev actively uses <strong>AI-assisted development tools</strong>:<br><br>
• <strong>GitHub Copilot</strong> — AI code completion & suggestions<br>
• <strong>Amazon Q</strong> — AWS-integrated AI developer assistant<br>
• <strong>Claude Code</strong> — AI-powered code generation & review<br><br>
He also worked on a <strong>Generative AI Reporting project</strong> at Omnicom, building AI-powered automated reporting solutions using Spring Boot microservices.`
  },

  education: {
    patterns: ["education", "degree", "college", "university", "vtu", "b.e", "bachelor", "studied", "qualification", "academic"],
    response: () => `🎓 <strong>Education:</strong><br><br>
<strong>Bachelor of Engineering (B.E.) – Computer Science</strong><br>
R.T.E. Society's Rural Engineering College<br>
Visvesvaraya Technological University (VTU), Bengaluru<br><br>
<strong>Certifications:</strong><br>
• Spring Boot & Microservices – Professional Certification<br>
• Java Programming – Professional Certification`
  },

  contact: {
    patterns: ["contact", "email", "phone", "reach", "hire", "connect", "get in touch", "number", "mail", "call"],
    response: () => `📞 <strong>Contact Jayadev:</strong><br><br>
📧 <strong>Email:</strong> <a href="mailto:jj.jayadev1@gmail.com" style="color:#6d28d9;">jj.jayadev1@gmail.com</a><br>
📱 <strong>Phone:</strong> <a href="tel:+919743623789" style="color:#6d28d9;">+91 9743623789</a><br>
📍 <strong>Location:</strong> Bengaluru, India<br><br>
He is <strong>open to new opportunities</strong> — feel free to reach out!`
  },

  resume: {
    patterns: ["resume", "cv", "download", "download resume", "download cv", "get resume"],
    response: () => `📄 You can view and download Jayadev's resume here:<br><br>
<a href="resume.html" target="_blank" style="display:inline-block;background:linear-gradient(135deg,#6d28d9,#0ea5e9);color:#fff;padding:8px 18px;border-radius:8px;font-weight:600;text-decoration:none;margin-top:4px;">📥 View Resume</a><br><br>
On the resume page, click <strong>"Save as PDF"</strong> to download it.`
  },

  location: {
    patterns: ["location", "where", "city", "based", "bengaluru", "bangalore", "india", "where is he"],
    response: () => `📍 Jayadev is based in <strong>Bengaluru, India</strong> and is open to both on-site and remote opportunities.`
  },

  availability: {
    patterns: ["available", "availability", "open to work", "looking for job", "hiring", "opportunity", "open to opportunities", "job"],
    response: () => `✅ Yes! Jayadev is <strong>open to new opportunities</strong>.<br><br>
He is looking for roles involving:<br>
• Java Full Stack Development<br>
• Spring Boot & Microservices<br>
• Cloud-native applications (AWS)<br>
• AI-integrated backend systems<br><br>
📧 Reach him at <a href="mailto:jj.jayadev1@gmail.com" style="color:#6d28d9;">jj.jayadev1@gmail.com</a>`
  },

  years: {
    patterns: ["how many years", "years of experience", "experience years", "how long", "how experienced"],
    response: () => `📅 Jayadev has <strong>5+ years of professional experience</strong> in Java Full Stack Development (May 2021 – Present), working across 5 enterprise domains and 2 companies.`
  },

  domains: {
    patterns: ["domain", "industry", "sector", "insurance", "healthcare", "retail", "finance", "reporting"],
    response: () => `🏭 Jayadev has worked across <strong>5 enterprise domains</strong>:<br><br>
1. 🛡️ <strong>Insurance</strong> — India International Insurance (eBaoTech)<br>
2. 🏥 <strong>Healthcare</strong> — Retail Medical Store (Global Health Line)<br>
3. 📊 <strong>Retail Analytics</strong> — Sales Reporting & Dashboards (Omnicom)<br>
4. 💰 <strong>Financial Recovery</strong> — Fee Recovery System (Omnicom)<br>
5. 🤖 <strong>AI-powered Reporting</strong> — Generative Reporting (Omnicom)`
  },

  help: {
    patterns: ["help", "what can you do", "what can you tell", "options", "menu", "topics", "what do you know"],
    response: () => `🤝 I can answer questions about:<br><br>
• 👤 <span class="quick-chip" onclick="askQuestion('Who is Jayadev?')">Who is Jayadev?</span><br>
• 💼 <span class="quick-chip" onclick="askQuestion('Work experience')">Work experience</span><br>
• 🛠️ <span class="quick-chip" onclick="askQuestion('Technical skills')">Technical skills</span><br>
• 🚀 <span class="quick-chip" onclick="askQuestion('Projects')">Projects</span><br>
• 🎓 <span class="quick-chip" onclick="askQuestion('Education')">Education</span><br>
• 📞 <span class="quick-chip" onclick="askQuestion('Contact details')">Contact details</span><br>
• 📄 <span class="quick-chip" onclick="askQuestion('Download resume')">Download resume</span><br>
• ✅ <span class="quick-chip" onclick="askQuestion('Is he available?')">Is he available?</span>`
  },

  fallback: `🤔 I'm not sure about that. Try asking me about:<br><br>
<span class="quick-chip" onclick="askQuestion('skills')">Skills</span>
<span class="quick-chip" onclick="askQuestion('experience')">Experience</span>
<span class="quick-chip" onclick="askQuestion('contact')">Contact</span>
<span class="quick-chip" onclick="askQuestion('resume')">Resume</span>`
};

// ── RESPONSE ENGINE ────────────────────────────────────────────────────────
function getResponse(input) {
  const text = input.toLowerCase().trim();
  for (const key in KB) {
    if (key === "fallback") continue;
    const entry = KB[key];
    if (entry.patterns && entry.patterns.some(p => text.includes(p))) {
      return typeof entry.response === "function" ? entry.response() : entry.response;
    }
  }
  return KB.fallback;
}

// ── QUICK SUGGESTIONS ─────────────────────────────────────────────────────
const SUGGESTIONS = [
  "Who is Jayadev?", "Technical skills", "Work experience",
  "Current company", "Projects", "Education",
  "Contact details", "Download resume", "Is he available?"
];

// ── DOM HELPERS ───────────────────────────────────────────────────────────
function askQuestion(q) {
  const input = document.getElementById("chat-input");
  if (input) { input.value = q; sendMessage(); }
}

function appendMessage(html, sender) {
  const body = document.getElementById("chat-body");
  const wrap = document.createElement("div");
  wrap.className = `chat-msg ${sender}`;
  wrap.innerHTML = `<div class="chat-bubble">${html}</div>`;
  body.appendChild(wrap);
  body.scrollTop = body.scrollHeight;
}

function showTyping() {
  const body = document.getElementById("chat-body");
  const el = document.createElement("div");
  el.className = "chat-msg bot typing-wrap";
  el.id = "typing-indicator";
  el.innerHTML = `<div class="chat-bubble typing"><span></span><span></span><span></span></div>`;
  body.appendChild(el);
  body.scrollTop = body.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById("typing-indicator");
  if (el) el.remove();
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;
  appendMessage(text, "user");
  input.value = "";
  showTyping();
  setTimeout(() => {
    removeTyping();
    appendMessage(getResponse(text), "bot");
  }, 700);
}

// ── INIT ──────────────────────────────────────────────────────────────────
function initChat() {
  const toggle = document.getElementById("chat-toggle");
  const box    = document.getElementById("chat-box");
  const close  = document.getElementById("chat-close");
  const form   = document.getElementById("chat-form");
  const input  = document.getElementById("chat-input");
  const suggestWrap = document.getElementById("chat-suggestions");

  // Suggestions
  SUGGESTIONS.forEach(s => {
    const btn = document.createElement("button");
    btn.className = "suggest-btn";
    btn.textContent = s;
    btn.onclick = () => { input.value = s; sendMessage(); };
    suggestWrap.appendChild(btn);
  });

  // Toggle open/close
  toggle.addEventListener("click", () => {
    const isOpen = box.classList.toggle("open");
    toggle.querySelector(".chat-toggle-icon").textContent = isOpen ? "✕" : "💬";
    if (isOpen && document.getElementById("chat-body").children.length === 0) {
      setTimeout(() => appendMessage(KB.greeting.response(), "bot"), 300);
    }
  });

  close.addEventListener("click", () => {
    box.classList.remove("open");
    toggle.querySelector(".chat-toggle-icon").textContent = "💬";
  });

  form.addEventListener("submit", e => { e.preventDefault(); sendMessage(); });

  input.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
}

document.addEventListener("DOMContentLoaded", initChat);
