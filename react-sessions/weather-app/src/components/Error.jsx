function ErrorMessage({ message }) {
  return (
    <div className="error-box" role="alert">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
