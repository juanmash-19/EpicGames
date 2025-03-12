import React from "react";
import { View, StyleSheet, Image } from "react-native";
import GameImage from "../atoms/GameImage";
import TextLabel from "../atoms/TextLabel";
import Button from "../atoms/Button";

interface NewsItemProps {
  image: any;
  title: string;
  description: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ image, title, description }) => {
  return (
    <View style={styles.newsItem}>
      <GameImage source={image} style={styles.image} />
      <TextLabel text={title} style={styles.title} />
      <TextLabel text={description} style={styles.description} />
      <Button text="Leer Más" onPress={() => console.log(`Leyendo: ${title}`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
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
});

export default NewsItem;
