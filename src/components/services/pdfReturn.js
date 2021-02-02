import React, {PureComponent} from 'react';
import jsPDF from 'jspdf';
import imagen1 from '../../assets/images/playersFormato.jpg'
import imagen2 from '../../assets/images/pregsFormato.jpg'


export class pdfGenerate extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {}
    }

    
    //funcion para generar el pdf
    //libreria utilizada jsPDF

    jsPdfGenerator = () => {
        let date = new Date();

        let doc = new jsPDF('p', 'cm');
        doc.addImage(imagen1, 0, 0, 22, 30).setFontSize(13);
        doc.text(15, 4.7, (date.getDate() +' / '+ (date.getMonth() + 1) + ' / '+ date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes()).toString());
        doc.text(13, 8.63, '8');
        doc.text(12.9, 10.35, '10');
        doc.addPage();
        doc.addImage(imagen2, 0, 0, 22, 30);
        doc.save('pdf generado');
    }

    render() {

        return(
            <button onClick={this.jsPdfGenerator}> Generar PDF</button>
        );
    }

}
