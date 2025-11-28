import React, { useState } from "react";
import img from "../img/contect/image.png";

// --- Custom Inline SVG Icons (Replacing react-icons/fa) ---
const MapMarkerAlt = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.2 51.7C177.3 22.9 203.8 0 224 0c14.2 0 27.6 6.8 36.3 18.5L343.9 146.4C371 182.2 384 227.3 384 272c0 119.3-100.8 240.2-183.1 228.8-49.9-7-89.2-22.3-118.8-41.9C27.9 443.3 0 376.5 0 288c0-50.6 15.6-99.3 43.1-137.9L172.2 51.7zm51.8 190.2c28 0 50.8-22.8 50.8-50.8s-22.8-50.8-50.8-50.8-50.8 22.8-50.8 50.8 22.8 50.8 50.8 50.8z"/></svg>
);
const PhoneAlt = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M349.8 82.3C306.5 61.2 258 50.8 209 50.8 138.8 50.8 74.9 83.1 33.7 136.2l128.5 128.5c4.7 4.7 12.3 4.7 17 0l85.8-85.8c4.7-4.7 4.7-12.3 0-17l-128.5-128.5c34.9-39.7 82.2-66 132-76.8 55.4-11.9 111.4 1 165 37.1 1.5 1 3 2.1 4.5 3.1-6.1-5.2-12.7-9.8-19.6-13.6-5.8-3.1-12-5.4-18.4-6.8-5.9-1.3-11.9-2.2-18.1-2.7zM472 260.6c-4.7-4.7-12.3-4.7-17 0l-85.8 85.8c-4.7 4.7-4.7 12.3 0 17l128.5 128.5c53.1-41.2 85.4-105 85.4-175.2 0-48.4-10.4-96.1-30.3-139.7-13.1-28.8-30.8-55.5-52.9-79.9-1.5-1.5-2.9-3-4.4-4.5 31.9 49.3 48.4 105.7 48.4 163.6 0 50.9-10.8 99.4-31.9 143l-128.5-128.5zM224 461.2c-50.9 0-99.4-10.8-143-31.9L161.8 300c4.7-4.7 12.3-4.7 17 0l85.8 85.8c4.7 4.7 4.7 12.3 0 17L117.1 487.3C160.7 508.4 208.4 518.8 257 518.8c70.2 0 134.1-32.3 175.3-85.4L303.8 297.8c-4.7-4.7-12.3-4.7-17 0L200 383.6c-4.7 4.7-12.3 4.7-17 0L328.5 528.1C289 559.8 238.4 576 186 576c-51.1 0-99.6-10.9-143.2-32L61 465c-4.7-4.7-12.3-4.7-17 0l-85.8 85.8C-10.5 491.4-16.7 443.6-16.7 395c0-70.2 32.3-134.1 85.4-175.3L374.8 61c4.7-4.7 12.3-4.7 17 0l85.8 85.8c4.7 4.7 4.7 12.3 0 17L374.8 243.6c-4.7 4.7-12.3-4.7-17 0L271.9 157.8c-4.7-4.7-12.3-4.7-17 0z"/></svg>
);
const Fax = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M16 64C16 28.7 44.7 0 80 0h352c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zm432 0c0-17.7-14.3-32-32-32H80c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V64zM240 192c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-32zm-64 0c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-32zm160 0c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-32zM80 304c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-32z"/></svg>
);
const Envelope = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm432 32L256 265.9 32 96h448zM32 400V145.7L241.6 312.3c5.3 4.1 11.9 6.2 18.4 6.2s13.1-2.1 18.4-6.2L480 145.7V400H32z"/></svg>
);

// --- 🎨 Color Palette & Style Variables ---
const primaryAccentColor = "#FC5B2F"; 
const secondaryTextColor = "#FFFFFF"; 
const lightGrayTextColor = "#B0B0B0"; 
const inputPlaceholderColor = "#B0B0B0"; 
const darkBackgroundOverlay = "rgba(0, 0, 0, 0.6)"; 
// Removed mainBackgroundOverlay variable as we now use background-image gradient for the dark overlay
const inputBorderColor = "rgba(255, 255, 255, 0.3)"; 

// --- ✏️ Typography Style ---
const fontStyle = {
  fontFamily: "'Open Sans', sans-serif",
};

// --- Background Image ---
const backgroundImage = img;

// --- Custom Styles for Layout, Animations & Hover Effects ---
const styles = {
  container: {
    width: '100%', 
    // FIX: Removed the separate overlay div and added a CSS gradient overlay directly to the background image.
    // This removes the zIndex conflict with the navigation bar.
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px 15px',
    color: secondaryTextColor,
    ...fontStyle,
    position: 'relative', // Keep relative positioning for flow
    animation: 'fadeInBackground 1.5s ease-out', 
  },
  // --- Layout Styles ---
  mainGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px', 
    width: '100%',
  },
  colLg6: {
    width: '100%',
    maxWidth: '580px', 
    flexGrow: 1,
  },
  infoGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px 20px', 
  },
  infoBoxContainer: {
    width: 'calc(50% - 10px)', 
    minWidth: '280px', 
    flexGrow: 1,
  },
  // --- Standard Styles ---
  // styles.mainOverlay is now DELETED because the background image handles the overlay.
  contentWrapper: { 
    // FIX: Set zIndex to auto/default so it does not interfere with the header/nav.
    // zIndex: 2, // Removed zIndex
    position: 'relative',
    width: '100%',
    maxWidth: '1200px', 
    margin: '0 auto', 
  },
  formCard: {
    backgroundColor: darkBackgroundOverlay,
    borderRadius: '8px',
    padding: '40px 30px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
    animation: 'slideInFromLeft 0.8s ease-out forwards',
    minHeight: '400px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contactInfoBox: {
    backgroundColor: darkBackgroundOverlay,
    borderRadius: '8px',
    padding: '20px 25px',
    display: 'flex',
    alignItems: 'flex-start',
    minHeight: '120px', 
    boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease-in-out',
    animation: 'slideInFromRight 0.8s ease-out forwards',
  },
  contactIcon: {
    fontSize: '2.5rem', 
    color: primaryAccentColor,
    marginRight: '15px', 
    flexShrink: 0,
    marginTop: '5px', 
    width: '30px',
  },
  infoTitle: { 
    color: primaryAccentColor,
    fontSize: '0.9rem', 
    fontWeight: 'bold',
    marginBottom: '5px',
    letterSpacing: '0.5px', 
  },
  infoDetail: { 
    color: lightGrayTextColor,
    fontSize: '0.9rem',
    lineHeight: '1.4',
    whiteSpace: 'pre-line', 
    marginBottom: '0',
  },
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${inputBorderColor}`,
    borderRadius: '0',
    color: secondaryTextColor,
    paddingLeft: '0',
    fontSize: '1.1rem',
    transition: 'border-color 0.3s',
    outline: 'none', 
    width: '100%', 
  },
  inputPlaceholder: {
    color: inputPlaceholderColor,
  },
  submitButton: {
    backgroundColor: primaryAccentColor,
    color: secondaryTextColor,
    fontWeight: '700',
    padding: '12px 30px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '1.2rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s, transform 0.2s',
    cursor: 'pointer',
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Custom message display instead of alert()
    document.getElementById('form-message').innerText = "Thank you for your message! We will get back to you shortly.";
    setTimeout(() => {
        document.getElementById('form-message').innerText = "";
    }, 5000);

    setFormData({ name: "", email: "", address: "", message: "" });
  };

  const formRowStyle = {
    display: 'flex',
    gap: '30px',
    marginBottom: '30px', 
    flexWrap: 'wrap',
  };
  const formColStyle = {
    flex: '1 1 45%', 
    minWidth: '250px', 
  };

  return (
    <div style={styles.container}>
      {/* --- CSS Keyframes & Global Styles --- */}
      <style>
        {`
          /* Ensure body allows scrolling */
          body { 
            margin: 0 !important; 
            padding: 0 !important; 
          }
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

          /* Keyframe animations */
          @keyframes fadeInBackground { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideInFromLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes slideInFromRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
          
          /* Custom hover effects & Input styling */
          .input-focus-dark:focus {
            background-color: transparent !important;
            box-shadow: none !important;
            border-bottom-color: ${primaryAccentColor} !important;
            color: ${secondaryTextColor} !important;
          }
          /* Placeholder styling for cross-browser consistency */
          .form-control::placeholder { color: ${inputPlaceholderColor} !important; opacity: 1; }
          .form-control:-moz-placeholder { color: ${inputPlaceholderColor} !important; opacity: 1; }
          .form-control::-moz-placeholder { color: ${inputPlaceholderColor} !important; opacity: 1; }
          .form-control:-ms-input-placeholder { color: ${inputPlaceholderColor} !important; }

          /* Hover effect for contact info boxes */
          .contact-box-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
          }
          /* Button hover effect */
          .btn-submit-hover:hover {
            background-color: #E64A19 !important;
            transform: translateY(-2px);
          }
        `}
      </style>

      {/* Main content wrapper - No separate overlay div is needed now */}
      <div style={styles.contentWrapper}>
        <div style={styles.mainGrid}>
          {/* --- Left Column: Contact Form --- */}
          <div style={{ ...styles.colLg6, animationDelay: '0.5s' }}>
            <div style={styles.formCard}>
                {/* Custom message display area */}
                <p 
                    id="form-message" 
                    className="text-center fw-bold" 
                    style={{ color: primaryAccentColor, minHeight: '1.5rem' }}
                ></p>
                <form onSubmit={handleSubmit}>
                    <div style={formRowStyle}>
                        {/* Name Input */}
                        <div style={formColStyle}>
                            <input
                                type="text"
                                className="form-control input-focus-dark"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </div>
                        {/* Email Input */}
                        <div style={formColStyle}>
                            <input
                                type="email"
                                className="form-control input-focus-dark"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </div>
                    </div>
                    {/* Address Input (Full Width) */}
                    <div style={{...formRowStyle, flex: 'none', gap: 0}}>
                        <div style={{ width: '100%', marginBottom: '30px' }}>
                            <input
                                type="text"
                                className="form-control input-focus-dark"
                                id="address"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                        </div>
                    </div>
                    {/* Message Textarea */}
                    <div style={{ marginBottom: '40px' }}>
                        <textarea
                            className="form-control input-focus-dark"
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <div style={{ textAlign: 'center' }}>
                        <button
                            type="submit"
                            className="btn-submit-hover"
                            style={styles.submitButton}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
          </div>

          {/* --- Right Column: Contact Details Grid --- */}
          <div style={styles.colLg6}>
            <div style={styles.infoGrid}>
              {[
                { icon: <MapMarkerAlt />, title: "OUR MAIN OFFICE", detail: "211, delanpur , ratlam, madhya pradesh, india" },
                { icon: <PhoneAlt />, title: "PHONE NUMBER", detail: "7247594672 (Toll Free)" },
                { icon: <Fax />, title: "FAX", detail: "7-123-456-7890" },
                { icon: <Envelope />, title: "EMAIL", detail: "kumkumporwal99@gmail.com" },
              ].map((item, index) => (
                <div 
                  style={{ ...styles.infoBoxContainer, animationDelay: `${0.7 + index * 0.2}s` }} 
                  key={index}
                >
                  <div className="contact-box-hover" style={styles.contactInfoBox}>
                    <div style={styles.contactIcon}>{item.icon}</div>
                    <div>
                      <h6 style={styles.infoTitle}>{item.title}</h6>
                      <p style={styles.infoDetail}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
