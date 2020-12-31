import * as React from 'react';

export default function Input({ value, setValue }) {
  const inputEl = React.useRef(null);

  const handleClick = () => {
    inputEl.current.select();
  };

  const handleChange = (e) => {
    const inputStr = e.target.value;

    setValue(inputStr);
  };

  return (
    <input
      ref={inputEl}
      type="text"
      className="w-20 p-2 text-center rounded"
      value={value}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
