import React from 'react';

const TopicSelection = (props) => {
  return (
    <div>
      {props.topics.map((el) => (
        <label className="container" key={el.id}>
          {el.name}
          <input
          type="checkbox"
          value={el.id}
          onChange={props.update} />
          <span className="checkmark" />
        </label>
      ))}
    </div>
  );
};

export default TopicSelection;
