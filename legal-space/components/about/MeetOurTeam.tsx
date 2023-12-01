import { AttorneysTypes } from "@/@types/attorney/attorney";
import MemberImage from "./components/MemberImage";
import defaultImage from "@/public/images/avatar_default.jpg";
import AttorneyContainer from "../attorney/container/container";
import defaultAvatar from "@/public/images/avatar_default.jpg";

interface PropTypes {
  members: AttorneysTypes["data"];
}

const MeetOurTeam: React.FC<PropTypes> = ({ members }) => {
  const content = members.map((member, idx) => {
    return (
      <MemberImage
        name={member.name}
        image={{
          url: member.attorney_id.image
            ? member.attorney_id.image.url
            : defaultImage,
        }}
        key={idx}
      />
    );
  });
  return (
    <div className="bg-main-green-medium w-full text-center py-10 md:px-10">
      <h2 className="text-5xl underline my-10">
        Meet our <span className="text-main-green-dark">Team</span>
      </h2>

      <div className="grid grid-cols-1 gap-4 bg-main-green-medium p-5 rounded-md w-[90%] mx-auto max-w-[500px] md:grid-cols-2 md:max-w-[1320px] lg:grid-cols-3 gap-y-14">
        {members.map((att) => (
          <AttorneyContainer
            key={att._id}
            name={att.name}
            image={att.attorney_id.image}
            defaultAvatar={defaultAvatar.src}
            title={att.title}
            description={att.description}
            linkedin={att.attorney_id.linkedin}
            facebook={att.attorney_id.facebook}
            instagram={att.attorney_id.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
