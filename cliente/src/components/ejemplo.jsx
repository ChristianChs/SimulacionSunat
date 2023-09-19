import React from 'react';

class TextFileGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          content:
                `<?xml version="1.0" encoding="UTF-8"?>
                <recibo_por_honorarios>
                <emisor>
                    <nombre>    </nombre>
                    <direccion> </direccion>
                    <telefono>  </telefono>
                    <ruc>   </ruc>
                </emisor>
                <cliente>
                    <nombre>    </nombre>
                    <ruc>   </ruc>
                    <direccion>     </direccion>
                </cliente>
                <transaccion>
                    <forma_de_pago>AL CONTADO</forma_de_pago>
                    <monto_total>        Y 00/100 SOLES</monto_total>
                    <concepto>      </concepto>
                    <observacion>       </observacion>
                    <tipo_de_inciso>        </tipo_de_inciso>
                    <fecha>     </fecha>
                    <retencion>     </retencion>
                    <total_neto>        </total_neto>
                </transaccion>
                </recibo_por_honorarios>`
          
          ,
        };
      }
    

  downloadTxtFile = () => {
    const { content } = this.state;
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'mi-archivo.txt';
    document.body.appendChild(element);
    element.click();
  };

  render() {
    return (
      <div>
        <button onClick={this.downloadTxtFile}>Descargar archivo de texto</button>
      </div>
    );
  }
}

export default TextFileGenerator;