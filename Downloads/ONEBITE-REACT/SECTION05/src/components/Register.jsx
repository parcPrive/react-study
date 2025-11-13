import { useState, useRef } from "react";

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name:"",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();


  const onChangeName =(e) => {
   
      setInput({
        ...input,
        name: e.target.value
      })
  }

  const onChangeBirth = (e) => {
    setInput({
        ...input,
        birth: e.target.value
      })
  }

  const onChangeCountry = (e) => {
    setInput({
        ...input,
        country: e.target.value
      })
  }

  const onChangeBio = (e) => {
    setInput({
        ...input,
        bio: e.target.value
      })
  }

  const onChange = (e) => {
      countRef.current++;
       console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }
  
  const onsubmit = () => {
    if(input.name === ""){
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
      <input
      ref={inputRef}
      name="name"
      value={input.name}
     onChange={onChange} placeholder={"이름"} />
     {input.name}
      </div>
      
      <div>
        <input name="birth" onChange={onChange} type="date" />
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option>한국</option>
          <option>미국</option>
          <option>중국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
       <button onClick={onsubmit}>제줄</button>
  </div>
  );
}

export default Register;