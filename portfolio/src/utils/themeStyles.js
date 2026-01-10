/**
 * Utility function to get theme-based background styles
 * @param {boolean} theme - true for light theme, false for dark theme
 * @returns {Object} Style object with backgroundColor or backgroundImage
 */
export const getThemeBackground = (theme) => {
  return theme
    ? { 
        backgroundImage: "linear-gradient(135deg, #e8edf5 0%, #d6e3f0 25%, #e0ebf5 50%, #d6e3f0 75%, #e8edf5 100%)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      } // More visible light gradient with soft blue tones
    : { backgroundImage: "linear-gradient(#01070E,#031d38)" };
};

/**
 * Utility function to get theme-based text color
 * @param {boolean} theme - true for light theme, false for dark theme
 * @returns {string} Color value
 */
export const getThemeTextColor = (theme) => {
  return theme ? "rgb(60, 60, 60)" : "white"; // Soft dark gray instead of harsh teal
};

/**
 * Utility function to get theme-based navbar background
 * @param {boolean} theme - true for light theme, false for dark theme
 * @returns {Object} Style object with backgroundColor
 */
export const getNavbarBackground = (theme) => {
  return theme
    ? { backgroundColor: "rgba(255, 255, 255, 0.95)" } // Soft white with slight transparency
    : { backgroundColor: "#191919" };
};

