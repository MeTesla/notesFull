import note from '../models/note.js';
import Note from '../models/note.js'


export const getNotes = async (req, res)=>{
    //res.send('All notes');
    try {
        const notes = await Note.find()
        res.status(200).json({
            success: true,
            data: notes
        }

        )
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
}

export const getNote= async (req, res)=>{
    //res.send('One note');
    //check valid id
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)){
        res.status(400).json({
            succuss: false,
            error: "ID est invalide"
        })
    }
    try {
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(400).json({
                success: false,
                error : "Il n'y a aucune note"
            })
        }
        res.status(200).json({
            success: true,
            data: note
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            error : error.message
        })
    }

}

export const createNote= async (req, res)=>{
    //res.send('Note created');
    try {
        const note = await Note.create(req.body)
        if(!note){
            return res.status(400).json({
                success: false,
                error: 'Pas de note'
            })
        }
        res.status(201).json({
            success: true,
            data: note
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

export const updateNote= async (req, res)=>{
    //res.send('Updated')
    try {
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(400).json({
                success: false,
                error: "Il n y a pas de notes"
            })
        }
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            data: updatedNote
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

export const deleteNote = async (req, res)=>{
    //res.send('Deleted')
    try {
        const note= await Note.findById(req.params.id)
        if(!note){
            return res.status(400).json({
                success: false,
                error: "Il n y a pas de notes"
            })
        }
        await note.remove()
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}