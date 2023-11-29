import MemberImage from "./components/MemberImage";

const members = [
	{
		name: "member one",
		image: {
			url: "/images/about/members/member-1.jpg",
		},
	},
	{
		name: "member two",
		image: {
			url: "/images/about/members/member-2.jpg",
		},
	},
	{
		name: "member three",
		image: {
			url: "/images/about/members/member-3.JPG",
		},
	},
];

const MeetOurTeam: React.FC = () => {
	const content = members.map((member, idx) => {
		return (
			<MemberImage
				name={member.name}
				image={ {url: member.image.url }}
				key={idx}
			/>
		);
	});
	return (
		<div className="bg-main-green-medium w-[100dvw] text-center py-10">
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
