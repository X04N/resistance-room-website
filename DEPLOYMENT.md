# Deployment Guide - The Resistance Room Website

## Pre-Deployment Checklist

### 1. Environment Variables
Create `.env.local` file with your actual credentials:
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_TURITOP_ACTIVITY_ID=your_actual_activity_id
```

### 2. Build the Project
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 3. Test the Build Locally
```bash
npm run preview
```

Visit http://localhost:4173 to test the production build locally.

## SiteGround Deployment

### Step 1: Access File Manager
1. Log into your SiteGround account
2. Go to Site Tools → File Manager
3. Navigate to `public_html/`

### Step 2: Backup Current Site (if applicable)
1. Create a backup of the current WordPress site
2. Or move files to a backup folder like `public_html_backup/`

### Step 3: Upload Files
1. Upload ALL contents of the `dist/` folder to `public_html/`
2. Make sure `.htaccess` is included (handles SPA routing)
3. Verify `sitemap.xml` and `robots.txt` are present

### Step 4: Clear Cache
1. In SiteGround: Site Tools → Speed → Caching
2. Click "Flush Cache" for all cache types
3. Also clear browser cache

### Step 5: Verify Deployment
Test all these URLs to ensure routing works:
- ✓ https://www.resistanceroom.com/
- ✓ https://www.resistanceroom.com/reservas-lanzadera-alien-nave-espacial/
- ✓ https://www.resistanceroom.com/precios/
- ✓ https://www.resistanceroom.com/que-es-un-escape-room-2/
- ✓ https://www.resistanceroom.com/escaperoom_faq/
- ✓ https://www.resistanceroom.com/contacto/
- ✓ https://www.resistanceroom.com/blog/
- ✓ https://www.resistanceroom.com/terminos-y-condiciones/
- ✓ https://www.resistanceroom.com/politica-de-cookies/

## Post-Deployment Testing

### Cookie Consent Testing
1. Visit site in incognito/private mode
2. Cookie banner should appear at bottom
3. Click "Rechazar Todo" → No GA requests should fire
4. Reload page, click "Aceptar Todo" → GA should load
5. Check browser console for any errors

### Google Analytics Testing
1. Accept cookies
2. Visit Google Analytics Real-Time report
3. Navigate between pages
4. Verify page views are being tracked

### TuriTop Widget Testing
1. Visit `/reservas-lanzadera-alien-nave-espacial/`
2. Verify booking widget loads (if `VITE_TURITOP_ACTIVITY_ID` is set)
3. Test gift voucher buttons open correct URLs

### Responsive Testing
Test on these breakpoints:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

### SEO Verification
1. View page source of homepage
2. Verify `<title>` tag is correct
3. Check for structured data (JSON-LD scripts)
4. Visit: https://www.resistanceroom.com/sitemap.xml
5. Visit: https://www.resistanceroom.com/robots.txt

## Troubleshooting

### Issue: 404 errors on direct URL access
**Solution:** Verify `.htaccess` file is in `public_html/` and mod_rewrite is enabled in Apache.

### Issue: Blank page after deployment
**Solution:** 
1. Check browser console for errors
2. Verify all files were uploaded correctly
3. Check `.env` variables are set (especially for TuriTop)

### Issue: Cookie banner not appearing
**Solution:**
1. Clear browser localStorage
2. Open in incognito mode
3. Check browser console for JS errors

### Issue: Google Analytics not tracking
**Solution:**
1. Verify `VITE_GA_MEASUREMENT_ID` is set correctly
2. Accept cookies (GA only loads after consent)
3. Check Network tab for `analytics` requests

### Issue: Styles not loading correctly
**Solution:**
1. Hard refresh (Ctrl+F5 / Cmd+Shift+R)
2. Clear SiteGround cache
3. Verify CSS files are in `dist/assets/`

## Maintenance

### Updating Content
To update blog posts, FAQ, or other content:
1. Edit files in `src/data/` folder
2. Rebuild: `npm run build`
3. Re-upload `dist/` contents to SiteGround

### Updating Sitemap
1. Update dates in `public/sitemap.xml`
2. Or run: `node scripts/generate-sitemap.js`
3. Rebuild and redeploy

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add URL to `public/sitemap.xml`
4. Rebuild and redeploy

## Support Contacts

- **SiteGround Support:** via hosting dashboard
- **Google Analytics:** https://analytics.google.com
- **TuriTop Support:** Check TuriTop dashboard

## Security Notes

- Never commit `.env.local` to git
- Keep dependencies updated: `npm audit`
- Monitor SiteGround security alerts
- Backup regularly before major updates
