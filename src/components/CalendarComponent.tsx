import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../screens/Calendar/calendar.styles";

export default function PlantingCalendar(props: any) 
{
  const {name, pressFunction} = props;

  return(
    <Pressable onPress={pressFunction} style={styles.buttonSpace}>
      <View style={styles.calendarMainBody}>
        <Text style={styles.detailsText}>{name}</Text>

        <View style={styles.calendarBody}>
          <View style={styles.monthTextView}>
            <Text style={styles.monthText}>Jan</Text>
            <Text style={styles.monthText}>Feb</Text>
            <Text style={styles.monthText}>Mar</Text>
            <Text style={styles.monthText}>Apr</Text>
            <Text style={styles.monthText}>May</Text>
            <Text style={styles.monthText}>Jun</Text>
            <Text style={styles.monthText}>Jul</Text>
            <Text style={styles.monthText}>Aug</Text>
            <Text style={styles.monthText}>Sep</Text>
            <Text style={styles.monthText}>Oct</Text>
            <Text style={styles.monthText}>Nov</Text>
            <Text style={styles.monthText}>Dec</Text>
          </View>
          <View style={styles.sowIndoorView}>
            <View style={styles.sowIndoorRectangle}></View>
          </View>
          <View style={styles.sowIndoorView}>
            <View style={styles.transplantRectangle}></View>
          </View>
          <View style={styles.sowIndoorView}>
            <View style={styles.sowOutdoorRectangle}></View>
          </View>
        </View>

        <View style={styles.sowingInfo}>
          <View style={styles.sowingIndoors}>
            <Text>Sow Indoors</Text>
          </View>
          <View style={styles.transplant}>
            <Text>Transplant</Text>
          </View>
          <View style={styles.sowingOutdoors}>
            <Text>Sow Outdoors</Text>
          </View> 
        </View>
      </View> 
    </Pressable>
  );
}