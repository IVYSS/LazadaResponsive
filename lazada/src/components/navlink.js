import React from "react";

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
    <div style={{ width: "100%", display: "flex" }}>
      {linkData.map((e, index) => {
        <a>{e.name}</a>;
      })}
    </div>
  );
};

export default Navlink;
