import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";  // Importación de Icon

const NewsComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>  
        <Text style={styles.header}>Noticias</Text>

        <View style={styles.newsItem}>
          <Image source={require("../../assets/ImgNoti1.png")} style={styles.image} />
          <Text style={styles.title}>Dying Light 2</Text>
          <Text style={styles.description}>
            Celebra su segundo aniversario con otros tres años de soporte a la vista
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Leer Más</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newsItem}>
          <Image source={require("../../assets/ImgNoti2.png")} style={styles.image} />
          <Text style={styles.title}>Guía para el Black Friday de la Epic Games Store</Text>
          <Text style={styles.description}>
            ¡Cupones Epic del 33 % infinitos y un 10 % en las recompensas de Epic!
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Leer Más</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newsItem}>
          <Image source={require("../../assets/noticia3.png")} style={styles.image} />
          <Text style={styles.title}>Fab, Epic’s New Unified Content Marketplace, Launches Today!</Text>
          <Text style={styles.description}>
            Fab es un destino único donde puedes descubrir, comprar, vender y compartir activos digitales, ¡y ya está disponible!
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Leer Más</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newsItem}>
          <Image source={require("../../assets/noticia4.png")} style={styles.image} />
          <Text style={styles.title}>Ponte al día con las grandes novedades del Unreal Fest Seattle 2024</Text>
          <Text style={styles.description}>
            Acaba de finalizar la presentación de Unreal Fest Seattle, donde celebramos nuestro ecosistema de desarrolladores y creadores y las increíbles cosas que están creando con Unreal Engine y Unreal Editor for Fortnite (UEFN).
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Leer Más</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newsItem}>
          <Image source={require("../../assets/noticia5.png")} style={styles.image} />
          <Text style={styles.title}>Disney y Epic Games crearán un universo de juegos y entretenimiento expansivo y abierto conectado a Fortnite</Text>
          <Text style={styles.description}>
            Hoy Epic Games y Walt Disney Company anuncian que colaborarán en un nuevo universo abierto, persistente y social que dará vida a las historias y experiencias de Disney, interoperando con Fortnite y sus más de 100 millones de jugadores y creadores activos.
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Leer Más</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 🔹 Barra de Navegación */}
      <View style={styles.bottomNav}>
        <Icon name="home" size={25} color="#fff" />
        <Icon name="shopping-cart" size={25} color="#fff" />
        <Icon name="heart" size={25} color="#fff" />
        <Icon name="gift" size={25} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 15,
  },
  newsItem: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  readMore: {
    color: "#00aaff",
    fontWeight: "bold",
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default NewsComponent;
