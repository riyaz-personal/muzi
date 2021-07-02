import React, { Component } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export class ViewForm extends Component {
    
    render() {
        const { totalFields, updateFnc } = this.props;
        return (
            <div>
                

        <table className="table table-stripped">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>YOB</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          <>
            {totalFields.map((item, index) => {
                const id = index;

              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.yob}</td>
                  <td>
                    {" "}
                    <EditIcon onClick={() => updateFnc({id, varOption: "edit"})} />
                  </td>
                  <td>
                    {" "}
                    <DeleteIcon
                      variant="primary"
                      onClick={() => updateFnc({id, varOption: "delete"})}
                      type="button"
                    />
                  </td>
                </tr>
              );
            })}
          </>
        </table>
            </div>
        )
    }
}

export default ViewForm
