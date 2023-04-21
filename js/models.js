function Quiz(){
	this.characters = ["Beta,aquele que nao assume o papel de lider em um grupo, nao toma iniciativas e não é muito expressivo.",
		"Alpha, aquele que se destaca em um ambiente, é respeitado e admirado por seus pares, e assume o papel de lideranca naturalmente.",
		"Sigma, aquele que nao busca reconhecimento ou status social, prefere trabalhar sozinho e nao se importa em nao se encaixar nas expectativas sociais.",
		"Chad, homens considerados bem-sucedidos, atraentes e populares, que têm sucesso com as mulheres e possuem uma personalidade confiante e assertiva. ",
		"Giga Chad, e considerado ainda mais bem-sucedido, atraente e popular do que um 'Chad' comum."],
	this.pointsToCharacter = [0,0,0,0,0]
}

function addPointsToCharacter(quiz,number){
	quiz.pointsToCharacter[number] += 1;
}

function Question(title, answers) {
	this.title = title;
	this.answers = answers;
}