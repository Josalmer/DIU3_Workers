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
                Contextos: "LLeva un tiempo preocupado porque esta cogiendo unos kilos y quiere hacer deporte al aire libre", 
    
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
                Photo: "amanda.jpg",
                Contextos: "Ultimamente se encuentra en baja forma y le gustaría empezar a hacer deporte. Ademas siente que puede ser un buen momento para vencer su timidez y conocer gente nueva.",  

                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere conocer gente y comenzar a practicar senderismo",
                touch1: "ordenador",
                feel1: "4",
                con1: "No esta acostumbrada a hacer deporte y le gustaría practicar senderismo con gente de su perfil.",
                ima1: "cartoon-PCtyping.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide buscar en diversas webs grupos de senderismo.",
                touch2: "Ordenador",
                feel2: "3",
                con2: "Se encuentra con muchas webs con propuestas similares.",
                ima2: "cartoon-PChappy.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra geokeda.es y busca un grupo para salir de senderismo o con la bici esta semana.",
                touch3: "Ordenador",
                feel3: "2",
                con3: "No hay ningún grupo para salir esta semana.",
                ima3: "cartoon-PCSurprised.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Decide crear ella un evento para esta semana.",
                touch4: "Ordenador",
                feel4: "1",
                con4: "Al darle a 'crear evento' la web vuelve a la página principal y no puede crearlo.",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras intentarlo varias veces descubre otra forma de crear evento, esta vez desde el horario de la página.",
                touch5: "Ordenador",
                feel5: "4",
                con5: "",
                ima5: "cartoon-PChappy.png",
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Crea el evento para esta semana.",
                touch6: "Ordenador",
                feel6: "1",
                con6: "Nadie se apunta por que la web esta muerta y no hay usuarios.",
                ima6: "cartoon-PCcrying.png",
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



