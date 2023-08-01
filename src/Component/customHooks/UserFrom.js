import React from 'react';
import UseInput from './UseInput';

function UserFrom() {
  const [firstName, bindFirstName, resetFirstName] = UseInput('');
  const [lastName, bindLastName, resetLastName] = UseInput('');

  const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);

    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" {...bindFirstName} type="text" />
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" {...bindLastName} type="text" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserFrom;
