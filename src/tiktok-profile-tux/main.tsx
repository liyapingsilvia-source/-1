import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TikTokProfileTux } from './TikTokProfileTux';
import './tiktok-profile-tux.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TikTokProfileTux />
  </StrictMode>,
);
