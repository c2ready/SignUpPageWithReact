import React, { useState } from 'react'
import './Giris.css';
import TextField from '@mui/material/TextField';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'


//created by Turedi Ceyhun on 21st May 2023

export default function Giris() {



//for collect data
  const [user, setUser] = useState({
    name:"",
    username:"",
    email:"",
    birthday:"",
    phone:"",
    password:"",
    passwordconf:"",

  })



  const handleInput = (event) => {
    setUser({...user, [event.target.name]: event.target.value})

}

  const onChange = () => {
    
  };


  //for validation
  const [lowerValidated, setLowerValidated]=useState(false);
  const [upperValidated, setUpperValidated]=useState(false);
  const [numberValidated, setNumberValidated]=useState(false);
  const [specialValidated, setSpecialValidated]=useState(false);
  const [lenghtValidated, setLenghtValidated]=useState(false);

  const handleChange=(value) =>{
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const length = new RegExp('(?=.{8,})');
    const special = new RegExp('(?=.*[!/+%&])');



  //validate functions states

  if(lower.test(value)){
    setLowerValidated(true);
  }
  else{
    setLowerValidated(false);
    
  }

  if(upper.test(value)){
    setUpperValidated(true);
  }
  else{
    setUpperValidated(false);

  }
  if(number.test(value)){
    setNumberValidated(true);
  }
  else{
    setNumberValidated(false);
    
  }
  
  if(length.test(value)){
    setLenghtValidated(true);
  }
  else{
    setLenghtValidated(false);

  }
  if(special.test(value)){
    setSpecialValidated(true);
  }
  else{
    setSpecialValidated(false);

  }
}



  return (
    <div class="giris-container">
      <div class="card">

        <h1>Kayıt Ol</h1>
        <form onSubmit={handleInput}>
          <div class="formgroup">

            <label class="isim">İsim Soyisim</label>
            <input onChange={handleInput} name='name' value={user.name} className='input' type='name'placeholder='name'></input>

            <label class="kullaniciadi">Kullanıcı adı</label>
            <input onChange={handleInput} name='username' value={user.username} className='input' type='username' placeholder='username' ></input>

            <label type='email' name="email" class="email">Email</label>
            <input onChange={handleInput} name='email' value={user.email} className='input' type='email' placeholder='email'  ></input>

            <label class="birthday">Doğum Tarihi</label>
            <input  onChange={handleInput} name='birthday' value={user.birthday} className='input' type='date' placeholder='' ></input>


            <label class="telno">Telefon Numarası</label>
            <input onChange={handleInput} name='phone' value={user.phone} className='input' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" type='tel' ></input>


            <div class="row">

            <label class="password">Parola</label>
            <TextField onChange={(e)=>handleChange(e.target.value)} name='password' type='password' fullWidth id="fullWidth" />
            <label  class="passwordconf">Parola Onay</label>
            <TextField onChange={handleInput} name='passwordconf' fullWidth type='password' id="fullWidth" />
            </div>

          <main className='tracker'>

            <div className={lenghtValidated?'validated':'not-validated'}>{lenghtValidated?(
            <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faCheckCircle}/></span>
            ):(
           <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faExclamationCircle}/></span>
            )}Minumum 8 karakter</div>
            <div className={upperValidated?'validated':'not-validated'}>{upperValidated?(
            <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faCheckCircle}/></span>
            ):(
           <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faExclamationCircle}/></span>
            )}En az bir büyük harf</div>
            <div className={lowerValidated?'validated':'not-validated'}>{lowerValidated?(
            <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faCheckCircle}/></span>
            ):(
           <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faExclamationCircle}/></span>
            )}En az bir küçük harf</div>
            <div className={numberValidated?'validated':'not-validated'}>{numberValidated?(
            <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faCheckCircle}/></span>
            ):(
           <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faExclamationCircle}/></span>
            )}En az bir rakam</div>
            <div className={specialValidated?'validated':'not-validated'}>{specialValidated?(
            <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faCheckCircle}/></span>
            ):(
           <span><FontAwesomeIcon className='elementToFadeInAndOut' icon={faExclamationCircle}/></span>
            )}En az bir özel işaret (!/+%&)</div>
            </main>            


            <div className='notrobot'>
            <ReCAPTCHA  sitekey="6LdtGiomAAAAAEX-_kxr5cLgo83GPJ4zgCV0Rmsj" onChange={onChange}/>
            </div>
            
            
            <div>
              <button>
                kayıt ola
              </button>
            </div>


     </div>
        </form>

      </div>
    </div>

  )
}
