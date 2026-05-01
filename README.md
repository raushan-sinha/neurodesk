# NeuroDesk – AI Messaging Chat

## Overview
NeuroDesk is a modern, scalable AI Messaging chatbot frontend built using React.js and Tailwind CSS. The project focuses on delivering a clean, responsive, and high-performance user interface inspired by contemporary AI tools. It is designed with a modular architecture, enabling seamless backend integration in future iterations.

This project emphasizes strong frontend engineering practices, including component reusability, state management, and user experience optimization.

---

## Key Features

- Responsive sidebar-based layout (desktop + mobile optimized)
- Chat interface with message history
- Local storage-based persistence for chats (initial phase)
- Clean and minimal UI/UX with Tailwind CSS
- Scalable folder structure for future backend integration
- Reusable and modular React components
<!-- - Error handling with Not Found (404) page -->
<!-- - Theme-ready architecture (light/dark mode support) -->

---

## Tech Stack

- **Frontend Framework:** React.js + TypeScript
- **Styling:** Tailwind CSS, React icons
- **Language:** TypeScript 
- **State Management:** React Hooks
- **Storage:** LocalStorage (temporary persistence)
- **Version Control:** Git & GitHub

---

## Folder Structure

src/
│
├── components/ # Reusable UI components [layout, ui]
├── pages/ # Page-level components (Home, NotFound, etc.)
├── hooks/ # Custom hooks (e.g., useChat, useLocalStorage)
├── utils/ # Helper functions and utilities
├── assets/ # Images and static files
├── styles/ # Global styles
├── App.jsx # Main app component
└── main.jsx # Entry point


---

## Core Functionalities

### 1. Chat System
- Users can send and receive messages
- Messages are displayed in a conversational UI
- Scrollable chat container with proper spacing

### 2. Sidebar Navigation
- Toggleable sidebar for mobile devices
- Static sidebar for desktop view
- Displays chat history (future enhancement-ready)

### 3. Local Storage Integration
- Chat messages are stored in browser localStorage
- Enables persistence across page reloads

### 4. Component Architecture
- Separation of concerns using reusable components
- Props-based communication between components
- Clean and maintainable code structure

---

## Future Enhancements

- Backend integration (FastAPI)
- AI API integration (OpenAI / other LLM providers)
- Authentication system (JWT / OAuth)
- Database integration (MongoDB / PostgreSQL)
- Real-time messaging (WebSockets)
- Chat history sync across devices
- Advanced UI animations and micro-interactions
- Prompt templates and saved chats

---

## Performance Considerations

- Optimized rendering using React best practices
- Lazy loading of components (future scope)
- Efficient state updates to avoid unnecessary re-renders
- Minimal DOM manipulation

---

## Setup Instructions

1. Clone the repository: https://github.com/raushan-sinha/neurodesk
2. cd neurodesk
3. npm install
4. npm run dev