import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { About, Template, ComingSoon } from "./routes/page";
import { Crochet, Music, MusicDay, Jazzcats } from "./routes/activities";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,
         Routes,
         Route
       } from "react-router-dom"

const reload = () => window.location.reload();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/template" element={<Template />} />
        <Route path="/comingsoon" element={<ComingSoon />} />

        <Route path="/activities/musicday" element={<MusicDay />} />
        <Route path="/activities/jazzcats" element={<Jazzcats />} />
        <Route path="/activities/music" element={<Music />} />
        <Route path="/activities/crochet" element={<Crochet />} />
        <Route path="/activities/art" element={<ComingSoon />} />
        <Route path="/activities/archive" element={<ComingSoon />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
