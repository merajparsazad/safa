import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function AppointmentTableOperations() {
  return (
    <div className="flex items-center gap-6">
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "همه" },
          { value: "confirmed", label: "تایید شده" },
          { value: "unconfirmed", label: "تایید نشده" },
          { value: "pending", label: "در انتظار" },
          { value: "completed", label: "تکمیل شده" },
        ]}
      />

      <SortBy
        options={[
          { value: "customerName-asc", label: "مرتب سازی: اسم(ا-ی)" },
          { value: "customerName-desc", label: "مرتب سازی: اسم(ی-ا)" },
          { value: "serviceName-asc", label: "مرتب سازی: خدمت(ا-ی)" },
          { value: "serviceName-desc", label: "مرتب سازی: خدمت(ی-ا)" },
          { value: "startTime-asc", label: "مرتب سازی: تاریخ (جدیدترین)" },
          { value: "startTime-desc", label: "مرتب سازی: تاریخ (قدیمی‌ترین)" },
          { value: "servicePrice-asc", label: "مرتب سازی: قیمت (ارزان‌ترین)" },
          { value: "servicePrice-desc", label: "مرتب سازی: قیمت (گران‌ترین)" },
        ]}
      />
    </div>
  );
}

export default AppointmentTableOperations;
