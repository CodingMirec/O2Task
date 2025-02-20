import { useState } from "react";
import styles from "./InputComponent.module.css";

export default function InputComponent({
  label,
  optionalLabel,
  required,
  description,
  placeholder,
  disabled,
  value,
  onChange,
  errorMessage,
  type,
}) {
  const inputId = `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputHeader}>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor={inputId} className={styles.inputLabel}>
            {label}
          </label>
          {optionalLabel && (
            <span className={styles.inputOptionalLabel}>{optionalLabel}</span>
          )}
          {required && <div className={styles.inputMandatory}>*</div>}
        </div>
        {description && (
          <div className={styles.inputDescription}>{description}</div>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.inputField} ${errorMessage ? styles.error : ""}`}
          aria-invalid={errorMessage}
          aria-describedby={description ? `$description-${description}` : label}
          disabled={disabled}
          required={required}
        />

        {errorMessage && (
          <svg
            className={styles.errorIcon}
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M15 21L15 7H17V21H15Z"></path>
            <path d="M15 23V25H17V23H15Z"></path>
            <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 0 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"></path>
          </svg>
        )}
      </div>

      {errorMessage && (
        <div id={`${inputId}-error`} className={styles.errorMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
