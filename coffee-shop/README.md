# Cafe Rooka - קפה רוקא ☕

A modern, responsive web app for Cafe Rooka, a rural coffee cart located in Kibbutz Ein HaMifratz.

## Features
- Beautiful, mobile-friendly design
- Dynamic image gallery slider (powered by [react-slick](https://react-slick.neostack.com/))
- All food/place images are loaded automatically from `public/images/food`
- Contact info, Instagram link, and Google Maps location
- Easy to update and maintain

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm

### Installation
1. Clone or download this repository.
2. Place your food and coffee images in `public/images/food` (JPG, PNG, WEBP, GIF supported).
3. In the project root, run:
   ```bash
   npm install
   ```

### Running the App
```bash
npm start
```
This will start the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production
```bash
npm run build
```
This will generate a production build in the `build/` directory.

## Adding/Removing Gallery Images
- Add or remove image files in `public/images/food`.
- The list of images is generated automatically at build/start time (see `scripts/generateFoodImages.js`).
- No need to edit any code!

## Main Tech Stack
- React
- react-slick (image slider)
- slick-carousel (slider styles)

## Customization
- Edit contact info, opening hours, and map location in `src/App.js`.
- To change the logo, replace `public/images/logo/logo.jpg`.
- For advanced slider settings, see the `GalleryCarousel` component in `src/App.js`.

## License
This project is for Cafe Rooka and is open for educational and demonstration purposes. 