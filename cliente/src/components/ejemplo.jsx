import React, { useEffect, useState } from 'react';
import { validaRUC } from '../api/validarDocs';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { dataCuota } from '../api/login';

class TextFileGenerator extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            content: `<?xml version="1.0" encoding="UTF-8"?>
                <recibo_por_honorarios>
                <emisor>
                    <nombre> {this.state.datareceptor} </nombre>
                    <direccion> {this.state.datareceptor2} </direccion>
                    <telefono> {this.state.datareceptor2} </telefono>
                    <ruc> {this.state.info.ruc} </ruc>
                </emisor>
                <cliente>
                    <nombre> {this.state.datareceptor3} </nombre>
                    <ruc> {this.state.info.nrodoc_destinatario} </ruc>
                    <direccion> {this.state.datareceptor4} </direccion>
                </cliente>
                <transaccion>
                    <forma_de_pago>AL CONTADO</forma_de_pago>
                    <monto_total> {this.state.resultado} Y 00/100 SOLES</monto_total>
                    <concepto> {this.state.info.descripcion_rxh} </concepto>
                    <observacion> {this.state.info.obs_rxh} </observacion>
                    <tipo_de_inciso> {this.state.info.inciso === '1' ? "A" : "B"} </tipo_de_inciso>
                    <fecha> {this.state.info.fecha_emision} </fecha>
                    <retencion> {this.state.info.retencion_monto} </retencion>
                    <total_neto> {this.state.info.total_neto} </total_neto>
                </transaccion>
                </recibo_por_honorarios>`,
            datareceptor: "",
            datareceptor2: "",
            datareceptor3: "",
            datareceptor4: "",
            resultado: "",
            info: {
                ruc: "",
                nrodoc_destinatario: "",
                descripcion_rxh: "",
                obs_rxh: "",
                inciso: "",
                fecha_emision: "",
                retencion_monto: "",
                total_neto: "",
            },
        };
    }

    componentDidMount() {
        this.getinfoC();
        this.getinfoRUCrs(this.state.info.ruc);
        this.getinfoRUCrsd(this.state.info.nrodoc_destinatario);
        this.getinfoRUCd(this.state.info.ruc);
        this.getinfoRUCdd(this.state.info.nrodoc_destinatario);
        this.convertirNumeroALetras(this.state.info.total_neto);
    }

    async getinfoC() {
        const data = await dataCuota(this.state.info.ruc);
        this.setState({ datareceptor: data.data });
    }

    async getinfoRUCrs(ruc) {
        const data = await validaRUC(ruc);
        this.setState({ datareceptor: data.data.razonSocial });
    }

    async getinfoRUCrsd(ruc) {
        const data = await validaRUC(ruc);
        this.setState({ datareceptor3: data.data.razonSocial });
    }

    async getinfoRUCd(ruc) {
        const data = await validaRUC(ruc);
        this.setState({ datareceptor2: data.data.direccion });
    }

    async getinfoRUCdd(ruc) {
        const data = await validaRUC(ruc);
        this.setState({ datareceptor4: data.data.direccion });
    }

     numeroAtexto(numero) {
      const unidades = ["", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"];
      const decenas = ["", "DIEZ", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"];
      const especiales = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"];
      const centenas = ["", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"];

      if (numero >= 0 && numero < 10) {
        return unidades[numero];
      } else if (numero >= 10 && numero < 20) {
        return especiales[numero - 10];
      } else if (numero >= 20 && numero < 100) {
        const unidad = numero % 10;
        const decena = Math.floor(numero / 10);
        if (unidad === 0) {
          return decenas[decena];
        } else {
          return decenas[decena] + " Y " + unidades[unidad];
        }
      } else if (numero >= 100 && numero < 1000) {
        const centena = Math.floor(numero / 100);
        const resto = numero % 100;
        if (resto === 0) {
          return centenas[centena];
        } else {
          return centenas[centena] + " " + numeroAtexto(resto);
        }
      } else if (numero < 1000000) {
        const miles = Math.floor(numero / 1000);
        const resto = numero % 1000;
        if (resto === 0) {
          return numeroAtexto(miles) + " MIL";
        } else {
          return numeroAtexto(miles) + " MIL " + numeroAtexto(resto);
        }
      } else if (numero < 1000000000) {
        const millones = Math.floor(numero / 1000000);
        const resto = numero % 1000000;
        if (resto === 0) {
          return numeroAtexto(millones) + " MILLONES";
        } else {
          return numeroAtexto(millones) + " MILLONES " + numeroAtexto(resto);
        }
      } else {
        return "Número fuera de rango";
      }
    }

    convertirNumeroALetras(numeroInput) {
        if (!isNaN(numeroInput)) {
            const numero = parseInt(numeroInput);
            if (numero >= 0 && numero <= 999999999) {
                const texto = this.numeroAtexto(numero);
                this.setState({ resultado: texto });
            } else {
                this.setState({ resultado: "El número debe estar entre 0 y 999,999,999." });
            }
        } else {
            this.setState({ resultado: "Por favor, ingrese un número válido." });
        }
    }

    render() {
        useEffect(() => {
    convertirNumeroALetras(info.total_neto); 
  }, []);
        return (
            <div>
                <button onClick={this.downloadTxtFile}>Descargar archivo de texto</button>
            </div>
        );
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
}

export default TextFileGenerator;
