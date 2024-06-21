


import Link from "next/link";
import CustomIco from "./CustomIco";
import { useState, useEffect } from "react";


export default function HomePage() {
return (
<header
className={`bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between fixed top-0 w-full z-10" :`}
>
<Link href="/" className="flex items-center gap-2" prefetch={false}>
<CustomIco width={80} height={80}/> 
  <span className="text-lg font-bold">Sonocare</span>
</Link>
<nav className="flex items-center gap-4">
  <Link
    href="/DbForm"
    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    prefetch={false}
  >
    Establecer DB
  </Link>
  <Link
    href="/Graphics"
    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    prefetch={false}
  >
    Ver Gráficos
  </Link>
</nav>
</header>
)

};
