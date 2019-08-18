import React from 'React';
import { Text,View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (

  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
);
};


const styles = {
  textStyle: {
    fontSize:30
  },
  viewStyle:{
    backgroundColor:'#a5a5a5',
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 15,
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.4,
    }
};


export default Header;
