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

 //get contact by id 
export const getUser = async(req,res) =>{
  try
  {
      const contactTofind = await User.findOne({_id: req.params.id })
      res.status(200).send({msg: `This is a Contact ...`,contactTofind })
  }
  catch(error)
  {
      res.status(400).send({msg: `Can not get contact...`,error})
  }
  }
// export const getUser = async (req, res) => {
//   const { _id } = req.params;

//     try {
//         // Récupérer l'utilisateur à partir du modèle "users"
//         const foundUser = await User.findById(_id);
//         console.log(foundUser)

//         return res.send(foundUser);
        
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

  //get contact by id 
// const getOneContact = async(req,res) =>{
//   try
//   {
//       const contactTofind = await Contact.findOne({_id: req.params.id })
//       res.status(200).send({msg: `This is a Contact ...`,contactTofind })
//   }
//   catch(error)
//   {
//       res.status(400).send({msg: `Can not get contact...`,error})
//   }
//   }
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
    const { _id } = req.params;
    const { firstName, lastName, age } = req.body;

    try {
        // Récupérer l'utilisateur à partir du modèle "users"
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).send(`User with the id ${_id} not found`);
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

        return res.send(`User with the id ${_id} has been updated`);
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while updating the user');
    }
};

// add contact
// const addContact = async (req,res) => {
//     try{
//        const {name, email, phone} = req.body
//        //mail and name required
//        if(!name || !email)
//        {
//          res.status(400).send({msg: `name and email are required...`})
//        }
//        //email is unique
//        const contact = Contact.findOne({email})
//        if (!contact)
//        {
//        res.status(400).send({msg: `contact is already exist...`})
//        return
//        }

//        const newContact = new Contact({
//            name,
//            email,
//            phone
//        })
//    await newContact.save()
//      res.status(200).send({msg: `Contact added swith success...`,newContact})
//     }
//     catch(error){
//        res.status(400).send({msg: `Contact not added...`,error})
//    }
 
//    }
   
//    //get contact
// const getContact = async (req,res) => {
//     try{
//        const listContact = await Contact.find()
//      res.status(200).send({msg: `This is a list of Contact ...`,listContact})
//     }
//     catch(error){
//        res.status(400).send({msg: `Can not get all Contact...`,error})
//    }
//   }
//    //get contact by id 
// const getOneContact = async(req,res) =>{
//   try
//   {
//       const contactTofind = await Contact.findOne({_id: req.params.id })
//       res.status(200).send({msg: `This is a Contact ...`,contactTofind })
//   }
//   catch(error)
//   {
//       res.status(400).send({msg: `Can not get contact...`,error})
//   }
//   }
//  // delete contact
//  const deleteContact = async(req,res) =>{
//   try
//   {
//   const {_id} = req.params
//   const contactToDelete = await Contact.findOneAndDelete({_id})
//   if(!contactToDelete)
//   {
//     res.status(400).send({msg: `Contact is alreadey deleted..`})
//     return
//  }
//   res.status(200).send({msg: `Contact is deleted ...`,contactToDelete })
//  }
//  catch (error)
//  {
//      res.status(400).send({msg: `Can not delete contact...`,error})

//  }
// }   

// // update contact
// const updateContact = async(req,res) => {
//   try 
//   {
//       const { _id } = req.params
//       const result = await Contact.updateOne({_id},{ $set: { ...req.body} })
      
//       if(!result.nModified)
//       {
//           res.status(400).send({msg: `contact is already updated...`})
//       }
//       res.status(200).send({msg: `Contact is updated ...`})
//   }
//   catch(error)
//   {
//       res.status(400).send({msg: `can not update contact...`,error})
//   }: