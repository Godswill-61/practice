import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart, faGavel } from "@fortawesome/free-solid-svg-icons";
import { theme } from '../config/theme';

export function Home() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View>
                <View style={styles.container}>
                </View>

                <View style={styles.header}>
                <Text style={styles.brandName}>Rebid</Text>
                </View>

                <TouchableOpacity style={styles.headerOption}>
                    <FontAwesomeIcon icon={faShoppingCart}
                    size={40}
                    color={theme.colors.dullRed1}/>
                    <Text style={styles.sellCTAText}>Sell</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.myBidsCTA}>
                    <FontAwesomeIcon icon={faGavel}
                    size={40}
                    color={theme.colors.dullRed1}/>
                    <Text style={styles.myBidsCTAText}>My Bids</Text>
                </TouchableOpacity>
                
                <View style={styles.expiringBlock}>
                </View>

                <View style={styles.recentBlock}>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container:{
        flex:1,
        paddingHorizontal:8
    },
    header:{
        flex:1.5
    },
    brandName:{
        fontSize:42,
        fontWeight:'bold',
        color:theme.colors.dullRed1,
    },
    headerControls:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    sellCTA:{
        height:80,
        width:'49%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:theme.colors.navy,
        borderRadius:12,
        paddingHorizontal:8,
    },       
    sellCTAText:{
        fontSize:32,
        color:theme.colors.dullRed1
    },
    myBidsCTAText:{
        fontSize:32,
        backgroundColor:theme.colors.dullRed1,
    },
    myBidsCTA:{
        height:80,
        width:'49%',
        backgroundColor:theme.colors.navy,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:8,
    },
    expiringBlock:{
        flex:1.5,
    },
    recentBlock:{
        flex:1.5,
    },
    categoriesBlock:{
        flex:1.5,
    }
})