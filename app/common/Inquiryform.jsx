import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BackHeader from "../components/Backheader";

export default function Inquiryform() {
  return (
    <View style={{ flex: 1 }}>
        <BackHeader/>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Row 1: Name & Date */}
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Case No</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Date</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        {/* Row 2: Sibling/Other Name */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Sail Name</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Row 3: Father/Husband */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Father/Husband Name</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Row 4: Address */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Row 5: Nearby Place */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Nearby Place</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Row 6: Profession */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Profession</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Row 7: Family Members */}
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Family members</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Boys</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Girls</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        </View>

        {/* Row 8: Landlord Name */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Landlord Name</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Row 9: Landlord CNIC & Rent Amount */}
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Landlord CNIC</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Rent Amount</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        </View>

        {/* Row 10: Income & Monthly Expense */}
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Income/Salary</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Monthly Expense</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        </View>

        {/* Row 11: Monthly Income & Rent Amount */}
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Monthly Income</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Rent Amount</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
        </View>

        {/* Row 12: Single Amount Needed */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Amount Needed</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Remarks</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>

        {/* Row 13: Visit Date */}
        <View style={styles.inputWrapper}>
          <Text style={styles.boldlabel}>Visit Date</Text>
          <TextInput style={styles.input} placeholder="Select Visit Date" />
        </View>

        {/* Row 14: Description / Details */}
        <View style={styles.inputWrapper}>
          <Text style={styles.boldlabel}>General Question</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            multiline
            placeholder="Detail Questions"
          />
        </View>

        {/* Row 15: One Time/Madd List */}
        <View style={styles.inputWrapper}>
          <Text style={styles.boldlabel}>Madad List</Text>
          <TextInput style={styles.input} />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 12,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  backcontainer: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
  paddingVertical: 12,
},
  row: {
    flexDirection: "row",
    gap: 12,
  },
  inputWrapper: {
    flex: 1,
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#rgba(98, 98, 98, 0.6)",
  },
  input: {
    borderWidth: 1,
    borderColor: "#rgba(0, 0, 0, 0.12)",
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
    backgroundColor: "#rgba(137, 196, 65, 1)",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  boldlabel: {
    color: "#000",
    fontWeight: "bold",
  },
});
