# AI Marketplace

**AI-Powered Consumer Products Community Marketplace**

Come out of the era of staring at screens. Start creating, making, and connecting with physical objects and people.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?logo=tailwind-css)

## 🎯 Project Overview

A next-generation, community-driven marketplace for AI-powered physical consumer products. This platform bridges the gap between passive technology consumption and active creation, empowering curious makers to build, share, and discover innovative gadgets—from programmable robots to 3D-printed assistants.

### 🧠 Our Philosophy
**Marketplace-first**  
> "Buy, sell, and discover smart hardware designs and components — a marketplace built by makers, for makers."


## ✨ Key Features

### 🔮 Crystal Ball Navigation
Interactive animated dial using Framer Motion for exploring product categories with smooth animations and spring physics.

### 🏆 Community-Powered
- **Badge System**: Member → Contributor → Maker progression
- **Governance Tokens**: Earned by verified makers
- **Dynamic Leaderboard**: Hacker News-style upvoting with weighted maker votes

### 🔒 Trust-Verified
- Privacy Verified indicators
- Personally vetted products (first 1,500)
- GDPR Compliant
- Open Source Hardware support

### 📱 Progressive Web App
Accessible via browser with modern, responsive design - no app store required.

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **State Management**: Zustand + React Query
- **Backend**: Airtable API (no-code database)
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Hosting**: Vercel (planned)

## 🎨 Design System

### Color Palette
- **Primary**: Deep Space Blue (#0F172A)
- **Secondary**: Electric Cyan (#06B6D4)
- **Accent**: Warm Coral (#F97316)
- **Trust**: Verified Green (#10B981)

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter
- **Monospace**: JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Add your API keys to .env
# VITE_AIRTABLE_API_KEY=your_key_here
# VITE_AIRTABLE_BASE_ID=your_base_id_here

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
ai-marketplace/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── navigation/      # CrystalBallDial
│   │   ├── common/          # Badge, TrustIndicator
│   │   └── ...
│   ├── pages/              # Route pages
│   ├── types/              # TypeScript types
│   ├── styles/             # Global CSS
│   └── App.tsx             # Main app component
├── public/                 # Static assets
└── ...config files
```

## 🗺 Roadmap

### Phase 1 (MVP) ✅
- [x] Homepage with Crystal Ball navigation
- [x] Header (GitHub/Hugging Face style)
- [x] Featured product section
- [x] Placeholder pages
- [x] Design system implementation
- [ ] Airtable integration
- [ ] Dynamic product data
- [ ] Leaderboard with real-time voting

### Phase 2 (Coming Soon)
- [ ] Full product detail pages
- [ ] Community feed (Twitter-style)
- [ ] User authentication (Clerk)
- [ ] Maker dashboard
- [ ] Payment integration (Stripe)
- [ ] 3D Crystal Ball navigation upgrade

## 📦 Product Categories

1. **Programmable Robotics** 🤖 - Richie Mini, Arduino bots
2. **Prompt-to-Product** 🎨 - Meshy-based creations
3. **3D Printed Innovations** 🖨️ - Custom gadgets
4. **Assistant Boxes** 📦 - Sticker Box, smart assistants
5. **Kids Learning Tools** 👶 - STEM kits
6. **Voice Assistants** 🎙️ - Voice-enabled products

## 🤝 Contributing

We welcome contributions from the community! Whether you're:
- A **Member**: Browse and provide feedback
- A **Contributor**: Build apps and share modifications
- A **Maker**: Create and certify products

## 📄 License

This project is open source. License TBD.

## 🔗 Links

- **Documentation**: Coming soon
- **Blog**: Substack integration planned
- **Discord**: Community link TBD

## 💡 Inspiration

Design references:
- [aisafety.com/map](https://aisafety.com/map) - Interactive dial navigation
- Hugging Face Spaces - Product card layouts
- GitHub - Developer-focused header navigation

---

**Built with ❤️ by the AI Marketplace community**

*Come out of the era of staring at screens. Start creating!*
