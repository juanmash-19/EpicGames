import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const NewsComponent = () => {
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
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
});

export default NewsComponent;
