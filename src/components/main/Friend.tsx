import { FC } from "react";

// interface IFriendProps {
//   src: string;
//   alt: string;
//   className?: string;
// }

// const Friend: FC<IFriendProps> = ({ src, alt, className }) => {
//   return <img src={src} alt={alt} className={className} />;
// };

const Friend: FC<{ photo: string; num: number }> = ({ photo, num }) => {
  // let namesOfClass = '';
  // if (num == 7) {namesOfClass = "bottomLeft"  }
  // if (num == 9) {namesOfClass = "bottomRight"  }

  return (
    <img
      className={num == 7 ? "bottomLeft" : num == 9 ? "bottomRight" : ""}
      src={photo}
      alt={`friend${num}`}
    />
  );
};

// const Friend: FC<{ photo: string; num: number }> = ({ photo, num }) => {
//   if (num == 7) {
//     return <img className="bottomLeft" src={photo} alt={`friend${num}`} />;
//   }
//   if (num == 9) {
//     return <img className="bottomRight" src={photo} alt={`friend${num}`} />;
//   }

//   return <img src={photo} alt={`friend${num}`} />;
// };

export default Friend;
