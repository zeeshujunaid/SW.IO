import React, { createContext, useState, useEffect } from "react";
import baseurl from "../../services/config"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const InquiryContext = createContext();

export default function InquiryProvider({ children }) {
  const [inquiries, setInquiries] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


   const fetchInquiries = async () => {
     setLoading(true);
     try {
       const token = await AsyncStorage.getItem("token");
       const res = await fetch(`${baseurl}/api/inquiry?limit=1000`, {
         headers: { Authorization: `Bearer ${token}` },
       });
       const data = await res.json();
       setInquiries(data.data || []);
     } catch (err) {
       console.log("Error fetching inquiries:", err);
     } finally {
       setLoading(false);
     }
   };

   useEffect(() => {
     fetchInquiries();
   }, []);

  
  return (
    <InquiryContext.Provider
      value={{
        inquiries,
        setInquiries,
        loading,
        setLoading,
        error,
        setError,
        fetchInquiries,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}
