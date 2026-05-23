# Dar Serenity Resort - Luxury Hotel Website

A premium, fully responsive luxury hotel website built with Next.js and TypeScript. Inspired by luxury resort aesthetics but completely original design for a Dar es Salaam, Tanzania-based resort.

## Features

### 🏨 Complete Website Sections

1. **Navigation Bar**
   - Fixed, responsive navigation with smooth scrolling
   - Mobile-friendly hamburger menu
   - Quick "Book Now" button

2. **Hero Section**
   - Full-screen hero with video or fallback image
   - Dark overlay for text readability
   - Elegant headline and call-to-action buttons

3. **Video Showcase**
   - Cinematic video display (autoplay, muted, loop)
   - Descriptive content about the hotel experience
   - Fallback image if video unavailable

4. **About Section**
   - Premium storytelling about the resort
   - Highlights: Comfort, Hospitality, Privacy, Dining, Location

5. **Rooms Section**
   - Three room types: Standard, Deluxe, Executive
   - Image showcase with hover effects
   - Feature lists for each room
   - WhatsApp inquiry buttons

6. **Dining Section**
   - Restaurant showcase with images
   - Six dining feature highlights
   - Breakfast, local cuisine, and fine dining options

7. **Facilities Section**
   - 8 world-class facilities displayed
   - Icons and descriptions
   - Responsive grid layout

8. **Gallery Section**
   - 4-image gallery grid
   - Interactive lightbox with navigation
   - Hover effects and smooth transitions

9. **Contact Section**
   - Booking inquiry form
   - WhatsApp integration (+255689824682)
   - Email contact (lubrun.enterprises@gmail.com)
   - Form submits to WhatsApp with pre-filled message

10. **Footer**
    - Hotel information
    - Quick links with smooth scrolling
    - Contact details
    - Premium amenities summary
    - Copyright and legal links

### 🎨 Design Features

- **Luxury Color Scheme**
  - Cream (#F5F1E8)
  - Beige (#E8DCC8)
  - Dark Brown (#3D2817)
  - Gold (#D4AF37)

- **Typography**
  - Light, elegant fonts
  - Proper spacing and hierarchy
  - Premium feel throughout

- **Responsive Design**
  - Mobile-first approach
  - Tablet optimized
  - Desktop full experience
  - Smooth animations and transitions

### ⚙️ Technical Stack

- **Framework**: Next.js 16.2.6 (with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Router**: App Router (Next.js 13+)
- **Build**: Production-ready with optimizations

## Project Structure

```
hotel3-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── VideoShowcase.tsx
│   │   ├── AboutSection.tsx
│   │   ├── RoomsSection.tsx
│   │   ├── DiningSection.tsx
│   │   ├── FacilitiesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   │   ├── hero.png
│   │   ├── room-standard.png
│   │   ├── room-deluxe.png
│   │   ├── room-executive.png
│   │   ├── dining.png
│   │   ├── pool.png
│   │   ├── gallery-1.png
│   │   ├── gallery-2.png
│   │   ├── gallery-3.png
│   │   ├── gallery-4.png
│   │   └── logo.png
│   └── videos/
│       └── hotel-video.mp4
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm package manager

### Installation

1. **Navigate to the project**
```bash
cd hotel3-website
```

2. **Install dependencies** (already done)
```bash
npm install
```

3. **Add images and video**
   - See `IMAGES_AND_VIDEOS.md` for detailed instructions
   - Place PNG images in `public/images/`
   - Place MP4 video in `public/videos/`

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development
- Hot reload enabled for fast development
- TypeScript strict mode for type safety
- ESLint configured for code quality

## Building for Production

```bash
npm run build
```

Starts the production server:
```bash
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Component Details

### Navigation
- Client-side component with state management
- Smooth scrolling between sections
- Mobile hamburger menu with animation
- Fixed positioning with backdrop blur

### HeroSection
- Full-screen viewport height
- Video with fallback to image
- Dark overlay (40% opacity) for text readability
- Dual call-to-action buttons

### RoomsSection
- Map function for dynamic room cards
- WhatsApp integration for inquiries
- Hover effects on images
- Feature lists with checkmarks

### ContactSection
- Form validation
- WhatsApp integration with pre-filled messages
- Date picker for check-in/check-out
- Room type selection dropdown
- Email fallback option

### Gallery
- Interactive lightbox modal
- Navigation between images
- Smooth fade animations
- Click outside to close

## Customization Guide

### Colors
Edit `tailwind.config.ts` to change color scheme:
```typescript
colors: {
  cream: '#F5F1E8',
  beige: '#E8DCC8',
  brown: '#3D2817',
  gold: '#D4AF37',
}
```

### Contact Details
Update these files:
- `app/components/Navigation.tsx` - Navigation contact
- `app/components/RoomsSection.tsx` - Room inquiries
- `app/components/ContactSection.tsx` - Contact form
- `app/components/Footer.tsx` - Footer contact

### Text Content
Edit component files to update:
- Hotel name and descriptions
- Section headlines
- Feature descriptions
- Contact information

## Performance

- ✅ Optimized images with next/image
- ✅ Production build uses Turbopack
- ✅ Lazy loading for off-screen components
- ✅ Smooth CSS transitions and animations
- ✅ Mobile-optimized experience

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## SEO

- Metadata configured in `page.tsx`
- Semantic HTML structure
- Open Graph ready for social sharing
- Mobile viewport optimized

## Form Integration

The contact form sends messages via WhatsApp using:
- Phone: +255689824682
- URL format: `https://wa.me/[number]?text=[message]`

For email, use: `lubrun.enterprises@gmail.com`

## Troubleshooting

### Build Errors
1. Ensure Node.js version 18+ is installed
2. Delete `node_modules` and run `npm install` again
3. Clear `.next` folder: `rm -rf .next`

### Images Not Showing
1. Verify PNG files are in `public/images/`
2. Check filenames match exactly (case-sensitive)
3. Use path format: `/images/filename.png`

### Video Not Playing
1. Verify MP4 file is in `public/videos/`
2. Check file is valid MP4 format
3. Ensure file size is reasonable (<50MB)

## Deployment

Deploy to Vercel (recommended for Next.js):

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push
4. Add environment variables if needed

Or deploy to your own server:
```bash
npm run build
npm start
```

## License

© 2026 Dar Serenity Resort. All rights reserved.

## Support

For inquiries:
- 📱 WhatsApp: +255689824682
- 📧 Email: lubrun.enterprises@gmail.com

---

**Built with ❤️ using Next.js and TypeScript**
