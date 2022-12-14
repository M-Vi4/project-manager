import React, { useEffect } from "react";
import "./FollowersCard.css";

import { User } from "../User/User";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getAllUser } from "../../api/UserRequest";
const FollowersCard = () => {
  const [people, setPeople] = useState([]);
  const user = useSelector((state) => state.authReducer.authData.user);
  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await getAllUser();
      setPeople(data);
    };
    fetchPeople();
  }, []);
  return (
    <div className="FollowersCard">
      {people.length > 0 && (
        <>
          <h3 style={{alignSelf: 'flex-start',}}>People you may know</h3>
          {people.map((person, id) => {
            if (person._id !== user._id) {
              return (
                <div className="follower" key={person._id}>
                  <User person={person} key={id} />
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default FollowersCard;
