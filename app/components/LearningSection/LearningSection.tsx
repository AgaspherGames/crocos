import React, { useState } from "react";
import Title from "../Title/Title";
import LearningCard, { LearningCardProps } from "./LearningCard/LearningCard";
interface LearningSectionProps {}

const LearningSection: React.FC<LearningSectionProps> = () => {
  const [cards, setCards] = useState<LearningCardProps[]>([
    {
        imgUrl: "/assets/learning/card-1.png",
        text: 'Подготовка и переподготовка охранников',
        offline:true
    },
    {
        imgUrl: "/assets/learning/card-2.png",
        text: 'БиОТ',
        offline:false
    },
    {
        imgUrl: "/assets/learning/card-3.png",
        text: 'Промышленная безопасность',
        offline:false
    },
    {
        imgUrl: "/assets/learning/card-4.png",
        text: 'Пожарно-технический минимум',
        offline:false
    },
  ]);
  return (
    <div id="learning" className="learning-section">
      <Title text="Обучение" />
      <div className="cards">
        {cards.map(card=> <LearningCard key={card.imgUrl} {...card} /> )}
      </div>
    </div>
  );
};

export default LearningSection;
