import React from 'react';

const TopicSelection = (props) => {
  return (
    <div>
      {props.topics.map((el) => (
        <label className="container" key={el.id}>
          <p className="topic-label">
            {el.name}
          </p>
          <input
          type="checkbox"
          value={el.id}
          onChange={props.update}/>
          <span className="checkmark" />
        </label>
      ))}
    </div>
  );
};

export default TopicSelection;
