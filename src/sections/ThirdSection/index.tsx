import { FC } from "react";
import Title1Image from '../../assets/title1.jpg'
import Title2Image from '../../assets/title2.jpg'
import CommentIamge from '../../assets/comment.jpg'

import style from './style.module.scss'


const ThirdSection: FC = () => {
  return (
    <div className={style.thirdSection}> 
      <img src={Title1Image} alt="Title1Image" />
      <img className={style.comment} src={CommentIamge} alt="CommentIamge" />
      <img src={Title2Image} alt="Title1Image" />
      <img className={style.comment} src={CommentIamge} alt="CommentIamge" />
    </div>
  );
};

export default ThirdSection;
