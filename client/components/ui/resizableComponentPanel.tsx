import SyntaxHighlighter from "react-syntax-highlighter";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";

export default function ResizableComponentPanel({
  component: Component,
  codeString,
}: {
  component: any;
  codeString: string;
}) {
  return (
    <ResizablePanelGroup
      className="max-w-full w-full h-[calc(100vh-theme(spacing.16))] p-4 rounded-lg border dark:border-gray-800"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={100}>
        <div className="h-full flex flex-col gap-4 overflow-y-auto p-4">
          <Component />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={0}>
        <div className="h-full flex flex-col gap-4 overflow-y-auto p-4">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Code</h2>
            <p className="text-gray-500 dark:text-gray-400">
              View the TSX code for the selected component.
            </p>
          </div>
          <SyntaxHighlighter language="tsx">{codeString}</SyntaxHighlighter>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
