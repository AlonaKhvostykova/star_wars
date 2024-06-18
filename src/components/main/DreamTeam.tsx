import { FC } from "react";
import Friend from "./Friend";
import { friends } from "../../utils/constants";



const DreamTeam: FC = () => {
  return (
    <section className="right">
      <h2>Dream Team</h2>
      { 
        friends.map((friend, index) => <Friend key={friend} photo={friend} num={index+1 } />)
      }

      
       
      

    </section>
  );
};

export default DreamTeam;

{/* {friends.map((friend, index) => (
        <Friend
          key={index}
          // src={friend.src}
          // alt={friend.alt}
          // className={friend.className}
          {...friend} */}