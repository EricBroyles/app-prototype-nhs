import { useState } from 'react';


const InputTimes= ()=>{
  const [formFields, setFormFields] = useState([
    { time: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
        date: '', time: '' 
      
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="InputTime">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='date'
                placeholder='Date'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <input
                name='time'
                placeholder='Time'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default InputTimes;