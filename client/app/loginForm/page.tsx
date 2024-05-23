import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SyntaxHighlighter from "react-syntax-highlighter";
import LoginForm1, { loginForm1CodeString } from "./loginForm1";
import LoginForm2, { loginForm2CodeString } from "./loginForm2";

function ResizableComponentPanel({
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
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Component</h2>
          </div>
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

export default function LoginForm() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="h-screen overflow-auto">
        <ResizableComponentPanel
          component={LoginForm1}
          codeString={loginForm1CodeString}
        />
      </div>
      <div className="h-screen overflow-auto">
        <ResizableComponentPanel
          component={LoginForm2}
          codeString={loginForm2CodeString}
        />
      </div>
    </div>
  );
}
