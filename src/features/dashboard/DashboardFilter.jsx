import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "all", label: "همه" },
        { value: "365", label: "سال گذشته" },
        { value: "90", label: "سه ماه گذشته" },
        { value: "30", label: "ماه گذشته" },
        { value: "7", label: "هفته گذشته" },
      ]}
    />
  );
}

export default DashboardFilter;
