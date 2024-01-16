import { FC } from "react";

import CartoonImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import FoodImage from '../../assets/food.jpg'

import style from './style.module.scss'

const SecondSection: FC = () => {
  return (
    <div className={style.secondSection}>
      {/* tabs */}
      <ul>
        <li>动画</li>
        <li>美食</li>
        <li>电源</li>
        <li>生活</li>
      </ul>

      {/* tab content */}
      <div>
        <section>
          <h2>
            动画
          </h2>
          <img src={CartoonImage} alt="CartoonImage"></img>
        </section>
        <section>
          <h2>
          美食
          </h2>
          <img src={FoodImage} alt="FoodImage"></img>
        </section>
        <section>
          <h2>
          电源
          </h2>
          <img src={MovieImage} alt="MovieImage"></img>
        </section>
        <section>
          <h2>
          生活
          </h2>
          <img src={LifeImage} alt="LifeImage"></img>
        </section>

      </div>
    </div>
  );
};

export default SecondSection;
