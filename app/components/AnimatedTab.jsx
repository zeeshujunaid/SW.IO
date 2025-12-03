import Animated, {
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";

export default function AnimatedTabIcon({ focused, children }) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: focused ? withSpring(1.15, { damping: 6 }) : withTiming(1),
        },
        {
          translateY: focused ? withSpring(-10) : withTiming(0),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
        },
        animatedStyle,
      ]}
    >
      {children}
    </Animated.View>
  );
}
