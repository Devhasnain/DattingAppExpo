import { TouchableOpacity, View } from "react-native";
import React from "react";
import ImagesCarousel from "./ImagesCarousel";
import styles from "../../styles/global.style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text } from "react-native-paper";

const { dflex, flexRow, itemsCenter, justifyBetween, px12, gap6, pt1, pb1 } = styles;

const PostBody = () => {
  return (
    <>
      <ImagesCarousel />
      <View style={[dflex, flexRow, itemsCenter, justifyBetween, px12, pt1]}>
        <View style={[dflex, flexRow, itemsCenter, gap6]}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={25} />
          </TouchableOpacity>
          <Text>102 likes</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={28} />
        </TouchableOpacity>
      </View>
      <View style={[px12]}>
        <View style={[dflex,flexRow, itemsCenter, gap6, pt1, pb1]}>
          <Ionicons name="location-outline" size={20} />
          <Text>Karachi</Text>
        </View>
      <Text>3 days ago</Text>
      </View>
    </>
  );
};

export default React.memo(PostBody);
