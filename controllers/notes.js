export const getNotes = (req, res)=>{
    res.send('All notes');
}

export const getNote= (req, res)=>{
    res.send('One note');
}

export const createNote= (req, res)=>{
    res.send('Note created');
}

export const updateNote= (req, res)=>{
    res.send('Updated')
}

export const deleteNote = (req, res)=>{
    res.send('Deleted')
}