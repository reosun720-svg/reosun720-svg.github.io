# VAVAV Header Logo Replacement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the published VAVAV header logo with the supplied horizontal JPG without changing other site behavior.

**Architecture:** Keep the existing semantic header and responsive CSS. Change only the logo asset contract, intrinsic dimensions, and asset file, then publish the resulting `main` branch.

**Tech Stack:** Static HTML/CSS, Node.js contract test, GitHub Pages

## Global Constraints

- Use `assets/vavav-logo.jpg` for the supplied JPG.
- Preserve the image aspect ratio at every viewport.
- Do not change copy, links, or `app-ads.txt`.
- Do not use subagents.

---

### Task 1: Replace the Header Logo Asset

**Files:**
- Modify: `tests/site-check.mjs`
- Modify: `index.html`
- Create: `assets/vavav-logo.jpg`
- Delete: `assets/vavav-logo.png`

**Interfaces:**
- Consumes: the user-provided horizontal JPG
- Produces: an `<img>` reference to `assets/vavav-logo.jpg`

- [ ] **Step 1: Write the failing test**

Update the site contract to require `assets/vavav-logo.jpg`, require the HTML JPG reference, and reject the obsolete PNG reference.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site-check.mjs`
Expected: FAIL because `assets/vavav-logo.jpg` does not exist.

- [ ] **Step 3: Write minimal implementation**

Copy the supplied JPG to `assets/vavav-logo.jpg`, update the header `<img>` source and intrinsic dimensions, and remove `assets/vavav-logo.png`.

- [ ] **Step 4: Run test and visual checks**

Run: `node tests/site-check.mjs`
Expected: `VAVAV site contract checks passed.`

Verify 390px and 1440px viewports have no horizontal overflow and the logo retains its aspect ratio.

- [ ] **Step 5: Commit and publish**

```bash
git add index.html tests/site-check.mjs assets/vavav-logo.jpg assets/vavav-logo.png
git commit -m "feat: replace VAVAV header logo"
git push origin main
```

Verify the public page and JPG URL return HTTP 200.
