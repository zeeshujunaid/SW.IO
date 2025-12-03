import React, { createContext, useState } from "react";

export const InquiryContext = createContext();

export default function InquiryProvider({ children }) {
  const [inquiries, setInquiries] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <InquiryContext.Provider
      value={{
        inquiries,
        setInquiries,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}
