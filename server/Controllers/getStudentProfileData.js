//I want my API to accept a student ID 
//and give me total messages in each channel 

import { studentProfileData } from "./studentProfileData";

const getStudentProfileData = async (req,res) =>{
    const studentID = req.params.id;
    const studentData = await studentProfileData(studentID);
    res.json(studentData) 
};

export default getStudentProfileData;