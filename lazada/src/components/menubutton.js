import React from "react";

const Menubutton = () => {
  const menuData = [
    {
      menuName: "LazMall",
      path: "#",
      src: "https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png",
    },
    {
      menuName: "คูปองส่วนลด",
      path: "#",
      src: "https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png",
    },
    {
      menuName: "เติมเงิน&ดีลอาหาร",
      path: "#",
      src: "https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png",
    },
    {
      menuName: "ดีล 9 บาท",
      path: "#",
      src: "https://icms-image.slatic.net/images/ims-web/a6a7c920-404d-47bc-b4a3-c79154048fea.png",
    },
    {
      menuName: "ร้านค้าแนะนำ",
      path: "#",
      src: "https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png",
    },
  ];
  return (
    <div className="menubutton">
      {menuData.map((e, index) => {
        return (
            
          <div className="menubutton-button">
            <a className="menubutton-list" href={e.path}>
              <img src={e.src} className="menubutton-list-item-img"></img>
              <p style={{ fontSize: "1vw", whiteSpace: "nowrap" }}>
                {e.menuName}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Menubutton;
