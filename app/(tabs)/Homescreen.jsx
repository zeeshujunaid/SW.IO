import { Text, View } from "react-native";
import Herosection from "../components/Herosection";
import Header from "../components/Header";
import Searchbar from "../components/Search";
export default function Homescreen(){
    return(
        <View style={{flex:1,alignItems:"center",backgroundColor:"#fff"}}>
            <Header/>
            <Searchbar/>
            <Herosection/>
            <Text>hello this is homescreen</Text></View>
    )
}