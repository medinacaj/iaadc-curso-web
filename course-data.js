// Datos públicos del currículo: no contienen archivos ni respuestas restringidas.
// La fuente canónica operativa sigue en seguimiento/estado.json del repositorio privado.
window.IAADC_COURSE = {
  modules:[
    {id:1,title:"Primeros pasos",subtitle:"Entender las herramientas y comenzar con una tarea propia.",lessons:["Qué es y qué no es un asistente de IA","ChatGPT y Claude lado a lado","Tu primera tarea real en 10 minutos"]},
    {id:2,title:"Pedir bien",subtitle:"Dar instrucciones útiles, ajustar el contexto y mejorar respuestas.",lessons:["La Fórmula TAREA","Ejemplos, formato y tono","Conversar para mejorar"]},
    {id:3,title:"Revisar con criterio",subtitle:"Comprobar información, proteger datos y reconocer límites.",lessons:["Por qué se equivoca: el Semáforo de confianza","Buscar y comprobar fuentes","Datos, privacidad y uso responsable"]},
    {id:4,title:"Escribir y comunicar",subtitle:"Correos, documentos y adaptaciones con verificación humana.",lessons:["Correos y mensajes que funcionan","Documentos de trabajo","Reescribir y adaptar"]},
    {id:5,title:"Leer, investigar y aprender",subtitle:"Comprender documentos y contrastar información con fuentes.",lessons:["Conversar con un documento","Investigar un tema","La IA como tutor"]},
    {id:6,title:"Datos y números",subtitle:"Organizar, analizar y comprobar resultados cuantitativos.",lessons:["De texto desordenado a tabla","Analizar una planilla","Comprobar números"]},
    {id:7,title:"Clientes y negocio",subtitle:"Comunicar productos, crear piezas y atender con responsabilidad.",lessons:["Contenido y marketing honesto","Imágenes y piezas visuales","Ventas y atención al cliente"]},
    {id:8,title:"Tu sistema de trabajo",subtitle:"Configurar el contexto, documentar procesos y elegir herramientas.",lessons:["Configura tu asistente","De tarea a procedimiento","Elegir con una prueba justa"]}
  ],
  routes:{
    oficina:{tag:"RUTA OFICINA",title:"Menos tiempo en tareas repetitivas.",description:"Redacta correos, organiza reuniones y convierte notas dispersas en documentos fáciles de entender.",example1:"Correos y comunicaciones",example2:"Informes y resúmenes",document:"Correo de seguimiento",question:"Ayúdame a convertir estas notas en un correo claro y profesional. No inventes acuerdos ni fechas.",result:"Primero revisas los hechos, después pides un borrador y finalmente compruebas cada compromiso antes de enviarlo.",tone:"#f1e0d7"},
    estudio:{tag:"RUTA ESTUDIO",title:"Estudia con mejores preguntas.",description:"Comprende documentos, crea esquemas y aprende a contrastar ideas sin depender de respuestas listas.",example1:"Resúmenes con fuentes",example2:"Estudio con ejercicios",document:"Guía de estudio",question:"Explícame este concepto con un ejemplo sencillo; después hazme una pregunta sin darme la respuesta.",result:"Recibes una explicación, practicas por tu cuenta y verificas la idea con tu material de estudio.",tone:"#e5e2f2"},
    negocio:{tag:"RUTA NEGOCIO",title:"Ideas que puedes llevar a la práctica.",description:"Organiza información de clientes, redacta publicaciones y analiza tareas del negocio sin inventar promociones.",example1:"Atención a clientes",example2:"Ideas de comunicación",document:"Respuesta para cliente",question:"Redacta una respuesta cordial a esta consulta. No prometas precios, stock ni plazos sin confirmación.",result:"El borrador mantiene un tono claro y deja explícito qué información necesita validación humana.",tone:"#dceae3"}
  }
};