import { memo } from "react";

type props = {
  open: boolean;
  onClickClose: Function;
};

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((prop: props) => {
  const { open, onClickClose } = prop;
  console.log("ChildAreaがレンダリング！！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={() => onClickClose()}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
