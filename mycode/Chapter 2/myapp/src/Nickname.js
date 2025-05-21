import React from 'react';

const Nickname = () => {
  const nicknames = ['Courts', 'Court', 'Courty'];
  const nicknameElements = [];

  nicknames.forEach((nickname, index) => {
    nicknameElements.push(
      <div key={index}>{nickname}</div>
    );
  });

  return (
    <div>
      {nicknameElements}
    </div>
  );
};

export default Nickname;
