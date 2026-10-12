# 🚀 Deploying Farhana's Portfolio to Vercel

## Step-by-Step Deployment Guide

### Prerequisites:
- GitHub account (free at github.com)
- Vercel account (free at vercel.com)
- Node.js installed (download from nodejs.org)

---

## Step 1: Create a GitHub Repository

1. Go to **github.com** and sign in (or create an account)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `farhana-portfolio` (or any name you prefer)
4. Add a description: "Professional portfolio for Farhana Shakeer, Consultant Psychologist"
5. Choose **"Public"** (so Vercel can access it)
6. Click **"Create repository"**

---

## Step 2: Prepare Your Project Files

1. **Create a new folder** on your computer called `farhana-portfolio`

2. **Create a file** called `package.json` inside with this content:
```json
{
  "name": "farhana-portfolio",
  "version": "1.0.0",
  "description": "Professional portfolio for Farhana Shakeer",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

3. **Install Next.js** (which makes deployment to Vercel easy):
   - Open terminal/command prompt in your folder
   - Run: `npx create-next-app@latest . --typescript false --tailwind false`
   - When prompted, answer as follows:
     - "Would you like to use ESLint?" → `No`
     - "Would you like to use Tailwind CSS?" → `No`
     - "Would you like your code inside a `src/` directory?" → `No`

4. **Replace the content** of `app/page.js` (or `pages/index.js`) with the portfolio code from the `.jsx` file

5. **Test locally**:
   - In terminal: `npm run dev`
   - Open browser to `http://localhost:3000`
   - You should see the portfolio!

---

## Step 3: Push Code to GitHub

1. **Initialize Git** in your project folder:
   ```
   git init
   git add .
   git commit -m "Initial commit: Farhana's portfolio"
   ```

2. **Connect to GitHub** (replace with your repo URL from Step 1):
   ```
   git remote add origin https://github.com/YOUR-USERNAME/farhana-portfolio.git
   git branch -M main
   git push -u origin main
   ```

   > When prompted for credentials, use your GitHub token (or personal access token)

---

## Step 4: Deploy to Vercel

1. Go to **vercel.com** and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Continue with GitHub"** and authorize Vercel
4. **Select your repository** (`farhana-portfolio`)
5. Click **"Import"**
6. Vercel will auto-detect Next.js settings (just click **"Deploy"**)
7. **Wait 1-2 minutes** for deployment to complete ✅
8. You'll get a live URL like: `https://farhana-portfolio.vercel.app`

---

## Step 5: Set Up a Custom Domain (Optional)

If Farhana wants a custom domain like `farhana-shakeer.com`:

1. Register a domain at:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Or any domain registrar

2. In Vercel:
   - Go to your project → **"Settings"** → **"Domains"**
   - Enter your domain name
   - Vercel will show you DNS records to add
   - Add these records in your domain registrar's settings
   - Wait 24-48 hours for DNS propagation

---

## Making Updates

To update the portfolio later:

1. **Edit the files** locally (in VS Code or any editor)
2. **Push to GitHub**:
   ```
   git add .
   git commit -m "Updated portfolio"
   git push
   ```
3. Vercel will **automatically redeploy** (within seconds)! 🎉

---

## Troubleshooting

### "Dependencies not found"
- Delete `node_modules` folder
- Run: `npm install`

### "Port already in use"
- Kill the process: `Ctrl+C` in terminal
- Run: `npm run dev` again

### "Vercel deployment fails"
- Check that `package.json` exists
- Ensure all files are pushed to GitHub
- Check Vercel logs in the Deployment tab

---

## Need Help?

- **Vercel Docs**: vercel.com/docs
- **Next.js Docs**: nextjs.org/docs
- **GitHub Docs**: docs.github.com

**Your portfolio is now live! Share the URL with anyone! 🎉**
