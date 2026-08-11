# ⚡ Backend Software Engineer & Systems Architect Portfolio (React)

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Hosting](https://img.shields.io/badge/Hosting-GitHub_Pages_%7C_Vercel-success)](https://pages.github.com/)

A modern, highly responsive portfolio web application designed specifically for **Backend Software Engineers**, **Systems Architects**, and **Java Spring Boot Specialists**.

Unlike standard static portfolios, this site features an interactive **Backend System Telemetry & Microservice Request Inspector** ("Architect Telemetry Mode"). Whenever a visitor clicks buttons or endpoint triggers, an interactive side drawer animates real-time HTTP request flow execution steps (`Client` → `NGINX Reverse Proxy` → `Spring Cloud API Gateway :9090` → `JWT Security Filter` → `Eureka Service Registry` → `Spring Boot Service` → `Kafka Event Queue` → `PostgreSQL / MongoDB`).

---

## ✨ Features & Highlights

- ⚡ **Architect Telemetry & Request Inspector**: Live HTTP trace drawer showing latency (ms), status codes (`200 OK`, `201 CREATED`), microservice pipeline breakdown, and JSON response payload inspector with 1-click copy.
- 👨‍💻 **Dynamic Typing Loop**: Typing text animation highlighting Java 21, Spring Boot, Microservices, Healthcare FHIR/HL7, ZATCA, NPHIES, Kafka, and Docker.
- 🎓 **Verified Certificate Viewer**: Highlighting official certifications (e.g. AiVariant Internship Certificate) with full-screen image preview and **RSA-256 JWT Token Verification Simulator**.
- 📄 **Resume Document Viewer**: Embedded modal window displaying original multi-page resume documents.
- 📩 **REST API Contact Simulator**: Interactive contact form displaying real-time JSON payload creation for `POST /api/v1/contact/send-message`.
- 📱 **100% Mobile Friendly & Responsive**: Tailored layout across all viewports (Mobile, Tablet, Desktop).

---

## 🛠️ Quick Start & Local Running

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/qureshi01/profile.git
   cd profile
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

---

## ⚙️ Customization Guide (How to Use This Template)

Anyone can easily fork/clone this portfolio and replace the content with their own details in 3 simple steps:

### Step 1: Update Portfolio Data
Open [`src/data/portfolioData.js`](src/data/portfolioData.js) and edit your details:
- **`personalInfo`**: Name, role, tagline, bio, email, phone, location, LinkedIn, education, and spoken languages.
- **`skillsCategory`**: Customize your technical stack, frameworks, databases, and proficiency levels.
- **`experienceData`**: Update your company experience timeline, metrics, and achievements.
- **`projectsData`**: Add your microservice projects, architecture specs, and GitHub links.
- **`certificateData`**: Add your certification details, issue date, and certificate code.

### Step 2: Replace Profile Photo & Certificate Images
Place your assets in the `public/assets/` directory:
- Profile picture: `public/assets/profile.jpg`
- Certificate image: `public/assets/certificate-aivariant.png`
- Resume pages: `public/assets/resume-page1.png`, `public/assets/resume-page2.png`

---

## 🌐 Zero-Cost Hosting & Deployment Guide

This repository is pre-configured for free hosting on **GitHub Pages**, **Vercel**, or **Netlify**.

### 1-Click Deployment to GitHub Pages (Free)

1. Update the `"homepage"` field in [`package.json`](package.json) with your GitHub username:
   ```json
   "homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/profile"
   ```

2. Run the single deployment command:
   ```bash
   npm run deploy
   ```
   *The project will build and automatically publish your portfolio live at `https://<YOUR_GITHUB_USERNAME>.github.io/profile/`!*

---

### Free Deployment to Vercel

1. Push your repository to GitHub.
2. Sign in to [vercel.com](https://vercel.com) with GitHub.
3. Click **"New Project"**, select your `profile` repository, and click **Deploy**.
4. *Vercel will give you a free live domain with free SSL certificate!*

---

## 📜 License

Distributed under the MIT License. Feel free to fork, customize, and use it for your own software engineering portfolio!
