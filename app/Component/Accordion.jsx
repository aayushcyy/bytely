import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo({ outline }) {
  return (
    <Accordion type="single" collapsible className="w-[45%]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer justify-normal bg-purple-300 px-4">
          <div className="flex flex-col">
            <p className="font-medium">{outline}</p>
            <span className="text-gray-500 text-xs font-normal">
              Ship user facing features
            </span>
          </div>
          <p className="rounded-lg bg-[#006d662a] text-[#0e5954] text-[10px] uppercase font-normal px-1.5 py-0.5">
            Remote
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
