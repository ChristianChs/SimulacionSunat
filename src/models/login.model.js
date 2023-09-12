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
    console.log(nruc)
    console.log(dni)
    console.log(user)
    console.log(password2)
    return sequelize.query(`INSERT INTO login(ruc,dni,usuario,clave) VALUES ('${nruc}','${dni}','${user}','${password2}')`,{raw:true})
    .then(([result,metadata])=>{
        const data= result.length===0?null:result
        return data
    })
    .catch((error)=>{
        throw error
    })
}

export default model