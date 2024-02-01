// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css'
import cursorInit from "./cursor.js";

cursorInit()
export default DefaultTheme