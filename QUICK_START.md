# 🚀 Quick Start Guide - AI Marketplace

## Welcome! 🎉

Your AI Marketplace project is ready to run. Follow these simple steps:

---

## Step 1: Navigate to Project Directory

```bash
cd /Users/anupam.dey/Documents/Code/Personal/ai-marketplace
```

---

## Step 2: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

---

## Step 3: Open Your Browser

The app will automatically open at **http://localhost:3000**

If it doesn't open automatically, manually navigate to: `http://localhost:3000`

---

## 🎨 What You'll See

### Homepage Features:
1. **Hero Section** - Beautiful gradient background with mission statement
2. **Crystal Ball Navigation** - Interactive circular dial (Try dragging it!)
3. **Richie Mini Feature** - "Coming Soon" product showcase
4. **Leaderboard** - Top products preview
5. **Community Spotlight** - Badge system
6. **Newsletter Signup** - Substack integration

### Try These Interactions:
- ✨ **Click** on category icons in the Crystal Ball
- 🖱️ **Drag** the Crystal Ball dial
- 📱 **Resize** the browser to see responsive design
- 🎯 **Hover** over elements to see micro-animations
- 🔍 **Click** navigation links to explore other pages

---

## 📝 Available Pages

- `/` - Homepage (complete)
- `/explore/:category` - Category pages (placeholder)
- `/products/:slug` - Product details (placeholder)
- `/leaderboard` - Leaderboard (placeholder)
- `/about` - About page (complete with PRD content)
- `/trust` - Trust & Privacy (complete)

---

## 🛠 Development Commands

```bash
# Start dev server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🎨 Design System Quick Reference

### Colors (in Tailwind)
```jsx
bg-primary      // Deep Space Blue
bg-secondary    // Electric Cyan
bg-accent       // Warm Coral
bg-trust        // Verified Green
```

### Components Available
```jsx
<Badge type="Member" />
<Badge type="Contributor" />
<Badge type="Maker" />
<TrustIndicator verified vetted gdpr openSource />
```

### Button Classes
```jsx
className="btn-primary"    // Blue filled button
className="btn-secondary"  // Dark filled button
className="btn-outline"    // Outlined button
```

---

## 📂 Key Files to Customize

### 1. Homepage Content
**File:** `src/pages/HomePage.tsx`
- Hero text
- Product features
- Newsletter section

### 2. Crystal Ball Categories
**File:** `src/components/navigation/CrystalBallDial.tsx`
- Modify `categories` array to change icons, names, descriptions

### 3. Design System
**File:** `tailwind.config.js`
- Adjust colors, fonts, animations

### 4. Header Navigation
**File:** `src/components/layout/Header.tsx`
- Change navigation items
- Modify search placeholder

---

## 🔧 Next: Add Your Data

### Option 1: Use Mock Data (Quick)
Create a file: `src/data/mockProducts.ts`
```typescript
export const mockProducts = [
  {
    id: '1',
    name: 'Richie Mini',
    category: 'Programmable Robotics',
    // ... more fields
  }
];
```

### Option 2: Connect Airtable (Production)
1. Sign up for Airtable: https://airtable.com
2. Create a base with tables from the PRD:
   - Products (see types/index.ts for schema)
   - Users
   - Apps
3. Get API key and Base ID
4. Add to `.env`:
   ```
   VITE_AIRTABLE_API_KEY=your_key
   VITE_AIRTABLE_BASE_ID=your_base_id
   ```
5. Create service layer in `src/services/airtable.ts`

---

## 🎯 Pro Tips

### Performance
- Images should be optimized (WebP format)
- Use lazy loading for images
- Keep bundle size small

### Animations
- Adjust Framer Motion spring configs for different feels:
  ```typescript
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  ```

### Accessibility
- All interactive elements have focus states
- Semantic HTML is used throughout
- ARIA labels on icon buttons

### Mobile
- Test on multiple screen sizes
- Use browser DevTools mobile emulator
- Check touch interactions on Crystal Ball

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### TypeScript errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling not working?
- Make sure Tailwind CSS is processing correctly
- Check that `src/styles/globals.css` is imported in `main.tsx`
- Restart dev server

---

## 📱 PWA Setup (Optional)

The manifest is already configured! To test PWA features:

1. Build for production: `npm run build`
2. Serve with HTTPS (required for PWA)
3. Use Chrome DevTools > Application > Manifest
4. Test "Install App" feature

---

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link project
```

Or connect your GitHub repo directly on vercel.com

---

## 📚 Learn More

- **React**: https://react.dev
- **TypeScript**: https://typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://framer.com/motion
- **Vite**: https://vitejs.dev

---

## ✅ Checklist

- [ ] Run `npm run dev` successfully
- [ ] View homepage at http://localhost:3000
- [ ] Interact with Crystal Ball navigation
- [ ] Check responsive design (resize browser)
- [ ] Explore About and Trust pages
- [ ] Review PROJECT_SUMMARY.md for features
- [ ] Plan your Airtable schema
- [ ] Customize colors/content to your brand

---

## 🎉 You're All Set!

The foundation is ready. Now it's time to:
1. Add your product data
2. Customize the content
3. Deploy and share!

**Need help?** Check:
- `PROJECT_SUMMARY.md` - Complete feature list
- `PROJECT_PLAN.md` - Implementation roadmap
- `README.md` - Project documentation

Happy building! 🚀
