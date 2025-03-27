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
    </View>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "center", 
  },
  image: {
    width: "80%", 
    height: 180, 
    borderRadius: 10,
    resizeMode: "cover",
    alignSelf: "center", 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center", 
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#8000FF", 
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "80%", 
    alignSelf: "center", 
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});



export default NewsItem;
