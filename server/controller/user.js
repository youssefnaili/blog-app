const db = require('../Database/index')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
//  const { db, sequelize } = require('../Database/index')
    module.exports = {
        getAll: async(req,res)=>{
            try {
                const user = await db.User.findAll({});
                res.status(200).send(user);
            }
            catch(error){
                throw error;
            }
        },


  
        getOneUser: async(req,res)=>{
            try{
                const user = await db.User.findOne({where: {id:req.params.id}});
                res.status(200).send(user)
            }
            catch(error){
                throw(error)
            }
        },
        
        postUser: async (req, res) => {
          const {username,email,password } = req.body
          const hashedPassword = await bcrypt.hash(password, 10);
         try{
              
              
              const newUser = db.User.create({username,email,password: hashedPassword });
              res.status(201).json(newUser);
         
          } catch (error) {
              res.status(500).send(error)
          }
      },

    loginUser: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await db.user.findOne({ where:{email}});

            if (!user) {
                return res.status(400).json({ message: "User not found" });
            } 
         const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({ userId: user._id }, 'your secret key is in safe hands', {
                    expiresIn: '4h',
                });
                res.status(200).json({ token });
            } else {
                res.status(400).json({ message: "Wrong password or username" });
            }
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const {name, email, password} = req.body
            const updateUser = await db.User.update({ name, email, password},{ where: { id: req.params.id } }
                );
                res.status(200).send(updateUser);
            } catch (error) {
                throw error;
            }
        },


        deleteUser: async(req,res)=>{
            try{
                const user = await db.User.destroy({where: {id:req.params.id}});
                res.json(user);
            }
            catch(error){
                throw error
            }
        }
    }