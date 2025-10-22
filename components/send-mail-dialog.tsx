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
              src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709872.jpg?t=st=1694311452~exp=1694315052~hmac=94056bcb7c7338e4ac6e235cdab62c8993ee0d69d269e929c0bbcf9ac05dd2f7&w=826"
              alt="programmer"
              className="h-48 w-full lg:h-full object-cover rounded-l"
            />
            <p className="absolute bottom-0 right-0 mb-4 mr-4 text-white font-bold">
              @molerocn
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
