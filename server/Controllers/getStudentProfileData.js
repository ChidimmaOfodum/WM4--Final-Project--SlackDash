//I want my API to accept a student ID 
//and give me total messages in each channel 

import { studentProfileData } from "../slackMethods";
import getData from "./getData";

let data = ["C04P33JK30F", "C04Q7AGB5EU"];

const aggregate = async(req, res) => {
   const datas = await Promise.all(data.map(async (el) => {
   return await getData(el)
  

}))
    // let channelData = {}
    // for (let x of data) {
    //     channelData[x] = await getData(x)
    // }
     res.json(datas)
  
}



// const getStudentProfileData = async (req,res) =>{
//     const studentID = req.params.id;
//     const studentData = await studentProfileData(studentID);
//     res.json(studentData) 
// };

export default aggregate;