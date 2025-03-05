const CheckValue = (props) => {
  const { text, require, onChange } = props;
  return (
    <p>
      <input onClick={onChange} type="checkbox" />
      {text}
      {require ? " (필수)" : " (선택)"}
    </p>
  );
};
export default CheckValue;
