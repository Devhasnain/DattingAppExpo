import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "../../styles/global.style";
import UserAvatar from "../UserAvatar";

const {
  dflex,
  flexRow,
  itemsCenter,
  justifyBetween,
  gap14,
  py8,
  px12,
  flexColumn,
  gap2,
} = styles;

const Header = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[gap14, px12, py8]}
      decelerationRate={"normal"}
    >
      <View style={[dflex, flexColumn, gap2, itemsCenter]}>
        <UserAvatar image={"adsd"} size={80} />
        <Text>Add Story</Text>
      </View>
      {[0, 0, 0, 0, 0, 0].map((item, index) => (
        <View key={index} style={[dflex, flexColumn, gap2, itemsCenter]}>
          <UserAvatar image={"adsd"} size={80} />
          <Text>username</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Header;
