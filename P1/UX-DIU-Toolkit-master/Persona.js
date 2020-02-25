/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Javier Crespo",
				Photo: "javier.jpg",
				Quote: "Busca un trabajo que te guste y no trabajaras ni un día de tu vida",
				Age: 53,
				Occupation: "Arquitecto",
				Family: "Divorciado desde hace 3 año",
				Location: "Granada (La Zubia)",
				Character: "Extrovertido y divertido, serio con los negocios. Es bastante realista y racional",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Quiere ceder responsabilidades en su estudio para poder tener más tiempo para el mismo", "Ganar un prestigioso premio internacional de arquitectura"],
				Frustrations: ["Le gustaría tener más tiempo para hacer más deporte", "Siente que su matrimonio fracasó por estar demasiado liado en el trabajo"],
				Bio: "Tiene una hija de 27 años y en el año 2017 se divorció. Mantiene una relación cordial con su ex-mujer",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "LLeva un tiempo preocupado porque esta cogiendo unos kilos y quiere hacer más deporte",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Amanda García",
				Photo: "woman.png",
				Quote: "Hakuna Matata",
				Age: 20,
				Occupation: "Estudiando bellas artes",
				Family: "Padres y un hermano mayor",
				Location: "Sevilla",
				Character: "Tímida pero siempre con ganas de hacer planes",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Acabar trabajando de diseñadora", "Viajar por toda Europa"],
				Frustrations: ["Le cuesta socializar", "No esta segura del camino que está eligiendo sea el correcto", "Siempre ha querido aprander a tocar el piano"],
				Bio: "Es de Ciudad Real, pero se ha tenido que mudar a Sevilla para estudiar lo que le gusta. Lleva 2 años de carrera y aunque al principio le fue muy dificil ha conseguido encajar en un grupo de amigas con las que hace planes cada vez que tienen oportunidad. Siempre ha sido una chica con muy buenas notas y por eso le costo elegir la carrera que de verdad le gustaba y no la que le brindaba un mejor futuro (y que sus padres querían que estudiase).",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Ultimamente se encuentra en baja forma y le gustaría empezar a hacer deporte. Ademas siente que puede ser un buen momento para vencer su timidez y conocer gente nueva.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
			
		];
		$scope.model = $scope.Personas[0];

	}])