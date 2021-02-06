import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './show-resultados.scss'
import img1er from './../../../assets/images/bu.png'
import img2do from './../../../assets/images/ka.png'
import img3er from './../../../assets/images/m.png'
import imagen1 from './../../../assets/images/playersFormato.jpg'
import imagen2 from './../../../assets/images/pregsFormato.jpg'
import jsPDF from 'jspdf'
import Swal from 'sweetalert2';

export const Resultados = () => {

    let date = new Date();
    const history = useHistory();
    let estadisticas = sessionStorage.getItem('estadisticas');
    estadisticas = JSON.parse(estadisticas);
    let players = estadisticas.jugadores;
    let puntosenteroUno = Math.round(players[0].puntos);
    let puntosenteroDos = Math.round(players[1].puntos);
    let puntosenteroTres = Math.round(players[2].puntos);

    let n = players.length;
    for (let i = 0; i < n - 1; i++)
        for (let j = 0; j < n - i - 1; j++)
            if (players[j].puntos < players[j + 1].puntos) {
                let temp = players[j];
                players[j] = players[j + 1];
                players[j + 1] = temp;
            }
    const avanzarScoreboard = () => {
        history.push('/scoreboard');
    };



    //funcion para generar el pdf
    //obtiene del session storage los datos del kabums
    const jsPdfGenerator = () => {

        let kabum = sessionStorage.getItem('kabum');
        kabum = JSON.parse(kabum);

        let estadisticas = sessionStorage.getItem('estadisticas');
        estadisticas = JSON.parse(estadisticas);


        let doc = new jsPDF('p', 'cm');
        doc.addImage(imagen1, 0, 0, 22, 30).setFontSize(16);
        doc.text(4, 7.1, (kabum.nombre).toString())
        doc.text(15, 4.7, (date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes()).toString());
        doc.text(13, 8.63, (estadisticas.jugadores.length).toString());
        doc.text(12.9, 10.35, (kabum.preguntas.length).toString());
        doc.addPage();
        doc.addImage(imagen2, 0, 0, 22, 30);

        switch (kabum.preguntas.length) {
            case 1:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                doc.save('reporte');
                break;
            case 2:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                doc.save('reporte');
                break;
            case 3:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                doc.save('reporte');
                break;
            case 4:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                doc.save('reporte');
                break;
            case 5:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                doc.save('reporte');
                break;
            case 6:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                doc.save('reporte');
                break;
            case 7:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                doc.save('reporte');
                break;
            case 8:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                doc.save('reporte');
                break;
            case 9:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '9.- ' + (kabum.preguntas[8].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[8].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[8].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[8].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[8].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[8].correcta).toString());
                doc.save('reporte');
                break;
            case 10:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '9.- ' + (kabum.preguntas[8].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[8].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[8].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[8].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[8].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[8].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '10.- ' + (kabum.preguntas[9].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[9].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[9].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[9].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[9].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[9].correcta).toString());
                doc.save('reporte');
            case 11:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '9.- ' + (kabum.preguntas[8].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[8].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[8].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[8].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[8].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[8].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '10.- ' + (kabum.preguntas[9].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[9].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[9].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[9].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[9].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[9].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '11.- ' + (kabum.preguntas[10].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[10].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[10].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[10].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[10].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[10].correcta).toString());
                doc.save('reporte');
                break;
            case 12:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '9.- ' + (kabum.preguntas[8].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[8].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[8].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[8].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[8].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[8].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '10.- ' + (kabum.preguntas[9].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[9].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[9].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[9].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[9].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[9].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '11.- ' + (kabum.preguntas[10].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[10].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[10].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[10].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[10].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[10].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '12.- ' + (kabum.preguntas[12].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[12].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[12].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[12].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[12].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[12].correcta).toString());
                doc.save('reporte');

                break;
            case 13:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '9.- ' + (kabum.preguntas[8].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[8].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[8].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[8].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[8].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[8].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '10.- ' + (kabum.preguntas[9].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[9].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[9].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[9].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[9].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[9].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '11.- ' + (kabum.preguntas[10].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[10].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[10].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[10].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[10].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[10].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '12.- ' + (kabum.preguntas[11].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[11].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[11].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[11].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[11].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[11].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '13.- ' + (kabum.preguntas[12].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[12].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[12].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[12].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[12].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[12].correcta).toString());
                doc.save('reporte');
                break;
            case 14:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '9.- ' + (kabum.preguntas[8].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[8].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[8].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[8].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[8].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[8].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '10.- ' + (kabum.preguntas[9].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[9].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[9].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[9].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[9].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[9].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '11.- ' + (kabum.preguntas[10].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[10].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[10].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[10].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[10].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[10].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '12.- ' + (kabum.preguntas[11].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[11].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[11].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[11].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[11].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[11].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '13.- ' + (kabum.preguntas[12].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[12].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[12].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[12].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[12].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[12].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '14.- ' + (kabum.preguntas[13].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[13].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[13].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[13].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[13].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[13].correcta).toString());
                doc.save('reporte');
                break;
            case 15:
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '1.- ' + (kabum.preguntas[0].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[0].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[0].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[0].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[0].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[0].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '2.- ' + (kabum.preguntas[1].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[1].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[1].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[1].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[1].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '3.- ' + (kabum.preguntas[2].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[2].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[2].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[2].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[2].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[2].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '4.- ' + (kabum.preguntas[3].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[3].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[3].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[3].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[3].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[3].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '5.- ' + (kabum.preguntas[4].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[4].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[4].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[4].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[4].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[4].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '6.- ' + (kabum.preguntas[5].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[5].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[5].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[5].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[5].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[5].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '7.- ' + (kabum.preguntas[6].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[6].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[6].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[6].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[6].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[1].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '8.- ' + (kabum.preguntas[7].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[7].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[7].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[7].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[7].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[7].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '9.- ' + (kabum.preguntas[8].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[8].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[8].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[8].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[8].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[8].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '10.- ' + (kabum.preguntas[9].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[9].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[9].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[9].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[9].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[9].correcta).toString());
                //----------------
                doc.addPage();
                doc.addImage(imagen2, 0, 0, 22, 30);
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 6, '11.- ' + (kabum.preguntas[10].pregunta).toString()).setFontSize(11);;
                doc.text(4, 6.6, 'Respuesta a: ' + (kabum.preguntas[10].a).toString());
                doc.text(4, 7.2, 'Respuesta b: ' + (kabum.preguntas[10].b).toString());
                doc.text(4, 7.8, 'Respuesta c: ' + (kabum.preguntas[10].c).toString());
                doc.text(4, 8.4, 'Respuesta d: ' + (kabum.preguntas[10].d).toString());
                doc.text(4, 9, 'Respuesta correcta: ' + (kabum.preguntas[10].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 10.2, '12.- ' + (kabum.preguntas[11].pregunta).toString()).setFontSize(11);;
                doc.text(4, 10.8, 'Respuesta a: ' + (kabum.preguntas[11].a).toString());
                doc.text(4, 11.4, 'Respuesta b: ' + (kabum.preguntas[11].b).toString());
                doc.text(4, 12, 'Respuesta c: ' + (kabum.preguntas[11].c).toString());
                doc.text(4, 12.6, 'Respuesta d: ' + (kabum.preguntas[11].d).toString());
                doc.text(4, 13.2, 'Respuesta correcta: ' + (kabum.preguntas[11].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 14.4, '13.- ' + (kabum.preguntas[12].pregunta).toString()).setFontSize(11);;
                doc.text(4, 15, 'Respuesta a: ' + (kabum.preguntas[12].a).toString());
                doc.text(4, 15.6, 'Respuesta b: ' + (kabum.preguntas[12].b).toString());
                doc.text(4, 16.2, 'Respuesta c: ' + (kabum.preguntas[12].c).toString());
                doc.text(4, 16.8, 'Respuesta d: ' + (kabum.preguntas[12].d).toString());
                doc.text(4, 17.4, 'Respuesta correcta: ' + (kabum.preguntas[12].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 18.6, '14.- ' + (kabum.preguntas[13].pregunta).toString()).setFontSize(11);;
                doc.text(4, 19.2, 'Respuesta a: ' + (kabum.preguntas[13].a).toString());
                doc.text(4, 19.8, 'Respuesta b: ' + (kabum.preguntas[13].b).toString());
                doc.text(4, 20.4, 'Respuesta c: ' + (kabum.preguntas[13].c).toString());
                doc.text(4, 21, 'Respuesta d: ' + (kabum.preguntas[13].d).toString());
                doc.text(4, 21.6, 'Respuesta correcta: ' + (kabum.preguntas[13].correcta).toString());
                //----------------
                doc.text(0, 0, '').setFontSize(13);
                doc.text(3, 22.8, '15.- ' + (kabum.preguntas[14].pregunta).toString()).setFontSize(11);;
                doc.text(4, 23.4, 'Respuesta a: ' + (kabum.preguntas[14].a).toString());
                doc.text(4, 24, 'Respuesta b: ' + (kabum.preguntas[14].b).toString());
                doc.text(4, 24.6, 'Respuesta c: ' + (kabum.preguntas[14].c).toString());
                doc.text(4, 25.2, 'Respuesta d: ' + (kabum.preguntas[14].d).toString());
                doc.text(4, 25.8, 'Respuesta correcta: ' + (kabum.preguntas[14].correcta).toString());
                doc.save('reporte');
                break;


            default:
                console.log('ocurrio un error en las preguntas');
                break;
        }
    }

    return (
        <div className="principal-r">
            <div className="row fs">
                <div className="col-3">
                </div>
                <div className="col-6 ">
                    <div className="titulo-blanco">
                        <h2 >Sigan practicando, ¡muchas felicidades!</h2>
                    </div>
                    <div className="footer">
                        <div className="titulo-tag">
                            <h2 id="titulo">{players[0].nombre}</h2>
                        </div>
                        {players.length > 1 ?
                            <div className="item2" id="item11">
                                <div className="titulo-tag2">
                                    <h2 id="titulo">{players[1].nombre}</h2>
                                </div>
                                <img className="medallas" src={img2do} alt=""></img>
                                <h2 id="titulo">{Math.round(players[1].puntos)}</h2>
                            </div> :
                            <></>
                        }
                        <div className="item2" id="item22">
                            <img className="medallas1" src={img1er} alt=""></img>
                            <h2 id="titulo">{Math.round(players[0].puntos)}</h2>
                        </div>
                        {players.length > 2 ?
                            <div className="item2" id="item33">
                                <div className="titulo-tag3">
                                    <h2 id="titulo">{players[2].nombre}</h2>
                                </div>
                                <img className="medallas" src={img3er} alt=""></img>
                                <h2 id="titulo">{Math.round(players[2].puntos)}</h2>
                            </div> :
                            <></>
                        }
                    </div>
                </div>
                <Link onClick={() => avanzarScoreboard()} className="siguiente-pregunta">Siguiente </Link>

                <Link onClick={() => jsPdfGenerator()} className="generar-pdf">Reporte</Link>

            </div>
        </div>

    )
}