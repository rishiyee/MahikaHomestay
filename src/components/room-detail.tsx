import roomImage from "../assets/Room.png";
import roomImage2 from "../assets/RoomDetailPhoto2.jpg";

type OneRoomDetailProp = {
  roomName: string;
  roomDescription: string;
  roomImage: string;
};
const roomOptions = {
  standardRoom: {
    roomName: "Standard Room",
    roomDescription:
      "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
    roomImage: roomImage,
  },
  deluxeRoom: {
    roomName: "Deluxe Ocean View Suite",
    roomDescription:
      "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
    roomImage: roomImage2,
  },
  businessSuite: {
    roomName: "Executive Business Suite",
    roomDescription:
      "Our spacious suites embody luxury and sophistication and enjoy the experience with a spacious sitting area, luxury bedding and free Wi-Fi.",
    roomImage: roomImage,
  },
};

export const RoomDetail = () => {
  return (
    <div
      className="sm:px-24 sm:py-32 flex flex-col items-center gap-8 sm375:py-14 sm375:px-4"
      id="roomTharif"
    >
      <div className="flex flex-col sm:gap-3 items-center sm375:gap-2 flex-1">
        <span className="sm:text-4xl text-baseText font-normal font-dmSans sm375:text-2xl text-center">
          Exquisite Cottage Accommodations
        </span>
        <span className="text-fade sm:text-xl text-center sm:w-3/4 font-normal font-dmSans sm375:text-lg">
          Experience comfort and charm in our exquisite cottages, blending
          rustic elegance with modern amenities for a peaceful, luxurious stay.
        </span>
      </div>
      <div className="flex justify-center sm:gap-4 sm:flex-row sm375:flex-col sm:flex-wrap sm375:gap-9">
        {Object.values(roomOptions).map((roomOption, index) => (
          <OneRoomDetails
            key={index}
            roomName={roomOption.roomName}
            roomDescription={roomOption.roomDescription}
            roomImage={roomOption.roomImage}
          />
        ))}
      </div>
    </div>
  );
};

export const OneRoomDetails = ({
  roomName,
  roomDescription,
  roomImage,
}: OneRoomDetailProp) => {
  return (
    <div className="sm:w-80 sm375:w-full">
      <div className="h-96">
        <img src={roomImage} alt="" className="w-full h-full object-cover" />
      </div>
      <span className="text-baseText text-2xl font-normal font-dmSans block pt-2">
        {roomName}
      </span>
      <div>
        <p className="text-fade font-dmSans font-normal sm:text-base sm375:text-sm">
          {roomDescription}
        </p>
      </div>
    </div>
  );
};
