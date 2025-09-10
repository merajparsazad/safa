import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ServiceTableOperations() {
  return (
    <div className="flex items-center gap-6">
      <Filter
        filterField="duration"
        options={[
          { value: "all", label: "همه" },
          { value: "under-31", label: "زیر 31 دقیقه" },
          { value: "over-31", label: "بالای 31 دقیقه" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "مرتب سازی: اسم(ا-ی)" },
          { value: "name-desc", label: "مرتب سازی: اسم(ی-ا)" },
          { value: "price-asc", label: "مرتب سازی: قیمت (ارزان‌ترین)" },
          { value: "price-desc", label: "مرتب سازی: قیمت (گران‌ترین)" },
          { value: "duration-asc", label: "مرتب سازی: زمان (کوتاه‌ترین)" },
          { value: "duration-desc", label: "مرتب سازی: زمان (طولانی‌ترین)" },
        ]}
      />
    </div>
  );
}

export default ServiceTableOperations;
