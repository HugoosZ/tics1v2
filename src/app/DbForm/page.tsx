"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "../../components/Header";
import { useState, useEffect } from "react";

export default function DbForm() {
  const [decibel, setDecibel] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [showSoundLevel, setShowSoundLevel] = useState(false)

  const decibelValue = (event) => {
      const value = event.target.value;
      if (value === '' || parseInt(value) >= 0) {
        setDecibel(value);
        setIsValid(true);
      } else {
        setIsValid(false);
      }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid && decibel !== '') {
      setShowSoundLevel(true);
    }
  }

 

  return (
    <>
      <Header/>
      <div className="w-full max-w-md mx-auto p-6 bg-card rounded-lg shadow-md mt-64">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Configurar nivel de sonido para semáforo</h1>
          <p className="text-muted-foreground">
            Establece el nivel de decibelios (dB) que activará el color rojo del semáforo en tu aula de clase.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="decibel-level" className="text-base font-medium">
                Nivel de decibelios (dB)
              </label>
              <input value={decibel} onChange={decibelValue} id="decibel-level" type="number" placeholder="Ingresa el nivel de dB" className="max-w-[200px]" />
              {!isValid && <p className="text-red-600">El nivel de decibelios no puede ser negativo.</p>}
            </div>
            <Button type="submit" variant="default" className="w-full" disabled={!isValid || decibel === ''}>
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
                El semáforo se encenderá en rojo cuando el nivel de sonido supere los 75 dB.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
