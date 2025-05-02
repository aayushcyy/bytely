import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDemo({
  triggerText,
  TriggerIcon,
  content,
  onMouseEnter,
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          onMouseEnter={onMouseEnter}
          className="border-b-[2px] border-gray-400 py-4 px-3 flex items-center gap-2 hover:border-[#055651] hover:bg-[#05565113] cursor-pointer group"
        >
          <TriggerIcon className="size-5 stroke-3 text-gray-500 group-hover:text-[#08514D] group-hover:stroke-4" />
          <p className="text-gray-500 group-hover:text-black">{triggerText}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 border-[#08524E] bg-[#fdffff]">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-700 ">{content}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
