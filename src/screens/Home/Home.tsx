import React, { useEffect, useState } from "react";
import { Modal, Text, View, FlatList } from "react-native";
import { TextInput, Button } from "react-native-paper";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./home.styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { gql, useMutation, useQuery } from "@apollo/client";
import { CREATE_GARDEN } from "../../graphql/mutation";
import {
  CreateGardenMutation,
  CreateGardenMutationVariables,
  GetUserGardensQuery,
} from "../../@generated/graphql";
import { GET_USER_GARDENS } from "../../graphql/queries";

type HomePageProps = Navigation.AppTabsPageProps<"Home">;

export default function HomePage({ navigation }: HomePageProps) {
  const signedIn = true;
  const gardensExist = true;
  const [createSize, setCreateSize] = React.useState(10);
  const [createCount, setCreateCount] = React.useState(0);
  const [createName, setCreateName] = React.useState("new garden");
  const [targetGarden, setTargetGarden] = React.useState(0);

  const [modalSelectVisible, setModalSelectVisible] = useState(false);
  const [modalCreateVisible, setModalCreateVisible] = useState(false);

  const [createGarden, { data: cgData, loading: cgLoading, error: cgError }] = useMutation<
    CreateGardenMutation,
    CreateGardenMutationVariables
  >(CREATE_GARDEN, { refetchQueries: [GET_USER_GARDENS] });

  const {
    data: ugData,
    loading: ugLoading,
    error: ugError,
  } = useQuery<GetUserGardensQuery>(GET_USER_GARDENS);

  useEffect(() => {
    console.log("LOADING USER GARDEN DATA", ugLoading);
    console.log("ERROR LOADING USER GARDEN DATA", JSON.stringify(ugError, null, 2));
    // if (!ugLoading) openGarden(cgData?.createGarden);
  }, [ugData, ugLoading, ugError]);

  useEffect(() => {
    console.log("LOADING CREATE GARDEN DATA", cgLoading);
    console.log("ERROR LOADING CREATE GARDEN DATA", JSON.stringify(cgError, null, 2));
    if (!cgLoading) openGarden(cgData?.createGarden);
  }, [cgData, cgLoading, cgError]);

  const onChangeTextInput = (text: string) => {
    const numericRegex = /^([0-9]{1,100})+$/;
    if (numericRegex.test(text)) {
      //this.setState({ shippingCharge: text })
      setCreateSize(parseInt(text));
    } else if (text == "") {
      setCreateSize(0);
    }
  };

  //navigate to the garden
  const selectGardenModalHandler = () => {
    if (gardensExist) {
      switchSelectModal();
    } else {
      switchSelectModal();
      createGardenModalHandler();
    }
  };

  const createGardenModalHandler = () => {
    //if not signed in
    if (!signedIn) {
      loginHandler();
    } else {
      switchCreateModal();
      //open modal for crteating a garden
    }
  };

  const generateGardenHandler = async () => {
    //if not signed in
    if (createSize > 0) {
      switchCreateModal();
      //add garden to database
      await createGarden({
        variables: {
          name: createName,
          width: createSize,
          height: createSize,
        },
      });
      setTargetGarden(cgData?.createGarden.id ?? 1);
      //
      setCreateCount(createCount + 1);
    }
  };
  const selectGardenHandler = (item: any) => {
    switchSelectModal();
    openGarden(item);
  };

  const openGarden = (data: any) => {
    if (!data) return;
    console.log("SENDING OPEN GARDEN DATA", data);
    //go to garden based on garden id
    navigation.navigate("Garden", {
      isGardenSent: true,
      gardenSize: data?.height,
      gardenData: data,
      targetGarden: data?.id,
    });
  };

  //navigate to the tasks page
  const tasksHandler = () => {
    navigation.navigate("Weather");
  };

  // const calendarHandler = () = {
  //   // navigation.navigate("Calendar");
  // };

  const loginHandler = () => {
    navigation.navigate("Login");
  };

  const switchSelectModal = () => {
    setModalSelectVisible(!modalSelectVisible);
  };
  const switchCreateModal = () => {
    setModalCreateVisible(!modalCreateVisible);
  };

  //const { addNewVisible, editVisible} = this.state;
  return (
    <View style={GlobalStyles.body}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSelectVisible}
        onRequestClose={() => {
          switchSelectModal();
        }}
      >
        <View style={GlobalStyles.modal}>
          <FlatList
            data={ugData?.user?.gardens}
            renderItem={({ item }) => (
              <View>
                <Button
                  style={{ ...styles.button, width: "90%" }}
                  mode="contained"
                  onPress={() => {
                    selectGardenHandler(item);
                  }}
                >
                  {`${item.name} ${item.id}, ${item.width}`}
                </Button>
              </View>
            )}
            ListEmptyComponent={
              ugLoading ? (
                <View>
                  <Text>Loading Gardens...</Text>
                </View>
              ) : (
                <View>
                  <Text>No Gardens Available!</Text>
                </View>
              )
            }
            keyExtractor={(item) => item.id.toString()}
          />
          <Button
            // style={styles.button}
            // icon={() => <FontAwesome5 name={"border-all"} style={{ width: 15, height: 15 }} />}
            mode="contained"
            onPress={() => switchSelectModal()}
          >
            Close
          </Button>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCreateVisible}
        onRequestClose={() => {
          switchCreateModal();
        }}
      >
        <View style={GlobalStyles.modal}>
          <Text>How many Square Feet is your Garden?</Text>
          <TextInput
            style={styles.textInput}
            mode="flat"
            label="Garden Sq.Ft"
            underlineColorAndroid="transparent"
            placeholder="Enter Garden Size"
            keyboardType={"numeric"}
            value={createSize ? createSize.toString() : undefined}
            onChangeText={onChangeTextInput}
          />
          <Button
            style={styles.button}
            icon={() => <FontAwesome5 name={"border-all"} style={{ width: 15, height: 15 }} />}
            mode="contained"
            onPress={async () => await generateGardenHandler()}
          >
            Start Garden
          </Button>
          <Button
            // style={styles.button}
            // icon={() => <FontAwesome5 name={"border-all"} style={{ width: 15, height: 15 }} />}
            mode="contained"
            onPress={() => switchCreateModal()}
          >
            Close
          </Button>
        </View>
      </Modal>

      <FontAwesome5 name={"envira"} size={150} color={"#85e085"} />
      <Text style={styles.headerText}>Welcome to ScatterSeed</Text>

      <Button
        style={styles.button}
        icon={() => (
          <FontAwesome5 name={"arrow-alt-circle-left"} style={{ width: 15, height: 15 }} />
        )}
        mode="contained"
        onPress={selectGardenModalHandler}
      >
        Go To Garden
      </Button>
      <Button
        style={styles.button}
        icon={() => <FontAwesome5 name={"border-none"} style={{ width: 15, height: 15 }} />}
        mode="contained"
        onPress={createGardenModalHandler}
      >
        Start New Garden
      </Button>
      <Button
        icon={() => <FontAwesome5 name={"calendar"} style={{ width: 15, height: 15 }} />}
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate("Calendar");
        }}
      >
        Plant Calendars
      </Button>
      <Button
        icon={() => <FontAwesome5 name={"snowflake"} style={{ width: 15, height: 15 }} />}
        style={styles.button}
        mode="contained"
        onPress={tasksHandler} //Navigate to Weather Page
      >
        Weather
      </Button>
    </View>
  );
}
