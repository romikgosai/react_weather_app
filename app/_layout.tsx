import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "मौसम",
          headerStyle: {
            backgroundColor: '#f2f1fe',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
            flex: 1,
          },
          headerTitleAlign: 'center',
        }}
      />
      {/* Add other routes here if needed */}
    </Stack>
  );
}
