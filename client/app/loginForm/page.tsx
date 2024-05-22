import { Button } from "@/components/ui/button";
import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function LoginForm() {
  const codeString = `
  import { Button } from "@/components/ui/button";
  import {
    ResizablePanel,
    ResizableHandle,
    ResizablePanelGroup,
  } from "@/components/ui/resizable";
  
  export default function LoginForm() {
    return (
    <ResizablePanelGroup
      className="max-w-full w-full h-[calc(100vh-theme(spacing.16))] p-4 rounded-lg border dark:border-gray-800"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={70}>
        <div className="h-full flex flex-col gap-4 overflow-y-auto p-4">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Components</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Select a component to preview and see its code.
            </p>
          </div>
          <div className="grid gap-2">
            <Button>Hero Section</Button>
            <Button>Pricing Table</Button>
            <Button>Feature Grid</Button>
            <Button>Testimonials</Button>
            <Button>Contact Form</Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30}>
        <div className="h-full flex flex-col gap-4 overflow-y-auto p-4">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Code</h2>
            <p className="text-gray-500 dark:text-gray-400">
              View the JSX code for the selected component.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
            {codeString}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`;

  return (
    <ResizablePanelGroup
      className="max-w-full w-full h-[calc(100vh-theme(spacing.16))] p-4 rounded-lg border dark:border-gray-800"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={70}>
        <div className="h-full flex flex-col gap-4 overflow-y-auto p-4">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Components</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Select a component to preview and see its code.
            </p>
          </div>
          <div className="grid gap-2">
            <Button>Hero Section</Button>
            <Button>Pricing Table</Button>
            <Button>Feature Grid</Button>
            <Button>Testimonials</Button>
            <Button>Contact Form</Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={30}>
        <div className="h-full flex flex-col gap-4 overflow-y-auto p-4">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Code</h2>
            <p className="text-gray-500 dark:text-gray-400">
              View the JSX code for the selected component.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
            {codeString}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
