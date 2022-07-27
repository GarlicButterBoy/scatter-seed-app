import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./garden.styles";
import GardenPlanner from "../../components/GardenPlanner";
import GestureTest from "../../components/GestureTest";
import Testc from "../../components/GestureTest";

type GardenPageProps = Navigation.AppTabsPageProps<"Garden">;

export default function GardenPage({ route, navigation }: GardenPageProps) {
//params
  const params =
    (route.params as any) ??
    ({ isGardenSent: false, gardenSize: 1, gardenData: null, targetGarden: 0 } as any);
  const sentGarden = params.isGardenSent;
  const gardenSize = params.gardenSize;
  const gardenData = params.gardenData;
  const targetGarden = params.targetGarden;

  const onPressHandler = () => {
    navigation.navigate("Home");
  };
  /*
  React.useEffect(() => {

    const unsubscribe = navigation.addListener('focus', () => {
      ToastAndroid.show(JSON.stringify(route.params), ToastAndroid.SHORT);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);//*/

  return (
    <View style={GardenStyles.body}>
      <Text>Garden</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? "#555" : "#ddd" })}
      >
        <Text style={styles.text}>Home</Text>
      </Pressable>
      <GardenPlanner
        dim={gardenSize}
        sentValid={sentGarden}
        targetGarden={targetGarden}
        gardenData={gardenData}
      />
    </View>
  );
}

const GardenStyles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e2f2fb", //I like this colour as the main colour for the App - THOUGHTS?
  },
});
