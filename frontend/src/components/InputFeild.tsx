/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
  styles: CSSModuleClasses;
  register: any;
  error: string | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  iconSrc,
  iconAlt,
  styles,
  register,
  error,
}) => {
  return (
    <div className={styles.inputField}>
      <img
        loading="lazy"
        src={iconSrc}
        alt={iconAlt}
        className={styles.inputIcon}
      />
      <input
        type={type}
        placeholder={placeholder}
        className={styles.inputText}
        aria-label={placeholder}
        {...register(name)}
      />
      <div>{error}</div>
    </div>
  );
};

export default InputField;
