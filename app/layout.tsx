import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Landino",
  description: "Desenvolvimento de sites, sistemas e aplicativos para seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 antialiased selection:bg-cyan-300 selection:text-cyan-800">
        <div className="relative isolate transform-gpu pt-14">
        <Image src="/icon.svg" width={100} height={100} alt="" className="mx-auto mb-5" />

          <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>

          <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]" aria-hidden="true"><defs><pattern id="hero" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#hero)"></rect></svg>

          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative mx-auto max-w-3xl text-center">

                <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]" >Tire seu negócio<br />do papel</h1>
                <p className="mt-6 text-lg font-medium text-zinc-400 md:text-xl" >Desenvolvimento de sites, sistemas e aplicativos para seu negócio.</p>

                
                <div className="flex justify-center gap-10">
                  <p className="mt-6 text-lg font-medium text-zinc-400 md:text-xl" >
                    <a href="https://play.google.com/store/apps/developer?id=Landino&hl=en_US">Google Play</a>
                  </p>

                  <p className="mt-6 text-lg font-medium text-zinc-400 md:text-xl" >
                    <a href="https://apps.apple.com/br/developer/joao-paulo-hildebrand-landino/id1721533785">App Store</a>
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"></div>

        </div>
      </body>
    </html>
  );
}
