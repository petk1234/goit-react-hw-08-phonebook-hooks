export default function Button({ style, operation, children }) {
  const handleOperation = () => {
    operation !== undefined && operation();
  };
  return (
    <button className={style} onClick={handleOperation}>
      {children}
    </button>
  );
}
