// src/App.js
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HTML");
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [exportOptions, setExportOptions] = useState({
    // NextJS options
    nextjsZipped: false,
    useAppDirectory: true,
    includeAssetsNext: true,
    includeCustomCodeNext: true,
    
    // HTML & CSS options
    htmlZipped: false,
    includeAssetsHTML: true,
    includeCustomCodeHTML: true
  });

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleOptionChange = (option) => {
    setExportOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleZippedClick = (type) => {
    if (type === "html") {
      setExportOptions(prev => ({ ...prev, htmlZipped: !prev.htmlZipped }));
    } else {
      setExportOptions(prev => ({ ...prev, nextjsZipped: !prev.nextjsZipped }));
    }
  };

  const handleDownload = () => {
    setShowDownloadMessage(true);
    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowDownloadMessage(false);
    }, 2000);
  };

  return (
    <div className="page-root">
      {/* EXPORT BUTTON */}
      <div className="center-area">
        <button className="export-btn" onClick={openPopup}>
          EXPORT CODE
        </button>
      </div>

      {/* POPUP OVERLAY */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="popup-header">
              <h2 className="popup-title">Code Export</h2>
              <button className="popup-close" onClick={closePopup}>
                ×
              </button>
            </div>

            {/* Subtitle */}
            <div className="popup-subtitle">
              Manage how you download your website's code.
            </div>
            <div className="inside-box">
            {/* Single Rectangular Toggle Button */}
            <div className="toggle-container">
              <button 
                className={`toggle-option ${activeTab === "HTML" ? "active" : ""}`}
                onClick={() => setActiveTab("HTML")}
              >
                HTML & CSS
              </button>
              <button 
                className={`toggle-option ${activeTab === "NextJS" ? "active" : ""}`}
                onClick={() => setActiveTab("NextJS")}
              >
                Next JS
              </button>
            </div>

            {/* Content */}
            <div className="popup-content">
              {/* HTML & CSS Tab Content */}
              {activeTab === "HTML" && (
                <div className="content-section">
                  <div className="options-group">
                    {/* No separate box - just inline elements */}
                    <div className="option-header-inline">
                      <div className="option-title-with-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1_116)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.13934 0L2.74416 17.9997L9.94631 20L17.168 17.998L18.7761 0H1.13934ZM15.2816 5.88867H6.83433L7.03615 8.14941H15.0814L14.4759 14.9268L9.94794 16.1816L5.42483 14.9268L5.11558 11.4583H7.33238L7.49025 13.221L9.94956 13.8835L9.95445 13.8818L12.4138 13.2178L12.6693 10.3548H5.01792L4.42385 3.67839H15.4818L15.2816 5.88867Z" fill="white" fillOpacity="0.8"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_116">
                              <rect width="17.6367" height="20" fill="white" transform="translate(1.13934)"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="option-main-title">Export as HTML & CSS</span>
                      </div>
                      <button 
                        className={`zipped-button ${exportOptions.htmlZipped ? 'active' : ''}`}
                        onClick={() => handleZippedClick("html")}
                      >
                        Zipped
                      </button>
                    </div>
                    
                    <label className="option-checkbox">
                      <input 
                        type="checkbox" 
                        checked={exportOptions.includeAssetsHTML}
                        onChange={() => handleOptionChange("includeAssetsHTML")}
                      />
                      <span className="checkmark"></span>
                      Include assets (images, styles, fonts, etc.)
                    </label>
                    
                    <label className="option-checkbox">
                      <input 
                        type="checkbox" 
                        checked={exportOptions.includeCustomCodeHTML}
                        onChange={() => handleOptionChange("includeCustomCodeHTML")}
                      />
                      <span className="checkmark"></span>
                      Include custom code
                    </label>
                  </div>

      

                  
                </div>
              )}

              {/* NextJS Tab Content */}
              {activeTab === "NextJS" && (
                <div className="content-section">
                  <div className="options-group">
                    {/* No separate box - just inline elements */}
                    <div className="option-header-inline">
                      <div className="option-title-with-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.29752 7.5C3.10002 8.06667 1.66669 9.0375 1.66669 10.1458C1.66669 11.9017 5.33752 13.3333 9.87502 13.3333C10.4917 13.3333 10.925 13.3008 11.5 13.2525" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.19751 13.2499C7.85335 12.7533 7.52585 12.3058 7.21418 11.7499C4.92168 7.66661 4.30751 3.60827 5.85585 2.68911C6.81418 2.10827 8.39501 2.89994 10.0008 4.56744" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.35752 12.8225C4.77252 15.0625 4.89085 16.7525 5.82418 17.3183C7.31002 18.2183 10.3134 15.6867 12.5267 11.6483C12.8267 11.09 13.0959 10.5408 13.3334 10" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 15.4333C11.6067 17.1 13.1808 17.8917 14.1483 17.3108C15.69 16.3925 15.0825 12.3342 12.7875 8.25C12.4675 7.68583 12.14 7.24667 11.8042 6.75" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14.7167 12.5C16.8933 11.9275 18.3333 10.9583 18.3333 9.85329C18.3333 8.09496 14.66 6.66663 10.1292 6.66663C9.50667 6.66663 9.07417 6.69079 8.5 6.73913" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.66669 10C6.90419 9.45004 7.17252 8.91004 7.47335 8.35171C9.67919 4.31504 12.6842 1.77671 14.1784 2.68421C15.1034 3.25004 15.23 4.93921 14.645 7.17838" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10.2166 10.0125H10.2083C10.2 10.1209 10.1083 10.2125 9.99165 10.2125C9.87581 10.2068 9.78449 10.1118 9.78331 9.99587C9.78331 9.87921 9.87498 9.78754 9.98331 9.78754H9.97498C10.0833 9.77921 10.1833 9.87921 10.1833 9.98754" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="option-main-title">Export as Next JS Project</span>
                      </div>
                      <button 
                        className={`zipped-button ${exportOptions.nextjsZipped ? 'active' : ''}`}
                        onClick={() => handleZippedClick("nextjs")}
                      >
                        Zipped
                      </button>
                    </div>
                    
                    <label className="option-checkbox">
                      <input 
                        type="checkbox" 
                        checked={exportOptions.useAppDirectory}
                        onChange={() => handleOptionChange("useAppDirectory")}
                      />
                      <span className="checkmark"></span>
                      Use 'app' directory (NextJS v13+)
                    </label>
                    
                    <label className="option-checkbox">
                      <input 
                        type="checkbox" 
                        checked={exportOptions.includeAssetsNext}
                        onChange={() => handleOptionChange("includeAssetsNext")}
                      />
                      <span className="checkmark"></span>
                      Include assets locally (images, styles, fonts, etc.)
                    </label>
                    
                    <label className="option-checkbox">
                      <input 
                        type="checkbox" 
                        checked={exportOptions.includeCustomCodeNext}
                        onChange={() => handleOptionChange("includeCustomCodeNext")}
                      />
                      <span className="checkmark"></span>
                      Include custom code
                    </label>
                  </div>
                </div>
                )}
              </div>
            </div>
                  
          </div>
        </div>
      )}
    </div>
  );
}