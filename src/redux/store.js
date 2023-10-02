import { createStore, combineReducers } from 'redux';

// Importa tus reducers aquí
import themeReducer from './themeReducer'; // Asegúrate de importar los reducers correctos

// Combina los reducers si tienes varios
const rootReducer = combineReducers({
  theme: themeReducer,
  // Agrega otros reducers aquí si los tienes
});

// Crea la tienda Redux
const store = createStore(rootReducer);

export default store;


