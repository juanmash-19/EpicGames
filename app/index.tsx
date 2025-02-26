import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Index = () => {
  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-4 mb-16">
        <View className="flex flex-row justify-center items-center p-4">
          <Image source={require("../assets/logo.png")} className="w-40 h-20" resizeMode="contain" />
        </View>

        <View className="gap-6">
          <View className="bg-gray-900 p-4 rounded-lg">
            <Image source={require("../assets/prince_of_persia.jpg")} className="w-full h-40 rounded-lg" />
            <Text className="text-white text-xl mt-2">Prince of Persia: The Lost Crown</Text>
            <Text className="text-gray-400">Sumérgete en un emocionante y sofisticado juego de plataformas...</Text>
            <Text className="text-white font-bold">COP 199,900</Text>
          </View>

          <View className="bg-gray-900 p-4 rounded-lg">
            <Image source={require("../assets/lego_fortnite.jpg")} className="w-full h-40 rounded-lg" />
            <Text className="text-white text-xl mt-2">LEGO® Fortnite</Text>
            <Text className="text-gray-400">Explora vastos mundos abiertos donde la magia de LEGO...</Text>
            <Text className="text-white font-bold">Gratis</Text>
          </View>

          <View className="bg-gray-900 p-4 rounded-lg">
            <Image source={require("../assets/juego3.png")} className="w-full h-40 rounded-lg" />
            <Text className="text-white text-xl mt-2">Honkai: Star Rail es el nuevo RPG de fantasía espacial de HoYovers</Text>
            <Text className="text-gray-400">Sube al Expreso Astral y descubre las maravillas infinitas de la galaxia en este viaje lleno de emoción y aventuras.</Text>
            <Text className="text-white font-bold">COP 99,900</Text>
          </View>

          <View className="bg-gray-900 p-4 rounded-lg">
            <Image source={require("../assets/juego4.png")} className="w-full h-40 rounded-lg" />
            <Text className="text-white text-xl mt-2">Infinity Nikki, the fifth installment in the beloved Nikki series by Infold Game</Text>
            <Text className="text-gray-400">cozy open-world game. Utilizing the UE5 engine, this multi-platform game features platforming, puzzle-solving</Text>
            <Text className="text-white font-bold">COP 300,000</Text>
          </View>
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
