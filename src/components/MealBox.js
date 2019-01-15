import React from 'react';

export default function MealBox(props) {
  const {
    desc, price, currency, mealId,
  } = props.meal;

  const selectMeal = () => {
    props.select(mealId);
  };

  return (
    <div className="meal-box" onClick={selectMeal}>
      <h2>{desc}</h2>
      <h3>{price + currency}</h3>
    </div>
  );
}
