import React, { useState } from 'react'

function _1UsestateWithObject() {

    const [name,setName] = useState({firstName: '', lastName:''});
  return (
    <form>

<input type="text" value={name.firstName} onChange={e=>setName({...name,firstName: e.target.value})}/>
<input type="text" value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}/>


    <h2> name :{`${name.firstName} ${name.lastName}`}</h2>
    </form>
  )
}

// export default _1UsestateWithObject

// import React from 'react';

// class UsestateWithObject extends React.Component {
//   constructor(props) {
//     super(props);
//     this.firstNameRef = React.createRef();
//     this.lastNameRef = React.createRef();
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const firstName = this.firstNameRef.current.value;
//     const lastName = this.lastNameRef.current.value;
//     console.log(`Submitted Name: ${firstName} ${lastName}`);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" ref={this.firstNameRef} />
//         <input type="text" ref={this.lastNameRef} />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default UsestateWithObject;
