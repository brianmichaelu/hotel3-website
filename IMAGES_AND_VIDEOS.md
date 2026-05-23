# Image and Video Assets Guide

## Required Images

All images should be placed in the `public/images/` directory and must be in PNG format.

### Images to Add:

1. **public/images/logo.png**
   - Recommended size: 200x200 px (square)
   - Format: PNG with transparency
   - Purpose: Hotel logo for navigation bar

2. **public/images/hero.png**
   - Recommended size: 1920x1080 px (16:9 aspect ratio)
   - Format: PNG (high quality)
   - Purpose: Hero section background (used when video doesn't load)

3. **public/images/room-standard.png**
   - Recommended size: 800x600 px
   - Format: PNG
   - Purpose: Standard room showcase image

4. **public/images/room-deluxe.png**
   - Recommended size: 800x600 px
   - Format: PNG
   - Purpose: Deluxe room showcase image

5. **public/images/room-executive.png**
   - Recommended size: 800x600 px
   - Format: PNG
   - Purpose: Executive suite showcase image

6. **public/images/dining.png**
   - Recommended size: 800x600 px
   - Format: PNG
   - Purpose: Fine dining/restaurant showcase

7. **public/images/pool.png**
   - Recommended size: 800x600 px
   - Format: PNG
   - Purpose: Swimming pool area (for facilities)

8. **public/images/gallery-1.png**
   - Recommended size: 600x500 px
   - Format: PNG
   - Purpose: Gallery lightbox image 1 (Lobby)

9. **public/images/gallery-2.png**
   - Recommended size: 600x500 px
   - Format: PNG
   - Purpose: Gallery lightbox image 2 (Pool)

10. **public/images/gallery-3.png**
    - Recommended size: 600x500 px
    - Format: PNG
    - Purpose: Gallery lightbox image 3 (Restaurant)

11. **public/images/gallery-4.png**
    - Recommended size: 600x500 px
    - Format: PNG
    - Purpose: Gallery lightbox image 4 (Guest Room)

## Required Video

**public/videos/hotel-video.mp4**
- Recommended size: 1920x1080 px (16:9 aspect ratio)
- Format: MP4 video file
- Duration: 20-60 seconds recommended
- Purpose: Autoplay cinematic video in hero and video showcase sections
- Specifications:
  - Video Codec: H.264
  - Audio: Optional (will be muted on autoplay)
  - File size: Keep under 50MB for optimal performance

## How to Add Images

1. Create your images or take photographs
2. Edit and optimize for web (compress, resize to recommended dimensions)
3. Save in PNG format for images and MP4 for video
4. Place the files in the exact directories specified above:
   - Images: `public/images/`
   - Video: `public/videos/`

## Image Naming Convention

- Use lowercase filenames
- Use hyphens for word separation: `image-name.png`
- Match the filenames exactly as specified above

## Important Notes

- **All images must be PNG format** (.png extension)
- **Video must be MP4 format** (.mp4 extension)
- Images will be served from `/images/filename.png`
- Video will be served from `/videos/hotel-video.mp4`
- The website has fallback to PNG images if MP4 video doesn't load
- Optimize images for web to ensure fast loading times
- Use high-quality photography to match the luxury resort aesthetic

## Next Steps

1. Prepare your luxury hotel images
2. Record or source a cinematic hotel video
3. Place files in the appropriate directories
4. Run `npm run dev` to test locally
5. Run `npm run build` to create production build
