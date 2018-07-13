
# Proyecto 2: DATA DASHBOARD

## Preámbulo
En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la mayor cantidad de datos posibles respecto al progreso de las estudiantes para apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance completando los proyectos de la Ruta de Aprendizaje y su desempeño en función a la Rúbrica de Niveles Esperados. Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que llamamos LMS (Learning Management System). El LMS acumula data sobre quién leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios completados, nota en quizzes, etc.) no impacta directamente en la evaluación de una estudiante, sí es una pieza de información relevante que las TMs quisieran visualizar para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan ver y usar la data de progreso del LMS. Para ello, proponemos crear un data dashboard (tablero de visualización de datos).

### Introducción
Nuestro segundo proyecto a desarrollar en nuestro proceso de bootcamp es un Data Dashboard, donde las TM podrán revisar de manera más sencilla y gráfica el avance que las alumnas de laboratoria realizan en el LMS. Con la finalidad de poder apoyarlas en su aprendizaje.

### Proceso de planificación
Para realizar la planificación del proyecto, se utilizó un tablero Backlog y un planificador online en la plataforma Trello.
La planificación se reliza cada vez que termina un sprint.

## Objetivos 
El objetivo principal de este proyecto es crear una herramienta web que permita a las Training Managers de Laboratoria verificar el progreso de cada una de las estudiantes mediante la dashboard de una manera fácil y rápida,  permitiendo así optimizar sus tiempos a la hora de  visualizar todos los datos posibles respecto al desempeño de las estudiantes para apoyarlas en su aprendizaje. 

### Product backlog
![Scrum](src/Imagen/scrum.jpg)

### Trello
![Trello](src/Imagen/trello.jpg)

### Proceso de planeamiento del proyecto

### User Experience Design

#### 1) Definición del producto

Nuestro proyecto Data Dashboard tiene como finalidad dar una solución a nuestras Training Manager, para hacer un correcto seguimiento a las estudiantes.
Para ello, realizamos una entrevista personal a nuestra Training Manager (TM) de Lima, Alejandra Ramirez, en la que solicitamos feedback del primer draft elaborado.

#### Preguntas de nuestra entrevista
* ¿Quiénes son los principales usuarios de producto?

Las Training Manager de las diferentes sedes de Laboratoria y el equipo de colaboradores.

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Los usuarios esperan encontrar un panel que muestre de manera global los datos de los progresos de las estudiantes con respecto a su promoción, poder ordenarlos y filtrarlos  según su completitud, y realizar búsquedas por nombres, para poder realizar un mejor seguimiento y tomar decisiones acertadas con respecto a que está funcionando y qué no con respecto al aprendizaje del grupo. 

* ¿ Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Al realizar la entrevista a la TM, ella nos solicitó mostrar de manera clara el porcentaje de completitud de cada alumna en cuanto a ejercicios, lecturas  y cuestionarios en un listado que pueda filtrarse. Con base en ello, trabajamos en nuestro primer prototipo de alta fidelidad en Figma.

* ¿Cuándo revisan normalmente estos datos los usuarios?

En fechas clave como al inicio y final de cada Bootcamp y al finalizar cada proyecto, para revisar el progreso de cada alumna.

* ¿Cómo crees que el producto les está resolviendo sus problemas?

La interfaz le permite a nuestra Training Manager y colaboradores seguir en proceso del desempeño de las estudiantes de manera clara y rápida en ella se puede realizar la búsqueda de las alumnas por nombre y filtrar de manera ascendente y descendente según su puntaje, con ello obtenemos una mejor organización, visibilidad en el menor tiempo posible.

#### 2) Sketch de la solución (prototipo de baja fidelidad)

![Boceto](src/Imagen/pagina1.jpg)

![Boceto](src/Imagen/pagina%202.jpg)

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

## Prototipo de Alta fidelidad 
El prototipo de Alta fidelidad que usamos lo implementamos en marvel, pedimos Feedback a nuestro grupo y coach en el proceso de toma de desiciones. 
![Prototipo](src/Imagen/Prototipo-Marvel.jpg)

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás priorizar.

Como mínimo, tu implementación debe:

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   - Listar las estudiantes de ese cohort
   - Para cada estudiante:
     + Calcular porcentaje de completitud de todos los _cursos_.
     + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
       y _quizzes_.
   - Ordenar estudiantes por completitud _general_ (porcentaje consumido/completado
     de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
     autocorregidos_ y _quizzes_.
   - Filtrar/buscar estudiantes por nombre.
3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.
4. Incluir pruebas unitarias.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
igual debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros.

### Primer Sprint 

Al iniciar el proyecto primero nos enfocamos en entender el readme. Para ello realizamos nuestro backlog.

![Scrum](src/Imagen/scrum.jpg)

Los primeros avances de nuestro primer sprint es nuestro bocetos de baja fidelidad.

## Recibir Feedback
Al terminar nuestro primer sprint la cultuta que tomamos en nuestro squad, es dar y recibir feedback. 

![Feedback](src/Imagen/feedback.jpg)


### Segundo Sprint 

Para el segundo spint teniamos como pareja el proceso de la solución mas clara, para ello nos planteamos metas que nos permitiera lograr nuestros objetivos.
* Estudiar el LMS
* Estudiar como recorrer array 
En este segundo sprint jalamos la data de los cohort de lima.

![Scrum](src/Imagen/sprint2.jpg)

### Tercer Sprint 

En el tercer sprint logramos terminar todas las funciones y pasar los test.

![Scrum](src/Imagen/3%20sprint.jpg)

## Colaboradoras
* Nancy Montalvo 
* Jackeline Chavez

## Detalles de Implementación
- Javascript ES6
- HTML5
- CSS3
- Marvel


