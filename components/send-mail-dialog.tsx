import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GetInTouchForm from "./get-in-touch";
import Image from "next/image";

export function SendMailDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>Contacto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px] p-0">
        <div className="grid lg:grid-cols-2">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/4649464/media/76bd131b4aa3447eb9f9d0887972c066.gif"
            alt="programmer"
            className="h-48 w-full hidden lg:block lg:h-full object-cover rounded-l"
          />
          <div className="p-4 lg:p-10">
            <h3 className="text-3xl font-bold mb-4">Cont&aacute;ctame</h3>
            <GetInTouchForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
