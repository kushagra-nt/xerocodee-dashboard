import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsLetter() {
  return (
    <div>
      <div className="w-full sm:w-[80%] lg:w-[70%] p-10 rounded-[4rem] bg-blue-200 flex flex-col gap-y-10 align-center text-center mx-auto">
        <Send className="mx-auto text-[#0C5BC6]" size={80} />
        <div>
          <h1 className="text-[#242331] mb-3 w-[60%] mx-auto font-bold text-2xl">
            Subscribe to our Newsletter & Get The Coupon Code.
          </h1>
          <p className="font-light">
            All your information is completely confidential
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 mx-auto gap-x-10">
          <Input
            placeholder="Type your email"
            className="placeholder:text-[#9E9BAF] text-black min-w-[250px] shadow rounded-lg py-2 px-4"
          />
          <Button className="text-white bg-[#0C5BC6] font-bold">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="h-64"></div>
    </div>
  );
}
