import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponet from "../../components/NavBarComponent/NavBarComponet";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./style";

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
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
          {/* HomePage */}
        </WrapperTypeProduct>
      </div>
      <div className="body" style={{width:"100%" , background:"#efefef"}}>
        <div
          id="container"
          style={{
            height: "100%",
            width:"1270px",
            margin:"0 auto"
          }}
        >
          <SliderComponent arrImages={{ slider }} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          {/* <NavBarComponet/> */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textbutton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116 , 229)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
