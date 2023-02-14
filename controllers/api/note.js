const Note = require( "../../models/note")

// async function getNotes(req, res, next){
//     const notes = await Note.find()
//     res.json(notes)
// } 

async function create(req, res, next){
    try{
        const note = req.body.note
        // note.owner = req.user._id
        await Note.create(req.body.note)
        .then((note) => {
            res.status(201).json({ note: note })
        })
         res.json(note)
    } catch(error){
         res.status(400).json(error)
    }
 }

async function read(req, res, next){
    try{
        Note.find()
        .then((notes) => {
            return notes.map((note) => note)
        })
        .then((notes) => {res.status(200).json({ notes: notes })
        })
} catch(error) {res.status(400).json(error)
}
}

// module.exports = {getNotes, create}
// const noteCtrl = {
//     getNotes: async (req, res) =>{
//         try {
//             const notes = await Notes.find({user_id: req.user.id})
//             res.json(notes)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
    // createNote: async(req, res) =>{
    //     try {
    //         const {text} = req.body;
    //         const newNote = new Notes({
    //             text
    //         })
    //         await newNote.save()
    //         res.json({msg: "Created a Note"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },
    // deleteNote: async(req, res) =>{
    //     try {
    //         await Notes.findByIdAndDelete(req.params.id)
    //         res.json({msg: "Deleted a Note"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },
    // updateNote: async(req, res) =>{
    //     try {
    //         const {title, content, date} = req.body;
    //         await Notes.findOneAndUpdate({_id: req.params.id},{
    //             title,
    //             content,
    //             date
    //         })
    //         res.json({msg: "Updated a Note"})
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },
    // getNote: async(req, res) => {
    //     try {
    //         const note = await Notes.findById(req.params.id)
    //         res.json(note)
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // }
// }

module.exports = {read, create}