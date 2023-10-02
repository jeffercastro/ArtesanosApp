import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Importa las acciones (actions) que definirás más adelante
import { toggleTheme, toggleIconStyle } from '../src/redux/themeActions';

function Settings(props) {
  // Usa las propiedades pasadas por Redux para obtener el estado actual
  const { theme, iconStyle, toggleTheme, toggleIconStyle } = props;

  // Función para cambiar el tema
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  };

  // Función para cambiar el estilo de iconos
  const handleIconStyleChange = () => {
    const newIconStyle = iconStyle === 'default' ? 'custom' : 'default';
    toggleIconStyle(newIconStyle);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Configuración</Text>
      </View>

      {/* Cuadro de opciones 1 */}
      <View style={styles.groupContainer}>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="account" size={24} color="#000" />
            <Text style={styles.optionText}>Cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="bell" size={24} color="#000" />
            <Text style={styles.optionText}>Notificaciones</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="security" size={24} color="#000" />
            <Text style={styles.optionText}>Seguridad</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="earth" size={24} color="#000" />
            <Text style={styles.optionText}>Idioma y Región</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cuadro de opciones 2 */}
      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Dispositivo</Text>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="volume-high" size={24} color="#000" />
            <Text style={styles.optionText}>Sonido</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="folder" size={24} color="#000" />
            <Text style={styles.optionText}>Almacenamiento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="wifi" size={24} color="#000" />
            <Text style={styles.optionText}>Conexiones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="earth" size={24} color="#000" />
            <Text style={styles.optionText}>Idioma y Región</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cuadro de opciones 3 */}
      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Apariencia</Text>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option} onPress={handleThemeChange}>
            <MaterialCommunityIcons name="palette" size={24} color="#000" />
            <Text style={styles.optionText}>Tema ({theme})</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={handleIconStyleChange}>
            <MaterialCommunityIcons name="format-paint" size={24} color="#000" />
            <Text style={styles.optionText}>Estilo de Iconos ({iconStyle})</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="#000" />
            <Text style={styles.optionText}>Modo Oscuro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Fondo blanco
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000', // Texto y iconos en negro
  },
  groupContainer: {
    marginBottom: 20, // Espacio inferior entre los grupos
  },
  groupTitle: {
    marginLeft: 15,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Texto en negro
  },
  optionContainer: {
    alignSelf: 'center',
    width: '90%',
    borderWidth: 1, // Borde sutil
    borderColor: 'rgba(0, 0, 0, 0.1)', // Borde con sombra
    borderRadius: 15, // Borde redondeado
    padding: 25, // Espaciado interno
    shadowColor: '#aaaaaa', // Color de sombra
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 0.5, // Radio de la sombra
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 200,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#000', // Texto en negro
  },
});

// Mapea el estado de Redux a las propiedades del componente
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  iconStyle: state.theme.iconStyle,
});

// Mapea las acciones (actions) de Redux a las propiedades del componente
const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (theme) => dispatch(toggleTheme(theme)),
  toggleIconStyle: (iconStyle) => dispatch(toggleIconStyle(iconStyle)),
});

// Conecta el componente a Redux utilizando connect
export default connect(mapStateToProps, mapDispatchToProps)(Settings);




