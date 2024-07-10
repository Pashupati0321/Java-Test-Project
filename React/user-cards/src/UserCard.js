import './UserCard.css'

function UserCard(props){
    return (
    <div className = "user-card">
     <h2>{props.name}</h2>
     <p>{props.location}</p>
     <p>{props.occupation}</p>
    </div>
    );
}

export default UserCard;