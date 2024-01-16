import { FC, useEffect, useRef, useState } from "react";

import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";
import Logo from "../../assets/logo.png";

import style from "./style.module.scss";
import classNames from "classnames";

const tabs: Array<{ key: string; title: string }> = [
  {
    key: "cartoon",
    title: "动画",
    img: CartoonImage,
  },
  {
    key: "food",
    title: "美食",
    img: FoodImage,
  },
  {
    key: "movie",
    title: "电影",
    img: MovieImage,
  },
  {
    key: "life",
    title: "生活",
    img: LifeImage,
  },
];

const TAG_NUM = 56;

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<String>("cartoon");
  const [isFixed, setFixed] = useState<boolean>(false);

  const secondSectionRef = useRef<HTMLDivElement>(null);

  const active = (key: string) => {
    setActiveTab(key);

    const tabContentEl = document.querySelector(`[data-id="${key}"]`);

    if (tabContentEl) {
      //滚动
      tabContentEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onScroll = () => {
    if (secondSectionRef.current) {
      //可视窗口聚氯
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setFixed(top <= 0);

      const sectionNodes = secondSectionRef.current.querySelectorAll("section");

      Array.from(sectionNodes).forEach((sectionEl) => {
        //获取高度
        const { top } = sectionEl.getBoundingClientRect();
        //获取id
        const key = sectionEl.getAttribute("data-id") || "";

        if (top <= TAG_NUM) {
          setActiveTab(key);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={style.secondSection} ref={secondSectionRef}>
      {/* tabs */}
      <ul className={classNames({ [style.isFixed]: isFixed })}>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => active(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={classNames(style.line, {
                [style.visible]: activeTab === tab.key,
              })}
            ></span>
          </li>
        ))}
      </ul>

      {/* tab content */}
      <div>
        {tabs.map((tab) => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.img} alt={tab.key}></img>
          </section>
        ))}
      </div>

      {/* 吸地按钮 */}
      <div className={classNames(style.btnWrapper, { [style.visible]: isFixed })}>
        <img src={Logo} alt="" />

        <button> APP内打开</button>
      </div>
    </div>
  );
};

export default SecondSection;
