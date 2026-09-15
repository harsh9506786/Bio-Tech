# Bio-Tech

A Next.js web application for Bio-Tech — showcasing biological and agricultural solutions for sustainable farming.

## 🚀 Live Site

[bio-tech-weld.vercel.app](https://bio-tech-weld.vercel.app)

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Deployment:** Vercel

## 📁 Project Structure

The actual Next.js application lives inside the `my-next-app` folder:

Bio-Tech/
├── my-next-app/ # Next.js app (source code, pages, components)
├── .gitignore
└── README.md


## 💻 Getting Started (Local Development)

1. Clone the repository:
```bash
   git clone https://github.com/harsh9506786/Bio-Tech.git
   cd Bio-Tech/my-next-app
```

2. Install dependencies:
```bash
   npm install
```

3. Run the development server:
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ☁️ Deployment (Vercel)

This project is deployed on Vercel. Since the Next.js app is inside the `my-next-app` subfolder (not the repo root), the following project setting is required:

- **Root Directory:** `my-next-app`

Go to **Vercel Project → Settings → Build and Deployment → Root Directory** and set it to `my-next-app` before deploying.

Every push to the `main` branch triggers a new production deployment automatically.

## 🌿 Branching

- `main` — production branch, deploys automatically to Vercel

## 📄 License

This project is private and intended for internal/client use.
