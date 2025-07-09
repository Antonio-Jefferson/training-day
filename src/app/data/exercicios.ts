export type DiaTreino = "segunda" | "terca" | "quarta" | "quinta" | "sexta";

export const exerciciosPorDia: Record<
  DiaTreino,
  {
    nome: string;
    musculo: string;
    gif: string;
    descricao: string;
    duracao: number; // Tempo estimado em minutos
  }[]
> = {
  segunda: [
    {
      nome: "Leg Press",
      musculo: "Glúteos, Quadríceps",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Nqa3k0cG5kbGdjY3o3Z3I0c2xydTVycnE2YzZ3Y3F4a2ZhM3Y3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Ajuste o assento, coloque os pés na plataforma e empurre até quase estender os joelhos. Desça controladamente.",
      duracao: 3,
    },
    {
      nome: "Cadeira Extensora",
      musculo: "Quadríceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Sente-se com os pés sob o rolo, estenda as pernas lentamente e volte com controle.",
      duracao: 3,
    },
    {
      nome: "Cadeira Flexora",
      musculo: "Isquiotibiais",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Deite-se, ajuste o rolo nos tornozelos, flexione os joelhos e desça lentamente.",
      duracao: 3,
    },
    {
      nome: "Elevação Pélvica",
      musculo: "Glúteos",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Deite-se com os joelhos flexionados, eleve o quadril apertando os glúteos e desça devagar.",
      duracao: 2,
    },
    {
      nome: "Cadeira Abdutora",
      musculo: "Glúteos, Abdutores",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Sente-se, ajuste a máquina, abra as pernas contra a resistência e volte controladamente.",
      duracao: 3,
    },
    {
      nome: "Prancha Lateral",
      musculo: "Core, Oblíquos",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Apoie-se no antebraço, eleve o quadril formando uma linha reta e segure por 30 segundos de cada lado.",
      duracao: 2,
    },
  ],
  terca: [
    {
      nome: "Remada Unilateral com Halteres",
      musculo: "Costas, Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Apoie uma mão e um joelho no banco, puxe o halter com o outro braço e desça devagar.",
      duracao: 3,
    },
    {
      nome: "Remada Curvada com Halteres",
      musculo: "Costas",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com halteres em ambas as mãos, incline o tronco e puxe os pesos em direção ao quadril.",
      duracao: 3,
    },
    {
      nome: "Puxada Baixa",
      musculo: "Costas, Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Na máquina, puxe a barra em direção ao peito mantendo as costas retas.",
      duracao: 3,
    },
    {
      nome: "Rosca Direta com Halteres",
      musculo: "Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com halteres, flexione os cotovelos trazendo os pesos aos ombros e desça controladamente.",
      duracao: 2,
    },
    {
      nome: "Rosca Martelo",
      musculo: "Bíceps, Antebraços",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com halteres, flexione os cotovelos com as palmas viradas para dentro, como um martelo.",
      duracao: 2,
    },
  ],
  quarta: [
    {
      nome: "Hack Squat",
      musculo: "Glúteos, Quadríceps",
      gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/reverse-hack-squat.gif",
      descricao:
        "Na máquina, desça até os joelhos formarem 90 graus e empurre para cima com controle.",
      duracao: 3,
    },
    {
      nome: "Afundo com Halteres",
      musculo: "Glúteos, Pernas",
      gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/agachamento-bulgaro.gif",
      descricao:
        "posicione-se de frente para longe de um banco, apoie a ponta de um pé atrás no banco e o outro pé à frente. Segure um halter em frente ao corpo ou um halter em cada mão. Flexione o joelho da frente, mantendo a coluna reta, até formar um ângulo de 90 graus, e volte. Repita.",
      duracao: 3,
    },
    {
      nome: "Elevação Pélvica",
      musculo: "Glúteos",
      gif: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Pelvica.gif",
      descricao:
        "Deite-se com os joelhos flexionados, eleve o quadril e desça lentamente.",
      duracao: 2,
    },
    {
      nome: "Abdução de Quadril na Polia",
      musculo: "Glúteos, Abdutores",
      gif: "https://i0.wp.com/meutreinador.com/wp-content/uploads/2023/12/62_Abducao-de-quadril-na-polia-baixa.gif?fit=360%2C360&ssl=1",
      descricao:
        "Com a polia no tornozelo, levante a perna lateralmente e volte com controle.",
      duracao: 3,
    },
    {
      nome: "Prancha Frontal",
      musculo: "Core",
      gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2019/02/prancha-musculos-envolvidos.jpg",
      descricao:
        "Apoie-se nos antebraços e pés, mantenha o corpo reto por 30 segundos.",
      duracao: 2,
    },
    {
      nome: "Bicicleta",
      musculo: "Cardio",
      gif: "https://i.pinimg.com/originals/f1/55/97/f1559725611bf96c448c76629a9bc890.gif",
      descricao:
        "Pedale na bicicleta ergométrica por 15 minutos em ritmo moderado.",
      duracao: 15,
    },
  ],
  quinta: [
    {
      nome: "Leg Press Unilateral",
      musculo: "Glúteos, Quadríceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Na máquina, empurre com uma perna de cada vez, mantendo o controle.",
      duracao: 3,
    },
    {
      nome: "Cadeira Extensora",
      musculo: "Quadríceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Estenda as pernas lentamente na máquina e volte com controle.",
      duracao: 3,
    },
    {
      nome: "Elevação Pélvica com Pausa",
      musculo: "Glúteos",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Eleve o quadril, pause por 2 segundos no topo e desça lentamente.",
      duracao: 2,
    },
    {
      nome: "Cadeira Abdutora com Isometria",
      musculo: "Glúteos, Abdutores",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao: "Abra as pernas e segure por alguns segundos antes de voltar.",
      duracao: 3,
    },
    {
      nome: "Desenvolvimento de Ombros com Halteres",
      musculo: "Ombros",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Levante os halteres até a altura dos ombros e desça com controle.",
      duracao: 3,
    },
    {
      nome: "Esteira",
      musculo: "Cardio",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Caminhe ou corra na esteira por 10 minutos em ritmo confortável.",
      duracao: 10,
    },
  ],
  sexta: [
    {
      nome: "Remada Unilateral (Leve)",
      musculo: "Costas, Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Use um peso leve, puxe o halter com controle e desça lentamente.",
      duracao: 3,
    },
    {
      nome: "Rosca Concentrada Sentada",
      musculo: "Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao: "Sentada, flexione o cotovelo trazendo o halter ao ombro.",
      duracao: 2,
    },
    {
      nome: "Rosca Martelo",
      musculo: "Bíceps, Antebraços",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com as palmas viradas para dentro, flexione os cotovelos como um martelo.",
      duracao: 2,
    },
    {
      nome: "Crucifixo Inverso com Halteres",
      musculo: "Ombros, Costas",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Incline o tronco, levante os halteres lateralmente e desça com controle.",
      duracao: 3,
    },
    {
      nome: "Alongamento Profundo",
      musculo: "Mobilidade",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Realize alongamentos suaves para todo o corpo por 5 a 10 minutos.",
      duracao: 8,
    },
  ],
};
