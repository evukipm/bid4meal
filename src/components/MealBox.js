import React from 'react';

export default function MealBox(props) {
  const { desc, price, mealId } = props.meal;

  const selectMeal = () => {
    props.select(mealId);
  };

  return (
    <div className="meal-box" onClick={selectMeal}>
      <div className="box1">{desc}</div>
      <div className="box2">{price + ' €'}</div>
      <div className="box3"><button onClick={props.save}><i className="fas fa-check"></i></button></div>
    </div>
  );
}
