import Sidebar from "@/components/admin/sidebar/sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section dir="rtl"  className="bg-[#b7791f] flex">
      <Sidebar />
      <section className="w-[80%] mr-[20%] flex flex-col">
        <div className="h-48 bg-[#b7791f] text-white flex justify-center flex-col px-10 gap-3">
          <h1 className="text-5xl  font-mono font-extrabold">لوحة التحكم</h1>
          {/* <p className="font-mono font-extrabold">استخراج بيانات الحجز ديناميكي</p> */}
        </div>
        {children}
      </section>
    </section>
  );
};

export default AdminLayout;
