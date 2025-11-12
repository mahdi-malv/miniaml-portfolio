# mahdi.wtf - Personal Portfolio

A modern, clean personal homepage built with Next.js and deployed to GitHub Pages.

## 🚀 Features

- **Static Site Generation** - Fast, optimized static site using Next.js
- **JSON-based Content** - Easy to update content via `content.json`
- **Responsive Design** - Beautiful on all devices
- **Auto-Deployment** - GitHub Actions automatically deploys on push
- **Custom Domain** - Configured for mahdi.wtf

## 📁 Project Structure

```
mahdi_wtf_portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage component
│   └── globals.css         # Styling
├── public/
│   ├── CNAME               # Custom domain configuration
│   └── profile.jpg         # Your profile image (add this)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── content.json            # Editable content (name, bio, links, etc.)
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customizing Your Site

### 1. Edit Content

Update `content.json` with your information:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your tagline",
  "bio": "Your bio text...",
  "image": "/profile.jpg",
  "contact": {
    "email": "your@email.com",
    "social": [
      {
        "name": "GitHub",
        "url": "https://github.com/yourusername",
        "icon": "github"
      }
    ]
  }
}
```

### 2. Add Your Profile Image

Place your profile image in the `public/` directory as `profile.jpg` (or update the path in `content.json`).

### 3. Customize Styling

Edit `app/globals.css` to change colors, fonts, and layout. Key CSS variables:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #0066ff;
  --muted: #666666;
  --border: #e5e5e5;
}
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build

To create a production build:
```bash
npm run build
```

This generates static files in the `out/` directory.

## 🌐 Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository** for this project

2. **Push your code**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/mahdi_wtf_portfolio.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment":
     - Source: Choose "GitHub Actions"
   - Save the settings

4. **First deployment**:
   - The GitHub Action will automatically run when you push to `main`
   - Wait for the workflow to complete (check the "Actions" tab)
   - Your site will be available at `https://yourusername.github.io/mahdi_wtf_portfolio/`

### Custom Domain Setup (mahdi.wtf)

The `CNAME` file is already configured with `mahdi.wtf`. To complete the setup:

#### Configure DNS

Add the following DNS records with your domain registrar:

**Option A: Using A Records (Recommended)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Option B: Using CNAME (for subdomain)**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

#### Verify Domain in GitHub

1. Go to your repository settings → Pages
2. Under "Custom domain", enter: `mahdi.wtf`
3. Click "Save"
4. Wait for DNS check to complete
5. Enable "Enforce HTTPS" (recommended)

**Note**: DNS propagation can take up to 24 hours, but usually completes within a few hours.

### Automatic Deployments

After the initial setup, every push to the `main` branch will automatically:
1. Build your Next.js site
2. Generate static files
3. Deploy to GitHub Pages

Monitor deployments in the "Actions" tab of your repository.

## 📝 Content Updates

To update your site content:

1. Edit `content.json`
2. Commit and push to `main`:
```bash
git add content.json
git commit -m "Update content"
git push
```
3. GitHub Actions will automatically rebuild and deploy

## 🎯 Inspired By

Design inspired by [nickvelten.nl](https://www.nickvelten.nl)

## 📄 License

MIT - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and adapt for your own use!

