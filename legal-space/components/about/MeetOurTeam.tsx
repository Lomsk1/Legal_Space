import { AttorneysTypes } from "@/@types/attorney/attorney";
import MemberImage from "./components/MemberImage";
import defaultImage from '@/public/images/avatar_default.jpg'

interface PropTypes {
  members: AttorneysTypes["data"];
}

const MeetOurTeam: React.FC<PropTypes> = ({members}) => {
  const content = members.map((member, idx) => {
    return (
      <MemberImage
        name={member.name}
        image={{ url: member.attorney_id.image ? member.attorney_id.image.url : defaultImage }}
        key={idx}
      />
    );
  });
  return (
    <div className="bg-main-green-medium w-full text-center py-10 md:px-10">
      <h2 className="text-5xl underline my-10">
        Meet our <span className="text-main-green-dark">Team</span>
      </h2>

      <div className="grid grid-cols-2  md:grid-cols-3 justify-center gap-10 items-center mx-auto flex-wrap">
        {content}
      </div>
    </div>
  );
};

export default MeetOurTeam;
