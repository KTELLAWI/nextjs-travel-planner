import Sidebar from "@/components/admin/sidebar/sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-[#f5f5fe] flex">
      <Sidebar />
      <section className="w-[80%] mr-[20%] text-center  flex flex-col">
        <div className="h-48 bg-[#b7791f] text-white flex justify-center flex-col px-10 gap-3">
          <h1 className="text-5xl">استخراج البيانات</h1>
          <p></p>
        </div>
        {children}
      </section>
    </section>
  );
};

export default AdminLayout;
