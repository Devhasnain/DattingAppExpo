import { View } from "react-native";
import React from "react";
import PostHeader from "../post/PostHeader";
import PostBody from "../post/PostBody";
import styles from "../../styles/global.style";
import { Divider } from "react-native-paper";

const {dflex, flexColumn, gap20, py6} = styles;

const PostList = () => {
  return (
    <View style={[dflex, flexColumn, gap20]}>
      {[0, 0, 0, 0, 0].map((i, e) => (
        <View key={e} >
          <Divider/>
        <View style={[py6]}>
          <PostHeader />
          <PostBody />
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostList;
