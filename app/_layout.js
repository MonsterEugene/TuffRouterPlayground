import { Stack } from "expo-router";


export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="brainrotcore"/>
            <Stack.Screen name="javascriptpage"/>
            {" allows you to go back without having a specific button that goes back"}
        </Stack>
        
    );
}