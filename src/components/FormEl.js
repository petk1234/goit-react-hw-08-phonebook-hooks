export default function FormEl({
  styles,
  type,
  name,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) {
  return (
    <>
      <div className={styles.formElDiv}>
        <span className={styles.span}>
          {name[0].toUpperCase()}
          {name.substring(1)}:
        </span>
        <input
          className={
            errors[name] === undefined || errors[name] === "" || !touched[name]
              ? styles.formElDivInput
              : `${styles.formElDivInput} ${styles.invalidInput}`
          }
          onChange={handleChange}
          type={type}
          onBlur={handleBlur}
          name={name}
          value={values[name]}
        />
        {errors[name] && touched[name] && (
          <p className={styles.inputError}>{errors[name]}</p>
        )}
      </div>
    </>
  );
}
