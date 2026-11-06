# Image Library

All images in this repository are published automatically to an online gallery.

**Gallery:** https://omoicreative.github.io/vetaion.github.io/

## Find and share an image

1. Open the gallery link above.
2. Scroll through the images, or type part of a filename into the search box.
3. Click an image to open a larger preview.
4. Click **Copy image URL** to copy a direct link to the image. Anyone with the link can open the image.
   Click **Download** to save the original file.

You can also copy a link without opening the preview. Click the small copy icon next to any filename.

## Add new images

1. Open this repository on GitHub.
2. Click **Add file** → **Upload files**.
3. Drag your images into the page. PNG, JPG, WebP, GIF, SVG and AVIF are supported.
4. Scroll down and click **Commit changes**.

The gallery updates by itself after about 1–2 minutes. Refresh the page to see the new images.

> Tip: GitHub accepts files up to 25 MB each and up to 100 files at a time through the website.
> To upload into a folder, open that folder first, then click **Add file** → **Upload files**.

## Delete an image

1. Open this repository on GitHub and click the image file.
2. Click the **⋯** menu (top right of the file) → **Delete file**.
3. Click **Commit changes**.

The image disappears from the gallery after the next update, and its link stops working.

## Replace an image

To keep the same link, upload a new file with **exactly the same filename** in the same folder. GitHub replaces the old one.
The link stays the same and now shows the new image. It can take a few minutes before every browser shows the new version.

## How publishing works

Every time something changes in this repository, GitHub rebuilds and republishes the gallery automatically.
There's nothing to install and no buttons to press.

To check on an update, open the **Actions** tab in the repository. A green check means the gallery is live. A red cross means something went wrong. Click it to see what happened.

---

<details>
<summary>Technical notes</summary>

- `index.html` is the whole gallery (HTML, CSS and JS in one file, no dependencies).
- `scripts/build-manifest.mjs` scans the repository for images and writes `images.json`. Folders are scanned recursively. `.git`, `.github` and `scripts` are skipped.
- `.github/workflows/pages.yml` runs that script and deploys the site to GitHub Pages on every push to `main`.
- `images.json` is generated during deployment and is not committed.
- To preview locally, run `node scripts/build-manifest.mjs && python3 -m http.server`, then open http://localhost:8000.

</details>
