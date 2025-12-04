import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator, // <- imported ActivityIndicator
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseurl from "../../services/config";
import BackHeader from "../components/Backheader";
import { useLocalSearchParams } from "expo-router";
import AutoLocation from "../components/getLocation";
import { useRouter } from "expo-router";
import { useState, useContext } from "react";
import Toast from "react-native-toast-message";
import { InquiryContext } from "../context/Inquirycontext";

export default function Inquiryform() {
  const router = useRouter();
  const { fetchInquiries } = useContext(InquiryContext);
  const [feedback, setFeedback] = useState("");
  const [location, setLocation] = useState({ address: "" });
  const [loading, setLoading] = useState(false); // <- loader state
  const params = useLocalSearchParams();
  const caseData = params.caseData ? JSON.parse(params.caseData) : null;

  const id = caseData?.caseId?._id;

  const handellogin = async () => {
  if (!feedback) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Please provide feedback",
    });
    return;
  }

  if (!location.address) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Location is required",
    });
    return;
  }
    try {
      setLoading(true); 
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${baseurl}/api/feedback/${id}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          reviews: feedback,
          inquiryAddress: location.address,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        await fetchInquiries();
      } else {
        Toast.show({
          type: "error",
          text1: "Failed",
          text2: data.message || "Something went wrong",
        });
      }
    } catch (err) {
      console.log("Error:", err);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong. Try again.",
      });
    } finally {
      setLoading(false); // <- stop loader
      setLocation({ address: "" });
      setFeedback("");
      router.replace({
        pathname: "/(tabs)/Inquirylist",
        params: { refresh: "true" },
      });
    }
  };

  const noOfBoys = caseData.caseId?.saailId?.familyMember?.noOfBoys || 0;
  const noOfGirls = caseData.caseId?.saailId?.familyMember?.noOfGirls || 0;
  const totalFamilyMembers = noOfBoys + noOfGirls;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <View style={{ flex: 1 }}>
        <BackHeader />
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <AutoLocation onLocationFetched={(loc) => setLocation(loc)} />

          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Case No</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={caseData.caseId?.caseNo || ""}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Date</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={
                  caseData.caseId?.createdAt
                    ? new Date(caseData.caseId.createdAt).toLocaleDateString()
                    : ""
                }
              />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Sail Name</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={caseData.caseId?.saailId?.name || ""}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Father/Husband Name</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={caseData.caseId?.saailId?.father_husbandName || ""}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={caseData.caseId?.saailId?.address || ""}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Nearby Place</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={location?.address || ""}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Profession</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={caseData.caseId?.saailId?.profession || ""}
            />
          </View>

          {/* Row 7: Family Members */}
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Family members</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={totalFamilyMembers.toString()}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Boys</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={
                  caseData.caseId?.saailId?.familyMember?.noOfBoys?.toString() ||
                  "0"
                }
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Girls</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={
                  caseData.caseId?.saailId?.familyMember?.noOfGirls?.toString() ||
                  "0"
                }
              />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Landlord Name</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={caseData.caseId?.saailId?.landLordName || ""}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Landlord CNIC</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={caseData.caseId?.saailId?.landLordCnic || ""}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Rent Amount</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={
                  caseData.caseId?.saailId?.monthlyExpenses?.toString() || ""
                }
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Income/Salary</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={caseData.caseId?.saailId?.salary?.toString() || ""}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Monthly Expense</Text>
              <TextInput
                style={styles.input}
                editable={false}
                value={caseData.caseId?.saailId?.rentAmount?.toString() || ""}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Monthly Income</Text>
              <TextInput
                style={styles.input}
                value={caseData.caseId?.saailId?.salary?.toString() || ""}
                keyboardType="numeric"
                editable={false}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Rent Amount</Text>
              <TextInput
                style={styles.input}
                value={
                  caseData.caseId?.saailId?.monthlyExpenses?.toString() || ""
                }
                keyboardType="numeric"
                editable={false}
              />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Amount Needed</Text>
            <TextInput
              style={styles.input}
              value={caseData.caseId?.saailId?.amountNeeded?.toString() || ""}
              keyboardType="numeric"
              editable={false}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Remarks</Text>
            <TextInput
              style={styles.input}
              value={caseData.caseId?.saailId?.anyKindOfDomesticProblem || ""}
              keyboardType="numeric"
              editable={false}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.boldlabel}>General Question</Text>
            <TextInput
              style={[styles.input, { height: 80 }]}
              multiline
              placeholder="تفصیلی جواب"
              value={feedback}
              onChangeText={setFeedback}
            />
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handellogin}
            disabled={loading} // <- disable button while loading
          >
            {loading ? (
              <ActivityIndicator color="#fff" /> // <- loader
            ) : (
              <Text style={styles.saveButtonText}>Save</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 12,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  inputWrapper: {
    flex: 1,
    gap: 4,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(98, 98, 98, 0.6)",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  saveButton: {
    marginTop: 20,
    width: 90,
    alignSelf: "flex-end",
    backgroundColor: "rgba(137, 196, 65, 1)",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
