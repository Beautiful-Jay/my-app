import React from "react";

export const Profile = ({ data }) => {
  return (
    <div className="main-profile">
      <div className="profile-user">
        {data.map((person, index) => (
          <div key={index} className="user-prof">
            <img
              className="user-image"
              src={person.picture.large}
              alt="profile-pic"
            />
            <p className="user-data">
              Name :{" "}
              <span className="user-data">
                {person.name.first} {person.name.last}
              </span>
            </p>
            <p className="user-data">
              Address :{" "}
              <span className="user-data">
                {person.location.street.number}, {person.location.street.name}
              </span>
            </p>
            <p className="user-data">
              Age : <span className="user-data">{person.dob.age}</span>
            </p>
            <p className="user-data">
              Phone : <span className="user-data">{person.phone}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

