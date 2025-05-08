import { schema } from "@/lib/validators";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { LoaderCircle } from "lucide-react";

export type FormFields = {
  name: string;
  email: string;
  phoneNumber?: string;
  desc?: string;
};

export const InputForm: React.FC = () => {
    
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    
      console.log(data);

      setFormSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  if (formSubmitted) {
    return (
      <div className="flex flex-col justify-center items-center text-white bg-green-500">
        Message sent successfully!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 sm:gap-8 gap-6 sm:mb-0 mb-10 text-white"
    >
      <div className="sm:col-span-6 col-span-12">
        <Input
          className="border-b focus:border-white border-white/60"
          {...register("name")}
          placeholder="Name"
        />
        {errors.name && (
          <div className="text-red-500 text-[14px] mt-1">
            {errors.name.message}
          </div>
        )}
      </div>

      <div className="sm:col-span-6 col-span-12">
        <Input
          className="border-b focus:border-white border-white/60"
          {...register("email")}
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-500 text-[14px] mt-1">
            {errors.email.message}
          </div>
        )}
      </div>

      <div className="sm:col-span-6 col-span-12">
        <Input
          className="border-b focus:border-white border-white/60"
          {...register("phoneNumber")}
          placeholder="Phone Number"
          type="tel"
        />
      </div>

      <div className="col-span-12">
        <textarea
          {...register("desc")}
          className="border-b border-white outline-none w-full uppercase text-[18px]"
          placeholder="Message"
          rows={4}
        />
      </div>

      <div className="col-span-12">
        <div className="h-full border border-black bg-white inline-block p-[3px]">
          <button
            disabled={isSubmitting}
            type="submit"
            className={`bg-white text-black hover:bg-black hover:text-white border 
                border-black font-inter inline-flex items-center justify-center gap-0 whitespace-nowrap 
                font-normal py-[10px] px-[30px] text-[18px] uppercase cursor-pointer duration-500 
                disabled:pointer-events-none disabled:opacity-50`}
          >
            {isSubmitting ? (
              <LoaderCircle className="animate-spin text-center mx-auto text-black" />
            ) : (
              "Send a message"
            )}
          </button>
        </div>
      </div>

      {errors.root && (
        <div className="col-span-12 text-red-500">{errors.root.message}</div>
      )}
    </form>
  );
};
