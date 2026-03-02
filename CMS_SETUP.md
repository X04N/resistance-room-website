# Decap CMS Setup Guide

## ✅ What's Been Set Up

I've configured Decap CMS to give you a visual admin panel for editing all website content without touching code!

### Admin Panel Location
Once deployed, access at: `https://www.resistanceroom.com/admin`

### What You Can Edit
- **Site Settings**: Contact info, social media, opening hours
- **Home Page**: Hero section, experience features, pricing
- **Booking Page**: All text and important information
- **FAQ**: Questions and answers
- **Blog Posts**: Create, edit, delete blog posts
- **All Pages**: Prices, Contact, What is Escape Room

---

## 🚀 Setup Steps (Choose One Path)

### **Option A: GitHub + Netlify Identity (Recommended for Production)**

This allows you to edit content from anywhere with internet access.

#### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "resistance-room-website")
3. Make it private or public (your choice)
4. Don't initialize with README (we already have code)

#### Step 2: Push Your Code to GitHub
```bash
cd D:\Drive\MEMEX\website_redesign\resistance-room-website
git init
git add .
git commit -m "Initial commit with Decap CMS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/resistance-room-website.git
git push -u origin main
```

#### Step 3: Setup Netlify Identity (Free)
1. Sign up at https://app.netlify.com (it's free)
2. Click "Add new site" → "Import an existing project"
3. Connect to your GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

#### Step 4: Enable Netlify Identity
1. In Netlify dashboard, go to Site Settings → Identity
2. Click "Enable Identity"
3. Under "Registration preferences" → Set to "Invite only"
4. Under "Services" → Enable "Git Gateway"

#### Step 5: Invite Yourself
1. Go to Identity tab
2. Click "Invite users"
3. Enter your email
4. Check email and click the invitation link
5. Set your password

#### Step 6: Access Your CMS
1. Go to `https://YOUR_SITE.netlify.app/admin`
2. Login with your email/password
3. Start editing content!

#### Step 7: Deploy to SiteGround
After editing content in Netlify CMS:
1. Your changes are saved to GitHub automatically
2. Pull the latest changes: `git pull origin main`
3. Build: `npm run build`
4. Upload `dist/` folder to SiteGround

---

### **Option B: Local Testing Mode (Quick Start)**

Use this to test the CMS locally before setting up GitHub.

#### Step 1: Edit Config
Open `public/admin/config.yml` and change:
```yaml
backend:
  name: git-gateway
  branch: main
```

To:
```yaml
backend:
  name: test-repo
```

#### Step 2: Start Dev Server
```bash
npm run dev
```

#### Step 3: Access CMS Locally
Visit: `http://localhost:5174/admin`

**Note:** Changes in test mode are NOT saved permanently. This is only for testing the CMS interface.

---

### **Option C: Direct GitHub Backend (No Netlify)**

If you want to skip Netlify but still use GitHub:

#### Step 1: Create GitHub OAuth App
1. Go to https://github.com/settings/developers
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in:
   - App name: The Resistance Room CMS
   - Homepage URL: https://www.resistanceroom.com
   - Authorization callback URL: https://www.resistanceroom.com/admin
4. Click "Register application"
5. Copy the Client ID

#### Step 2: Create Client Secret
1. Click "Generate a new client secret"
2. Copy the secret immediately (you can't see it again)

#### Step 3: Update CMS Config
Edit `public/admin/config.yml`:
```yaml
backend:
  name: github
  repo: YOUR_USERNAME/resistance-room-website
  branch: main
```

#### Step 4: Add OAuth Proxy
You'll need to set up an OAuth proxy server. This is more complex - I recommend using Netlify Identity (Option A) instead.

---

## 📝 How to Use the CMS

### Editing Content
1. Go to `/admin` in your browser
2. Login with your credentials
3. Click on any collection (Home Page, Settings, etc.)
4. Click "Edit" on any item
5. Make your changes
6. Click "Save"
7. Click "Publish" (in editorial workflow mode)

### Adding Blog Posts
1. Go to "Blog" in the CMS
2. Click "New Blog"
3. Fill in all fields
4. Click "Save" then "Publish"

### Workflow States
- **Draft**: Work in progress
- **In Review**: Ready for review
- **Ready**: Ready to publish
- **Published**: Live on site

---

## 🎯 Content Files Created

All your editable content is now in:
```
src/data/content/
  ├── site-settings.json      (Contact, social, hours)
  ├── home-hero.json          (Homepage hero section)
  ├── home-experience.json    (Experience features)
  ├── home-pricing.json       (Pricing tiers)
  ├── booking.json            (Booking page content)
  └── blog/                   (Blog posts - will be created)
```

---

## 🔧 Making Content Changes Now (Before CMS is Live)

While you're setting up GitHub/Netlify, you can edit these JSON files directly:

### Example: Fix a typo in the hero headline
1. Open `src/data/content/home-hero.json`
2. Edit the text
3. Save the file
4. Rebuild: `npm run build`
5. Deploy to SiteGround

---

## ⚠️ Important Notes

1. **Backup**: Always keep a backup of your content files before major changes
2. **Git**: Once using GitHub, all changes are version controlled (you can undo anything)
3. **Build**: After editing in CMS, you must rebuild (`npm run build`) to see changes
4. **Images**: Upload images to `public/images/uploads/` via the CMS

---

## 🆘 Troubleshooting

### "Error: Failed to load config.yml"
- Make sure `/admin/config.yml` exists in your deployed site
- Check the file for YAML syntax errors

### "Cannot access admin panel"
- Ensure you've deployed the `public/admin/` folder
- Check that Netlify Identity is enabled
- Clear browser cache

### "Changes not showing on site"
- You must rebuild after making CMS changes
- If on Netlify, redeploy the site
- If on SiteGround, rebuild locally and re-upload

---

## 📞 Next Steps

**I recommend Option A (GitHub + Netlify Identity) because:**
- ✅ Edit from anywhere
- ✅ Automatic version control
- ✅ No complex OAuth setup
- ✅ Free tier is generous
- ✅ Can still deploy final site to SiteGround

**Want me to help you:**
1. Set up the GitHub repo?
2. Configure Netlify?
3. Just edit the JSON files directly for now?

Let me know which path you'd like to take!
