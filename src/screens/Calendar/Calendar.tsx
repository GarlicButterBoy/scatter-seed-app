import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Modal, Alert } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./calendar.styles";
import { gql, useQuery } from "@apollo/client";
import { Button } from "react-native-paper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import PlantingCalendar from "../../components/CalendarComponent";

// FIXME: Temporary proof of concept
const PLANTS_QUERY = gql`
  query {
    plants {
      id
      CommonName
      BotanicalName
      PlantType
      SunExposure
      SoilpH
      BloomTime
      SeedDepth
      SproutsIn
      MinIdealTemp
      PlantSpacing
      FrostHardy
      MinFullSun
      RowWidth
      DaystoMaturity
      FlowerColour
      HardinessZones
    }
  }
`;

type CalendarPageProps = Navigation.AppTabsPageProps<"Calendar">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlantItem = ({ plant }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={GlobalStyles.body}>
          <View style={styles.plantModal}>
            <View style={styles.plantPageHeader}>
              <View style={styles.plantPageHeaderIcon}>
                <FontAwesome5 name={"envira"} size={120} color={"green"} />
              </View>

              <View style={styles.plantPageHeaderText}>
                <Text style={styles.plantName}>{plant.CommonName}</Text>
                <Text style={styles.scientificText}>{plant.BotanicalName}</Text>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.detailsText}>Type: {plant.PlantType}</Text>
              <Text style={styles.detailsText}>Sun Exposure: {plant.SunExposure}</Text>
              <Text style={styles.detailsText}>Min Full Sun: {plant.MinFullSun}</Text>
              <Text style={styles.detailsText}>Soil pH: {plant.SoilpH}</Text>
              <Text style={styles.detailsText}>Sun Exposure: {plant.SunExposure}</Text>
              <Text style={styles.detailsText}>Bloom Time: {plant.BloomTime}</Text>
              <Text style={styles.detailsText}>Flower Colour: {plant.FlowerColour}</Text>
              <Text style={styles.detailsText}>Ideal Temp: {plant.MinIdealTemp}</Text>
              <Text style={styles.detailsText}>Frost Hardy: {plant.FrostHardy}</Text>
              <Text style={styles.detailsText}>Hardiness Zones: {plant.HardinessZones}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.detailsText}>Seed Depth: {plant.SeedDepth}</Text>
              <Text style={styles.detailsText}>Sprouts In: {plant.SproutsIn}</Text>
              <Text style={styles.detailsText}>Plant Spacing: {plant.PlantSpacing}</Text>
              <Text style={styles.detailsText}>Row Spacing: {plant.RowWidth}</Text>
              <Text style={styles.detailsText}>Days To Maturity: {plant.DaystoMaturity}</Text>
            </View>
            <Button
              icon="close"
              mode="contained"
              style={styles.closeButton}
              onPress={() => {
                closeModal();
              }}
            >
              <Text style={GlobalStyles.closeText}>Close Modal</Text>
            </Button>
          </View>
        </View>
      </Modal>

      <PlantingCalendar
        pressFunction={() => {
          setModalVisible(!modalVisible);
        }}
        name={plant.CommonName}
      />
    </View>
  );
};

export default function CalendarPage({ navigation }: CalendarPageProps) {
  const { data, loading, error } = useQuery(PLANTS_QUERY);

  useEffect(() => {
    console.log("LOADING", loading);
    console.log("ERROR", error);
    if (!loading) console.log("PLANT DATA", data);
  }, [data, loading, error]);

  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  if (loading === true) {
    return <View><Text>Loading...</Text></View>;
  }
  else
  {
    return (
      <View style={GlobalStyles.body}>
        <Text>Planting Calendar</Text>

        <FlatList
          data={data?.plants}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <PlantItem plant={item} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
