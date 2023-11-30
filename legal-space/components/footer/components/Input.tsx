import { UseFormRegisterReturn } from "react-hook-form";
type Props = {
	placeholder: string;
	register: UseFormRegisterReturn;
};

const Input: React.FC<Props> = ({ placeholder, register }) => {
	return (
		<div className="relative w-[250px] box-border">
			<input
				placeholder={placeholder}
				className="p-[10px] box-border w-full focus:outline-none pl-5 bg-transparent peer border-b  border-b-main-green-light "
				type="text"
                {...register    }
			/>
			<div className="w-0 absolute bottom-0 h-[3px] bg-main-green-medium transition-all duration-500 peer-focus:w-full z-10"></div>
		</div>
	);
};

export default Input;
