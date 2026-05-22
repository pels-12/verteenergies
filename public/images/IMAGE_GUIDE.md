# Image Organization Guide

Your website is now set up to use local images from these folders. Download images from the recommended sources and place them in the corresponding folders below.

## Folder Structure

```
public/images/
├── hero/           # Hero section rotating background images
├── services/       # Service card images
├── projects/       # Project showcase images
└── team/           # Team member photos
```

---

## Images to Download

### 1. **Hero Section** (`/images/hero/`)
These images rotate in the hero background slideshow. The site pulls from service images automatically, but you can add additional hero images here.

| File Name | Recommended Search | Source | Notes |
|-----------|-------------------|--------|-------|
| *auto-from-services* | N/A | Auto-populated | Hero slideshow uses service images below |

---

### 2. **Services** (`/images/services/`)
Used in the three service cards. Download professional industrial/energy images.

| File Name | Service | Recommended Search | Source | Dimensions |
|-----------|---------|-------------------|--------|------------|
| `upstream.jpg` | Upstream Operations | "oil rig", "drilling operations", "offshore drilling" | Unsplash, Pexels | 1200x800px+ |
| `midstream.jpg` | Midstream & LPG Infrastructure | "LPG storage", "gas terminal", "industrial tanks", "refinery" | Unsplash, Pexels | 1200x800px+ |
| `engineering.jpg` | Engineering & Logistics | "industrial construction", "heavy engineering", "port infrastructure" | Unsplash, Pexels | 1200x800px+ |

**Recommended Searches:**
- Unsplash: Search "energy infrastructure", "industrial facility", "renewable energy"
- Pexels: Search "oil and gas", "factory", "construction"
- Pixabay: Search "power plant", "energy", "industrial"

---

### 3. **Projects** (`/images/projects/`)
Featured project showcase image.

| File Name | Section | Recommended Search | Source | Dimensions |
|-----------|---------|-------------------|--------|------------|
| `lpg-terminal.jpg` | LPG Terminal Facility Project | "LPG terminal", "storage facility", "gas terminal at sunset", "industrial facility" | Unsplash, Pexels | 1920x1080px+ |

---

### 4. **Team** (`/images/team/`)
Professional team member headshots/photos.

| File Name | Team Member | Recommended Search | Source | Dimensions |
|-----------|-------------|-------------------|--------|------------|
| `emmanuel.jpg` | Emmanuel Uwandu (COO) | "professional headshot", "business portrait", "executive portrait" | Free stock photos, Unsplash | 400x500px+ |
| `motunrayo.jpg` | Motunrayo Adeogun (Business Dev) | "professional headshot", "business woman", "executive portrait" | Free stock photos, Unsplash | 400x500px+ |
| `joy.jpg` | Joy Makanjuola (HR Head) | "professional headshot", "business woman", "female executive" | Free stock photos, Unsplash | 400x500px+ |
| `dorcas.jpg` | Dorcas Oloniyo (Account Head) | "professional headshot", "female business portrait", "accounting professional" | Free stock photos, Unsplash | 400x500px+ |

---

## Recommended Platforms (Free)

### Best for Energy/Industrial Images:
1. **Unsplash** (unsplash.com)
   - Large collection of industrial and energy infrastructure
   - No attribution required
   - High resolution (free)

2. **Pexels** (pexels.com)
   - Professional industry photos
   - Free HD downloads
   - No attribution needed

3. **Pixabay** (pixabay.com)
   - Good for industrial facilities
   - High-quality free downloads
   - CC0 license

### Best for Illustrations (if you prefer illustrated style):
1. **Undraw** (undraw.co) - Customizable illustrations
2. **Storyset** (storyset.com) - Animated & static illustrations
3. **Flaticon** (flaticon.com) - Icons and illustrations

---

## Image Optimization Tips

Before saving images to these folders:

1. **Resize to appropriate dimensions:**
   - Service cards: 1200x800px
   - Hero/Projects: 1920x1080px
   - Team photos: 400x500px

2. **Compress for web:**
   - Use TinyPNG (tinypng.com) - reduces file size 50-80%
   - Or use ImageOptim (imageoptim.com)
   - Target: 100-300KB per image

3. **Format:**
   - Use `.jpg` for photographs
   - Use `.png` for graphics/illustrations with transparency
   - Use `.webp` for even better compression (modern browsers support it)

---

## Step-by-Step Instructions

1. **Download images** from your chosen platform (searches above)
2. **Optimize them** using TinyPNG or ImageOptim
3. **Rename them** to match the file names in the tables above
4. **Place them** in the corresponding folders:
   - `public/images/services/`
   - `public/images/projects/`
   - `public/images/team/`
5. **Save and refresh** your browser - images will appear instantly!

---

## File Naming Convention

- Use **lowercase** with **hyphens** for spaces: `lpg-terminal.jpg`
- Keep names **descriptive**: `upstream-drilling.jpg` ✅ vs `img1.jpg` ❌
- Include file extension: `.jpg`, `.png`, or `.webp`

---

## Troubleshooting

**Images not showing?**
- Ensure file names match exactly (case-sensitive on some systems)
- Check the browser console (F12) for 404 errors
- Clear browser cache (Ctrl+Shift+Delete) and refresh
- Ensure files are in the correct `public/images/` folder

**Images look blurry?**
- Download higher resolution originals
- Ensure you're downloading at least 1200px width for service images

**Site is slow?**
- Images might be too large
- Use TinyPNG to compress further
- Consider using `.webp` format

