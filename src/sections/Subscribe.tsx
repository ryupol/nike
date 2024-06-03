import { Button } from "../components";
import { useRef } from "react";

function Subscribe() {
  const inputRef: any = useRef();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    inputRef.current.value = "";
  };
  return (
    <section className="flex items-center justify-between gap-10 max-lg:flex-col max-container">
      <h2 className="flex-1 font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-1 items-center justify-center gap-5 rounded-full border-slate-gray p-2.5 max-sm:flex-col sm:border lg:max-w-[40%]"
      >
        <input
          ref={inputRef}
          type="text"
          className="input"
          placeholder="subscribe@nike.com"
        />
        <Button label="Sign Up" widthStyle="max-sm:w-full" />
      </form>
    </section>
  );
}

export default Subscribe;
