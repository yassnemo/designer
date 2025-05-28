# Image Credits Implementation Guide

## Overview
The image credits feature has been successfully implemented to give proper attribution to image owners. The credits appear as small, unobtrusive overlays on article banner images.

## How to Use

### Adding Credits to Articles
To add image credits to any article, simply add a `bannerCredit` field to the article's frontmatter:

```yaml
---
title: 'Your Article Title'
abstract: 'Your article description...'
date: '2025-05-27'
banner: /static/your-banner-image.jpg
bannerCredit: 'Photo by <a href="https://unsplash.com/@photographer" target="_blank" rel="noopener noreferrer">Photographer Name</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>'
---
```

### Credit Format Examples

**Simple text credit:**
```yaml
bannerCredit: 'Photo by John Doe'
```

**Credit with link to photographer:**
```yaml
bannerCredit: 'Photo by <a href="https://example.com/photographer" target="_blank" rel="noopener noreferrer">John Doe</a>'
```

**Full Unsplash attribution:**
```yaml
bannerCredit: 'Photo by <a href="https://unsplash.com/@photographer" target="_blank" rel="noopener noreferrer">Photographer Name</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>'
```

**Custom creative commons attribution:**
```yaml
bannerCredit: 'Image by <a href="https://example.com" target="_blank" rel="noopener noreferrer">Artist Name</a> licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>'
```

## Technical Implementation

### Files Modified/Created

1. **`app/components/image-credit/image-credit.jsx`** - Main component
2. **`app/components/image-credit/image-credit.module.css`** - Styling
3. **`app/components/image-credit/index.js`** - Export file
4. **`app/layouts/post/post.jsx`** - Integration with Post layout

### Component Features

- **Responsive Design**: Adapts to mobile, tablet, and desktop viewports
- **Unobtrusive Styling**: Small, semi-transparent with backdrop blur
- **Accessible**: Proper contrast and hover states
- **Link Support**: Clickable links within credits
- **Conditional Rendering**: Only shows when `bannerCredit` is provided

### Styling Details

- Positioned absolutely in bottom-right corner of banner
- Semi-transparent dark background with blur effect
- Small font size with proper line height
- Subtle shadow for better readability
- Hover effects for increased visibility
- Responsive padding and positioning

## Design Principles

1. **Non-disruptive**: Credits don't interfere with the article reading experience
2. **Accessible**: Proper contrast ratios and keyboard navigation support
3. **Professional**: Consistent with the site's overall design aesthetic
4. **Flexible**: Supports various attribution formats and link structures

## Examples in Practice

The following articles have been updated with example credits:

- **Muse and Me**: Photo attribution to Nick Morrison on Unsplash
- **YMovies Web App**: Photo attribution to Felix Mooneeram on Unsplash
- **Awareness**: Photo attribution to Ali Kazal on Unsplash

## Browser Support

The image credits feature uses modern CSS features:
- `backdrop-filter` for blur effects (with `-webkit-` prefix for Safari)
- `color-mix()` for semi-transparent colors
- CSS custom properties (CSS variables)
- CSS Grid and Flexbox for layout

Fallbacks are provided for older browsers where needed.

## Future Enhancements

Potential improvements that could be added:
- Support for multiple image credits
- Integration with image metadata
- Automated credit extraction from image EXIF data
- Credit templates for common image sources
