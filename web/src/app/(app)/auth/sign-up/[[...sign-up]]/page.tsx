import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full items-center flex justify-center">
      <SignUp />
    </div>
  );
}
