import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Button from 'react-bootstrap/Button';
import View from "./View";

const getData = () => {
    const data = localStorage.getItem('users')
    { console.log(data) }
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }

}

const Home = () => {
    const [users, setUsers] = useState(getData())
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const[editItem,setEdititem]=useState(null)
    const[toggleEdit,setToggleEdit]=useState(true)



    const handelSubmit = (e) => {
        e.preventDefault();
        let user = {
            id,
            name,
            age
        }
        setUsers([...users, user])
        console.log(users)
        setName("")
        setAge("")
        setId("")

        if(user && !toggleEdit){
            setUsers(users.map((elem)=>{
                if(elem.id===editItem){
                    return{ ...elem,name:name,age:age}
                }
                return elem;
            }))
            setToggleEdit(true)
            setName(" ")
            setAge(" ");
            setEdititem(null)


        }
    }
    const EditUser=(id)=>{
        var newEditUser=users.find((elem)=>{
            return elem.id===id
        })
        console.log(newEditUser)
        setId(newEditUser.id)
        setName(newEditUser.name)
        setAge(newEditUser.age)

        setToggleEdit(false)
        setName(newEditUser.name)
        setAge(newEditUser.age)
        setEdititem(id)
        
    }


    const DeleteUser=(id)=>{
        const filterDelete = users.filter((element, index) => {
            return element.id !== id
          })
          setUsers(filterDelete)

    }
    


    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))

    }, [users])




    return (
        <Filter>
            <div>
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="col-xs-1">
                        <form onSubmit={handelSubmit}>
                            <input type={"text"} placeholder="id" name="id" value={id} onChange={(e) => setId(e.target.value)} style={{display:"block"}}/>
                            <input type={"text"} placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}style={{display:"block"}} />
                            <input type={"number"} placeholder="Age" name="age" value={age} onChange={(e) => setAge(e.target.value)} style={{display:"block"}} />
                            {toggleEdit ? <button style={{ display:"block",width: "177px" }}>Submit</button> : <button style={{ display:"block",width: "177px" }}>Edit</button>}
                        </form>
                    </div>

                    <div className="col-xs-1">

                      {users.length > 0 && <>
                      <table style={{marginTop: "34px"}}>
                        <thead>
                            <tr style={{border: "1px solid black"}}>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <View users={users} DeleteUser={DeleteUser} EditUser={EditUser}  />
                      </table>
                      </>}

                    </div>

                </div>
            </div>


        </Filter>


    )
}
export default Home;



{/* <div> */ }
{/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th> Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                  
                                    <tr key={item.id}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                           <Button variant="light">View</Button>
                                           <Button variant="light">Edit</Button>
                                           <Button variant="light">Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                        
                    </tbody>
                </Table>
            </div> */}