import { View, Dimensions, FlatList, Image } from 'react-native'
import React from 'react';

let images = [
    "https://plus.unsplash.com/premium_photo-1677171214039-e484ce9bc22c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677265747135-abc98a69b872?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677249227771-43a86c13eb76?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

const {width} = Dimensions.get("window");


const ImagesCarousel = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate={"normal"}
      pagingEnabled
        data={images}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              width,
              height: 400,
              backgroundColor:"gray"
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              source={{ uri: item }}
            />
          </View>
        )}
      />
  )
}

export default ImagesCarousel