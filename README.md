<div align="center">
  <br />
  <div>
    <img alt="React" src="https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img alt="React Router" src="https://img.shields.io/badge/React_Router-7.10.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  </div>

  <h3 align="center">🎯 AI Resume Analyzer</h3>

   <div align="center">
     Intelligent Resume Analysis & Insights Platform
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">✨ Introduction</a>

An AI-powered Resume Analyzer built with React, React Router, and modern web technologies. Upload and store resumes, match candidates to jobs using smart AI evaluations, and get custom feedback with ATS scores tailored to each listing—all wrapped in a clean, reusable UI.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[React 19](https://react.dev/)** - A popular open‑source JavaScript library for building user interfaces using reusable components and a virtual DOM, enabling efficient, dynamic single-page applications. 

- **[React Router v7](https://reactrouter.com/)** - The go‑to routing library for React apps, offering nested routes, data loaders/actions, error boundaries, code splitting, and SSR support.

- **[TypeScript](https://www.typescriptlang.org/)** - A superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers, making it ideal for building large-scale applications.

- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- **[Vite](https://vite.dev/)** - A fast build tool and dev server using native ES modules for instant startup, hot‑module replacement, and Rollup‑powered production builds—perfect for modern web development.

- **[PDF.js](https://mozilla.github.io/pdf.js/)** - Mozilla's PDF rendering library for parsing and extracting text from PDF resumes. 

- **[React Dropzone](https://react-dropzone.js.org/)** - Simple React hook to create a drag-and-drop file upload zone. 

- **[Zustand](https://github.com/pmndrs/zustand)** - A minimal, hook-based state management library for React.  It lets you manage global state with zero boilerplate, no context providers, and excellent performance through selective state subscriptions.

## <a name="features">🔋 Features</a>

👉 **PDF Resume Parsing**: Extract and analyze text from PDF resumes with precision.

👉 **Resume Upload & Storage**: Let users upload and store all their resumes in one place, safely and reliably.

👉 **AI Resume Matching**:  Provide a job listing and get an ATS score with custom feedback tailored to each resume.

👉 **Real-time Processing**:  Instant feedback and analysis for uploaded resumes.

👉 **Keyword Optimization**: ATS-friendly suggestions to improve resume visibility.

👉 **Reusable, Modern UI**: Built with clean, consistent components for a great-looking and maintainable interface. 

👉 **Code Reusability**: Leverage reusable components and a modular codebase for efficient development.

👉 **Cross-Device Compatibility**: Fully responsive design that works seamlessly across all devices.

👉 **Type-Safe Development**: Built with TypeScript for reliability and better developer experience. 

👉 **Server-Side Rendering**: Fast page loads with React Router's SSR capabilities.

And many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/AyushGupta2526/ai-resume-analyzer.git
cd ai-resume-analyzer
```

**Installation**

Install the project dependencies using npm: 

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project. 

**Building for Production**

```bash
npm run build
```

**Starting Production Server**

```bash
npm start
```

**Type Checking**

```bash
npm run typecheck
```

## 🐳 Docker Deployment

**Build Docker Image**

```bash
docker build -t ai-resume-analyzer . 
```

**Run Container**

```bash
docker run -p 3000:3000 ai-resume-analyzer
```

The containerized application can be deployed to any platform that supports Docker, including AWS ECS, Google Cloud Run, Azure Container Apps, Digital Ocean, Fly.io, and Railway.

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/                    # Application source code
│   ├── components/         # Reusable React components
│   ├── routes/            # Route components
│   ├── lib/               # Utility functions
│   ├── app.css            # Global styles
│   └── root.tsx           # Root component
├── constants/             # Application constants
├── types/                 # TypeScript type definitions
├── public/                # Static assets
├── build/                 # Production build output
├── Dockerfile             # Docker configuration
└── react-router.config.ts # React Router configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush Gupta**

- GitHub:  [@AyushGupta2526](https://github.com/AyushGupta2526)
- Repository: [ai-resume-analyzer](https://github.com/AyushGupta2526/ai-resume-analyzer)

## 📬 Support

If you have any questions or run into issues, please [open an issue](https://github.com/AyushGupta2526/ai-resume-analyzer/issues).

---

<div align="center">

Made with ❤️ by [Ayush Gupta](https://github.com/AyushGupta2526)

</div>
