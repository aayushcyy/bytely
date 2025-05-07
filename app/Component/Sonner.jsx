import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonDemo } from "./Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function SonnerDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const query = form.query.value;

    console.log("Name:", name);
    console.log("Query:", query);
    toast.success("Form submitted!");
  };

  return (
    <>
      <Toaster />
      <Button
        className="border-none p-0 m-0 -mt-3 -ml-2 cursor-pointer hover:text-[#0B4F4B] sm:text-xs"
        variant="outline"
        onClick={() =>
          toast.custom((t) => (
            <div className="relative p-4 pt-7 bg-white rounded-md shadow-md w-80 border-[2px] border-gray-300">
              {/* Close icon */}
              <button
                onClick={() => toast.dismiss(t.id)}
                className="absolute top-1 right-1 text-gray-500 hover:text-gray-800 cursor-pointer"
              >
                <XMarkIcon className="size-4" />
              </button>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="font-normal text-black focus:border-none focus:outline-none focus:ring-0 focus:border-gray-300"
                />
                <Textarea
                  name="query"
                  placeholder="Your Query"
                  required
                  className="focus:outline-none focus:ring-0 focus:border-gray-300"
                />
                <ButtonDemo
                  type="submit"
                  text="Submit"
                  className="bg-[#0B4F4B] text-white px-2 py-1 cursor-pointer"
                />
              </form>
            </div>
          ))
        }
      >
        Contact us
      </Button>
    </>
  );
}
