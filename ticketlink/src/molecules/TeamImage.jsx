import BaseImage from "../atoms/image/BaseImage";

const TeamImg = (props) => {
  const { src } = props;
  return (
    <div style={{ width: "80px" }}>
      <BaseImage src={src} />
    </div>
  );
};
export default TeamImg;
