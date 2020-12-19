const Error = ({message}) => {
  return (
    <>
      <p className="error alert alert-danger">{message}</p>
    </>
  );
};

export default Error;
