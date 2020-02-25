/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Javier Crespo",
                Photo: "javier.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere conocer gente nueva para hacer senderismo",
                touch1: "Ordenador",
                feel1: "4",
                con1: "Tiene poco tiempo libre, quiere buscar un plan para el fin de semana",
                ima1: "cartoon-PChappy.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar en internet grupos de gente que quieran hacer senderismo el fin de semana",
                touch2: "Ordenador",
                feel2: "3",
                con2: "Hay varias webs que parecen ofrecer lo mismo, Se decide por buscar grupo en https://granada.geokeda.es/ ya que el gusta el horario que aparece al inicio",
                ima2: "cartoon-why.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra un grupo para hacer montañismo el domingo y decide apuntarse",
                touch3: "Ordenador",
                feel3: "5",
                con3: "Hay que registrarse para apuntarse",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "El registro no funciona",
                touch4: "ordenador",
                feel4: "1",
                con4: "El captcha no se muestra y no valida se puede validar el registro",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "No puede apuntarse al grupo",
                touch5: "Móvil",
                feel5: "2",
                con5: "Llama a su hija para ver si tiene plan para el domingo",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue quedar",
                touch6: "ordenador",
                feel6: "2",
                con6: "Finalmente el plan lo ha ideado el y buscar en geokeda no le ha servido para nada",
                ima6: "cartoon-KO.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Amanda García",
                Photo: "woman.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere conocer gente y comenzar a practicar senderismo",
                touch1: "ordenador",
                feel1: "4",
                con1: "No esta acostumbrada a hacer deporte y le gustaría practicar senderismo con gente de su perfil.",
                ima1: "",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Pregunta a sus conocidos si saben de algún grupo que concuerde con lo que ella quiere.",
                touch2: "Móvil (whatsapp)",
                feel2: "2",
                con2: "La gente de su círculo de amigos no está familiarizada con el tema",
                ima2: "",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar en diversas webs grupos de senderismo.",
                touch3: "ordenador",
                feel3: "3",
                con3: "Se encuentra con muchas webs con propuestas similares.",
                ima3: "",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra en geokeda.es muchos grupos de senderismo y busca uno que le venga bien por horarios. ",
                touch4: "Ordenador",
                feel4: "2",
                con4: "Casi todos los grupos son para hacer senderismo en fin de semana y ella prefiere hacerlo durante la semana por que el finde queda con sus amigas.",
                ima4: "",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 2 grupos que encajan con lo que ella busca.",
                touch5: "Ordenador",
                feel5: "4",
                con5: "No sabe cuál elegir.",
                ima5: "",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Como son en días distintos y le viene bien ambos planes, decide apuntarse a los 2.",
                touch6: "Ordenador",
                feel6: "4",
                con6: "",
                ima6: "",
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



