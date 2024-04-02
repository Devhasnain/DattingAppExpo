import { TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../../styles/global.style";
import UserAvatar from "../UserAvatar";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { px12, dflex, flexRow, itemsCenter, justifyBetween, gap6 } = styles;

const PostHeader = () => {
  return (
    <View
      style={[
        px12,
        dflex,
        flexRow,
        itemsCenter,
        justifyBetween,
        { paddingBottom: 5 },
      ]}
    >
      <View style={[dflex, flexRow, itemsCenter, gap6]}>
        <UserAvatar image={"test"} size={35} />
        <Text variant="labelLarge">testUser</Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons name="dots-vertical" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(PostHeader);
