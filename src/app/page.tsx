"use client";
import { useState } from "react";
import { exerciciosPorDia, DiaTreino } from "./data/exercicios";

export default function Home() {
  const dias = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ] as const;

  const hoje = dias[new Date().getDay()];
  const [index, setIndex] = useState(0);
  const [skippedExercises, setSkippedExercises] = useState<number[]>([]);
  const [showSkipped, setShowSkipped] = useState(false);

  function isDiaTreino(dia: string): dia is DiaTreino {
    return dia in exerciciosPorDia;
  }

  const exercicios = isDiaTreino(hoje) ? exerciciosPorDia[hoje] : [];

  function proximoExercicio() {
    if (index < exercicios.length - 1) {
      setIndex(index + 1);
    } else {
      setShowSkipped(skippedExercises.length > 0);
    }
  }

  function pularExercicio() {
    if (!skippedExercises.includes(index)) {
      setSkippedExercises([...skippedExercises, index]);
    }
    if (index < exercicios.length - 1) {
      setIndex(index + 1);
    } else {
      setShowSkipped(skippedExercises.length > 0);
    }
  }

  function voltarParaExercicioPulado(exercicioIndex: number) {
    setIndex(exercicioIndex);
    setSkippedExercises(skippedExercises.filter((i) => i !== exercicioIndex));
    setShowSkipped(false);
  }

  function resetarTreino() {
    setIndex(0);
    setSkippedExercises([]);
    setShowSkipped(false);
  }

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Treino da Namorada</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gradient-to-b from-pink-50 to-white min-h-screen flex items-center justify-center font-sans">
        <main className="max-w-md w-full mx-auto p-6 bg-white rounded-2xl shadow-lg text-center transition-all duration-300">
          <h1 className="text-2xl font-bold text-pink-600 mb-4">
            Treino de {hoje.charAt(0).toUpperCase() + hoje.slice(1)}
          </h1>

          {exercicios.length === 0 ? (
            <p className="text-gray-600 text-lg">
              Não há exercícios para hoje. Descanse! 😊
            </p>
          ) : showSkipped && skippedExercises.length > 0 ? (
            <div className="animate-fade-in">
              <p className="text-xl font-semibold text-pink-500 mb-4">
                Você terminou ou pulou todos os exercícios!
              </p>
              <p className="text-gray-600 mb-4">
                Exercícios pulados: {skippedExercises.length}
              </p>
              <div className="space-y-2">
                {skippedExercises.map((i) => (
                  <button
                    key={i}
                    onClick={() => voltarParaExercicioPulado(i)}
                    className="block w-full bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Voltar para: {exercicios[i].nome}
                  </button>
                ))}
              </div>
            </div>
          ) : showSkipped && skippedExercises.length === 0 ? (
            <div className="animate-fade-in bg-pink-100 rounded-lg p-6">
              <p className="text-2xl font-bold text-pink-600 mb-4">
                Parabéns, você concluiu todo o treino de hoje! 🎉
              </p>
              <p className="text-gray-600 mb-4">
                Você arrasou! Volte amanhã para mais! 💪
              </p>
              <button
                onClick={resetarTreino}
                className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-200"
              >
                Ver treino novamente
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {exercicios[index].nome}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Músculo trabalhado:</strong> {exercicios[index].musculo}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Quantidade:</strong> {exercicios[index].quantidade}
              </p>
              <p className="text-gray-600 mb-4">
                {exercicios[index].descricao}
              </p>
              <img
                src={exercicios[index].gif}
                alt={exercicios[index].nome}
                className="w-full max-w-xs mx-auto rounded-lg mb-6 shadow-md"
              />
              <div className="flex justify-center gap-4">
                <button
                  onClick={proximoExercicio}
                  className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-200"
                >
                  Concluído
                </button>
                <button
                  onClick={pularExercicio}
                  className="bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-400 transition-colors duration-200"
                >
                  Pular
                </button>
              </div>
            </div>
          )}
        </main>
        <style jsx global>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </body>
    </html>
  );
}
