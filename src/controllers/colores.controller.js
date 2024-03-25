import Color from "../database/models/color.js"

export const obtenerColores = async(req,res)=>{
    try{
        let colores = await Color.find()

        res.status(200).json(colores)

    }catch(err){
        console.log(err)
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}


export const crearColor = async (req,res) => {
    try{
        let colorNuevo = new Color(req.body)
        await colorNuevo.save()

        res.status(200).json({
            message: 'Color añadido con exito'
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}

export const editarColor = async (req,res)=>{
    try{
        let color = await Color.findById(req.params.id)

        if(!color){
            res.json(404).json({
                message: 'El color no existe'
            })
        }

        res.status(200).json(color)
    }catch{
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}

export const eliminarColor = async (req,res) => {
    try{
        let color = await Color.findById(req.params.id)

        if(!color){
            res.json(404).json({
                message: 'El color no existe'
            })
        }

        await Color.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message:'El color se elimino con exito'
        })
    }catch(err){
        res.status(400).json({
            message: 'Hubo un error con el servidor. Intenta nuevamente'
        })
    }
}