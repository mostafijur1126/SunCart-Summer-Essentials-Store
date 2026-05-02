import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#E8F3EF] to-[#FFF0D3] flex items-center justify-center px-4 py-16 md:py-24">
      <Spinner className="text-[#ffb6a3] h-20 w-20" />
    </div>
  );
}
