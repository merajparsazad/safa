import Filter from "../../ui/Filter";

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
    </div>
  );
}

export default ServiceTableOperations;
