# 🚀 Deployment Guide

## GitHub Pages Setup

### 1. Configure GitHub Pages in repository

1. Go to your repository on GitHub: `https://github.com/your-username/lucas-ota`
2. Go to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save changes

### 2. Push the code

```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

The workflow will run automatically and deploy your site.

### 3. Configure your custom domain

#### On GitHub:
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain: `yourdomain.com`
3. Check **Enforce HTTPS**

#### On your DNS provider:
Configure these DNS records:

**For main domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-username.github.io
```

### 4. Verify deployment

- Your site will be available at: `https://your-username.github.io/lucas-ota/`
- With custom domain: `https://yourdomain.com`

## Useful commands

```bash
# Build locally
npm run build

# Local preview of build
npm run preview

# Local development
npm run dev
```

## Automation

The `.github/workflows/deploy.yml` file handles:

1. **Trigger**: Runs on every push to `main`
2. **Build**: Installs dependencies and builds the project
3. **Deploy**: Automatically uploads to GitHub Pages

## Troubleshooting

### Permission errors
If deployment fails due to permissions:
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**

### Custom domain not working
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check that **Enforce HTTPS** is enabled

### Build fails
1. Check logs in the **Actions** tab
2. Make sure `npm run build` works locally
3. Verify Node.js versions in the workflow

## Deployment alternatives

### Vercel (Recommended for more features)

1. Connect your repository at [vercel.com](https://vercel.com)
2. Automatic deployment on every push
3. Free custom domain
4. Edge functions available

### Netlify

1. Connect your repository at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Free custom domain