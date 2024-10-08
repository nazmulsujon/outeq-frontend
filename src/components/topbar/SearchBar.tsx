import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  commands: { value: string; label: string }[];
  className?: string;
  onFocusChange?: (isFocused: boolean) => void;
}

export default function SearchBar({
  commands,
  className,
  onFocusChange,
}: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (value: string) => {
    setInputValue(value);
    setOpen(!!value);
  };

  const filteredCommands = Array.isArray(commands)
    ? commands.filter((command) =>
        command.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  return (
    <div className="relative">
      <Command
        className={cn(
          "w-full md:min-w-[30rem] lg:min-w-[28rem] rounded border-[2.5px] border-[#2f94fd]",
          className
        )}
      >
        <CommandInput
          className="placeholder:italic h-10 lg:h-8"
          placeholder="Search for products..."
          onValueChange={handleValueChange}
          onFocus={() => onFocusChange?.(true)}
          onBlur={() => onFocusChange?.(false)}
        />
        <CommandList className="absolute w-[99%] mt-1 shadow-md z-50 top-10">
          {open && (
            <>
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command) => (
                  <CommandItem key={command.value} value={command.value}>
                    {command.label}
                  </CommandItem>
                ))
              ) : (
                <CommandEmpty>No results found.</CommandEmpty>
              )}
            </>
          )}
        </CommandList>
      </Command>
    </div>
  );
}
