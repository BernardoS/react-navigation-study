import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name="home"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather color={color} size={size} name="home" />,
                    drawerLabel: "Início"
                }}
            />
            <Drawer.Screen
                name="profile"
                component={StackRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather color={color} size={size}  name="user"/>,
                    drawerLabel: "Perfil"
                }}
            />
        </Drawer.Navigator>
    )
}