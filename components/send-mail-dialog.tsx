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
          <div className="relative hidden lg:block">
            <img
              src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="programmer"
              className="h-48 w-full lg:h-full object-cover rounded-l"
            />
            <p className="absolute bottom-0 right-0 mb-4 mr-4 text-white font-bold">
              @juancamr
            </p>
          </div>
          <div className="p-4 lg:p-10">
            <h3 className="text-3xl font-bold mb-4">Contacto</h3>
            <GetInTouchForm />
            <p className="mt-4 text-gray-500">
              Recuerda que tambien puedes llamar a mi n&uacute;mero personal{" "}
              <span className="text-blue-500">
                <a href="tel:+51986327221">986327221</a>
              </span>
              .
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
