import React from "react";
import { ScrollView } from "react-native";
import NewsItem from "../molecules/NewsItem";

interface News {
  id: string;
  title: string;
  description: string;
  image: any;
}

const newsData: News[] = [
  {
    id: "1",
    title: "Dying Light 2",
    description: "Celebra su segundo aniversario con otros tres años de soporte a la vista",
    image: require("../../assets/ImgNoti1.png"),
  },
  {
    id: "2",
    title: "Guía para el Black Friday de la Epic Games Store",
    description: "¡Cupones Epic del 33 % infinitos y un 10 % en las recompensas de Epic!",
    image: require("../../assets/ImgNoti2.png"),
  },
  {
    id: "3",
    title: "Fab, Epic’s New Unified Content Marketplace, Launches Today!",
    description: "Fab es un destino único donde puedes descubrir, comprar, vender y compartir activos digitales.",
    image: require("../../assets/noticia4.png"),
  },
];

const NewsList: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
      {newsData.map((news) => (
        <NewsItem key={news.id} image={news.image} title={news.title} description={news.description} />
      ))}
    </ScrollView>
  );
};

export default NewsList;
