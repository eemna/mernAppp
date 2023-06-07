import { v4 as uuidv4 } from 'uuid';
import User from '../models/users.js';
//let users = [];

export const getUsers = async (req, res) => {
    try {
        const user = await User.find(); 
        res.status(200).json(user); //traja3li kol chay fel data
    }catch(error){
        res.status(404).json({message: error.message});  
    }
}

export const createUser = async (req, res) =>{
    const user =req.body;
    const newUser = new User(user);//creer new post
    try{
        await newUser.save();
         res.status(201).json(newUser);
    }catch(error){
        res.status(409).json({message: error.message}); //ay haja tebda b2xx succes 3xx redirection 4xx client error 5xx server error

    }
}
// export const getUser = (req, res) => {
//     const { id } =req.params;
//     const foundUser =users.find((user) => user.id == id);
//     res.send(foundUser);
// }
export const getUser = async (req, res) => {
  const { id } = req.params;

    try {
        // Récupérer l'utilisateur à partir du modèle "users"
        const foundUser = await User.findById(id);
        return res.send(foundUser);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// export const deleteUser = (req, res) => {
//     const { id } = req.params;
//     users = users.filter((user) => user.id !==id);
//     res.send(`User with the id ${id} deleted from the database`);
// }

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        // Supprimer l'utilisateur de la base de données
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send(`User with the id ${id} not found`);
        }

        return res.send(`User with the id ${id} deleted from the database`);
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while deleting the user');
    }
};

// export const updateUser =(req, res) => {
//     const { id } = req.params;
//     const { firstName, lastName, age } = req.body;
//     const user =users.find((user) => user.id == id );
//     if (firstName){
//         user.firstName = firstName;
//    }
//     if (lastName){
//         user.lastName = lastName;
//     }
//     if (age){
//         user.age = age;
//     }
//     res.send(`User with the id ${id} has been updated`); 
// }
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    try {
        // Récupérer l'utilisateur à partir du modèle "users"
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send(`User with the id ${id} not found`);
        }

        if (firstName) {
            user.firstName = firstName;
        }

        if (lastName) {
            user.lastName = lastName;
        }

        if (age) {
            user.age = age;
        }

        // Enregistrer les modifications de l'utilisateur
        await user.save();

        return res.send(`User with the id ${id} has been updated`);
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while updating the user');
    }
};
