import ResizableComponentPanel from "@/components/ui/resizableComponentPanel";
import LoginForm1, { loginForm1CodeString } from "./loginForm1";
import LoginForm2, { loginForm2CodeString } from "./loginForm2";

export default function LoginForm() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="h-[85vh] overflow-auto">
        <ResizableComponentPanel
          component={LoginForm1}
          codeString={loginForm1CodeString}
        />
      </div>
      <div className="h-[85vh] overflow-auto">
        <ResizableComponentPanel
          component={LoginForm2}
          codeString={loginForm2CodeString}
        />
      </div>
    </div>
  );
}
