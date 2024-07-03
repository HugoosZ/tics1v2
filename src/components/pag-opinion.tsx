import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

// Define el tipo Opinion al principio del archivo
interface Opinion {
  _id?: string;
  persona: string;
  correo: string;
  comentario: string;
  fecha_creacion?: string;
}

export default function PagOpinion() {
  const [data, setData] = useState<Opinion>({ persona: '', correo: '', comentario: '' });
  const [opinions, setOpinions] = useState<Opinion[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("http://18.211.89.243:2000/opinions", config);
      if (!response.ok) {
        throw new Error("Error sending opinion");
      }
      setData({ persona: '', correo: '', comentario: '' });
      alert("¡Gracias por tu opinión!");
      fetchOpinions(); // Refresca las opiniones después de enviar
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al enviar tu opinión.");
    }
  };

  const fetchOpinions = async () => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("http://18.211.89.243:2000/opinions", config);
      const result = await response.json();
      setOpinions(result.allOpinions);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchOpinions();
  }, []);
  
  return (
    <>
      <div className="mx-auto max-w-2xl space-y-8 py-12 px-4 sm:px-6 lg:px-8 content-center">
        <div>
          <h2 className="text-2xl font-bold">Deja tu opinión</h2>
          <p className="text-muted-foreground">Comparte tu experiencia con nosotros.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Ingresa tu nombre" value={data.persona} onChange={(e) => setData({ ...data, persona: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="Ingresa tu correo electrónico" value={data.correo} onChange={(e) => setData({ ...data, correo: e.target.value })} />
            </div>
          </div>
          <div>
            <Label htmlFor="review">Opinión</Label>
            <Textarea id="review" placeholder="Escribe tu opinión aquí..." className="min-h-[150px]" value={data.comentario} onChange={(e) => setData({ ...data, comentario: e.target.value })} />
          </div>
          <Button type="submit" className="w-full">
            Enviar opinión
          </Button>
        </form>
        <div>
          <h2 className="text-2xl font-bold">Opiniones de otros usuarios</h2>
          <div className="space-y-6">
            {opinions.map((opinion) => (
              <div className="flex items-start gap-4" key={opinion._id}>
                <Avatar className="w-10 h-10 border">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>{opinion.persona[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">{opinion.persona}</div>
                    <div className="text-xs text-muted-foreground">{new Date(opinion.fecha_creacion || '').toLocaleDateString()}</div>
                  </div>
                  <div>{opinion.comentario}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
