// themeActions.js
// themeActions.js
export const toggleTheme = (theme) => {
    return {
      type: 'TOGGLE_THEME',
      theme, // El nuevo tema que deseas establecer (puede ser 'light' o 'dark')
    };
  };
  
  export const toggleIconStyle = (iconStyle) => {
    return {
      type: 'TOGGLE_ICON_STYLE',
      iconStyle, // El nuevo estilo de iconos que deseas establecer (por ejemplo, 'default', 'outlined', 'filled', etc.)
    };
  };
  
  