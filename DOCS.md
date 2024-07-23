# React App

Install:

```bash
npx create-react-app chirper-frontend
cd chirper-frontend
```

Install axios (use to call API endpoints):

```bash
npm install axios
```

Install React Routing package:

```bash
npm react-router-dom
```

Install TailwindCSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then include `src/index.css` in `src/index.js` if not yet included:

```js
import './index.css';
```
