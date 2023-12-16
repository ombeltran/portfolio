import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const serviceId = "service_j9wrwt5";
      // process.env.REACT_APP_SERVICE_ID;
      const templateId = "template_833iih9";
      // process.env.REACT_APP_TEMPLATE_ID;
      const apiKey = "peakllpXQS8GPyoBZ";
      // process.env.REACT_APP_APPI_KEY
      await emailjs.send(serviceId, templateId, data, apiKey);
      console.log("OK");
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
    <div className="bg-zinc-900 mx-auto my-[10%] p-10 rounded-md w-2/3">
      <div>
        <h2 className="text-2xl font-bold pb-3">Contact me</h2>
      </div>
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
          className="bg-zinc-800 px-3 py-2 block my-2 w-full rounded-md"
          {...register("message", { required: true, minLength: 2 })}>
        </textarea>
        <>
          <span className='text-red-500' >{myError("message", "Message")}</span>
          <br /><br />
        </>

        <button className="relative inline-flex items-center gap-x-1.5 rounded-md 
        bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm
        hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50
          disabled:cursor-not-allowed">
          Send
          {<IoIosSend />}
        </button>
      </form>
    </div>
  )
}

export default Contact;