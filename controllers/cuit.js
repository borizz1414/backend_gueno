  const request = require("request");
  const apiUrl = "https://api.gueno.com.ar/challenge/";
var controller = {
  home: function (req, res) {
     
    return res.status(200).send({
      message: "Soy la home/test",
    });
  },
  getCuit: function (req, res) {
       var cuitId = req.params.id;
    
  request(apiUrl+'getCuit/'+cuitId, { json: true }, (err, resp, body) => {
 
         if (err) return res.status(500).send({ message: "Error al devolver los datos" });

         if (body.success == false) return res.status(404).send({ message: "No existe el cuit" });
    
    
  
      if (body.success == true) return res.status(200).send({  message: body.message,
                                                                status: body.success,
                                                                cuit: body.data.cuit });
  });
 
  },
  getUser: function (req, res) {
            var cuit = req.params.cuit;

            request(apiUrl + 'getUserData/' + cuit, { json: true }, (err, resp, body) => {
                console.log(body)
                if (err)return res.status(500).send({ message: "Error al devolver los datos" });

                if (body.success == false)return res.status(404).send({ message: "No existe el usuario" });

                if (body.success == true)return res.status(200).send({  name: body.data.name,
                                                                        surname: body.data.surname,
                                                                        birthday: body.data.birthday,
                                                                        scoring: { confidence: body.data.scoring.confidence, approved: body.data.scoring.approved },
                                                                        message: body.message,
                                                                        status: body.success,
                                                                        cuit: body.data.cuit, });
              });
 
  }
};

module.exports = controller;