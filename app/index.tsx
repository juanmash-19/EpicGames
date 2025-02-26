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

        <Text className="text-white text-2xl font-bold mb-4">Mi carrito</Text>

        <View className="bg-gray-900 p-4 rounded-lg flex flex-row items-center mb-4">
          <Image source={require("../assets/lego_fortnite.jpg")} className="w-24 h-24 rounded-lg" />
          <View className="ml-4 flex-1">
            <Text className="text-white text-lg font-bold">LEGO® Fortnite</Text>
            <Text className="text-gray-400">Fantasy, Violence 10+</Text>
            <TouchableOpacity className="bg-red-600 px-3 py-1 rounded mt-2">
              <Text className="text-white text-center">Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-white px-3 py-1 rounded mt-2">
              <Text className="text-white text-center">Lista de Deseos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-gray-900 p-4 rounded-lg mb-4">
          <Text className="text-white text-xl font-bold mb-2">Resumen de compra</Text>
          <Text className="text-gray-400">Precio: COP</Text>
          <Text className="text-gray-400">SubTotal: COP</Text>
        </View>

        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg text-center">
          <Text className="text-white font-bold text-center">Finalizar Compra</Text>
        </TouchableOpacity>
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
