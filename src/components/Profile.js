import React from 'react'

export const Profile = ({ data }) => {
    return(
        <div>
    {data.map((person, index) => (
        <div key={index} className='user-card'>
          <img src={person.picture.large} alt='profile-picture' />
          <p>Username : <span>{person.login.username}</span></p>
          <p>Name : <span>{person.name.first} {person.name.last}</span></p>
          <p>Address : <span>{person.location.street.number}, {person.location.street.name}</span></p>
          <p>Age : <span>{person.dob.age}</span></p>
          <p>Phone : <span>{person.phone}</span></p>
        </div>
      ))}
      </div>
  );
}

