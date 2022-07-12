import React from "react";

const Category = () => {
  const categoryData = [
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
    {
      name: "มือถือ",
      path: "#",
      imgSrc:
        "	https://lzd-img-global.slatic.net/g/p/e5f1c4f9b929a2b35deba00c28666fbd.jpg_80x80q80.jpg_.webp",
    },
  ];
  return (
    <div className="category">
      <h3>หมวดหมู่</h3>
      <div className="category_grid_container">
        {categoryData.map((e, index) => {
          return (
            <div key={index} class="grid-item">
              <img src={e.imgSrc}></img>
              <p>{e.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
