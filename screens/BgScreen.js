import { ImageBackground,View,Text,StyleSheet } from "react-native";

export function BgScreen() {
    return (
        <ImageBackground source={{uri:'https://i.pinimg.com/236x/4e/21/bc/4e21bc04c6fb19224586e2b9cd3a3901.jpg'}}
        style={styles.bg}>
            <View>
                <Text>My Design</Text>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    container:{
        marginTop:120
    },
    info:{
        color:'oldlace',
        fontSize:42,
        textAlign:'center'
    }
})