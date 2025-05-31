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

## Editing the Menu

To add, remove, or edit menu items:

1. Open the file `src/menuItems.js` in your code editor.
2. Each menu item is an object with `name`, `price`, and `description` fields.
3. Add a new item by adding a new object to the exported array, or edit/remove existing items as needed.

**Example:**
```js
const menuItems = [
  { name: 'Espresso', price: '₪8', description: 'Classic Italian espresso.' },
  { name: 'Cappuccino', price: '₪12', description: 'Espresso with steamed milk and foam.' },
  // Add more items below
  { name: 'New Item', price: '₪15', description: 'Description of the new item.' },
];

export default menuItems;
```

Your changes will appear automatically in the menu modal on the site after you save the file and reload the app.

## License
This project is for Cafe Rooka and is open for educational and demonstration purposes.

## Deploying a React App to GitHub Pages

This project (or any Create React App project) can be deployed to GitHub Pages using the `gh-pages` package.

### Setup
1. Install the gh-pages package:
   ```bash
   npm install --save gh-pages
   ```
2. In your `package.json`, add the following:
   - A `homepage` field with your GitHub Pages URL, e.g.:
     ```json
     "homepage": "https://your-username.github.io/your-repo-name"
     ```
   - Add a `deploy` script:
     ```json
     "deploy": "gh-pages -d build"
     ```

### Deploying
1. Build and deploy the app with:
   ```bash
   npm run deploy
   ```
2. Your site will be available at the URL specified in the `homepage` field.

For more details, see the [Create React App deployment guide](https://create-react-app.dev/docs/deployment/#github-pages). 