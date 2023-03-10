const User = require("./models/user");


const signUpUser = async (req,res) => {
    try{
        
  const { firstName, lastName,role, email, password } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }

  const newUser = new User({ firstName, lastName,role, email, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) res.json({ message: "Thanks for registering" });
       
       res.send(email)
    } catch(err){
        console.log(err);
    }

}

export default signUpUser;