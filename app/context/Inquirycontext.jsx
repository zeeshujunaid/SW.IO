import React, { createContext, useState } from "react";

export const InquiryContext = createContext();

export default function InquiryProvider({ children }) {
  const [inquiries, setInquiries] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseurl}/api/inquiries`);
      const data = await response.json();
      setInquiries(data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <InquiryContext.Provider
      value={{
        inquiries,
        setInquiries,
        loading,
        fetchInquiries,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}
