import React from "react";
import { View, StyleSheet } from "react-native";
import TextLabel from "../../../components/atoms/TextLabel";
import NewsList from "../../../components/organisms/NewsList";

const NewsComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextLabel text="Noticias" style={styles.header} />
      <NewsList />
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
});

export default NewsComponent;
