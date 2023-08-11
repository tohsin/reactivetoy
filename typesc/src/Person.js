import Proptypes from 'prop-types';

export const Person = (props) =>{
    return (
    <div>
        <h1>Name : {props.name}</h1>
        <h1>Email: {props.email}</h1>
        {props.friends.map((friend)=>{
            <h1>friend</h1>
        })}

    </div>)

};

Person.prototype = {
    name : Proptypes.string,
    email : Proptypes.string,
    age: Proptypes.number,
    is_married: Proptypes.bool,
    friends: Proptypes.arrayOf(Proptypes.string)

}