import collection from "../Models/ToDo.js"

const data = async (req, res) => {
    const toDo = await collection.find()
    res.send(toDo)
}

const saveData = async (req, res) => {
    const { text } = req.body;
    try {
        const todo = new collection({ text });
        const data = todo.save();
        res.status(201).json(data);
        console.log(data);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateData = async (req, res) => {
    console.log(req.body);
    try {
        const value = await collection.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });
        res.send(value);
    } catch (error) {
        res.status(500).send(error);
    }
}

const dltInfo = async (req, res) => {
    try {
        const todo = await collection.findByIdAndDelete(req.params.id);
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export default { data, saveData, updateData, dltInfo };

