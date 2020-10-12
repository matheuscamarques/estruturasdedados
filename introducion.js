/*
Aula 1 - Introdução à Estrutura de Dados
Introdução

Computadores são máquinas que manipulam dados e informações. A computação abrange o estudo da forma como as informações são organizadas,
manipuladas e utilizadas em um computador.
Ao desenvolver um programa para realizar o processamento de dados, é preciso transcrever de forma que o computador possa compreender e
executar tal programa e que o programador também compreenda o que escreveu. As linguagens de programação são códigos escritos em uma
linguagem que o programador compreende e que o computador consegue interpretar e executar.
As estruturas de dados mais simples e que foram estudadas na disciplina de Programação Estruturada são os vetores e matrizes. Estas estruturas
de dados são estruturas de dados homogêneos pois permitem o armazenamento de dados de um único tipo de dado. Elas permitem acesso direto a um
elemento através do nome do vetor/matriz seguido do índice. Permitem também o acesso sequencial, percorrendo elemento a elemento do vetor/matriz.
Entretanto existem outras estruturas de dados mais complexas e que são usadas para representar de forma organizada arranjos de dados específicos.
Existem as seguintes estruturas de dados:

Lista - Uma Lista é uma estrutura de dados que é composta por nós, elementos, que apontam para o próximo elemento da lista, o ultimo elemento apontará para nulo.
Para compor uma lista encadeada, basta guardar seu primeiro elemento

Fila - As filas são estruturas de dados baseadas na idéia de que o primeiro elemento a entrar na pilha é o primeiro elemento a sair. Esta idéia
é conhecida como princípio FIFO (first in, first out), em que os elementos que foram inseridos no início são os primeiros a serem removidos.
Uma fila possui duas funções básicas que são adicionar elemento ao final da fila e remover o elemento que está no inicio da fila.

Árvore - Uma árvore é uma estrutura de dados em que cada elemento tem um ou mais elementos associados. Uma árvore possui apenas uma raiz.
Em uma árvore os elementos associados a cada nó da árvore são habitualmente chamados de filhos desses nós.
Os nós sem filhos de uma árvore são chamados de folhas.

Grafo - Um grafo é uma estrutura de dados composta por um conjunto de vértices e um conjunto de arrestas.
Sendo que cada arresta é representada por um par de vértices.

Elementos Fundamentais das Estruturas de Dados
Estas Estruturas de dados fazem uso de tipos abstratos de dados, alocação dinâmica de memória e ponteiros que são os elementos fundamentais a
partir dos quais são construídas estas Estruturas de dados.

Ponteiros são usados para referenciar os elementos da estrutura de dados e permitir o encadeamento dos elementos, a ligação entre os elementos
que compõem uma estrutura de dados;
Tipos abstratos de dados são usados para representados os elementos das estruturas de dados que podem ser compostos por atributos de tipos primitivos
 ou por atributos de outros tipos abstratos de dados;
Alocação Dinâmica de Memória é usada para permitir a criação de novos elementos da estrutura de dados em tempo de execução.

O uso destas Estruturas de dados em alguns casos é a única forma de se representar os dados a serem processados em um determinado problema.
Em outros casos, os dados poderiam ter sido processados de maneira diferente porém o programa não seria eficiente ( alto consumo de memória ) ou não teria um bom desempenho.

Neste semestre vamos estudar estas Estruturas de dados e seus algoritmos. Vamos ver também situações em que precisamos usar estas
Estruturas de dados para a solução de problemas complexos.


O Sistema Binário e os dados
O sistema numérico binário é a base do funcionamento dos computadores.
O sistema numérico transforma os dados em 0 e 1, e só assim podem ser armazenados na memória. Os dígitos binários são organizados na memóriaem byte (oito 0 e 1 agrupados, 8 bits)
, sendo que cada byte é associado a um endereço de memória, o que facilita sua correspondente na tabela ASCII, sendo esse caractere numérico convertido em binário para,
posteriormente, ser armazenado na memória.

Variáveis podem armazenar valores diferentes ao longo da execução de um programa,
mas armazenam um único valor a cada passo da execução.

Os Tipos de Dados de dados básicos não servem para tudo
Na maioria dos problemas resolvidos computacionalmente, os tipos de dados, numérico (números inteiros, real etc.), literal (caractere ou string), estão entre o mais comuns.

Dados do Tipo Numérico
Tipos de dados como números inteiros não possuem casas decimais, podendo ser números positivos ou números negativos.
Para armazenar um dado numérico do tipo inteiro, são necessários 2 bytes de memória (o espaço para armazenamento pode variar dependendo da linguagem de programação).

Exemplos de dados numéricos inteiros:

1025
-33
78
-25301

Tipo de dados como números reais possuem casas decimais, podendo ser números positivos ou números negativos.
Para armazenar um dado numérico real, são necessários 4 bytes de memória (o espaço para armazenamento pode variar dependendo da linguagem de programação).
Exemplos de dados numéricos reais:
13.35
123.51
-21.08
0.0

Dados do Caractere ou String
São tipos de dados formados por um caractere ou por uma cadeia de caracteres justapostos.
Os caracteres podem ser letras minúsculas, letras maiúsculas, números e caracteres especiais.
Para armazenar um dado do tipo caractere na memória do computador, é necessário um byte por caractere.
Exemplos de dados String e caracter:

‘teste’
‘1 + 4’
‘exemplos!’

Tipos de Variáveis em Javascript

Na linguagem Javascript as variáveis são declaradas informando o tipo de dado da variável seguido do nome da variável.
O tipo de dado pode ser um tipo básico, um vetor, uma matriz ou um tipo definido pelo usuário ( Objetos , Classes ).
Os tipos int ( para números inteiros ), float ( para números reais ) e Strings (  cadeia de caracteres ) são os tipos básicos mais utilizados na linguagem Javascript.
Para armazenar uma cadeia de caracteres, um string, na linguagem Javascript devemos usar um vetor de elementos do tipo char.

Vetor na Linguagem Javascript
Os vetores apresentam a capacidade de armazenar vários valores (dados) com uma única referência de nome dado ao vetor,
sendo diferenciados pelo índice do vetor. O índice de um vetor tem a numeração sempre iniciada em zero, ou seja,
o primeiro elemento de um vetor é armazenado no índice zero, o segundo elemento é armazenado no índice 1 e assim por diante.
O índice de um vetor identifica a posição de um elemento dentro do vetor.

Declaração de Vetor em C
Na linguagem Javascript os vetores são declarados com um par de colchetes após o nome da variável.
O número inteiro entre o par de colchetes indica o número de elementos que podem ser armazenados no vetor.

Exemplo de vetor:
Vejamos a declaração de um vetor do tipo int com 10 elementos.
Esta declaração significa que o vetor possui os elementos com índice de zero a 9 e que o vetor irá armazenar um número inteiro em cada elemento.

var vet = [];
    vet.length = 10;

Atribuindo Valores a um Vetor em Javascript

vet[0] = 4;
vet[3] = 5;

Carregando Valores em um Vetor em C

for(let i = 0; i < 10; i++ ) {
   vet[i] = 4;
}

Imprimindo Valores de um Vetor em Javascript
for(let i = 0; i < 10; i++ ) {
   console.log(`Elemento da posicao ${i}`,vet[i]);
}

Exemplo de um programa em Javascript que carrega um vetor com 10 números inteiros, calcula e mostra dois vetores resultantes contendo os números positivos
e os números negativos, respectivamente. Os vetores resultantes poderão ter 10 posições

Atividade 1
Faça um programa em C que carregue um vetor de 10 elementos do tipo inteiro. O programa deve gerar dois vetores com 10 elementos do tipo inteiro a partir
do vetor carregado, sendo um vetor com números pares e outro vetor com números impares. Utilize o operador de módulo ( % ) para determinar se um número é
par ou impar. Quando o número é par o resto da divisão do número por 2 é igual a zero.

Atividade 2
Faça um programa em Javascript que carrega dois vetores com 5 números inteiros cada. Na sequência, ordenar os vetores na ordem crescente. Para a ordenação utilize
o método da bolha. Imprimir um terceiro vetor com 10 posições em ordem crescente, resultante da intercalação dos dois vetores. Faça a análise da implementação
 do programa e discuta com os colegas a melhor forma de implementação possível para este problema.

Atividade 3
Cada grupo deve apresentar a sua solução e as vantagens e desvantagens da solução adotada.

Matriz na Linguagem Javascript
As matrizes são vetores com mais de uma dimensão cujos elementos são acessados a partir do nome da matriz e dos índices .
Normalmente usam-se matrizes com até 3 dimensões mas existem compiladores que podem trabalhar com até 12 dimensões.
O tipo de matriz mais comum é a matriz bidimensional que possui duas dimensões, normalmente uma dimensão para as linhas da matriz e outra dimensão para as colunas.

Declarando uma Matriz em Javascript

Vejamos a declaração de uma matriz chamada mat com 3 linhas e 4 colunas que armazena números reais.
A matriz mat deve ter um índice de 0 a 2 para referenciar as linhas e outro índice de 0 a 3 para referenciar as colunas.
O tipo de dado float deve ser usado na declaração da matriz para que ela possa armazenar números reais.
var mat = [];
    mat.length=3;

for(let i=0 ; i<3;i++){
     mat[i] = [];
     mat[i].length = 4
}

Assim, a declaração de uma matriz é feita informando o tipo de dado que será armazenado na matriz,
seguido pelo nome da matriz e pelas dimensões da matriz que devem ficar entre colchetes.

A exemplo dos vetores, os índices da matriz devem começar sempre em 0 (zero).

Atribuindo Valores a uma Matriz em Javascript

A atribuição de valor a um elemento de uma matriz deve conter as dimensões que permitem a localização do elemento na matriz.
Por exemplo, para atribuir o numero 4.5 ao elemento da segunda linha e terceira coluna da matriz mat seria assim:

mat[ 1 ] [ 2 ] = 4.5 ;

Assim, a atribuição de valores aos elementos de uma matriz devem especificar sempre a localização do elemento através das dimensões que permitem a localização do elemento.
Carregando Valores em uma Matriz em C

Para inicializarmos uma matriz, preenchendo todos os elementos da matriz, devemos percorrer todas as dimensões da matriz.
Para isso, usamos uma estrutura de repetição do tipo for para que seja possível percorrer todos os elementos de uma dimensão.

Para inicializar a matriz mat que possui 3 linhas e 4 colunas precisamos de uma estrutura de repetição para cada dimensão.
Um for para percorrer as linhas, de 0 até 2, e um outro for percorrendo as colunas, de 0 a 3.
Devemos levar em consideração também que as dimensões estão encadeadas e podemos portanto percorrer a matriz mat acessando as linhas
e para cada linha todas as colunas ou podemos acessar as colunas e para cada coluna percorrer todas as linhas.
A abordagem a ser utilizada depende de cada situação em particular, porém sempre devemos percorrer a matriz, acessando por linhas ou por colunas.

for( l = 0; l < 3; i++ )
   for ( c = 0; c < 4; c++ )
       mat[ l ] [ c ] = l/c;

Imprimindo os Dados de uma Matriz em Javascript

Para imprimir os elementos de uma matriz, devemos também percorrer todas as dimensões da matriz. Para isso, usamos novamente uma estrutura de repetição do tipo for para percorrer os elementos de cada dimensão.

for( l = 0; l < 3; l++ )
   for ( c = 0; c < 4; c++ )
       console.log(mat[ l ] [ c ]);

Atividade 4
Faça um programa em Javascript que leia uma matriz de 5 linhas com 3 colunas para armazenar a pontuação de 5 atletas em 3 aparelhos.
As notas são um número inteiro de 0 a 10.
O programa deve listar para cada aparelho qual foi o atleta com a maior nota.
O programa deve listar para cada atleta qual foi a sua menor nota nos 3 aparelhos.

*/