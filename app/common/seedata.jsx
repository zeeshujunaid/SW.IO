import { View, Text } from "react-native";
import { useContext, useEffect } from "react";
import { InquiryContext } from "../context/Inquirycontext";

export default function Seedata() {
  const { inquiries } = useContext(InquiryContext);

  useEffect(() => {
    console.log("Context data (inquiries):", inquiries);
  }, [inquiries]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Check console for context data</Text>
    </View>
  );
}
