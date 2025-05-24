import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./tokens.css";
import "./styles.css";
import {BrowserRouter} from "react-router";

export type LinkData = {
    page: string;
    displayText: string;
}

export type ChordData = {
    id: number;
    title: string;
    name: string;
    notes: string[];
    rarity: string;
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StrictMode>
          <App />
      </StrictMode>
  </BrowserRouter>,
)
