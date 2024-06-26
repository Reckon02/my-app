import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Inici de sessió</h1>
            <p className="text-balance text-muted-foreground">
              Continua per accedir a HydraTech
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Adreça electrònica</Label>
              <Input
                id="email"
                type="email"
                placeholder="hello@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contrasenya</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Has oblidat la contrasenya?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="*********"
              />
            </div>
            <Button type="submit" className="w-full">
              Inici de sessió
            </Button>
            <Button variant="outline" className="w-full">
              Inici de sessió amb Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            No tens un compte?{" "}
            <Link href="#" className="underline">
              Crea un compte nou
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://raw.githubusercontent.com/Reckon02/my-app/master/public/Eclipse-_1_.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
