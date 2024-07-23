//dec funciona, cda funciona, afi funciona
//Pendiente DAW y ADS


// funcion para calcular promedio de DEC
document.getElementById('calcularPromedioBtn').addEventListener('click', function () {
    calcularPromedio();
});

function calcularPromedio() {
    // Get the values from the input fields
    const parcial1 = parseFloat(document.getElementById('parcial1Materia1').value)|| 0;
    const parcial2 = parseFloat(document.getElementById('parcial2Materia1').value)|| 0;
    const parcial3 = parseFloat(document.getElementById('parcial3Materia1').value)|| 0;
    const proyectoFinal = parseFloat(document.getElementById('proyectoFinalMateria1').value)|| 0;
    const tarea1 = parseFloat(document.getElementById('tarea1Materia1').value)|| 0;
    const tarea2 = parseFloat(document.getElementById('tarea2Materia1').value)|| 0;
    const tarea3 = parseFloat(document.getElementById('tarea3Materia1').value)|| 0;
    const tarea4 = parseFloat(document.getElementById('tarea4Materia1').value)|| 0;
    const tarea5 = parseFloat(document.getElementById('tarea5Materia1').value)|| 0;
    const tarea6 = parseFloat(document.getElementById('tarea6Materia1').value)|| 0;

    // Calculate the weighted average (replace 0.0334 with your task weight)
    const promedio = (
        (parcial1 * 0.20) +
        (parcial2 * 0.20) +
        (parcial3 * 0.20) +
        (proyectoFinal * 0.20) +
        (tarea1 * 0.0334) + // Replace with your weight for tarea1 (e.g., 0.05)
        (tarea2 * 0.0334) + // Replace with your weight for tarea2
        (tarea3 * 0.0334) + // Replace with your weight for tarea3
        (tarea4 * 0.0334) + // Replace with your weight for tarea4
        (tarea5 * 0.0334) + // Replace with your weight for tarea5
        (tarea6 * 0.0334)  // Replace with your weight for tarea6
    );

    // Display the average in the input field
    document.getElementById('pdec').value = promedio.toFixed(2);
    updateBadgeDec();
    updateGeneralAverage();
}


// Función para calcular el promedio de la segunda tabla (Afi)
document.getElementById('calcularPromedioBtnAfi').addEventListener('click', function () {
  calcularPromedioAfi();
});

function calcularPromedioAfi() {
  // Obtener los valores de los campos de entrada
  const parcial1 = parseFloat(document.getElementById('parcial1Materia5').value)|| 0;
  const parcial2 = parseFloat(document.getElementById('parcial2Materia5').value)|| 0;
  const parcial3 = parseFloat(document.getElementById('parcial3Materia5').value)|| 0;
  const corto = parseFloat(document.getElementById('cortoMateria5').value)|| 0;
  const tarea1 = parseFloat(document.getElementById('actividad1Materia5').value)|| 0;
  const tarea2 = parseFloat(document.getElementById('actividad2Materia5').value)|| 0;
  const tarea3 = parseFloat(document.getElementById('actividad3Materia5').value)|| 0;
  const asistencia = parseFloat(document.getElementById('asistenciaMateria5').value)|| 0;

  // Calcular el promedio ponderado (reemplaza 0.0334 con el peso correspondiente)
  const promedio = (
      (parcial1 * 0.20) +
      (parcial2 * 0.20) +
      (parcial3 * 0.20) +
      (corto * 0.10) +
      (tarea1 * 0.0667) + // Reemplaza con el peso correspondiente para tarea1 (por ejemplo, 0.05)
      (tarea2 * 0.0667) + // Reemplaza con el peso correspondiente para tarea2
      (tarea3 * 0.0667) + // Reemplaza con el peso correspondiente para tarea3
      (asistencia * 0.1) 
   );
  // Mostrar el promedio en el campo de salida
  document.getElementById('pafi').value = promedio.toFixed(2);
  updateBadgeAfi();
  updateGeneralAverage();
}

//Promedio CDA
document.getElementById('calcularPromedioBtnCda').addEventListener('click', function () {
  calcularPromedioCda();
});

function calcularPromedioCda() {
  const parcial1 = parseFloat(document.getElementById('parcial1Materia2').value)|| 0;
  const parcial2 = parseFloat(document.getElementById('parcial2Materia2').value)|| 0;
  const parcial3 = parseFloat(document.getElementById('parcial3Materia2').value)|| 0;
  const proyectoFinal = parseFloat(document.getElementById('proyectoMateria2').value)|| 0;
  const guia1 = parseFloat(document.getElementById('guia1Materia2').value)|| 0;
  const guia2 = parseFloat(document.getElementById('guia2Materia2').value)|| 0;
  const guia3 = parseFloat(document.getElementById('guia3Materia2').value)|| 0;
  const guia4 = parseFloat(document.getElementById('guia4Materia2').value)|| 0;
  const guia5 = parseFloat(document.getElementById('guia5Materia2').value)|| 0;
  const guia6 = parseFloat(document.getElementById('guia6Materia2').value)|| 0;
  const lab1 = parseFloat(document.getElementById('lab1Materia2').value)|| 0;
  const lab2 = parseFloat(document.getElementById('lab2Materia2').value)|| 0;
  const lab3 = parseFloat(document.getElementById('lab3Materia2').value)|| 0;

  const promedio = (
    parcial1 * 0.15 +
    parcial2 * 0.25 +
    parcial3 * 0.25 +
    proyectoFinal * 0.1 +
    ((guia1+guia2+guia3+guia4+guia5+guia6)/6)*0.1 +
    lab1 * 0.07 +
    lab2 * 0.04 +
    lab3 * 0.04
  );

  document.getElementById('pcda').value = promedio.toFixed(2);
  updateBadgeCda();
  updateGeneralAverage();
}

//promedios DAW
document.getElementById('calcularPromediobtnDaw').addEventListener('click', function () {
  calcularPromedioDaw();
});

function calcularPromedioDaw() {
  const parcial1 = parseFloat(document.getElementById('parcial1Materia3').value) || 0;
  const parcial2 = parseFloat(document.getElementById('parcial2Materia3').value) || 0;
  const parcial3 = parseFloat(document.getElementById('parcial3Materia3').value) || 0;
  const proyectoFinal = parseFloat(document.getElementById('proyectoMateria3').value) || 0;
  const tarea1 = parseFloat(document.getElementById('tarea1Materia3').value) || 0;
  const tarea2 = parseFloat(document.getElementById('tarea2Materia3').value) || 0;
  const tarea3 = parseFloat(document.getElementById('tarea3Materia3').value) || 0;
  const tarea4 = parseFloat(document.getElementById('tarea4Materia3').value) || 0;
  const tarea5 = parseFloat(document.getElementById('tarea5Materia3').value) || 0;
  const tarea6 = parseFloat(document.getElementById('tarea6Materia3').value) || 0;

  const promedio = (
      parcial1 * 0.2 +
      parcial2 * 0.2 +
      parcial3 * 0.2 +
      proyectoFinal * 0.2 +
      (tarea1 + tarea2 + tarea3 + tarea4 + tarea5 + tarea6) / 6 * 0.2
  );

  document.getElementById('pdaw').value = promedio.toFixed(2);
  updateBadgeDaw();
  updateGeneralAverage();
}

//calcular promedios ADS
// Función para calcular el promedio de ADS
document.getElementById('calcularPromedioBtnAds').addEventListener('click', function () {
  calcularPromedioAds();
});

function calcularPromedioAds() {
  const parcial1 = parseFloat(document.getElementById('parcial1Materia4').value) || 0;
  const parcial2 = parseFloat(document.getElementById('parcial2Materia4').value) || 0;
  const parcial3 = parseFloat(document.getElementById('parcial3Materia4').value) || 0;
  const proyectoFinal = parseFloat(document.getElementById('proyectoMateria4').value) || 0;
  const tarea1 = parseFloat(document.getElementById('tarea1Materia4').value) || 0;
  const tarea2 = parseFloat(document.getElementById('tarea2Materia4').value) || 0;
  const tarea3 = parseFloat(document.getElementById('tarea3Materia4').value) || 0;
  const tarea4 = parseFloat(document.getElementById('tarea4Materia4').value) || 0;
  const tarea5 = parseFloat(document.getElementById('tarea5Materia4').value) || 0;
  const tarea6 = parseFloat(document.getElementById('tarea6Materia4').value) || 0;

  const promedio = (
    parcial1 * 0.2 +
    parcial2 * 0.2 +
    parcial3 * 0.2 +
    proyectoFinal * 0.2 +
    (tarea1 + tarea2 + tarea3 + tarea4 + tarea5 + tarea6) / 6 * 0.2
  );

  document.getElementById('pads').value = promedio.toFixed(2);
  updateBadgeAds();
  updateGeneralAverage();
}

//actualizar badgeDec
function updateBadgeDec() {
  const inputValue = document.getElementById('pdec').value;
  document.getElementById('promedioBadgeDec').innerText = inputValue;
}

updateBadgeDec();

//actualizar badgeCda
function updateBadgeCda() {
  const inputValue = document.getElementById('pcda').value;
  document.getElementById('promedioBadgeCda').innerText = inputValue;
}

updateBadgeCda();

//actualizar badgeAfi
function updateBadgeAfi() {
  const inputValue = document.getElementById('pafi').value;
  document.getElementById('promedioBadgeAfi').innerText = inputValue;
}

updateBadgeAfi();

//actualizar badgeDaw
function updateBadgeDaw() {
  const inputValue = document.getElementById('pdaw').value;
  document.getElementById('promedioBadgeDaw').innerText = inputValue;
}

updateBadgeDaw();

//actualizar badgeAds
function updateBadgeAds() {
  const inputValue = document.getElementById('pads').value;
  document.getElementById('promedioBadgeAds').innerText = inputValue;
}

updateBadgeAds();

function updateGeneralAverage() {
  const badgeIds = ['promedioBadgeDec', 'promedioBadgeAds', 'promedioBadgeAfi', 'promedioBadgeDaw', 'promedioBadgeCda'];
  let total = 0;
  badgeIds.forEach(id => {
      total += parseFloat(document.getElementById(id).innerText);
  });
  const average = (total / badgeIds.length).toFixed(2);
  document.querySelector('.promGlobal h3').innerText = average;
}

updateGeneralAverage();

//cargar calendario ues
function openCalendar() {
  document.getElementById('calendarPopup').style.display = 'block';
  loadCalendar();
}

function closeCalendar() {
  document.getElementById('calendarPopup').style.display = 'none';
}

function loadCalendar() {
  const calendarEl = document.getElementById('calendar');
  
  const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      buttonText: {
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
          list: 'Lista'
      },
      locale: 'es',
      themeSystem: 'bootstrap',
      height: 'auto',
      events: function(fetchInfo, successCallback, failureCallback) {
          const url = 'https://campus.ues.edu.sv/calendar/export_execute.php?userid=323494&authtoken=0699d1ad7c20510ed0fb6befdf6306d7cb9f10d3&preset_what=all&preset_time=recentupcoming';
          
          fetch(url)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Error en la respuesta de la red');
                  }
                  return response.text();
              })
              .then(data => {
                  const jcalData = ICAL.parse(data);
                  const comp = new ICAL.Component(jcalData);
                  const vevents = comp.getAllSubcomponents('vevent');
                  
                  const events = vevents.map(vevent => {
                      const event = new ICAL.Event(vevent);
                      return {
                          title: event.summary,
                          start: event.startDate.toJSDate(),
                          end: event.endDate.toJSDate(),
                          allDay: !event.startDate.isDate,
                          description: event.description,
                          location: event.location
                      };
                  });

                  successCallback(events);
              })
              .catch(error => {
                  console.error('Error:', error);
                  failureCallback(error);
              });
      },
      eventClick: function(info) {
          alert('Evento: ' + info.event.title + '\n' +
                'Inicio: ' + info.event.start.toLocaleString() + '\n' +
                (info.event.end ? 'Fin: ' + info.event.end.toLocaleString() + '\n' : '') +
                (info.event.extendedProps.description ? 'Descripción: ' + info.event.extendedProps.description + '\n' : '') +
                (info.event.extendedProps.location ? 'Ubicación: ' + info.event.extendedProps.location : ''));
      },
      eventDidMount: function(info) {
          $(info.el).tooltip({
              title: info.event.title,
              placement: 'top',
              trigger: 'hover',
              container: 'body'
          });
      }
  });

  calendar.render();
}