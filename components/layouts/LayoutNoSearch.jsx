import React from 'react';
import Header1 from "@/components/layouts/Header1"; 

const LayoutNoSearch = ({ children }) => {
  return (
    <div>
      <Header1/>
      {children}
    </div>
  );
};

export default LayoutNoSearch;