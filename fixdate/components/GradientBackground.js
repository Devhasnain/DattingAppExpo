import React from "react";
import styles from "../styles/global.style";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const { flex1} = styles;

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient colors={["#A2DFFF", "#FFFFFF"]} style={[flex1]}>
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default GradientBackground;
