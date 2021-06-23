import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper/src'

const {width, height} = Dimensions.get('window')
class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
        slides:[
            {key:1, image:require('../../images/image1.jpg')},
            {key:2, image:require('../../images/image2.jpg')},
            {key:3, image:require('../../images/image3.jpg')},
            {key:4, image:require('../../images/image3.jpg')},
        ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper autoplay={false}>
            {this.state.slides.map((slide)=> {
                return (
                    <View key={slide.key} style={styles.slide}>
                        <Text>
                            {slide.key}
                        </Text>
                        {/* <Image source={slide.image} style={styles.image} /> */}
                    </View>
                )
            })}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex:1
    }, 
    slide:{
        justifyContent:'center',
        alignItems:'center'
    }, 
    image:{
        width:width,
        height:height,
    }
})

export default OnBoarding;
