import { TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../../styles/global.style";
import { Avatar, Divider, Text } from "react-native-paper";
import StoryGradient from "../StoryGradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import UserAvatar from "../UserAvatar";

const {
  dflex,
  flexRow,
  itemsCenter,
  justifyBetween,
  gap6,
  flexColumn,
  gap2,
  py8,
  px12,
} = styles;

const Header = () => {
  return (
    <>
      <View style={[dflex, flexRow, itemsCenter, justifyBetween, py8, px12]}>
        <View style={[dflex, flexColumn, itemsCenter, gap2]}>
          <UserAvatar name={"Hasnain"} size={50} />
          <Text variant="labelLarge">Add Story</Text>
        </View>
        <View style={[dflex, flexRow, itemsCenter, gap6]}>
          <TouchableOpacity>
            <Feather name="search" size={28} color={"#1F82C4"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="notifications" size={28} color={"#1F82C4"} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;
