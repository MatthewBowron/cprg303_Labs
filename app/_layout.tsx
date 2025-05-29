import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarLabel: "Home", tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="apple"
        options={{ tabBarLabel: "Apple", tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="orange"
        options={{ tabBarLabel: "Orange", tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="mango"
        options={{ tabBarLabel: "Mango", tabBarIcon: () => null }}
      />
    </Tabs>
  );
}