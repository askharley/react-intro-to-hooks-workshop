import React from "react";

export default function TextArea({ value, onChange }) {
  return (
    <div>
      <textarea
        className="post"
        rows="4"
        placeholder="Start typing..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
