import sequelize from "../db.js"

const model ={}

model.findUser=async(arg)=>{
    return sequelize.query(`SELECT * FROM login where dni='${arg}'`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.findUser2=async(arg)=>{
    return sequelize.query(`SELECT * FROM login where ruc='${arg}'`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inUser=async(arg)=>{
    const { tipo_serv,nrodoc_destinatario,tipo_doc_destinatario,serv_prest, descripcion_rxh, obs_rxh, fecha_emision, fecha_vencimiento, inciso, retencion, serv_pago, tipo_moneda, montoTotal, totalImpuesto, totalNeto, medio_pago, id_login} = arg;
    return sequelize.query(`INSERT INTO recibohonorario(tipo_servicio,tipo_doc_destinatario, nrodoc_destinatario, serv_prestado, descripcion_rxh, obs_rxh, fecha_emision, fecha_vencimiento, inciso_cat, retencion_ir, pago_efectuado, tipo_moneda, monto_total, retencion_monto, total_neto, id_medio_pago, id_login) VALUES ('${tipo_serv}','${tipo_doc_destinatario}','${nrodoc_destinatario}','${serv_prest}','${descripcion_rxh}','${obs_rxh}','${fecha_emision}','${fecha_vencimiento}','${inciso}','${retencion}','${serv_pago}','${tipo_moneda}','${montoTotal}','${totalImpuesto}','${totalNeto}','${medio_pago}','${id_login}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inUser3=async(arg)=>{
    const { tipo_serv,nrodoc_destinatario,tipo_doc_destinatario,serv_prest, descripcion_rxh, obs_rxh, fecha_emision, inciso, retencion, serv_pago, tipo_moneda, montoTotal, totalImpuesto, totalNeto, medio_pago, id_login} = arg;
    return sequelize.query(`INSERT INTO recibohonorario(tipo_servicio,tipo_doc_destinatario, nrodoc_destinatario, serv_prestado, descripcion_rxh, obs_rxh, fecha_emision, inciso_cat, retencion_ir, pago_efectuado, tipo_moneda, monto_total, retencion_monto, total_neto, id_medio_pago, id_login) VALUES ('${tipo_serv}','${tipo_doc_destinatario}','${nrodoc_destinatario}','${serv_prest}','${descripcion_rxh}','${obs_rxh}','${fecha_emision}','${inciso}','${retencion}','${serv_pago}','${tipo_moneda}','${montoTotal}','${totalImpuesto}','${totalNeto}','${medio_pago}','${id_login}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inFact=async(arg)=>{
    const { tipo_trans, detr,exp,RUC,ant,itn,est,dir,com,tipo_mon,desc_ant,isc,opg,cyt,fecha_emision,total,total_igv,total_isc,total_icbper,sub_total,total_descuento} = arg;
    return sequelize.query(`INSERT INTO factura(tipo_trans, detr,exp,RUC,ant,itn,est,dir,com,tipo_mon,desc_ant,isc,opg,cyt,fecha_emision,total,total_igv,total_isc,total_icbper,sub_total,total_descuento) VALUES ('${tipo_trans}','${detr}','${exp}','${RUC}','${ant}','${itn}','${est}','${dir}','${com}','${tipo_mon}','${desc_ant}','${isc}','${opg}','${cyt}','${fecha_emision}','${total}','${total_igv}','${total_isc}','${total_icbper}','${sub_total}','${total_descuento}')`,{rw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inFactcu=async(arg)=>{
    const { numero_cuota,monto_cuota,fecha_vencimiento,monto_neto,obs,total_cuota} = arg;
    return sequelize.query(`INSERT INTO cuota_factura(numero_cuota,monto_cuota,fecha_vencimiento,monto_neto,obs,total_cuota) VALUES ('${numero_cuota}','${monto_cuota}','${fecha_vencimiento}','${monto_neto}','${obs}','${total_cuota}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inFactde=async(arg)=>{
    const { tipo_op,cod,cta,medio,porcentaje,monto_detraccion} = arg;
    return sequelize.query(`INSERT INTO detraccion_factura(tipo_op,cod,cta,medio,porcentaje,monto_detraccion) VALUES ('${tipo_op}','${cod}','${cta}','${medio}','${porcentaje}','${monto_detraccion}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inBol=async(arg)=>{
    const { expo,td,rs,pa,itin,esta,direc,tm,da,ISC_sel,og,cyot,nombre,fecha_emision,fecha_vencimiento,total,total_igv,total_icbper,total_isc,numero_documento} = arg;
    return sequelize.query(`INSERT INTO boleta(expo,td,rs,pa,itin,esta,direc,tm,da,ISC_sel,og,cyot,nombre,fecha_emision,fecha_vencimiento,total,total_igv,total_icbper,total_isc,numero_documento) VALUES ('${expo}','${td}','${rs}','${pa}','${itin}','${esta}','${direc}','${tm}','${da}','${ISC_sel}','${og}','${cyot}','${nombre}','${fecha_emision}','${fecha_vencimiento}','${total}','${total_igv}','${total_icbper}','${total_isc}','${numero_documento}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inPFact=async(arg)=>{
    const { bos,cantidad,medida,codigo,descripcion,bolsas,valor,descuento,ISC,ICBPER,IGV,Importe_total} = arg;
    return sequelize.query(`INSERT INTO prod_fact(bos,cantidad,medida,codigo,descripcion,bolsas,valor,descuento,ISC,ICBPER,IGV,Importe_total) VALUES ('${bos}','${cantidad}','${medida}','${codigo}','${descripcion}','${bolsas}','${valor}','${descuento}','${ISC}','${ICBPER}','${IGV}','${Importe_total}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inPBol=async(arg)=>{
    const { bos,cantidad,medida,codigo,descripcion,bolsas,valor,descuento,ISC,ICBPER,IGV,Importe_total} = arg;
    return sequelize.query(`INSERT INTO prod_bol(bos,cantidad,medida,codigo,descripcion,bolsas,valor,descuento,ISC,ICBPER,IGV,Importe_total) VALUES ('${bos}','${cantidad}','${medida}','${codigo}','${descripcion}','${bolsas}','${valor}','${descuento}','${ISC}','${ICBPER}','${IGV}','${Importe_total}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.Extraer=async(arg)=>{
    return sequelize.query(`SELECT * FROM recibohonorario WHERE id_login='${arg}' ORDER BY id DESC LIMIT 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.ExtraerC=async()=>{
    return sequelize.query(`SELECT * FROM cuota WHERE 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.ExtraerFC=async()=>{
    return sequelize.query(`SELECT * FROM cuota_factura WHERE 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.ExtraerFD=async()=>{
    return sequelize.query(`SELECT * FROM detraccion_factura WHERE 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.ExtraerPF=async()=>{
    return sequelize.query(`SELECT * FROM prod_fact WHERE 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.ExtraerPB=async()=>{
    return sequelize.query(`SELECT * FROM prod_bol WHERE 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}


model.ExtraerF=async()=>{
    return sequelize.query(`SELECT * FROM factura WHERE 1 ORDER BY id DESC LIMIT 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.ExtraerB=async()=>{
    return sequelize.query(`SELECT * FROM boleta WHERE 1 ORDER BY id DESC LIMIT 1`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}


model.Extraer2=async(arg)=>{
    return sequelize.query(`SELECT * FROM recibohonorario INNER JOIN login ON recibohonorario.id_login =login.id WHERE recibohonorario.id_login='${arg}' ORDER BY recibohonorario.id DESC LIMIT 1 `,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.ExtraerFecha=async(arg)=>{
    return sequelize.query(`SELECT date(recibohonorario.fecha_emision) FROM recibohonorario INNER JOIN login ON recibohonorario.id_login=login.id WHERE recibohonorario.id_login=='${arg}' ORDER BY recibohonorario.id DESC LIMIT 1 `,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}



model.indUser2=async(arg)=>{
    const { nruc, user, dni, password2 } = arg;
    return sequelize.query(`INSERT INTO login(ruc,dni,usuario,clave) VALUES ('${nruc}','${dni}','${user}','${password2}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

model.inCuota=async(arg)=>{
    const { numCuota, feCuota, monCuota} = arg;
    return sequelize.query(`INSERT INTO cuota(numero_cuota,fecha_vencimiento,monto_cuota) VALUES ('${numCuota}','${feCuota}','${monCuota}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

export default model