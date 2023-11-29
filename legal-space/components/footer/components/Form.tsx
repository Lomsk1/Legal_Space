"use client";
import { useForm } from "react-hook-form";
import Input from "./Input";

type FormData = {
	name: string;
	phone: string;
	text: string;
};

const Form: React.FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>();
	return (
		<div>
			<h1 className="text-main-green-light text-3xl text-center">
				მოითხოვე დახმარება
			</h1>
			<form className="flex flex-col items-center gap-y-3">
				<Input
					register={register("name", {
						required: true,
					})}
					placeholder="სახელი"
				/>
				<Input
					register={register("phone", {
						required: true,
						pattern: {
							value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
							message: "არასწორი ნომერი",
						},
					})}
					placeholder="ტელეფონის ნომერი"
				/>
				<div className="relative w-[250px] box-border">
					<textarea
						{...register("text", { required: true, minLength: 50 })}
						placeholder="შეიყვანეთ ტექსტი"
						className="p-[10px] box-border h-[200px] w-full focus:outline-none pl-5 resize-none bg-transparent peer border-b  border-b-main-green-light"
						cols={3}
					></textarea>
					<div className="w-0 absolute bottom-0 h-[3px] bg-main-green-medium transition-all duration-500 peer-focus:w-full z-10"></div>
				</div>
				<button className="py-5 px-16 border-none bg-main-green-medium w-full">
					გაგზავნა
				</button>
			</form>
		</div>
	);
};

export default Form;
