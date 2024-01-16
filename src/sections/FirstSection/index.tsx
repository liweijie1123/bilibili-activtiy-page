import { FC } from "react";

import BannerIamge from "../../assets/banner.jpg";
import style from './style.module.scss'


const FirstSection: FC = () => {
  return (
    <div className={style.firstSection} >
      <img src={BannerIamge} alt="bannner" />
    </div>
  );
};

export default FirstSection;
