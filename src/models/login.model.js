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
    const { serv_prestado, descripcion_rxh, obs_rxh, fecha_emision, fecha_vencimiento, inciso_cat, retencion_ir, pago_efectuado, tipo_moneda, monto_total, retencion_monto, total_neto, id_medio_pago, id_login, tipo_doc } = arg;
    console.log(serv_prestado)
    console.log(descripcion_rxh)
    console.log(obs_rxh)
    console.log(fecha_emision)
    console.log(fecha_vencimiento)
    console.log(inciso_cat)
    console.log(retencion_ir)
    console.log(pago_efectuado)
    console.log(tipo_moneda)
    console.log(monto_total)
    console.log(total_neto)
    console.log(id_medio_pago)
    console.log(id_login)
    console.log(tipo_doc)
    return sequelize.query(`INSERT INTO login(serv_prestado, descripcion_rxh, obs_rxh, fecha_emision, fecha_vencimiento, inciso_cat, retencion_ir, pago_efectuado, tipo_moneda, monto_total, retencion_monto, total_neto, id_medio_pago, id_login, tipo_doc) VALUES ('${serv_prestado}','${descripcion_rxh}','${obs_rxh}','${fecha_emision}','${fecha_vencimiento}','${inciso_cat}','${retencion_ir}','${pago_efectuado}','${tipo_moneda}','${monto_total}','${retencion_monto}','${total_neto}','${id_medio_pago}','${id_login}','${tipo_doc}')`,{raw:true})
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