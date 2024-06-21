"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CustomIco from "./CustomIco";
import Header from "./Header";
import { Fullpage, FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import PageScroll from 'react-page-scroll';
import PagOpinion from "./pag-opinion";
export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Fullpage>
        <FullPageSections>

          <FullpageSection style={{
            height: '100vh',
            padding: '1em',
          }}>          
          
          <main className="flex-1 flex flex-col items-center justify-center h-screen">
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <CustomIco width={220} height={220} className="mx-auto" />
              </div>
              <h1 className="text-4xl font-bold">Sonocare</h1>
              <p className="text-lg text-muted-foreground">
                Herramienta para monitorear y controlar el nivel de ruido en tu espacio.
              </p>
              <div className="flex justify-center gap-4">
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
              </div>
            </div>
          </main></FullpageSection>
          <FullpageSection style={{
            height: '100vh',
          }}><PagOpinion/>
        </FullpageSection>
          

        </FullPageSections>
      </Fullpage>
</div>
  )
}
