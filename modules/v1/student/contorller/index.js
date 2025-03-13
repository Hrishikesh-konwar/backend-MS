
const getSetudent = (req, res) => {
    res.send(
      JSON.stringify({
        FirstName: "Hrihsikesh",
        LastName: "Konwar",
        Id: "1",
        role: "Admin",
      })
    );
  };

const checkLogin = async (req, res) =>{
  const method  = req.method ;
  console.log(req)

}

module.exports = {
    getSetudent,
    checkLogin
}