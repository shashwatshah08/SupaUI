import ResizableComponentPanel from "@/components/ui/resizableComponentPanel";
import PricingSection1, { pricingSection1CodeString } from "./pricingSection1";

export default function pricingSection() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="h-screen overflow-auto">
        <ResizableComponentPanel
          component={PricingSection1}
          codeString={pricingSection1CodeString}
        />
      </div>
    </div>
  );
}
