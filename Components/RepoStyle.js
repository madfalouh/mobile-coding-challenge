import React from 'react'
import moment from 'moment'

import { scale, verticalScale } from "react-native-size-matters";


import {
  TouchableOpacity, Image, Text, View, Dimensions, ScrollView
}
  from "react-native";




const RepoStyle= ({

  avatar_url,
  name,
  owner,
  description,
  stargazers_count,
  open_issues_count,

  created_at

}) => {


  return (

    <View
      style={{
        margin: scale(10),
        alignSelf: "flex-end",
        width: Dimensions.get('window').width - scale(80),
        height: verticalScale(130),
        shadowColor: "#000",
        shadowOpacity: 0.16,
        borderRadius: 12,
        elevation: 2,
        shadowRadius: 4,
        shadowOffset: {
          height: 2,
          width: 2
        },
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: avatar_url }}
          borderRadius={23}
          style={{
            borderRadius: 23,
            width: verticalScale(98),
            height: verticalScale(98),
            marginLeft: -verticalScale(98 / 2),
            alignSelf: "center"
          }}
        />


        <View
          style={{
            flexGrow: 1,
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 10
          }}
        >
          <Text
            style={{
              marginTop: scale(5),
              height: verticalScale(16),
              color: "#404852",
              width: 190,
              fontSize: scale(12),
              fontWeight: "700",
              letterSpacing: -0.36
            }}
          >
            {name}
          </Text>
          <Text

            style={{

              color: "#adb3bf",
              fontSize: scale(9),
              fontWeight: "400",
              letterSpacing: -0.29,
              lineHeight: 9.7,
              marginTop: scale(1),
              marginBottom: scale(10),

            }}

            numberOfLines={19}
          >
            {description}
          </Text>
          <Text
            style={{
              height: verticalScale(35),
              color: "#535bfe",
              fontSize: scale(12),
              fontWeight: "bold",
              letterSpacing: -0.29,
              lineHeight: verticalScale(12),

            }}
          >
            {moment(created_at).fromNow()} by{"\n"} {owner}
          </Text>

          <Text
            style={{
              height: verticalScale(35),
              color: "black",
              fontSize: scale(12),
              fontWeight: "bold",
              letterSpacing: -0.29,
              lineHeight: verticalScale(12),

            }}
          >

            issues:  {open_issues_count}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
          width: scale(39),
          height: verticalScale(30),


          position: "absolute",
          bottom: verticalScale(20),
          right: scale(16),

        }}
      >
        <TouchableOpacity
          style={{
            height: verticalScale(30),
            width: 140,
            justifyContent: "center",
            alignItems: "center"
          }}

        >


        </TouchableOpacity>
        <Text
          style={{
            width: scale(120),
            color: "#535bfe",
            fontSize: scale(15),
            fontWeight: "500",
            letterSpacing: -0.36,
            lineHeight: scale(22),
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {stargazers_count} 🌟
        </Text>
        <TouchableOpacity
          style={{
            height: verticalScale(30),
            width: 40,
            justifyContent: "center",
            alignItems: "center"
          }}

        >
          <Text

          >

          </Text>
        </TouchableOpacity>
      </View>
    </View>



  )
}


export default RepoStyle
