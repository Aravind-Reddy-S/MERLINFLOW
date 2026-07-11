"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Accessibility, X, RefreshCcw, FileText, EyeOff, Search, 
  Zap, Eye, BookOpen, Navigation, Speaker, Glasses,
  Maximize, Type, Highlighter, Link2, ZoomIn, 
  AlignLeft, AlignCenter, AlignRight, 
  Moon, Sun, Contrast, Droplet, PaintBucket, 
  VolumeX, ImageOff, Book, ArrowUpDown, 
  MousePointer2, Pointer
} from "lucide-react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Profiles State
  const [profiles, setProfiles] = useState({
    seizure: false,
    lowVision: false,
    adhd: false,
    cognitive: false,
    keyboard: false,
    screenReader: false,
    olderAdults: false,
  });

  // Content Adjustments State
  const [content, setContent] = useState({
    scale: 0, // -1, 0, 1, 2
    readableFont: false,
    highlightTitles: false,
    highlightLinks: false,
    textMagnifier: false,
    fontSize: 0, // -1, 0, 1, 2
    alignment: "", // "left", "center", "right"
    lineHeight: 0, // 0, 1, 2
    letterSpacing: 0, // 0, 1, 2
  });

  // Color Adjustments State
  const [colors, setColors] = useState({
    contrast: "", // "dark", "light", "high"
    saturation: "", // "high", "low", "monochrome"
    textColor: "",
    titleColor: "",
    bgColor: "",
  });

  // Orientation Adjustments State
  const [orientation, setOrientation] = useState({
    muteSounds: false,
    hideImages: false,
    readMode: false,
    readingGuide: false,
    stopAnimations: false,
    readingMask: false,
    highlightHover: false,
    highlightFocus: false,
    bigCursor: "", // "black", "white"
  });

  // Apply CSS Classes based on state
  useEffect(() => {
    const html = document.documentElement;
    // Clear old classes
    html.className = html.className.replace(/\ba11y-[^\s]*\b/g, '').trim();

    // Profiles
    if (profiles.seizure) html.classList.add("a11y-seizure-safe");
    if (profiles.lowVision) html.classList.add("a11y-low-vision");
    if (profiles.adhd) html.classList.add("a11y-adhd");
    if (profiles.olderAdults) html.classList.add("a11y-older-adults");
    if (profiles.cognitive) html.classList.add("a11y-cognitive");

    // Content
    if (content.scale === 1) html.classList.add("a11y-scale-1");
    if (content.scale === 2) html.classList.add("a11y-scale-2");
    if (content.scale === -1) html.classList.add("a11y-scale-minus");

    if (content.fontSize === 1) html.classList.add("a11y-font-1");
    if (content.fontSize === 2) html.classList.add("a11y-font-2");
    if (content.fontSize === -1) html.classList.add("a11y-font-minus");

    if (content.lineHeight === 1) html.classList.add("a11y-line-height-1");
    if (content.lineHeight === 2) html.classList.add("a11y-line-height-2");

    if (content.letterSpacing === 1) html.classList.add("a11y-letter-spacing-1");
    if (content.letterSpacing === 2) html.classList.add("a11y-letter-spacing-2");

    if (content.alignment === "left") html.classList.add("a11y-align-left");
    if (content.alignment === "center") html.classList.add("a11y-align-center");
    if (content.alignment === "right") html.classList.add("a11y-align-right");

    if (content.readableFont) html.classList.add("readable-font");
    if (content.highlightTitles) html.classList.add("a11y-highlight-titles");
    if (content.highlightLinks) html.classList.add("highlight-links");
    if (content.textMagnifier) html.classList.add("text-xl");

    // Colors
    if (colors.contrast === "dark") html.classList.add("a11y-dark-contrast");
    if (colors.contrast === "light") html.classList.add("a11y-light-contrast");
    if (colors.contrast === "high") html.classList.add("high-contrast");
    if (colors.contrast === "high") html.classList.add("invert-colors"); // Using standard invert for high contrast fallback

    if (colors.saturation === "high") html.classList.add("a11y-high-saturation");
    if (colors.saturation === "low") html.classList.add("a11y-low-saturation");
    if (colors.saturation === "monochrome") html.classList.add("a11y-monochrome");

    if (colors.textColor) { html.style.setProperty('--a11y-text-color', colors.textColor); html.classList.add("a11y-custom-text"); }
    if (colors.titleColor) { html.style.setProperty('--a11y-title-color', colors.titleColor); html.classList.add("a11y-custom-title"); }
    if (colors.bgColor) { html.style.setProperty('--a11y-bg-color', colors.bgColor); html.classList.add("a11y-custom-bg"); }

    // Orientation
    if (orientation.hideImages) html.classList.add("a11y-hide-images");
    if (orientation.stopAnimations) html.classList.add("a11y-seizure-safe");
    if (orientation.readingMask) html.classList.add("a11y-adhd");
    if (orientation.highlightHover) html.classList.add("a11y-highlight-hover");
    if (orientation.highlightFocus) html.classList.add("a11y-highlight-focus");
    if (orientation.bigCursor === "black") html.classList.add("a11y-big-cursor-black");
    if (orientation.bigCursor === "white") html.classList.add("a11y-big-cursor-white");

  }, [profiles, content, colors, orientation]);

  const resetAll = () => {
    setProfiles({ seizure: false, lowVision: false, adhd: false, cognitive: false, keyboard: false, screenReader: false, olderAdults: false });
    setContent({ scale: 0, readableFont: false, highlightTitles: false, highlightLinks: false, textMagnifier: false, fontSize: 0, alignment: "", lineHeight: 0, letterSpacing: 0 });
    setColors({ contrast: "", saturation: "", textColor: "", titleColor: "", bgColor: "" });
    setOrientation({ muteSounds: false, hideImages: false, readMode: false, readingGuide: false, stopAnimations: false, readingMask: false, highlightHover: false, highlightFocus: false, bigCursor: "" });
    document.documentElement.style.removeProperty('--a11y-text-color');
    document.documentElement.style.removeProperty('--a11y-title-color');
    document.documentElement.style.removeProperty('--a11y-bg-color');
  };

  const handleProfileToggle = (key) => {
    setProfiles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleToggle = (stateObj, setter, key) => {
    setter(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRadio = (setter, key, val) => {
    setter(prev => ({ ...prev, [key]: prev[key] === val ? "" : val }));
  };

  const handleIncrement = (setter, key, max) => {
    setter(prev => ({ ...prev, [key]: Math.min(prev[key] + 1, max) }));
  };

  const handleDecrement = (setter, key, min) => {
    setter(prev => ({ ...prev, [key]: Math.max(prev[key] - 1, min) }));
  };

  const colorPalette = ["#1d4ed8", "#b91c1c", "#b45309", "#15803d", "#0f766e", "#ffffff", "#000000"];

  return (
    <div className="a11y-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="a11y-panel"
            role="dialog"
            aria-label="Accessibility Settings"
          >
            {/* Header */}
            <div className="a11y-header">
              <div className="header-actions">
                <button onClick={resetAll} className="header-btn"><RefreshCcw size={14} /> Reset Settings</button>
                <button className="header-btn"><FileText size={14} /> Statement</button>
                <button onClick={() => setIsOpen(false)} className="header-btn"><EyeOff size={14} /> Hide Interface</button>
              </div>
              <div className="search-bar">
                <Search size={16} color="#666" />
                <input 
                  type="text" 
                  placeholder="Unclear content? Search in dictionary..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="a11y-scrollable-content">
              
              {/* Profiles */}
              <div className="a11y-section">
                <h3 className="section-title">Customize your browsing experience</h3>
                <div className="profiles-list">
                  <ProfileRow label="Seizure Safety" desc="Reduce motion and visual triggers" icon={<Zap size={18}/>} active={profiles.seizure} onToggle={() => handleProfileToggle('seizure')} />
                  <ProfileRow label="Low Vision Support" desc="Improve clarity and contrast" icon={<Eye size={18}/>} active={profiles.lowVision} onToggle={() => handleProfileToggle('lowVision')} />
                  <ProfileRow label="ADHD Friendly" desc="Support focus and reduce distractions" icon={<BookOpen size={18}/>} active={profiles.adhd} onToggle={() => handleProfileToggle('adhd')} />
                  <ProfileRow label="Reading & Cognitive Support" desc="Simplify reading and navigation" icon={<Book size={18}/>} active={profiles.cognitive} onToggle={() => handleProfileToggle('cognitive')} />
                  <ProfileRow label="Keyboard Navigation" desc="Use website with the keyboard" icon={<Navigation size={18}/>} active={profiles.keyboard} onToggle={() => handleProfileToggle('keyboard')} />
                  <ProfileRow label="Screen Reader Compatibility" desc="Optimize for screen-readers" icon={<Speaker size={18}/>} active={profiles.screenReader} onToggle={() => handleProfileToggle('screenReader')} />
                  <ProfileRow label="Older Adults" desc="Enhance visibility and reading comfort" icon={<Glasses size={18}/>} active={profiles.olderAdults} onToggle={() => handleProfileToggle('olderAdults')} />
                </div>
              </div>

              {/* Content Adjustments */}
              <div className="a11y-section">
                <h3 className="section-title">Content Adjustments</h3>
                <div className="adjustments-grid">
                  <AdjustmentControl label="Content Scaling" icon={<Maximize size={20}/>} value={content.scale} onDec={() => handleDecrement(setContent, 'scale', -1)} onInc={() => handleIncrement(setContent, 'scale', 2)} isFull={true} />
                  <AdjustmentCard label="Readable Font" icon={<Type size={24}/>} active={content.readableFont} onClick={() => handleToggle(content, setContent, 'readableFont')} />
                  <AdjustmentCard label="Highlight Titles" icon={<Highlighter size={24}/>} active={content.highlightTitles} onClick={() => handleToggle(content, setContent, 'highlightTitles')} />
                  <AdjustmentCard label="Highlight Links" icon={<Link2 size={24}/>} active={content.highlightLinks} onClick={() => handleToggle(content, setContent, 'highlightLinks')} />
                  <AdjustmentCard label="Text Magnifier" icon={<ZoomIn size={24}/>} active={content.textMagnifier} onClick={() => handleToggle(content, setContent, 'textMagnifier')} />
                  
                  <AdjustmentControl label="Adjust Font Sizing" icon={<Type size={16}/>} value={content.fontSize} onDec={() => handleDecrement(setContent, 'fontSize', -1)} onInc={() => handleIncrement(setContent, 'fontSize', 2)} />
                  <AdjustmentCard label="Align Center" icon={<AlignCenter size={24}/>} active={content.alignment === "center"} onClick={() => handleRadio(setContent, 'alignment', 'center')} />
                  
                  <AdjustmentControl label="Adjust Line Height" icon={<ArrowUpDown size={16}/>} value={content.lineHeight} onDec={() => handleDecrement(setContent, 'lineHeight', 0)} onInc={() => handleIncrement(setContent, 'lineHeight', 2)} />
                  <AdjustmentCard label="Align Left" icon={<AlignLeft size={24}/>} active={content.alignment === "left"} onClick={() => handleRadio(setContent, 'alignment', 'left')} />
                  
                  <AdjustmentControl label="Adjust Letter Spacing" icon={<Type size={16}/>} value={content.letterSpacing} onDec={() => handleDecrement(setContent, 'letterSpacing', 0)} onInc={() => handleIncrement(setContent, 'letterSpacing', 2)} />
                  <AdjustmentCard label="Align Right" icon={<AlignRight size={24}/>} active={content.alignment === "right"} onClick={() => handleRadio(setContent, 'alignment', 'right')} />
                </div>
              </div>

              {/* Color Adjustments */}
              <div className="a11y-section">
                <h3 className="section-title">Color Adjustments</h3>
                <div className="color-grid">
                  <AdjustmentCard label="Dark Contrast" icon={<Moon size={24}/>} active={colors.contrast === 'dark'} onClick={() => handleRadio(setColors, 'contrast', 'dark')} />
                  <AdjustmentCard label="Light Contrast" icon={<Sun size={24}/>} active={colors.contrast === 'light'} onClick={() => handleRadio(setColors, 'contrast', 'light')} />
                  <AdjustmentCard label="High Contrast" icon={<Contrast size={24}/>} active={colors.contrast === 'high'} onClick={() => handleRadio(setColors, 'contrast', 'high')} />
                  
                  <AdjustmentCard label="High Saturation" icon={<Droplet size={24}/>} active={colors.saturation === 'high'} onClick={() => handleRadio(setColors, 'saturation', 'high')} />
                  <ColorPalette label="Adjust Text Colors" colors={colorPalette} activeColor={colors.textColor} onChange={(c) => handleRadio(setColors, 'textColor', c)} isDouble />
                  
                  <AdjustmentCard label="Monochrome" icon={<Droplet size={24}/>} active={colors.saturation === 'monochrome'} onClick={() => handleRadio(setColors, 'saturation', 'monochrome')} />
                  <ColorPalette label="Adjust Title Colors" colors={colorPalette} activeColor={colors.titleColor} onChange={(c) => handleRadio(setColors, 'titleColor', c)} isDouble />
                  
                  <AdjustmentCard label="Low Saturation" icon={<Droplet size={24}/>} active={colors.saturation === 'low'} onClick={() => handleRadio(setColors, 'saturation', 'low')} />
                  <ColorPalette label="Adjust Background Colors" colors={colorPalette} activeColor={colors.bgColor} onChange={(c) => handleRadio(setColors, 'bgColor', c)} isDouble />
                </div>
              </div>

              {/* Orientation Adjustments */}
              <div className="a11y-section">
                <h3 className="section-title">Orientation Adjustments</h3>
                <div className="orientation-grid">
                  <AdjustmentCard label="Mute Sounds" icon={<VolumeX size={24}/>} active={orientation.muteSounds} onClick={() => handleToggle(orientation, setOrientation, 'muteSounds')} />
                  <AdjustmentCard label="Hide Images" icon={<ImageOff size={24}/>} active={orientation.hideImages} onClick={() => handleToggle(orientation, setOrientation, 'hideImages')} />
                  <AdjustmentCard label="Read Mode" icon={<Book size={24}/>} active={orientation.readMode} onClick={() => handleToggle(orientation, setOrientation, 'readMode')} />
                  
                  <AdjustmentCard label="Reading Guide" icon={<AlignLeft size={24}/>} active={orientation.readingGuide} onClick={() => handleToggle(orientation, setOrientation, 'readingGuide')} />
                  <AdjustmentCard label="Useful Links" icon={<Link2 size={24}/>} active={false} onClick={() => {}} />
                  <div className="empty-slot"></div>

                  <AdjustmentCard label="Stop Animations" icon={<Zap size={24}/>} active={orientation.stopAnimations} onClick={() => handleToggle(orientation, setOrientation, 'stopAnimations')} />
                  <AdjustmentCard label="Reading Mask" icon={<BookOpen size={24}/>} active={orientation.readingMask} onClick={() => handleToggle(orientation, setOrientation, 'readingMask')} />
                  <AdjustmentCard label="Highlight Hover" icon={<MousePointer2 size={24}/>} active={orientation.highlightHover} onClick={() => handleToggle(orientation, setOrientation, 'highlightHover')} />
                  
                  <AdjustmentCard label="Highlight Focus" icon={<MousePointer2 size={24}/>} active={orientation.highlightFocus} onClick={() => handleToggle(orientation, setOrientation, 'highlightFocus')} />
                  <AdjustmentCard label="Big Black Cursor" icon={<Pointer size={24}/>} active={orientation.bigCursor === 'black'} onClick={() => handleRadio(setOrientation, 'bigCursor', 'black')} />
                  <AdjustmentCard label="Big White Cursor" icon={<Pointer size={24}/>} active={orientation.bigCursor === 'white'} onClick={() => handleRadio(setOrientation, 'bigCursor', 'white')} />
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="a11y-footer">
              Accessibility Platform By MerlinFlow
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button 
          className="a11y-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Accessibility Menu"
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          style={{ touchAction: "none" }}
        >
          <Accessibility size={32} strokeWidth={2.5} color="white" />
        </motion.button>
      )}

      
    </div>
  );
}

// Subcomponents for cleaner code
function ProfileRow({ label, desc, icon, active, onToggle }) {
  return (
    <div className="profile-row">
      <div className="profile-info">
        {icon}
        <div className="profile-text">
          <h4>{label}</h4>
          <p>{desc}</p>
        </div>
      </div>
      <div className={`toggle-switch ${active ? 'active' : ''}`} onClick={onToggle}>
        <span className="toggle-label">OFF</span>
        <div className="toggle-slider"></div>
        <span className="toggle-label">ON</span>
      </div>
    </div>
  );
}

function AdjustmentCard({ label, icon, active, onClick }) {
  return (
    <div className={`adj-card ${active ? 'active' : ''}`} onClick={onClick}>
      {icon}
      <span className="adj-label">{label}</span>
    </div>
  );
}

function AdjustmentControl({ label, icon, value, onDec, onInc, isFull }) {
  const displayVal = value === 0 ? "Default" : value > 0 ? `+${value}` : `${value}`;
  return (
    <div className={`adj-control ${isFull ? 'full' : ''}`}>
      <div className="control-header">{icon} {label}</div>
      <div className="control-buttons">
        <button className="ctrl-btn" onClick={onDec}>-</button>
        <span className="ctrl-value">{displayVal}</span>
        <button className="ctrl-btn" onClick={onInc}>+</button>
      </div>
    </div>
  );
}

function ColorPalette({ label, colors, activeColor, onChange }) {
  return (
    <div className="color-palette">
      <div className="palette-header">
        <span>{label}</span>
        <button className="cancel-btn" onClick={() => onChange("")}>Cancel</button>
      </div>
      <div className="colors-row">
        {colors.map((c, i) => (
          <div 
            key={i} 
            className={`color-circle ${activeColor === c ? 'active' : ''}`} 
            style={{ background: c }}
            onClick={() => onChange(c)}
          />
        ))}
      </div>
    </div>
  );
}
