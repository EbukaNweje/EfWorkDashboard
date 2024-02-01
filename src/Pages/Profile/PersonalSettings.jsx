import { useState } from "react";
import "./Profile.css";
import axios from "axios";

const PersonalSettings = ({data}) => {

    const [firstName, setFristName] = useState()
    const [lastName, setLastName] = useState()
    const [gender, setGender] = useState()
    // const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [isButtonDisabled, setButtonDisabled] = useState(false);
     const [msg, setMsg] = useState()

  const userinfo = {firstName, lastName, gender, phoneNumber}

    const updateuserurl = `https://efworkbackend.onrender.com/api/userdata/${data._id}`
    const upDateUser = () => {
        setButtonDisabled(true)
        axios.patch(updateuserurl, userinfo)
        .then(res=>{setMsg(res.data.message), setButtonDisabled(false)})
        .catch((error)=>{
          setButtonDisabled(false)
          console.log(error)
        })
      }

      const handleFullNameChange = (e) => {
        const newFristName = e.target.value;
        setFristName(newFristName);
      };
      
      const handlephoneNumberChange = (e) => {
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);
      }; 
    
      const handlesetGender = (e) => {
        const newGender = e.target.value;
        setGender(newGender);
      };
      const handleLastnameChange = (e) => {
        const newLastName = e.target.value;
        setLastName(newLastName);
      };
    


    console.log("workin on it ", data._id)
    
    return (
        <>
            <div className="ProfileContentPS">
                <div className="ProfileContentPSRow1">
                    <div className="ProfileContentPSRow1A">
                        <p>Frist Name</p>
                        <input type="text" placeholder={data.firstName} onChange={handleFullNameChange} />
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Last Name</p>
                        <input type="emailtext" placeholder={data.lastName}  onChange={handleLastnameChange} />
                    </div>
                </div>
                <div className="ProfileContentPSRow2">
                <div className="ProfileContentPSRow1B">
                        <p>Email</p>
                        <input type="email" placeholder={data.email} readOnly/>
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Phone Number</p>
                        <input type="text" placeholder={data.phoneNumber} onChange={handlephoneNumberChange} />
                    </div>
                </div>
                <div className="ProfileContentPSRow2">
                    {/* <div className="ProfileContentPSRow1A">
                        <p>Country</p>
                        <input type="text" placeholder={data.country} onChange={handleuserNameChange} />
                    </div> */}
                    <div className="ProfileContentPSRow1B">
                        <p>Gender</p>
                        <input type="text" placeholder={data.gender} onChange={handlesetGender} />
                    </div>
                </div>
               <p style={{marginTop: "1%", marginLeft: "2%", color: "green", fontSize: "18px", fontFamily:"Nunito, sans-serif;"}}>{msg}</p>
                {/* <div className="ProfileContentPSRow3">
                    <div className="ProfileContentPSRow1A">
                        <p>Country</p>
                        <input type="text" readOnly/>
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Email</p>
                        <textarea placeholder="Full Address" />
                    </div>
                </div> */}
                <div className="ProfileContentPSRow4Btn">
                    <button onClick={upDateUser}
                     disabled={isButtonDisabled}
                     style={{background: `${isButtonDisabled ? "#E0E0E5" : "#0E4152"}`}}
                    >Update Profile</button>
                </div>
            </div>
        </>
    );
};

export default PersonalSettings;
