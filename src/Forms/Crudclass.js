import React, { Component } from "react";
import ViewForm from "./ViewForm";
import { Button } from "react-bootstrap";

export class Crudclass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValues: {
        name: "",
        age: "",
        yob: "",
      },
      totalFields: [],
      id: null,
    };
  }

  submitFn = (e) => {
    e.preventDefault();
    const { totalFields, fieldValues, id } = this.state;
    if (id) {
      totalFields[id] = fieldValues;
    } else {
      totalFields.push(fieldValues);
    }
    this.setState({ totalFields, id: null, fieldValues: { name: "", age: "", yob: ""} });
  };

  onChangeVal = (e) => {
    //   const { fieldValues } = this.state
    const { name, value } = e.target;
    this.setState({
      fieldValues: { ...this.state.fieldValues, [name]: value },
    });
  };

  updateFnc = ({  varOption, id }) => {
    let { totalFields } = this.state;
    if (varOption === "edit") {
      const fetchObj = totalFields[id];
      this.setState({ fieldValues: fetchObj, id });
    } else {
      delete totalFields[id];
      totalFields = totalFields.filter((i) => i);
      this.setState({ totalFields });
    }
  };

  render() {
    const { fieldValues, totalFields, id } = this.state;

    return (
      <div>
        <form onSubmit={this.submitFn}>
          <div>
            <h1>Form Submission</h1>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={fieldValues.name || " "}
              onChange={(e) => this.onChangeVal(e)}
            />
            <br />

            <label>Age:</label>
            <input
              type="text"
              name="age"
              value={fieldValues.age || ""}
              onChange={(e) => this.onChangeVal(e)}
            />
            <br />

            <label>Year of birth:</label>
            <input
              type="text"
              name="yob"
              value={fieldValues.yob || ""}
              onChange={(e) => this.onChangeVal(e)}
            />
            <br />

            <Button variant="primary" type="submit">
              {id ? "Update" : "Add"}
            </Button>
          </div>
        </form>
        <ViewForm
          totalFields={totalFields}
          updateFnc={({id, varOption}) => this.updateFnc({ id, varOption })}
        />
      </div>
    );
  }
}

export default Crudclass;
