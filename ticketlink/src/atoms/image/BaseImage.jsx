const BaseImage = (props) => {
  const { src } = props;
  return <img style={{ width: "100%" }} src={src} alt="" />;
};
export default BaseImage;
