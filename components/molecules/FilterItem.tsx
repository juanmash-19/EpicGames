import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FilterItem = ({ label, expanded, onPress, options }) => (
  <View>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      <AntDesign name={expanded ? "up" : "down"} size={20} color="white" />
    </TouchableOpacity>
    {expanded && <Text style={styles.options}>{options}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  options: {
    color: "#aaa",
    padding: 10,
    fontSize: 14,
  },
});

export default FilterItem;
