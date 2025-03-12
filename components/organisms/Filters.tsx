import React, { useState } from "react";
import { View } from "react-native";
import FilterItem from "../molecules/FilterItem";

const Filters = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);

  return (
    <View>
      <FilterItem label="GÉNERO" expanded={showGenre} onPress={() => setShowGenre(!showGenre)} options="Acción, Aventura, Battle Royale" />
      <FilterItem label="CARACTERÍSTICAS" expanded={showFeatures} onPress={() => setShowFeatures(!showFeatures)} options="Multijugador, Cross-Play" />
      <FilterItem label="PLATAFORMA" expanded={showPlatform} onPress={() => setShowPlatform(!showPlatform)} options="PC, PlayStation, Xbox" />
    </View>
  );
};

export default Filters;
