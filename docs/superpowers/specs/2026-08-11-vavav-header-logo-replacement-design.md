# VAVAV Header Logo Replacement Design

## Goal

Replace the square header logo with the user-provided horizontal JPG logo while preserving the existing black-and-white site design and responsive layout.

## Scope

- Add the supplied image as `assets/vavav-logo.jpg`.
- Update the header image reference and intrinsic dimensions to match the new horizontal asset.
- Keep the existing responsive maximum-width behavior so the image scales without distortion.
- Remove the obsolete PNG asset after the replacement is verified.
- Do not change site copy, navigation, support details, privacy link, or `app-ads.txt`.

## Verification

- Contract test requires the JPG reference and file.
- Existing site contract checks continue to pass.
- Desktop and mobile rendering have no horizontal overflow or distorted logo.
- Public GitHub Pages main page and logo asset return HTTP 200 after deployment.
