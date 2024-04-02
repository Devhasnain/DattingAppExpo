import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/home/Header";
import { ScrollView, View } from "react-native";
import PostList from "../components/home/PostList";
import styles from "../styles/global.style";
const {pt1} = styles;

const Home = () => {
  return (
    <GradientBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={[pt1]}>
        <PostList/>
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;
