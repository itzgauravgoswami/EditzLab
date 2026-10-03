# Contributing to EditzLab

Thank you for your interest in contributing to **EditzLab**! We welcome contributions to both the client-facing creative studio application and the internal freelance business management dashboard.

---

## 🧭 Code of Conduct
Please be respectful, collaborative, and considerate of others when interacting within this project.

---

## 🛠️ Development Workflow

### 1. Fork & Clone
```bash
git clone https://github.com/your-username/EditzLab.git
cd EditzLab
```

### 2. Create a Feature Branch
Use descriptive branch names:
- `feature/lead-export-csv`
- `fix/canvas-resize-jitter`
- `style/dark-mode-palette`

```bash
git checkout -b feature/your-feature-name
```

### 3. Install Dependencies
```bash
# Frontend setup
cd frontend
npm install

# Backend setup
cd ../backend
npm install
```

### 4. Running the Development Servers
In separate terminals:

```bash
# Frontend (http://localhost:3000)
cd frontend
npm run dev

# Backend (http://localhost:5000)
cd backend
npm run dev
```

---

## 📐 Coding Guidelines

### Frontend (Next.js 16 & React 19)
- Use modern React hooks and standard Next.js App Router conventions.
- Maintain the visual design language:
  - Dark background surface: `#070A11`
  - Electric blue accents: `#2563eb`, `#38bdf8`
  - Glassmorphic card styling with `backdrop-blur-2xl` and `border-white/10`
  - Typography: Serif headings (`var(--font-serif)`), clean sans-serif body (`var(--font-sans)`).
- Ensure mobile responsiveness for both marketing pages and admin dashboard views.

### Backend (Node.js & Express 5)
- Keep route handlers modular and clean.
- Ensure proper HTTP status codes and uniform JSON responses:
  ```json
  {
    "success": true,
    "data": { ... }
  }
  ```

---

## 🧪 Commits & Pull Requests

1. **Commit Messages**: Follow standard conventional commits:
   - `feat: add CSV export to leads table`
   - `fix: correct frame aspect ratio on ultrawide monitors`
   - `docs: update setup instructions in README`
2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
3. **Open a Pull Request**: Provide a clear description of your changes, screenshots for visual updates, and test verification notes.

---

## 📄 License
By contributing to EditzLab, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
