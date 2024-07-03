"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import { buttonVariants } from "@/components/ui/button"

export default function DbForm() {
  const [decibel, setDecibel] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showSoundLevel, setShowSoundLevel] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      const height = formRef.current.clientHeight;
      console.log("Form height:", height);
    }
  }, [formRef.current]);

  const decibelValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '' || parseInt(value) >= 0) {
      setDecibel(value);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const sendDecibelLevel = async (decibel: string) => {
    try {
      const response = await fetch('localhost:2000/send-decibel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ decibel }),
      });

      if (response.ok) {
        console.log('Decibel level sent successfully');
      } else {
        console.error('Failed to send decibel level');
      }
    } catch (error) {
      console.error('Error sending decibel level:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid && decibel !== '') {
      setShowSoundLevel(true);
      sendDecibelLevel(decibel);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-md mx-auto p-6 bg-card rounded-lg shadow-md mt-64">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Configurar nivel de sonido para semáforo</h1>
          <p className="text-muted-foreground">
            Establece el nivel de decibelios (dB) que activará el color rojo del semáforo en tu aula de clase.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
            <div className="grid gap-2">
              <label htmlFor="decibel-level" className="text-base font-medium">
                Nivel de decibelios (dB)
              </label>
              <input
                value={decibel}
                onChange={decibelValue}
                id="decibel-level"
                type="number"
                placeholder="Ingresa el nivel de dB"
                className="max-w-[200px]"
              />
              {!isValid && <p className="text-red-600">El nivel de decibelios no puede ser negativo.</p>}
            </div>
            <Button type="submit" variant="black" className="w-full" disabled={!isValid || decibel === ''}>
              Guardar
            </Button>
          </form>
          {showSoundLevel && (
            <div className="bg-muted rounded-md p-4 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium">Nivel de sonido actual:</span>
                <span className="text-2xl font-bold">{decibel} dB</span>
              </div>
              <p className="text-muted-foreground text-sm">
                El semáforo se encenderá en rojo cuando el nivel de sonido supere los {decibel} dB.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
