import React, { useEffect } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./tasks.styles";
import { gql, useQuery } from "@apollo/client";

const FORECAST_QUERY = gql`
query FORECAST ($query: String!, $days: Float!, $hour: Float!) {
  weather_forecast(payload: {query: $query, days: $days, hour: $hour}) {
    location{
      name
      country
      localtime
      tz_id
    }
    current {
      temp_c
      is_day
      last_updated
      wind_kph
      feelslike_c
      humidity
      cloud
      vis_km
      uv
      gust_kph
      precip_mm
      wind_dir
      pressure_mb
      condition {
        text
        icon
        code
      }
    }
      forecast {
        forecastday {
          astro {
            sunrise
            sunset
          }
          hour {
            is_day
          }
        }
      }
      alerts {
          alert {
            headline
            urgency
          }
      }
  }
}
`;

type WeatherPageProps = Navigation.AppTabsPageProps<"Weather">;

export default function WeatherPage({ navigation }: WeatherPageProps) {
  const { data, loading, error } = useQuery(FORECAST_QUERY, {
    //should be user data
    variables: {query: "Oshawa", days: 1, hour: 23}
  });
  // const { data, loading, error } = useQuery(FORECAST_QUERY);

  useEffect(() => {
    console.log("FORECAST LOADING", loading);
    console.log("FORECAST ERROR", JSON.stringify(error, null, 2));
    if (!loading) console.log("WEATHER DATA", data);
  }, [data, loading, error]);

  // eslint-disable-next-line prefer-const
  let forecastData = data?.weather_forecast;
  console.log(forecastData);
  // const iconUri = "https:" + forecastData.current.icon;

  if (loading === true) {
    return <View><Text>Loading...</Text></View>;
  }
  else
  {

    return (
      <View style={GlobalStyles.body}>
        <View style={styles.container}>
        

          <Text style={styles.headerText}>{forecastData.location.name} - {forecastData.location.country}</Text>
          <Text>{forecastData.location.localtime} - {forecastData.location.tz_id}</Text>
          <View style={styles.weatherTop}>
            <View style={styles.iconTemp}>
              <Image 
                style={styles.weatherLogo}
                source={{uri:  "https:"+forecastData.current.condition.icon}}
              /> 
              <Text style={styles.degreesHeader}>{forecastData.current.temp_c} *C</Text>
            </View>
            <View style={styles.topWeatherDetails}>
              <View>
                <Text>Feels Like:</Text>
                <Text>{forecastData.current.feelslike_c}*C</Text>
              </View>
              <View>
                <Text>Wind:</Text>
                <Text>{forecastData.current.wind_kph}</Text>
              </View>
              <View>
                <Text>Gust:</Text>
                <Text>{forecastData.current.gust_kph}</Text>
              </View>
              <View>
                <Text>Sun/Moon Icon:</Text>
                <Text>{forecastData.current.is_day}</Text>
              </View>
            
            
            
            </View>
          </View>

          <View style={styles.weatherBottom}> 
            <Text style={styles.text}> Last Updated: {forecastData.current.last_updated}</Text>
            <View style={styles.bottomWeatherDetails}>
              <View style={styles.rowView}>
                <View>
                  <Text>Wind Direction</Text>
                  <Text style={styles.text}>{forecastData.current.wind_dir}</Text>
                </View>
                <View>
                  <Text>Ceiling</Text>
                  <Text style={styles.text}>{forecastData.current.cloud}m</Text>
                </View>
                <View>
                  <Text>Expected Rain</Text>
                  <Text style={styles.text}>{forecastData.current.precip_mm}mm</Text>
                </View>
              </View>
              <View style={styles.rowView}>
                <View>
                  <Text>Humidity</Text>
                  <Text style={styles.text}>{forecastData.current.humidity}</Text>
                </View>
                <View>
                  <Text>Visibility</Text>
                  <Text style={styles.text}>{forecastData.current.vis_km}km</Text>
                </View>
                <View>
                  <Text>UV Index</Text>
                  <Text style={styles.text}>{forecastData.current.uv}</Text>
                </View>
                <View>
                  <Text>Pressure</Text>
                  <Text style={styles.text}>{forecastData.current.pressure_mb}mb</Text>
                </View>
              </View>
            
            
            
            
            
            
            
            </View>
          </View> 
        </View>
      </View> 
    
    );

  }
}
