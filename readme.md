# CBS Website

> Modern Single Page Application (SPA) built with TypeScript, HTML and CSS.  
> Designed with a clean corporate aesthetic, responsive layout and scalable architecture.

---

## Overview

The CBS Website is a responsive Single Page Application developed using TypeScript and a custom routing system.  
It delivers dynamic content rendering without full page reloads while maintaining a clean and professional user interface.

The project focuses on:

- Structured SPA architecture
- Performance and scalability
- Modern UI/UX principles
- Clean and maintainable codebase
- Production-ready deployment setup

---

## Tech Stack

- **TypeScript**
- **HTML5**
- **CSS3**
- **Vite** (build tool & dev server)

---

## Features

- Custom client-side routing
- Dynamic view rendering
- Fully responsive layout
- Modular view architecture
- Modern card-based UI components
- Interactive hover states
- Structured corporate footer
- Clean and minimal navigation system

---

## Architecture

The application uses a simple but scalable SPA routing approach:

```ts
const routes: Record<string, () => string> = {
  "/": homeView,
  "/about": aboutView,
  "/partners": partnersView,
  "/computer_networks": computerNetworksView,
  "/servers": serversView,
  "/video": videoView,
  "/hardware_repair": hardwareRepairView,
};
```

---

## Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. The application will be available at:

```bash

http://localhost:5173

```
