"use client"
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from "../../components/Header";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Graphics() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2000/esp32/data'); // URL del servidor backend
        const data = await response.json();
        const temperature = data.temperature.map((point: { value: number }) => point.value);
        const humidity = data.humidity.map((point: { value: number }) => point.value);
        const labels = data.temperature.map((point: { ts: string }) => new Date(point.ts).toLocaleTimeString());

        setTemperatureData(temperature);
        setHumidityData(humidity);
        setLabels(labels);
      } catch (error) {
        console.error('Error fetching telemetry data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Humidity',
        data: humidityData,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-8 px-4 md:px-6 text-center mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visualiza el sonido</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Controle los niveles de ruido en sus aulas con nuestro sistema de monitorización del sonido en tiempo real.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>GRAFICO 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <Line data={chartData} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>GRAFICO 2</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Otro gráfico */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>GRAFICO 3</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Otro gráfico */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
