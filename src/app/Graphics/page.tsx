"use client"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Header from "../../components/Header";

export default function Graphics() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen"> {/* Asegúrate de que el contenedor se centre */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-8 px-4 md:px-6 text-center mx-auto"> {/* Centra el texto y los elementos dentro */}
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visualiza el sonido</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Controle los niveles de ruido en sus aulas con nuestro sistema de monitorización del sonido en tiempo real.              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>GRAFICO 1</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your content */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>GRAFICO 2</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your content */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>GRAFICO 3</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your content */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
