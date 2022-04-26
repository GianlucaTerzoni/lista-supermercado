import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

//mostrar un formulario para agregar items a la lista
//se debe poder eliminar cada item de la lista

function App() {
    const[items, setItems] = useState([])
    const[input, setInput] = useState('')

    //agregar Items

    const handleSubmit = (event) => {
      event.preventDefault()
      const addItem = {
        id: Math.floor(Math.random() * 1000),
        text: input,
        completed: false
      }

      setItems([...items, addItem])
      setInput('')
    }

    //eliminar items 

    const deleteItem = (id) => {
      let filteredItems=[...items].filter((items) => items.id !== id)
      setItems(filteredItems)
      console.log('item deleted')
    }

    //tachar item

    const toggleComplete = (id) => {
      setItems(
        items.map(item => (
          item.id === id ? {...item, completed: !item.completed} : item
        ))
      )
    }



  return (
    <div className="app">  
        <div className="title">
          <h1>Supermarket List</h1>
          <p className="length">{(items < 1) ? 'Item(s)' : `Items: ${items.length}`}</p> 
        </div>
        <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <input 
                value={input}
                onChange={event => setInput(event.target.value)}
                placeholder=''
                type='text'
                
                />
                <div className="button">
                <button type="submit" className="btn btn-primary">Add Item</button>
              </div> 
              </div>
                
              
            </form>
          <div>
            {items.map(item =>(
              <div className={`item-row ${item.completed ? 'completed' : '' }`} key={item.id} onDoubleClick={() => toggleComplete(item.id)}>
                <p>{item.text}</p>
              <AiOutlineClose onClick={() => deleteItem(item.id)} className="icon" />
              </div>
            ))}
          </div>

               
        </div>
      </div>
 
       
  );
}




export default App;
