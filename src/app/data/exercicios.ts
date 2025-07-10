export type DiaTreino = "segunda" | "terca" | "quarta" | "quinta" | "sexta";

export const exerciciosPorDia: Record<
  DiaTreino,
  {
    nome: string;
    musculo: string;
    gif: string;
    descricao: string;
    quantidade: string;
  }[]
> = {
  segunda: [
    {
      nome: "Leg Press",
      musculo: "Glúteos, Quadríceps",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Nqa3k0cG5kbGdjY3o3Z3I0c2xydTVycnE2YzZ3Y3F4a2ZhM3Y3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Ajuste o assento, coloque os pés na plataforma e empurre até quase estender os joelhos. Desça controladamente.",
      quantidade: "3x12",
    },
    {
      nome: "Cadeira Extensora",
      musculo: "Quadríceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Sente-se com os pés sob o rolo, estenda as pernas lentamente e volte com controle.",
      quantidade: "3x12",
    },
    {
      nome: "Cadeira Flexora",
      musculo: "Isquiotibiais",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Deite-se, ajuste o rolo nos tornozelos, flexione os joelhos e desça lentamente.",
      quantidade: "3x12",
    },
    {
      nome: "Elevação Pélvica",
      musculo: "Glúteos",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Deite-se com os joelhos flexionados, eleve o quadril apertando os glúteos e desça devagar.",
      quantidade: "3x12",
    },
    {
      nome: "Cadeira Abdutora",
      musculo: "Glúteos, Abdutores",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Sente-se, ajuste a máquina, abra as pernas contra a resistência e volte controladamente.",
      quantidade: "3x12",
    },
    {
      nome: "Prancha Lateral",
      musculo: "Core, Oblíquos",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Apoie-se no antebraço, eleve o quadril formando uma linha reta e segure por 30 segundos de cada lado.",
      quantidade: "4x8",
    },
  ],
  terca: [
    {
      nome: "Remada Unilateral com Halteres",
      musculo: "Costas, Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Apoie uma mão e um joelho no banco, puxe o halter com o outro braço e desça devagar.",
      quantidade: "3x12",
    },
    {
      nome: "Remada Curvada com Halteres",
      musculo: "Costas",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com halteres em ambas as mãos, incline o tronco e puxe os pesos em direção ao quadril.",
      quantidade: "3x12",
    },
    {
      nome: "Puxada Baixa",
      musculo: "Costas, Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Na máquina, puxe a barra em direção ao peito mantendo as costas retas.",
      quantidade: "3x12",
    },
    {
      nome: "Rosca Direta com Halteres",
      musculo: "Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com halteres, flexione os cotovelos trazendo os pesos aos ombros e desça controladamente.",
      quantidade: "3x12",
    },
    {
      nome: "Rosca Martelo",
      musculo: "Bíceps, Antebraços",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com halteres, flexione os cotovelos com as palmas viradas para dentro, como um martelo.",
      quantidade: "3x12",
    },
  ],
  quarta: [
    {
      nome: "Hack Squat",
      musculo: "Glúteos, Quadríceps",
      gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/reverse-hack-squat.gif",
      descricao:
        "Na máquina, desça até os joelhos formarem 90 graus e empurre para cima com controle.",
      quantidade: "3x12",
    },
    {
      nome: "Afundo com Halteres",
      musculo: "Glúteos, Pernas",
      gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/agachamento-bulgaro.gif",
      descricao:
        "Posicione-se de frente para longe de um banco, apoie a ponta de um pé atrás no banco e o outro pé à frente. Segure um halter em frente ao corpo ou um halter em cada mão. Flexione o joelho da frente, mantendo a coluna reta, até formar um ângulo de 90 graus, e volte. Repita.",
      quantidade: "3x12",
    },
    {
      nome: "Elevação Pélvica",
      musculo: "Glúteos",
      gif: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Pelvica.gif",
      descricao:
        "Deite-se com os joelhos flexionados, eleve o quadril e desça lentamente.",
      quantidade: "3x12",
    },
    {
      nome: "Abdução de Quadril na Polia",
      musculo: "Glúteos, Abdutores",
      gif: "https://i0.wp.com/meutreinador.com/wp-content/uploads/2023/12/62_Abducao-de-quadril-na-polia-baixa.gif?fit=360%2C360&ssl=1",
      descricao:
        "Com a polia no tornozelo, levante a perna lateralmente e volte com controle.",
      quantidade: "3x12",
    },
    {
      nome: "Prancha Frontal",
      musculo: "Core",
      gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2019/02/prancha-musculos-envolvidos.jpg",
      descricao:
        "Apoie-se nos antebraços e pés, mantenha o corpo reto por 30 segundos.",
      quantidade: "4x8",
    },
    {
      nome: "Bicicleta",
      musculo: "Cardio",
      gif: "https://i.pinimg.com/originals/f1/55/97/f1559725611bf96c448c76629a9bc890.gif",
      descricao: "Pedale na bicicleta ergométrica por 1km em ritmo moderado.",
      quantidade: "1km",
    },
  ],
  quinta: [
    {
      nome: "Leg Press",
      musculo: "Glúteos, Quadríceps",
      gif: "https://media1.tenor.com/m/e0qeS17dv7QAAAAC/legpress45-leg-press.gif",
      descricao:
        "Na máquina, empurre com uma perna de cada vez, mantendo o controle.",
      quantidade: "3x12",
    },
    {
      nome: "Cadeira Extensora",
      musculo: "Quadríceps",
      gif: "https://media1.tenor.com/m/fNeMiJuGmEcAAAAC/cadeira-extensora-extensora.gif",
      descricao:
        "Estenda as pernas lentamente na máquina e volte com controle.",
      quantidade: "3x12",
    },
    {
      nome: "Elevação Pélvica com Pausa",
      musculo: "Glúteos",
      gif: "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Pelvica.gif",
      descricao:
        "Eleve o quadril, pause por 2 segundos no topo e desça lentamente.",
      quantidade: "3x12",
    },
    {
      nome: "Cadeira Abdutora com Isometria",
      musculo: "Glúteos, Abdutores",
      gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-aducao-de-pernas-na-maquina.gif",
      descricao: "Abra as pernas e segure por alguns segundos antes de voltar.",
      quantidade: "3x12",
    },
    {
      nome: "Desenvolvimento de Ombros com Halteres",
      musculo: "Ombros",
      gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-lateral-raise.gif",
      descricao:
        "Levante os halteres até a altura dos ombros e desça com controle.",
      quantidade: "3x12",
    },
    {
      nome: "Esteira",
      musculo: "Cardio",
      gif: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/corrida-na-esteira-inclinada-1.gif",
      descricao: "Caminhe ou corra na esteira por 1km em ritmo confortável.",
      quantidade: "1km",
    },
  ],
  sexta: [
    {
      nome: "Remada Unilateral (Leve)",
      musculo: "Costas, Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Use um peso leve, puxe o halter com controle e desça lentamente.",
      quantidade: "3x12",
    },
    {
      nome: "Rosca Concentrada Sentada",
      musculo: "Bíceps",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao: "Sentada, flexione o cotovelo trazendo o halter ao ombro.",
      quantidade: "3x12",
    },
    {
      nome: "Rosca Martelo",
      musculo: "Bíceps, Antebraços",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Com as palmas viradas para dentro, flexione os cotovelos como um martelo.",
      quantidade: "3x12",
    },
    {
      nome: "Crucifixo Inverso com Halteres",
      musculo: "Ombros, Costas",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Incline o tronco, levante os halteres lateralmente e desça com controle.",
      quantidade: "3x12",
    },
    {
      nome: "Alongamento Profundo",
      musculo: "Mobilidade",
      gif: "https://media.giphy.com/media/3o7TKqR2W8QzXy2zYk/giphy.gif",
      descricao:
        "Realize alongamentos suaves para todo o corpo por 5 a 10 minutos.",
      quantidade: "4x8",
    },
  ],
};
