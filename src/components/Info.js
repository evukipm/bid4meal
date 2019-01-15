import React from 'react';

export default function Info(props) {
  const { firstName, lastName, prefix } = props.passenger;
  return (
    <div className="info-block">
      <h3>Welcome to bid4meal</h3>
      <p>
        <strong>Passenger:</strong>
        {` ${prefix}. ${firstName} ${lastName}`}
      </p>
    </div>
  );
}
