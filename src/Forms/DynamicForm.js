import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function DynamicForm() {
    // Below for viewing values in table
    const [fields, setFields]=useState([]);

    // Initialize for form field values
    const ownVal = {name :'', age: " ", yob:" "};

    // Below for set form values with form field value
    const [values, setValues]=useState(ownVal)

    // values = {name :'5', age: " ", yob:" "};
    // values.name = 5
    
    // show the button add/update label
    const [ editedVal, setEditVal] = useState(false);

    // store edit id of table corresponding row id in state value and access with that.
    const [ editedId, setEditId] = useState(null);

  const SubmitIt=(e)=>{
     e.preventDefault();
     if(editedVal){
       fields[editedId] = values;
        setFields(fields);
     }else{
         fields.push(values);
         setFields(fields);
        //  setFields([...fields,values]);
        }
        setValues(ownVal)
    setEditVal(false);
  }  
  
  const editIt=(mu)=>{
    const fetchObj = fields[mu];
  setValues(fetchObj)
  setEditVal(true);
  setEditId(mu);


  const changeIt=(e)=>{
     console.log(e.target.name)
     const { name, value } = e.target;
     const updateValue = {...values, [name]: value};
     setValues(updateValue)
    // console.log(values)
    // values.name=e.target.value;
    // setValues(values);
  }
  

  }
  const deleteIt=(indelkk)=>{
      delete fields[indelkk]
     const m = fields.filter((i)=>i)
      setFields(m); 

  }

    return (
        <div>
        <form onSubmit={SubmitIt}>
        <div>
             <h1>Form Submission</h1>
             <input type='text' name='name' value={ values.name || " "} onChange={changeIt}/><br/>
             <label>Name:</label>

             <label>Age:</label>
             <input type='text' name='age' value={values.age || ""}onChange={changeIt}/><br/>

             <label>Year of birth:</label>
             <input type='text'name='yob' value={values.yob || ""}onChange={changeIt}/><br/>

             <Button variant='primary' type='submit' >{!editedVal ? "Add" : "Update"}</Button>
       </div></form>
    

        <table className='table table-stripped'>
           <tr>
               
               <th>Name</th>
               <th>Age</th>
               <th>YOB</th>
               <th>Edit</th>
               <th>Delete</th>
 </tr>

<>
{
    fields.map((item, index)=>{       
        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.yob}</td>
                <td> <EditIcon onClick={() => editIt(index)}  /></td>
                <td> <DeleteIcon variant='primary' onClick={() => deleteIt(index)} type='button'/></td>
            </tr>
        )
    }
 )
}
</>
 </table>
        </div>
    )
}

export default DynamicForm;
