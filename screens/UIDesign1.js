import { View,Text,StyleSheet,Image } from 'react-native';
import { demoStyles } from '../uistyles/demo-styles';

export function UIDesign () {
    return (
        <View>
            <Text style={{color:'orange',fontSize:24,padding:30}}>Using StyleSheet</Text>

            <View style={styles.block}>
                <Text>Inline</Text>
                <Text>Demo</Text>
            </View>

            <View style={demoStyles.middle}>
                <Text>Internal  StyleSheet</Text>
                <Text>Demo content</Text>
            </View>

            <View style={demoStyles.bottom}>
                <Text>External StyleSheet</Text>
                <Text>Demo content</Text>

            </View>

            <Image source={require('../assets/Car.jpg')}
            width={400}
            height={400}/>

        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        width:'75%',
        height:400,
        backgroundColor:'oldlace',
        paddingHorizontal:40,
        borderWidth:2,
        borderColor:'orange'
    }
})