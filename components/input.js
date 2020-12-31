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
      style={{
        width: '5rem',
        padding: '0.5rem',
        textAlign: 'center',
        borderRadius: '0.25rem',
      }}
      value={value}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
