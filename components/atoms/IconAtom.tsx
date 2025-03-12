import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

interface IconProps {
  name: string;
  onPress?: () => void;
}

const IconAtom: React.FC<IconProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default IconAtom;
