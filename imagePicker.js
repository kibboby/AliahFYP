import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, View, Platform } from 'react-native';
//import { Avatar, Accessory } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  var imageSelected = '';

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      imageSelected = result.uri;
      imageUpload = imageSelected;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
     {image && <Image source={{ uri: image }} style={styles.pic} />}
      <Button title="Pick an image from camera roll" 
      onPress={pickImage}  
      color="black"  
      style={styles.buttonpic}/>
    </View>
  );
}

const styles = StyleSheet.create({
  pic:{
  width:200,
  height:200,
  borderRadius: 400,
  marginBottom:5,
  },
});

