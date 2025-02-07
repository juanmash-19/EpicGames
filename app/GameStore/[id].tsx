import { View, Text, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const games = {
  "1": { title: "LEGO Fortnite", description: "Mundos abiertos con LEGO y Fortnite.", price: "$19.99" },
  "2": { title: "Otro Juego", description: "Descripción breve del juego.", price: "$29.99" },
};

const GameDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const game = games[id as keyof typeof games];

  if (!game) {
    return <Text className="text-white text-xl">Juego no encontrado</Text>;
  }

  return (
    <View className="h-full bg-black p-5">
      <Text className="text-white text-3xl">{game.title}</Text>
      <Text className="text-gray-300 text-lg my-4">{game.description}</Text>
      <Text className="text-green-400 text-xl mb-4">{game.price}</Text>
      <Button title="Volver a la tienda" onPress={() => router.back()} />
    </View>
  );
};

export default GameDetails;
