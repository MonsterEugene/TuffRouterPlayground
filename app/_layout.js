//import { Stack } from "expo-router";
import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "index" }} />
            <Stack.Screen name="brainrotcore" options={{ title: "brc^(tm)" }} />
            <Stack.Screen name="javascriptpage" options={{ title: "js" }} />
            <Stack.Screen name = "(tabs)" options ={{title: "i did it"}}/>
            
            {'this one below doesnt work what the helly '}
            <Stack.Screen name = "huff" options ={{title:"only huffy"}}/>

            {" allows you to go back without having a specific button that goes back"}
        </Stack>
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