//import { Stack } from "expo-router";
import {Tabs} from "expo-router";

export default function RootLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="huff" options={{title: "hufflepuff"}}/>
            <Tabs.Screen name ="prof" options={{title: "profile simp"}}/>
            
        </Tabs>
    );
}
/*
<Stack>
            <Stack.Screen name="index" options={{ title: "index" }} />
            <Stack.Screen name="brainrotcore" options={{ title: "brc^(tm)" }} />
            <Stack.Screen name="javascriptpage" options={{ title: "js" }} />
            {" allows you to go back without having a specific button that goes back"}
        </Stack>
*/