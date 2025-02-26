import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Index = () => {
  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-4 mb-16">
        <View className="flex flex-row justify-center items-center p-4">
          <Image source={require("../assets/logo.png")} className="w-40 h-20" resizeMode="contain" />
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 flex flex-row justify-around p-4 bg-black">
        <Link href="/home">
          <Icon name="home" size={30} color="#fff" />
        </Link>
        <Link href="/store">
          <Icon name="shopping-cart" size={30} color="#fff" />
        </Link>
        <Link href="/wishlist">
          <Icon name="heart" size={30} color="#fff" />
        </Link>
        <Link href="/profile">
          <Icon name="gift" size={30} color="#fff" />
        </Link>
      </View>
    </View>
  );
};

export default Index;
