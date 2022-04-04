type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}



/* 
PS C:\Users\Ane\Desktop\labenu\vaughan-Diane-Araujo\modulo4\aprofundamento-typescript> tsc --init
tsc : O termo 'tsc' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável. Verifique a grafia do nome ou, 
se um caminho tiver sido incluído, veja se o caminho está correto e tente novamente.
No linha:1 caractere:1
+ tsc --init
+ ~~~
    + CategoryInfo          : ObjectNotFound: (tsc:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
  */