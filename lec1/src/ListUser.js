export const ListUser = (props) => {
    return (<div> 
  
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>);
  }

export const User = (props) => {
    return (<div> 
      <h1>Compnent Section</h1>
      <p>Lets Goo</p>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>);
  };
  