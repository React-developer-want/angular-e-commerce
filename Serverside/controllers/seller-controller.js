const fs = require('fs');
const path = './Data/sellers-db.json';

// Read existing JSON data from the file
const jsonData = fs.readFileSync(path, 'utf-8');
const existingSellerData = JSON.parse(jsonData);

exports.sellerSignup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = {
      name, email, password
    };
    existingSellerData.push(user);
    const updatedJSON = JSON.stringify(existingSellerData);
    await fs.writeFileSync(path, updatedJSON, 'utf-8');

    res.status(201).json({
      status:'success',
      message: 'User created successfully'
    })
  } catch(error){
    res.status(404).json({
      status: 'failed',
      message: error.message
    })
  }
}

exports.sellerLogin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = {
      email, password
    };
    const isUserExists = existingSellerData.find((seller)=> user.email === seller.email && user.password === seller.password);
    if(!isUserExists) throw new Error(`Seller ${name} does not exist.`)

    res.status(201).json({
      status:'success',
      body: {
        user: isUserExists
      }
    })
  } catch(error){
    res.status(404).json({
      status: 'failed',
      message: error.message
    })
  }
}