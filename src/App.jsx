import React, { Component } from "react";
import { baza } from "./baza";
import "./App.css";
import { Container, Table } from "./style";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: baza,
      name: "",
      search: "name",
      status: "",
      select: {},
    };
  }
  render() {
    const onSelect = ({ target: { value } }) => {
      this.setState({ search: value });
    };
    const onName = ({ target: { value } }) => {
      this.setState({ name: value });
    };
    const onStatus = ({ target: { value } }) => {
      this.setState({ status: value });
    };
    const onAdd = () => {
      let qiymat = {
        id: this.state.data.length + 1,
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({ data: [...this.state.data, qiymat] });
    };
    const onFilter = ({ target: { value } }) => {
      let narsa = baza.filter((vl) =>
        `${vl[this.state.search]}`
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
      );
      this.setState({ data: narsa });
    };
    const onUpdate = (select) => {
      this.setState({ select });
      console.log({ select });
    };
    const onQiymat = ({ target: { value, name } }) => {
      this.setState((state) => {
        return { select: { ...state.select, [name]: value } };
      });
    };
    const onSave = () => {
      let resa = this.state.data.map((value) =>
        value.id === this.state.select.id ? this.state.select : value
      );
      this.setState({ data: resa, select: null });
    };
    const onDelete = (id) => {
      let onUchirish = this.state.data.filter((val) => val.id !== id);
      this.setState({ data: onUchirish });
    };

    return (
      <div>
        <input type="text" onChange={onName} placeholder="name" />
        <input type="text" onChange={onStatus} placeholder="status" />
        <button onClick={onAdd}>add</button>
        <br />
        <input onChange={onFilter} type="text" placeholder="search" />
        <select onChange={onSelect} name="" id="">
          <option value="name">name</option>
          <option value="id">id</option>
          <option value="status">status</option>
        </select>
        <Container>
          <Table id="products-table" className="table" border={1} width={"80%"}>
            <Table.Thead sticky>
              <Table.TR>
                <Table.TH sticky width={200}>
                  ID
                </Table.TH>
                <Table.TH width={300}>NAME</Table.TH>
                <Table.TH width={300}>STATUS</Table.TH>
                <Table.TH width={300}>EDIT</Table.TH>
                <Table.TH right width={200}>
                  DELETE
                </Table.TH>
              </Table.TR>
            </Table.Thead>
            <Table.Tbody>
              {this.state.data.map((value) => {
                return (
                  <Table.TR key={value.id}>
                    <Table.TD sticky>{value.id}</Table.TD>
                    <Table.TD>
                      {this.state.select?.id == value.id ? (
                        <input
                          defaultValue={this.state.select.name}
                          type="text"
                          name="name"
                          onChange={onQiymat}
                        />
                      ) : (
                        value.name
                      )}{" "}
                    </Table.TD>
                    <Table.TD>
                      {this.state.select?.id == value.id ? (
                        <input
                          defaultValue={this.state.select.status}
                          name="status"
                          type="text"
                          onChange={onQiymat}
                        />
                      ) : (
                        value.status
                      )}{" "}
                    </Table.TD>
                    <Table.TD>
                      {this.state.select?.id == value.id ? (
                        <>
                          <button onClick={onSave}>save</button>
                          <button
                            onClick={() => {
                              this.setState({ select: null });
                            }}
                          >
                            cancel
                          </button>
                        </>
                      ) : (
                        <button onClick={() => onUpdate(value)}>edit</button>
                      )}
                    </Table.TD>
                    <Table.TD right>
                      <button onClick={() => onDelete(value.id)}>delete</button>
                    </Table.TD>
                  </Table.TR>
                );
              })}
            </Table.Tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
