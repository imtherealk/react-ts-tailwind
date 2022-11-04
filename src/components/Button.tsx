import React from 'react';

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
    >
      {text}
    </button>
  );
};
export default Button;
