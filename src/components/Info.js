import React from 'react';

export default function Info(props) {

  const takeGender = () => {
    const {prefix} = props.passenger;
    if(prefix === 'Mr'){
      return <div className="box"><i className="fas fa-male"></i></div>;
    }else if(prefix === 'Mrs'){
      return <div className="box"><i className="fas fa-female"></i></div>;
    }else{
      return <div className="box"></div>
    }
  }

  const { firstName, lastName } = props.passenger;
  const prefix = takeGender()
  return (
    <div className="info-block">
      {prefix}
      <div className="box">{firstName}</div>
      <div className="box">{lastName}</div>
    </div>
  );
}
