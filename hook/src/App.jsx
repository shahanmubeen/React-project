1. VS Code ka terminal open karo.
2. Apne React/Vite project folder ma jao.

### Tailwind CSS install command

Agar ap ne Vite React project banaya ha to ye commands chalao:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

### Vite config ma add karo

`vite.config.js` file kholo aur ye code likho:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### CSS file ma add karo

`src/index.css` ya `App.css` ma ye likho:

```css
@import "tailwindcss";
```

### Main file ma css import karo

`main.jsx` ma:

```js
import './index.css'
```

### Run project

```bash
npm run dev
```

### Test karo

`App.jsx` ma:

```jsx
function App() {
  return (
    <h1 className="text-4xl font-bold text-blue-500">
      Tailwind CSS Working
    </h1>
  )
}

export default App
```

Agar blue text show ho jaye to Tailwind sahi install ho gaya.
