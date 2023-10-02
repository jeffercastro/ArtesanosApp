// themeReducer.js
const initialState = {
    theme: 'light', // Tema inicial (puede ser 'light' o 'dark')
    iconStyle: 'default', // Estilo de iconos inicial
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: action.theme,
        };
      case 'TOGGLE_ICON_STYLE':
        return {
          ...state,
          iconStyle: action.iconStyle,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  