# Infinity Photo - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from luxury editorial photography brands and high-end portfolio sites with emphasis on visual storytelling, cinematic presentation, and sophisticated minimalism.

## Core Design Principles
- **Editorial Elegance**: Magazine-style layouts with generous white space and asymmetric grid systems
- **Visual Hierarchy**: Photography takes center stage with supporting typography
- **Emotional Resonance**: Design that conveys trust, timelessness, and artistic sophistication
- **Bali Aesthetics**: Warm, organic, with natural elegance

## Typography System

### Font Families
- **Primary (Serif)**: Playfair Display or Cormorant Garamond for headlines, section titles, and elegant moments
- **Secondary (Sans)**: Inter or Montserrat for body text, navigation, and supporting content
- **Accent**: Thin serif weights for taglines and poetic phrases

### Hierarchy
- **Hero/Section Titles**: 3xl-5xl serif, elegant letter-spacing
- **Subheadings**: xl-2xl serif with refined weights
- **Body Text**: base-lg sans-serif for readability
- **Captions**: sm-base serif italic for photo descriptions

## Layout System

### Spacing Primitives
Primary spacing units: **4, 6, 8, 12, 16, 20, 24** (Tailwind: p-4, p-6, p-8, etc.)
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Content margins: mx-auto with max-w-6xl to max-w-7xl

### Grid Structure
- **A4 Horizontal Inspiration**: Wide format with 16:9 ratio consciousness
- **Asymmetric Layouts**: 60/40 and 40/60 splits for text-image combinations
- **Gallery Grids**: 2-3 columns with varied image sizes for visual interest
- **Editorial Margins**: Generous side padding (px-8 to px-20 on desktop)

## Component Library

### Navigation
- Minimal top navigation: Logo left, menu items right with elegant spacing
- Transparent overlay on hero with subtle background blur on scroll
- Mobile: Slide-in menu with elegant transitions

### Hero Section
- Full-width cinematic hero image with subtle parallax effect
- Centered logo "INFINITY PHOTO" in large elegant serif
- Poetic tagline below in thin serif
- Minimal CTA button with blurred background overlay
- Height: 85-90vh for impactful first impression

### Section Components

**About Us**: 
- Side-by-side layout: Image (60%) + narrative text (40%)
- Pull quote in large serif for brand philosophy

**Vision & Mission**:
- Two elegant cards with gold accent borders
- Icon-free, typography-focused design

**Services**:
- 3-column grid (Wedding, Event, Lifestyle Portrait)
- Large category images with overlay text
- Hover: Subtle zoom and description reveal

**Why Choose Us**:
- 5 key points in staggered grid layout
- Minimalist icons (Heroicons) with gold accent
- Brief descriptions in clean sans-serif

**Equipment**:
- Categorized list layout with elegant dividers
- Clean typography presentation (no heavy graphics)

**Printed Products**:
- Showcase grid with product mockups
- Hardcover albums, custom USB, wooden frames

**Portfolio/Clients Gallery**:
- Masonry-style grid with varied image sizes
- Category filters (Wedding, Event, Lifestyle)
- Lightbox for full-screen viewing

**Collaboration Offer**:
- Centered content with elegant framing
- Partnership details with gold accent highlights
- Professional CTA

**Contact**:
- Split layout: Form (50%) + Info/Map (50%)
- Elegant form inputs with subtle borders
- Bali location emphasis

### Forms
- Clean minimal inputs with bottom border (no heavy outlines)
- Placeholder text in light gray
- Gold accent on focus states
- Submit button with subtle hover elevation

### Cards
- Subtle shadow for depth (not heavy drop shadows)
- Optional gold border accent (1px)
- Padding: p-8 to p-12

## Color Palette
- **Primary Background**: White (#FFFFFF)
- **Text Primary**: Near-black (#1A1A1A)
- **Accent Gold**: Warm gold (#C9A961 or #D4AF37)
- **Neutral Beige**: Soft warm beige (#F5F1E8 or #FAF8F3)
- **Text Secondary**: Warm gray (#6B6B6B)

Usage: Predominantly white backgrounds with beige sections for variation, gold for strategic highlights (borders, icons, CTAs).

## Images

### Required Images
1. **Hero**: Cinematic wide-angle photography shot with soft bokeh, warm natural lighting (couples or lifestyle portrait)
2. **About Section**: Behind-the-scenes or artistic setup shot showing photographer at work
3. **Services - Wedding**: Romantic couple moment with golden hour lighting
4. **Services - Event**: Dynamic event coverage with depth of field
5. **Services - Lifestyle**: Personal portrait with artistic composition
6. **Portfolio Gallery**: 9-12 high-quality showcase images across categories
7. **Products**: Mockups of albums, USB drives, framed prints
8. **Background Textures**: Subtle paper/canvas textures for section backgrounds

All images: High-resolution, cinematic feel, soft natural lighting, emotional storytelling, shallow depth of field.

## Animations
- **Minimal & Refined**: Fade-ins on scroll for section reveals
- **Subtle parallax** on hero image only
- **Smooth hover states**: Image zoom (scale 1.05) on service cards
- **Page transitions**: Smooth scroll behavior
- Avoid distracting motion; prioritize elegance over flashiness

## Accessibility
- Maintain 4.5:1 contrast ratios (dark text on light backgrounds)
- Large touch targets (min 44px) for mobile
- Semantic HTML structure for screen readers
- Alt text for all photography with descriptive captions