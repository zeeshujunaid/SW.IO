import React, { createContext, useState } from "react";

export const InquiryContext = createContext();

export default function InquiryProvider({ children }) {
  const [inquiries, setInquiries] = useState({ data: [], meta: {} });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  return (
    <InquiryContext.Provider
      value={{
        inquiries,
        setInquiries,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        loadingMore,
        setLoadingMore,
        error,
        setError,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}
