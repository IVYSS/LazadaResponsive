import React from "react";
import "./components.css";
const Navlink = () => {
  const linkData = [
    {
      name: "ช้อปคุ้มกว่าเดิมบนแอป",
      path: "#",
    },
    {
      name: "ขายสินค้ากับลาซาด้า",
      path: "#",
    },
    {
      name: "ช่วยเหลือ",
      path: "#",
    },
    {
      name: "ติดตามสินค้า",
      path: "#",
    },
    {
      name: "ลงชื่อเข้าใช้",
      path: "#",
    },
    {
      name: "สมัครสมาชิก",
      path: "#",
    },
    {
      name: "CHANGE LANGUAGE",
      path: "#",
    },
  ];

  return (
    <div className="navlink-main">
      {linkData.map((e, index) => {
        return (
          <div className="navlink-list" key={index}>
            <a className="navlink-item" href={e.path}>
              <p className="navlink-text">{e.name}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Navlink;
