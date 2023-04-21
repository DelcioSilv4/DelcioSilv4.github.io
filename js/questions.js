var quiz = new Quiz();

var answersOne = [{
    			title: "Nunca",
    			charNumber: 0
    		},
    		{
				title: "As vezes",
    			charNumber: 1
    		},
    		{
    			title: "O Suficiente",
    			charNumber: 2
            },
            {
                title: "Todos os dias",
                charNumber: 3
            },
    		{
    			title: "Eu vivo no Ginásio",
    			charNumber: 4
    		}];

var answersTwo = [{
    title: "Fujo e peço ajuda",
    charNumber: 0
},
    {
        title: "Convenso a pararem com conversa",
        charNumber: 1
    },
    {
        title: "Ignoro a existência deles",
        charNumber: 2
    },
    {
        title: "Luto com todos",
        charNumber: 3
    },
    {
        title: "Nunca Aconteceu tal coisa",
        charNumber: 4
    }];
var answersThree = [{
    title: "Um cão",
    charNumber: 0
},
    {
        title: "Um Lobo",
        charNumber: 1
    },
    {
        title: "Um Tigre",
        charNumber: 2
    },
    {
        title: "Um Leão",
        charNumber: 3
    },
    {
        title: "Um Urso",
        charNumber: 4
    }];

var answersFour = [{
    title: "Nerd",
    charNumber: 0
},
{
    title: "lider Nato",
    charNumber: 1
},
{
    title: "Nenhuma",
    charNumber: 2
},
{
    title: "Forte e Resistente",
    charNumber: 3
},
{
    title: "Dominador",
    charNumber: 4
    }];

var answersFive = [{
    title: "Cão de Pequeno Porte",
    charNumber: 0
},
{
    title: "Animais exóticos",
    charNumber: 1
},
{
    title: "Gato",
    charNumber: 2
},
{
    title: "Cão de Médio a Grande Porte",
    charNumber: 3
},
{
    title: "Um Lobo ",
    charNumber: 4
    }];

var answersSix = [{
    title: "Ficar em casa e jogar ou assistir",
    charNumber: 0
},
{
    title: "Procuro uma aventura ou desafio",
    charNumber: 1
},
{
    title: "Continuo os meus projetos pessoais",
    charNumber: 2
},
{
    title: "Pra Festa",
    charNumber: 3
},
{
    title: "Ginásio",
    charNumber: 4
    }];

var answersSeven = [{
    title: "0, Ninguem me quer",
    charNumber: 0
},
{
    title: "1",
    charNumber: 1
},
{
    title: "Não estou interessado",
    charNumber: 2
},
{
    title: "Perdi a Conta Hahaha",
    charNumber: 3
},
{
    title: "3-5",
    charNumber: 4
    }];

var answersEight = [{
    title: "Uma montanha-Russa",
    charNumber: 0
},
{
    title: "Eu confio em mim, então é alta",
    charNumber: 1
},
{
    title: "Alta",
    charNumber: 2
},
{
    title: "Eu sou o Rei aqui",
    charNumber: 3
},
{
    title: "Eu sou um Deus",
    charNumber: 4
    }];

var answersNine = [{
    title: "Respeito",
    charNumber: 0
},
{
    title: "Determinação",
    charNumber: 1
},
{
    title: "Autonomia",
    charNumber: 2
},
{
    title: "Auto-estima",
    charNumber: 3
},
{
    title: "Força",
    charNumber: 4
    }];

var answersTen = [{
    title: "Magro/Acima do Peso",
    charNumber: 0
},
{
    title: "Normal",
    charNumber: 1
},
{
    title: "Fitness",
    charNumber: 2
},
{
    title: "Musculado",
    charNumber: 3
},
{
    title: "Ainda Mais Musculado(Tipo o The Rock)",
    charNumber: 4
}];
questions = [
    new Question("1-Com que frequência fazes exercícios?",answersOne),
    new Question("2-Como lidas com Bullies?",answersTwo),
    new Question("3-Com que animal mais te identificas??", answersThree),
    new Question("4-Qual das descrições se adequa melhor?", answersFour),
    new Question("5-Qual Pet preferes?", answersFive),
    new Question("6-O que Preferes fazer num fim de semana?", answersSix),
    new Question("7-Quantos relacionamentos já tiveste este ano?", answersSeven),
    new Question("8-Como Consideras a tua autoestima?", answersEight),
    new Question("9-Qual das qualidades mais aprecias?", answersNine),
    new Question("10-Como descreves o teu corpo?", answersTen),
]

var text = "";
text+="<form class=\"formQuiz\">";
questions.forEach(function(question){
	text+= "<div class=\"formQuiz-question\">"
	text+= "<p>"+question.title+"</p>";
	question.answers.forEach(function(answer){
		text+="<label class=\"formQuiz-answer\"><input class=\"formQuiz-radio\" name=\""+question.title+"\" type=\"radio\" value=\""+answer.charNumber+ "\">"+answer.title+"</input></label>";
	});
	text+= "</div>"
});
text+="</br>"
text+="<input class=\"formQuiz-submit\" type=\"submit\" value=\"Responder\">";
text+="</form>"

$("#quiz").html(text);