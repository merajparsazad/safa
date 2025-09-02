import React from "react";
import Button from "./Button";

function FormRow({ label, error, children }) {
  const arrayChildren = React.Children.toArray(children);
  const hasButton = arrayChildren.some(
    (child) => child.type === "button" || child.type === Button,
  );

  return (
    <div
      className={` ${hasButton ? "flex justify-end gap-4" : "grid grid-cols-[0.5fr_1fr_0.5fr] gap-9"} items-center py-4 not-last:border-b not-last:border-gray-100 first:pt-0 last:pb-0`}
    >
      {label && (
        <label htmlFor={children.props.id} className="font-medium">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
