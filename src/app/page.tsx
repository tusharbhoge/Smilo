import { Button } from "@/components/ui/button";
import { Show, SignUpButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <Show when = "signed-out">
        <SignUpButton mode="modal">
          <Button variant="default" size="lg">
            Sign Up
          </Button>
        </SignUpButton>
      </Show>
      <Show when = "signed-in">
        <SignOutButton >
          <Button variant="default" size="lg">
            Sign Out
          </Button>
        </SignOutButton>
      </Show>
    </div>
  );
}