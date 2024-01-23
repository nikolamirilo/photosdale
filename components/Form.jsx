import { Input } from "@nextui-org/react";
import React from "react";

const Form = () => {
  return (
    <div className="w-full min-h-[80vh] h-fit flex flex-col justify-center items-center gap-10 bg-primary">
      <h1 className="text-3xl font-bold text-white">
        Contribute to photosdale
      </h1>
      <form
        name="contribute"
        method="post"
        enctype="multipart/form-data"
        className="flex flex-col w-[400px] gap-2 rounded-md bg-white px-5 py-10"
      >
        <Input isRequired type="text" label="Full Name" fullWidth={true} />
        <Input isRequired type="email" label="Email" fullWidth={true} />
        <Input
          isRequired
          type="text"
          label="Instagram Account"
          fullWidth={true}
        />
        <Input isRequired type="file" defaultValue="" fullWidth={true} />
        <Input isRequired type="text" label="Image Caption" fullWidth={true} />

        <button
          type="submit"
          className="text-sm bg-primary hover:bg-blue-600 px-5 py-2 text-white rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
