const router = require('../node_modules/express').Router();
let User = require('../models/user.model');
const nodemailer = require('nodemailer');



router.route('/add').post((req, res) => {
  const nameOfTheStudent = req.body.nameOfTheStudent;
  const dateOfBirth = Date.parse(req.body.dateOfBirth);
  const gender=req.body.gender;
  const classAd=req.body.classAd;
  const fatherName=req.body.fatherName;
  const motherName=req.body.motherName;
  const permanentAddress=req.body.permanentAddress;
  const phone=req.body.phone;
  const whatsAppNumber=req.body.whatsAppNumber;
  const email=req.body.email;
  const category=req.body.category;
  const transport=req.body.transport;
  

  const newUser = new User({
    
    nameOfTheStudent,
    dateOfBirth,
    gender,
    classAd,
    fatherName,
    motherName,
    permanentAddress,
    phone,
    whatsAppNumber,
    email,
    category,
    transport
});

newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));


  const htmlEmail = `
  <h4>Dear Parents,</h4>
  <h4>Greetings from Doon Public School, Begusarai !</h4>
  <br>
  Thank you for applying for your ward's admission to our school. Your application form has been submitted successfully.
  Your application number is  .Please quote application number for all communication.
  <br>
  For any query you may please call us at - +91 7781048952 / +91 7781048957 or write us mail at - principal@doonbegusarai.in
  <h4>Best Regards</h4>
  <h4>Ganesh Kumar Singh</h4>
  <h4>Principal</h4>`

  const htmlEmailSchool=`
 <h4> Dear Team</h4>
<h5>Greetings !</h5>
A new admission form has been submitted today. Application number is  for your reference please.
Preliminary details of the student sought admission are :
  <Table>
  <tr>
  <td>1.Name of the student:</td>
  <td> ${req.body.nameOfTheStudent}</td>
  </tr>
  <tr>
  <td>2.Date of Birth:</td>
  <td>${req.body.dateOfBirth}</td>
  </tr>
  <tr>
  <td>3.Gender:</td>
  <td>${req.body.gender}</td>
  </tr>
  <tr>
  <td>4.Class to which addmission is sought:</td>
  <td>${req.body.classAd}</td>
  </tr>
  <tr>
  <td>5.Father name:</td>
  <td>${req.body.fatherName}</td>
  </tr>
  <tr>
  <td>6.Mother name:</td>
  <td>${req.body.motherName}</td>
  </tr>
  <tr>
  <td>7.Permanent address:</td>
  <td>${req.body.permanentAddress}</td>
  </tr>
  <tr>
  <td>8.Phone number:</td>
  <td>${req.body.phone}</td>
  </tr>
  <tr>
  <td>9.WhatsApp number:</td>
  <td>${req.body.whatsAppNumber}</td>
  </tr>
  <tr>
  <td>10.Email:</td>
  <td>${req.body.email}</td>
  </tr>
  <tr>
  <td>11.Category:</td>
  <td>${req.body.category}</td>
  </tr>
  <tr>
  <td>12.Transport requirement:</td>
  <td>${req.body.transport}</td>
  </tr>
  <h5>Request you to expedite admission process for the above student.</h5>

<h4>Regards</h4>
<h4>Admission - IT Cells<h4>
`

let transporter = nodemailer.createTransport({
  service:'gmail',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: process.env.SENDER_EMAIL, // generated ethereal user
      pass: process.env.SENDER_EMAIL_PASSWORD // generated ethereal password
  },
  tls:{
    rejectUnauthorized:false
  }
});

let mailOptions = {
  from: '"Ashwini"<process.env.SENDER_EMAIL>', // sender address
  to:req.body.email,// list of receivers
  subject: 'Online application registration', // Subject line
  html: htmlEmail// html body
};

let mailOptionsSchool = {
  from: '"Ashwini"<process.env.SENDER_EMAIL>', // sender address
  to:process.env.RECIEVER_EMAIL,// list of receivers
  subject: 'Online application registration', // Subject line
  html: htmlEmailSchool// html body
};

transporter.sendMail(mailOptions, function(error, response) {
if(error) {
    console.log(error)
} else {
    console.log( "email sent successfully")
}
})
transporter.sendMail(mailOptionsSchool, function(error, response) {
  if(error) {
      console.log(error)
  } else {
      console.log( "email sent to school successfully")
  }
transporter.close();
})
})

module.exports = router;