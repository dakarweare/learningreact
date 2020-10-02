import React, { useState } from 'react';
import FormWrapper from '../forms/FormWrapper'
const Login = props => {

  const [form, setFormValue] = useState({
      email: "",
      password: ""
  })



  const updateForm = e => {
      e.persist()
      setFormValue({...form, [e.target.name]: e.target.value})
  }

  const submitForm = e => {
      e.preventDefault();

      fetch("/login", { ...form })
      .then(response => response.json())
      .then(data => props.updateUser(data))
      .catch(e => console.log(e))
  }
  console.log(form)

  return (
      <FormWrapper>
          <form>
              <input type="email" name="email" value={form.email} onChange={e => updateForm(e)} />
              <input type="password" name="password" value={form.password} onChange={updateForm} />
              <button onClick={submitForm}>Submit</button>
          </form>
      </FormWrapper>
  )
}

export default Login;