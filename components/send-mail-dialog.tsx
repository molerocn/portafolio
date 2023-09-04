import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GetInTouchForm from "./get-in-touch";
import Image from "next/image";

export function SendMailDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[825px] p-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="programmer"
              className="h-48 w-full hidden lg:block lg:h-full object-cover rounded-l"
            />
            <p className="absolute bottom-0 right-0 mb-4 mr-4 text-white font-bold">
              @juancamr
            </p>
          </div>
          <div className="p-4 lg:p-10">
            <h3 className="text-3xl font-bold mb-4">Contacto</h3>
            <GetInTouchForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
