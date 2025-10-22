# DIEX Soluções Digitais - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern tech/agency leaders (Vercel, Linear, Stripe) with bold typography, clean layouts, and strategic purple accents. This design-differentiated approach emphasizes visual impact to showcase DIEX's expertise in creating professional digital experiences.

## Core Design Elements

### A. Color Palette

**Dark Mode Foundation** (Primary Interface):
- Background Base: `0 0% 0%` (Pure Black)
- Surface: `0 0% 8%` (Dark Gray for cards)
- Primary Purple: `258 90% 66%` (Vibrant Purple - #8B5CF6)
- Purple Light: `258 90% 75%` (Hover/Accent)
- Purple Dark: `258 90% 56%` (Active States)
- Text Primary: `0 0% 100%` (White)
- Text Secondary: `0 0% 65%` (Muted Gray)

**Strategic Color Usage**:
- Purple for CTAs, highlights, and interactive elements
- White for primary text and emphasis
- Black backgrounds with subtle purple glows on key sections

### B. Typography

**Font Stack**: 
- Primary: 'Inter' via Google Fonts (headings, UI)
- Secondary: 'Space Grotesk' (hero title, impact statements)

**Scale**:
- Hero H1: text-6xl md:text-7xl lg:text-8xl font-bold
- Section H2: text-4xl md:text-5xl lg:text-6xl font-bold
- H3: text-2xl md:text-3xl font-semibold
- Body: text-base md:text-lg
- Small: text-sm

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Component spacing: gap-8 md:gap-12

**Grid Patterns**:
- Hero: Single column centered
- Benefits: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Portfolio: grid-cols-1 md:grid-cols-2 gap-8
- Footer: grid-cols-1 md:grid-cols-3

## Component Specifications

### Hero Section (100vh min-height)
- Full-viewport impact with gradient overlay
- Centered content with max-w-4xl
- H1 with gradient purple-to-white text effect
- Subtitle with text-secondary
- Dual CTA layout: Primary purple button + Secondary outline button with backdrop-blur
- Floating WhatsApp button (fixed bottom-8 right-8, z-50)

### Benefits Section
- 3-column grid (mobile stacks)
- Cards with bg-surface, rounded-2xl, p-8
- Purple gradient border on hover
- Icon (72x72) + Title + Description layout
- Subtle scale transform on hover

### Portfolio Section  
- 2-column masonry-style grid
- Project cards with image + overlay
- Purple gradient overlay on hover revealing project details
- Categories: "E-commerce", "Landing Pages", "Corporate Sites"
- Minimum 4-6 showcase items

### CTA Section
- Centered layout with max-w-3xl
- Bold headline + supporting text
- Large primary CTA button
- Contrasting background with subtle purple glow effect

### Footer
- 3-column layout: Logo/Tagline | Quick Links | Contact Info
- Social media icons with purple hover states
- Copyright and legal links
- Background: slightly lighter than base (bg-surface)

## Animations

**Principles**: Subtle, purposeful, performance-conscious
- Scroll-triggered fade-ins for sections (opacity + translateY)
- Hover transforms: scale(1.02) for cards
- Button hover: background color transitions (300ms)
- Hero entrance: staggered text animations (title → subtitle → CTAs)
- No continuous/looping animations

## Images

**Hero Section**: 
- Large background image of modern workspace/technology/abstract digital art
- Dark overlay (bg-black/60) to ensure text readability
- Image should convey professionalism and digital innovation
- Position: object-cover h-screen w-full

**Portfolio Section**:
- 4-6 high-quality screenshots of website projects
- Aspect ratio: 16:9 or 4:3
- Should showcase diverse project types
- Modern, professional web design examples

## Interactive Elements

**WhatsApp Button**:
- Fixed positioning (bottom-8 right-8)
- Purple background with white WhatsApp icon
- Pulse animation on load
- Direct link: `https://wa.me/5562996806651`
- Mobile: bottom-4 right-4 for thumb accessibility

**Buttons**:
- Primary: Purple background, white text, rounded-lg px-8 py-4
- Outline: Transparent with purple border, backdrop-blur-sm when over images
- Hover: Brightness increase, subtle shadow

## Responsive Behavior

- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Hero text scales from text-4xl to text-8xl
- Grid columns collapse to single column on mobile
- Padding reduces: py-32 → py-16 on mobile
- WhatsApp button scales down on mobile (56px → 48px)