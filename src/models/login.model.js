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