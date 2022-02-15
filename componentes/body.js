import React from 'react';
import { render } from 'react-dom';
import { Button, StyleSheet, Text, View } from 'react-native';

const Body = (props) => {

        
        function teste () {
            return(<Text>Eu te mamo</Text>);
        }


        return (
            <View>
                {teste()}
                <Text>{props.texto}</Text>
                <Button title={props.titulo}></Button>
            </View>
        )
    
}

export default Body;