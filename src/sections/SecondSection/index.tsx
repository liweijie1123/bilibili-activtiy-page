import { FC, useState } from "react";

import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";

import style from "./style.module.scss";
import classNames from "classnames";

const tabs: Array<{ key: string; title: string }> = [
  {
    key: "cartoon",
    title: "动画",
  },
  {
    key: "food",
    title: "美食",
  },
  {
    key: "movie",
    title: "电影",
  },
  {
    key: "life",
    title: "生活",
  },
];

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<String>("cartoon");

  return (
    <div className={style.secondSection}>
      {/* tabs */}
      <ul>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
            <span>{tab.title}</span>
            <span className={classNames(style.line,{[style.visible]: activeTab === tab.key})}></span>
          </li>
        ))}
      </ul>

      {/* tab content */}
      <div>
        <section>
          <h2>动画</h2>
          <img src={CartoonImage} alt="CartoonImage"></img>
        </section>
        <section>
          <h2>美食</h2>
          <img src={FoodImage} alt="FoodImage"></img>
        </section>
        <section>
          <h2>电源</h2>
          <img src={MovieImage} alt="MovieImage"></img>
        </section>
        <section>
          <h2>生活</h2>
          <img src={LifeImage} alt="LifeImage"></img>
        </section>
      </div>
    </div>
  );
};

export default SecondSection;
