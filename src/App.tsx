import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';

// Import new profile components
import { StatusBar } from './components/profile/StatusBar';
import { NavBar } from './components/profile/NavBar';
import { NavBarCollapsed } from './components/profile/NavBarCollapsed';
import { ProfileHeader } from './components/profile/ProfileHeader';
import { BioLinks } from './components/profile/BioLinks';
import { IconTabBar } from './components/profile/IconTabBar';
import { VideoGrid } from './components/profile/VideoGrid';
import { BottomNavBar } from './components/profile/BottomNavBar';
import { SettingsModal } from './components/SettingsModal';
import { BackgroundEditor } from './components/profile/BackgroundEditor';

// --- Types ---
interface Post {
  id: number;
  imageUrl: string;
  views?: string;
  label?: string;
  isDraft?: boolean;
  isPinned?: boolean;
}

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showBackgroundEditor, setShowBackgroundEditor] = useState(false);
  const [profileBackground, setProfileBackground] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const targetHeight = 844 + 40; // 844px + some margin
      const targetWidth = 390 + 40;
      
      const scaleH = viewportHeight / targetHeight;
      const scaleW = viewportWidth / targetWidth;
      
      setScale(Math.min(1, scaleH, scaleW));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSaveBackground = (imageData: string) => {
    setProfileBackground(imageData);
    setShowBackgroundEditor(false);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const threshold = 150;
      setIsScrolledPastHeader(scrollTop > threshold);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f0f0] overflow-hidden">
      {/* iPhone frame - 390x844 from Figma */}
      <div
        className="relative flex flex-col overflow-hidden bg-white shadow-2xl origin-center transition-transform duration-300"
        style={{ 
          width: 390, 
          height: 844, 
          borderRadius: 44,
          backgroundColor: '#ffffff',
          transform: `scale(${scale})`
        }}
      >
        <AnimatePresence>
          {showSettings && (
            <SettingsModal onClose={() => setShowSettings(false)} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showBackgroundEditor && (
            <BackgroundEditor 
              onSave={handleSaveBackground} 
              onClose={() => setShowBackgroundEditor(false)} 
            />
          )}
        </AnimatePresence>

        <div className="flex flex-col flex-1 min-h-0 relative">
          {/* UI Layer */}
          <div className="relative z-10 flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Status Bar + Nav Bar group - fixed at top */}
            <StatusBar lightMode={!!profileBackground && !isScrolledPastHeader} />
            <div className="relative" style={{ height: 44 }}>
              {/* Expanded NavBar */}
              <div 
                className="absolute inset-0 transition-opacity duration-200"
                style={{ opacity: isScrolledPastHeader ? 0 : 1, pointerEvents: isScrolledPastHeader ? 'none' : 'auto' }}
              >
                <NavBar 
                  onOpenSettings={() => setShowSettings(true)} 
                  lightMode={!!profileBackground}
                />
              </div>
              {/* Collapsed NavBar */}
              <div 
                className="absolute inset-0 transition-opacity duration-200"
                style={{ opacity: isScrolledPastHeader ? 1 : 0, pointerEvents: isScrolledPastHeader ? 'auto' : 'none' }}
              >
                <NavBarCollapsed 
                  onOpenSettings={() => setShowSettings(true)}
                  username="Coldplay"
                />
              </div>
            </div>

            {/* Scrollable content area */}
            <LayoutGroup>
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex-1 min-h-0 overflow-y-auto relative"
              >
                {/* Profile Background - scrolls with content */}
                {profileBackground && (
                  <div 
                    className="absolute top-0 left-0 right-0 z-0 overflow-clip"
                    style={{ height: 238 }}
                  >
                    {/* Image layer - 154px */}
                    <div className="absolute top-0 left-0 right-0" style={{ height: 154 }}>
                      <img 
                        src={profileBackground} 
                        alt="" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Subtle blur in transition zone near ID */}
                    <div 
                      className="absolute left-0 right-0"
                      style={{ 
                        top: 95,
                        height: 60,
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
                      }}
                    />
                    {/* White gradient: transition centered at name/ID junction */}
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.9) 60%, rgb(255,255,255) 67%)'
                      }}
                    />
                  </div>
                )}

                <div className="relative z-20">
                  {/* Profile Header with Avatar, Name, Stats */}
                  <div 
                    className="cursor-pointer"
                    onClick={() => setShowBackgroundEditor(true)}
                  >
                    <ProfileHeader />
                  </div>

                  {/* Bio & Links */}
                  <BioLinks lightMode={false} />

                  {/* Content section */}
                  <motion.div 
                    layout
                    transition={{ 
                      layout: { duration: 0.25, ease: "easeOut" } 
                    }}
                    className="flex flex-col items-center mt-1" 
                    style={{ gap: 1 }}
                  >
                    {/* Tab bar */}
                    <IconTabBar lightMode={false} />

                    {/* Video post grid */}
                    <VideoGrid />
                  </motion.div>
                </div>
              </div>
            </LayoutGroup>
          </div>

          {/* Bottom Nav Bar - fixed at bottom */}
          <div className="relative z-20">
            <BottomNavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

