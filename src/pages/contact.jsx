import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Card } from "../components/Card";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;
      const apiKey = process.env.REACT_APP_APPI_KEY
      await emailjs.send(serviceId, templateId, data, apiKey);
      console.log("OK");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const myError = (myType, myName) => {
    if (myType === "message") {
      return errors[myType] && `${myName} is required and it must have at least two characters`;
    }

    return errors[myType] && `${myName} is required`;
  };

  return (
    <motion.div
      className="pt-[19%] lg:pt-[9%] absolute"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="max-w-[70%] md:max-w-[40%] mx-auto text-center pb-8">
        <h2 className="text-4xl font-bold pb-3">Contact me</h2>
        <p className="px-[10%] text-2xl">
          I am currently open to <span className="text-red-800">new opportunities</span>. You can contact me through my networks or
          send me your contact information through the <span className="text-red-800">form</span>.
        </p>
      </div>
      <Card className="max-w-[70%] md:max-w-[40%]">
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Section name */}
          <label htmlFor="name" className="block text-lg font-medium text-gray-400">Name</label>
          <input type="text" name="name" className="bg-zinc-800 px-3 py-2 block my-2 w-full rounded-md"
            {...register("name", { required: true })} />
          <span className='text-red-500' >{myError("name", "Name")}</span>

          {/* Section email */}
          <label htmlFor="email" className="block text-lg font-medium text-gray-400">Email</label>
          <input type="email" name="email" className="bg-zinc-800 px-3 py-2 block my-2 w-full rounded-md"
            {...register("email", { required: true })} />
          <span className='text-red-500' >{myError("email", "Email")}</span>

          <label htmlFor="subject" className="block text-lg font-medium text-gray-400">Subject</label>
          <input type="text" name="subject" className="bg-zinc-800 px-3 py-2 block my-2 w-full rounded-md"
            {...register("subject", { required: true })} />
          <span className='text-red-500' >{myError("subject", "Subject")}</span>

          <label htmlFor="message" className="block text-lg font-medium text-gray-400">Message</label>
          <textarea name="message" id="" cols="30" rows="10"
            className="bg-zinc-800 px-3 py-1 block my-2 w-full rounded-md"
            {...register("message", { required: true, minLength: 2 })}>
          </textarea>
          <>
            <span className='text-red-500' >{myError("message", "Message")}</span>
            <br /><br />
          </>

          <button className="relative inline-flex items-center gap-x-1.5 rounded-md 
        bg-red-800 px-4 py-1.5 text-lg font-semibold text-white shadow-sm
        hover:bg-red-600 focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50
          disabled:cursor-not-allowed">
            Send
            {<IoIosSend />}
          </button>
        </form>
      </Card>
    </motion.div>

  )
}

export default Contact;