# DIU3_Workers
Prácticas Diseño Interfaces de Usuario 2019-20 (Economía Colaborativa) 

Grupo: DIU3_Workers.  Curso: 2019/20 

Proyecto: Nature Sport

Descripción: Aplicación Web que permitirá a los usuarios organizar actividades deportivas (tales como trekking, montañismo o ciclismo), principalmente en entornos naturales.

Logotipo: 
<img src="img/logo.png" width="300" height="150"/>

Miembros
 * :bust_in_silhouette:   Jose Saldaña Mercado     :octocat:     
 * :bust_in_silhouette:  Fernando Calvillo Parejo     :octocat:


----- 

# UX Case Study
## Nature Sport: keep fresh

¿Alguna vez te ha apetecido salir a hacer ejercicio a aire libre con alguien, y has acabado llendo solo o quedandote en tu casa? Puede que en la red, haya más gente igual que tu.

### ¿Quien se apunta a hacer deporte?

[Ver Vídeo UX Case Story](https://player.vimeo.com/video/410735968)

# 1 Introducción

#### ¿Habrá más gente con ganas de salir a hacer deporte?

> La respuesta a esta pregunta es la idea principal para crear Nature Sport. Nuestro cliente ficticio es el Ayuntamiento de Granada, una ciudad rodeada de bonitos parajes naturales, como la Vega del Genil, la Sierra de Huetor o la ladera de Sierra Nevada entre otros muchos.

#### Duración del sprint: 
> 2 meses

#### Miembros del equipo: 
> Jose Saldaña & Fernando Calvillo

----- 

### El objetivo de nuestro cliente es:
Fomentar el deporte en la provincia

Inculcar hábitos saludables en la población

Crear comunidades sociales 

El Ayuntamiento pretende exportar esta aplicación a otras regiones si funciona

----- 

# 2 Investigación de usuarios

## 2.1 La Oportunidad

Nos permite trabajar con:

> Mapas interactivos donde ver las distintas actividades que hay programadas.
>
> Calendarios interactivos donde ver las distintas actividades que hay programadas.
>
> Facilitar al usuario conectar con gente con intereses y aficiones similares.
>
> Permitir al usuario consultar un cátalogo de rutas por entornos naturales cerca de su hogar.

----- 

## 2.2 Usuarios potenciales y contexto

### ¿Quiénes son nuestros usuarios y que necesitan?

Personas de cualquier edad que valoren el entorno natural

Personas con ganas de conocer gente

Personas que quieran hacer deporte


### ¿En que entorno se encuentran nuestros usuarios?

Se encuentran en una sociedad que va a toda prisa, donde la gente se apunta al gimnasio porque es rápido

Se encuentran generalmente en un entorno urbano, cada vez más distanciado del mundo rural y la naturaleza

#### Nos fijamos en:
> Que podemos ofrecer a los usuarios una vía de escape de su rutina

----- 

# ![Método UX](img/Competitive.png) 3 Análisis de la competencia

Se analizan 5 plataformas de compartir experiencias, ya que ofrecen servicios similares a los que nosotros queremos ofrecer.
Más concretamente se analizan: Meetup, Planandgoapp, Eatwith, Timpik, Geokeda

![Método UX](img/usabilityReview.png) Finalmente realizamos un análisis más exhaustivo de Geokeda ya que nos resulta atractivo el home con el horario y el mapa. Para ver el análisis preliminar de las cinco compañías [haga click aquí](https://github.com/Josalmer/DIU3_Workers/blob/master/P1/competitive_analysis.pdf)

En dicho análisis de Geokeda realizamos una revisión de usabilidad, con la idea de obtener un feedback para nuestro futuro diseño. 
Las conclusiones de dicho análisis son:
> La web tiene algunas cosas bastante buenas, pero muchas cosas en las que mejorar. Como aspecto más destacable y grave, el tema de que la web no sea responsive, cosa que en los tiempos actuales no tiene mucho sentido porque el acceso a este tipo de sitios se realiza cada vez más desde dispositivos moviles.

<img src="img/usabilityReview_2.png" width="100%"/>

Si quiere ver el análisis de usabilidad completo [haga click aquí](https://github.com/Josalmer/DIU3_Workers/blob/master/P1/Usability-review.pdf)

----- 

# ![Método UX](img/Persona.png) 4 Personas

### 4.1 Javier y Amanda

Diseñamos unas personas ficticias para utilizar distintos puntos de vista durante las pruebas de la UX, ya que es recomendable abstraernos y olvidarnos de nuestras inquietudes, para pasar a ponernos en el lugar de que haría un usuario que tiene sus propias circunstancias.

[Javier Crespo](https://github.com/Josalmer/DIU3_Workers/blob/master/P1/javier_crespo.png) y [Amanda García](https://github.com/Josalmer/DIU3_Workers/blob/master/P1/amanda.png)

<img src="P1/amanda.png" width="100%"/>

> Hemos elegido estas personas porque creemos que es muy representativo de la sociedad en la que vivimos. En la que la gente cada vez esta más centrada en su trabajo y deja más de lado su vida personal, y en la que muchas personas se ven presionadas a hacer algo que no les apetece, y cuando se guian por sus preferencias sienten inseguridad por no hacer caso a su entorno

<img src="P1/javier_crespo.png" width="100%"/>

### ![Método UX](img/JourneyMap.png) 4.2 La experiencia de Javier y Amanda en Geokeda

Javier y Amanda quieren hacer senderismo y recurren a Geokeda

Experiencia de [Javier Crespo](https://github.com/Josalmer/DIU3_Workers/blob/master/P1/javier_journey.png) y experiencia de [Amanda García](https://github.com/Josalmer/DIU3_Workers/blob/master/P1/amanda_journey.png) 

<img src="P1/amanda_journey.png" width="100%"/>
<img src="P1/javier_journey.png" width="100%"/>

> Como podemos ver Amanda ha tenido más suerte que Javier. Cada vez la gente usa más la web para organizar planes sociales, creemos que experiencias similares a las que Javier y Amanda han tenido se dan con bastante frencuencia

----- 

# 5 Feedback de la investigación realizada con el análisis competitivo y la experiencia de nuestras personas

Con la idea de tener un punto de partida para el diseño de nuestra aplicación, tratamos de sintetizar las ideas obtenidas tras realizar el análisis competitivo y el análisis de la experiencia de nuestras personas

### ![Método UX](img/feedback-capture-grid.png) Malla receptora de información

<img src="img/Grid.png" width="60%"/>

Tras analizar [toda esta información](https://github.com/Josalmer/DIU3_Workers/blob/master/P2/malla%20receptora%20de%20informacion.pdf), decidimos hacer una aplicación sencilla, intuitiva y rápida que girara en torno al calendario y el mapa. 
> Ambas herramientas en combinación nos darán fecha y localización mediante las cuales se filtraran los eventos que se muestran, si nos desplazamos en el mapa a Sevilla veremos los eventos en Sevilla, si desplazamos el calendario al mes de Mayo, veremos los eventos en en Sevilla el mes de Mayo. Por otro lado también se le dará importancia a un catálogo de rutas predefinidas que los administradores de la aplicación gestionaran.

----- 

# 6 Diseño

## 6.1 Task Flow

En este apartado vamos a definir la secuencia de pasos que los usuarios tendrán que realizar para llevar a cabo las principales tareas que la aplicación permite.
> Como usuario quiero crear un evento, consultar un evento, comentar en un evento, apuntarme a un evento, consultar las rutas predefinidas y crear una nueva ruta predefinida, [click aquí para ver todos](https://github.com/Josalmer/DIU3_Workers/blob/master/P2/task_flow.pdf)

<img src="img/UserFlow.png" width="60%"/>

## 6.2 User Task Matrix

En este apartado representamos la user task matrix como una tabla, donde cada fila se corresponde con una actividad, y cada columna con un tipo de  suario de la aplicación. 
> El valor en cada casilla se corresponde con la frecuencia con que dicho usuario realizará la acción de esa fila. (H)ight, (M)edium, (L)ow, cuando el usuario no puede realizar una acción o no sería normal que lo hiciera se deja dicha celda en blanco.
> Se indica con fondo gris, las tareas más críticas.
<img src="P2/user_task_matrix_image.png" width="60%"/>

## ![Método UX](img/Sitemap.png) 6.3 Sitemap y Labelling

[Mapa del sitio](https://github.com/Josalmer/DIU3_Workers/blob/master/P2/sitemap.pdf) que indica las distintas vistas que tendrá la aplicación y cómo se navega de unas a otras y [labelling o etiquetado](https://github.com/Josalmer/DIU3_Workers/blob/master/P2/labelling.pdf)

<img src="img/Arquitectura.png" width="60%"/>

## ![Método UX](img/Wireframes.png) 6.4 Wireframe y bocetos a mano

Inicialmente se realizan unos bocetos a mano y unos Wireframe centrandonos principalmente en como es van a distribuir los elementos en las distintas vistas. 

<img src="P2/wireframe.jpeg" width="100%"/>

## ![Método UX](img/moodboard.png) 6.5 Guia de estilos

Guia de colores: Para los colores hemos tomado la decisión de que el color predominante sea el verde para que el usuario relacione nuestra aplicación web con la naturaleza. 
> De modo que hemos tomado para los fondos un tono verde claro que no moleste a la hora de ver el contenido de la pagina y para bordes, iconos y barras un tono verde oscuro que resalten estos elementos. Para barras de navegación, filtros y algunos fondos hemos elegido en blanco por que es el más cómodo para ver la información que hay encima. Para algunos elementos y botones que queremos destacar hemos elegido un tono azul que hace que sean distintivos y a la vez es un color que no desentona con los tonos verdes y blanco del resto de la app. Y finalmente para la tipografía hemos elegido el color negro ya que es el que permite una mejor lectura de lo que hay escrito.

Tipografía: Para la tipografía hemos elegido la fuente "Verdana". 
> El motivo es que es una fuente de gran legibilidad y que, al contrario que otras fuentes, no hace que centres tu atención en la fuente permitiendo así una mejor lectura del contenido para el usuario. 

<img src="img/styles.jpeg" width="60%"/>

## ![Método UX](img/Patterns.png) 6.6 Patrones de diseño

Al estar nuestra aplicación centrada tanto en el calendario como el mapa hemos investigado sobre el diseño de estos modulos y nos hemos encontrado con los siguientes articulos. 

> https://www.smashingmagazine.com/2010/08/the-importance-of-consistency-using-editorial-calendars-and-style-guides/
>
> https://www.smashingmagazine.com/2010/04/maps-in-modern-web-design/

En ellos hemos encontrado varias ideas sobre como podemos hacer que los modulos de mapa y calendario no solo sean el núcleo de nuestra aplicación sino tambien un elemento distintivo con el resto de webs competidoras.

## ![Método UX](img/Prototype.png) 6.7 Bocetos Lo-Fi

Posteriormente se llevan a un siguiente nivel donde se pueda explicar mejor que hay en cada vista y como se distribuye, [click aquí para ver todos](https://github.com/Josalmer/DIU3_Workers/blob/master/P2/bocetos.pdf)

<img src="img/bocetos1.png" width="450px" height="410px"/><img src="img/bocetos2.png" width="450px" height="410px"/>
<img src="img/bocetos3.png" width="450px" height="410px"/><img src="img/bocetos4.png" width="225px" height="410px"/>

# 7. Evaluación 

![Método UX](img/ABtesting.png) 7.a Casos asignados
----
Hemos analizado las siguientes aplicaciones:
>>### DIU2.SVPJ - Alquila Piso
>>https://github.com/sergiovp/DIU
>>Una aplicación para compartir alojamiento.
>
>>### DIU2.TeTic - Free Sofa
>>https://github.com/migueg/DIU20
>>Una plataforma de economía colaborativa en lo referente a compartir alojamiento.
>
>>### DIU3.UserLAB - HomeShow
>>https://github.com/miguelroldanc/DIU20
>>Una aplicación que pretende innovar en el sector cultural y que nos permitirá buscar eventos.

![Método UX](img/usability-testing.png) 7.b User Testing
----
Nuestras personas ficticias tienen las siguientes experiencias con los distintos sistemas testeados.
>>### Alquila Piso
>>Javier busca alojamiento para el fin de semana, pero sospecha que se puede tratar de un timo porque el precio era demasiado bajo y le piden dinero por adelantado. Manda un mensaje a soporte a través del chat pero tardan un par de días en contestarle. Piensa que debería haber algún sistema para reportar estas cosas, de forma que le salte una alarma inmediata a los administradores del sistema.
>
>>### Free Sofa
>>Amanda quiere utilizar la aplicación Free Sofa para ver que opciones hay para alojamiento compartido. Se encuentra con el problema de que necesita estar registrada para poderla utilizar. Ella no quería registrarse hasta ver que con esta aplicación encontraba lo que estaba buscando.
>
>>### HomeShow
>>Amanda quiere buscar planes para este verano en Sevilla, entra en la web de HomeShow pero se encuentra una lista con todos los eventos existentes en la web y ninguna forma de filtrar y buscar los eventos de su zona. Al no poder buscar y encontrar lo que le interesa decide buscar otras opciones fuera de HomeShow

![Método UX](img/Survey.png). 7.c Ranking 
----
Tras realizar el análisis de las 3 aplicaciones, en este apartado exponemos el ranking y las conclusiones del mismo.

<img src="P4/ranking.jpeg" width="60%"/>

>>### DIU2.SVPJ - Alquila Piso - 90 (excellent)
>>Muy buen trabajo, y muy buen video. La idea para el producto es buena, aunque algunas vistas del diseño estan un poco sobrecargadas.
>
>>### DIU2.TeTic - Free Sofa - 85 (good)
>>Comentario sobre la valoración: Muy buen trabajo en general, aunque creemos que no entendio bien lo que se pedía para el video. La idea para el producto tiene sentido, y el diseño es amigable e intuitivo.
>
>>### DIU3.UserLAB - HomeShow - 51 (moderate)
>>Un trabajo pobre en general, le falta mucho contenido y lo realizado no acaba de estar bien. Pensamos que no ha entendido lo que se pedía realizar en estas prácticas por como hace, por ejemplo, la P1 entera basandose en su aplicación sin tomar encuenta ninguna otra web.

----- 

# EXTRA. Rediseño 

Tras recibir de parte de los profesores de la asignatura, los documentos que contienen el feedback del trabajo realizado, se lleva a cabo, por parte de Jose Saldaña, [un análisis de dicho feedback, y se rediseñan los aspectos más significativos del mismo](https://github.com/Josalmer/DIU3_Workers/blob/master/rediseño)

A continuación se resume la valoración recibida por parte de los compañeros
>> [DIU3.rushB    -- 85/100](https://github.com/Josalmer/DIU3_Workers/blob/master/rediseño/DIU3.workers_reviewby_DIU3.rushB.pdf)
>>
>> [DIU3.UserLAB  -- 97/100](https://github.com/Josalmer/DIU3_Workers/blob/master/rediseño/DIU3.workers_reviewby_DIU3.UserLAB.pdf)
>>
>> [DIU1.QWERTY   -- 86/100](https://github.com/Josalmer/DIU3_Workers/blob/master/rediseño/DIU3.workers_reviewedby_DIU1.QWERTY.pdf)
>>
>> [DIU2.MJ       -- 89/100](https://github.com/Josalmer/DIU3_Workers/blob/master/rediseño/DIU3.workers-reviewby_DIU2.MJ.pdf)
>>
>> Average        -- 89/100

----- 
