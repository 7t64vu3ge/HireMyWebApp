import { Check } from "lucide-react";

/**
 * A single pricing feature list item with a green checkmark icon.
 * Supports light (white card) and dark (green card) variants,
 * and an optional highlight color for emphasis items.
 */
export default function CheckItem({
  text,
  highlight = false,
  variant = "light",
}) {
  const isLight = variant === "light";

  const iconBg = highlight
    ? "bg-[#86EFAC]/20"
    : isLight
      ? "bg-[#E8F3EA]"
      : "bg-white/20";

  const iconColor = highlight
    ? "text-[#86EFAC]"
    : isLight
      ? "text-[#386641]"
      : "text-white";

  const textColor = highlight
    ? "font-semibold text-[#86EFAC]"
    : isLight
      ? "text-gray-700"
      : "";

  return (
    <li className={`flex items-center gap-3 ${textColor}`}>
      <div className={`${iconBg} p-1 rounded-full`}>
        <Check size={16} className={iconColor} />
      </div>
      {text}
    </li>
  );
}
