import CardComponent from "../../components/CardComponent/CardComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";

export const HomePage = () => {
  const arr = ["TV", "Tu Lanh", "Lap top"];
  const slider1 =
    "https://res.cloudinary.com/do9rcgv5s/image/upload/v1669080502/bia_1_jkrk1w.webp";
  const slider2 =
    "https://res.cloudinary.com/do9rcgv5s/image/upload/v1669080502/bia_1_jkrk1w.webp";
  const slider3 =
    "https://res.cloudinary.com/do9rcgv5s/image/upload/v1669080502/bia_1_jkrk1w.webp";
  const slider = [slider1, slider2, slider3];

  return (
    <>
      <div style={{ padding: " 0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
          {/* HomePage */}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#effef",
          padding: "0 120px",
          height: "100px",
        }}
      >
        <SliderComponent arrImages={{ slider }} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent />
        </div>
      </div>
    </>
  );
};
