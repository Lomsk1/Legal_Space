"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  text: string;
};

interface PropTypes {
  lang: string;
}

const Form: React.FC<PropTypes> = ({ lang }) => {
  const [statusOk, setStatusOk] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    emailjs
      .send(
        "service_8fpjcjg",
        "template_9m1ix8h",
        { name: data.name, number: data.phone, text: data.text },
        "wxORF2X6FO2uPGl7U"
      )
      .then(
        function () {
          setStatusOk(lang === "eng" ? "SUCCESS" : "წარმატებით გაიგზავნა");
          reset();
        },
        function (error) {
          setStatusOk(
            lang === "eng"
              ? "FAILED. Please try again"
              : "შეცდომა. გთხოვთ სცადოთ ხელახლა"
          );
        }
      );
  };
  return (
    <div>
      <h1 className="text-main-green-light text-3xl text-center">
        {lang === "eng" ? "Contact Us" : "დაგვიკავშირდით"}
      </h1>
      <form
        className="flex flex-col items-center gap-y-3 pb-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register("name", {
            required: {
              value: true,
              message: lang === "eng" ? "Enter a Name" : "მიუთითეთ სახელი",
            },
          })}
          placeholder={`${lang === "eng" ? "Name" : "სახელი"}`}
          error={errors.name ? errors.name.message : undefined}
        />
        <Input
          register={register("phone", {
            required: {
              value: true,
              message: lang === "eng" ? "Enter a Name" : "მიუთითეთ სახელი",
            },
            // pattern: {
            //   value:
            //     /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            //   message: "არასწორი ნომერი",
            // },
          })}
          placeholder={`${
            lang === "eng" ? "Phone Number" : "ტელეფონის ნომერი"
          }`}
          error={errors.phone ? errors.phone.message : undefined}
        />
        <div className="relative w-[250px] md:w-[500px] box-border">
          <textarea
            {...register("text", {
              required: {
                value: true,
                message: lang === "eng" ? "Enter a text" : "შეიყვანეთ ტექსტი",
              },
            })}
            placeholder={`${
              lang === "eng" ? "Enter a Text" : "შეიყვანეთ ტექსტი"
            }`}
            className="p-[10px] box-border h-[100px] w-full focus:outline-none pl-5 resize-none bg-transparent peer border-b  border-b-main-green-light"
            cols={3}
          />

          <div className="w-0 absolute bottom-0 h-[3px] bg-main-green-medium transition-all duration-500 peer-focus:w-full z-10"></div>
        </div>
        <p className="text-red-500 font-semibold text-sm self-start">
          {errors?.text?.message}
        </p>
        <button
          className="py-3 px-12 border-none bg-main-green-medium w-full"
          type="submit"
        >
          {lang === "eng" ? "Send" : "გაგზავნა"}
        </button>
        {statusOk && statusOk}
      </form>
    </div>
  );
};

export default Form;
