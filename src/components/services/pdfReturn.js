import React, {PureComponent} from 'react';
import jsPDF from 'jspdf';


export class pdfGenerate extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {}
    }

    jsPdfGenerator = () => {

        let doc = new jsPDF('p', 'pt');
        doc.text(20, 20, 'text por defecto');
        doc.text(20, 30, 'texto de abajo');
        doc.save('pdf generado');
    }

    render() {

        return(
            <button onClick={this.jsPdfGenerator}> Generar PDF</button>
        );
    }

}
