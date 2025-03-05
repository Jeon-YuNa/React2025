import { useState } from "react";
import CheckValue from "./CheckValue";
import SubmitButton from "./SubmitButton";

function Input() {
  const [values, setValues] = useState([
    {
      text: "만 14세 이상입니다.",
      require: true,
      isChecked: false,
    },
    {
      text: "무신사, 무신사 스토어 이용 약관",
      require: true,
      isChecked: false,
    },
    {
      text: "마케팅 목적의 개인정보 수집 및 이용 동의",
      require: false,
      isChecked: false,
    },
    {
      text: "광고성 정보 수신 동의",
      require: false,
      isChecked: false,
    },
  ]);

  const checked = (i) => {
    setValues((prev) => {
      const newArr = [...prev];
      newArr[i].isChecked = !newArr[i].isChecked;
      return newArr;
    });
  };
  return (
    <>
      {values.map((v, i) => {
        return <CheckValue {...v} onChange={() => checked(i)} />;
      })}
      <SubmitButton
        isCheck={values.filter((v) => v.require).every((v) => v.isChecked)}
      />
    </>
  );
}

export default Input;
