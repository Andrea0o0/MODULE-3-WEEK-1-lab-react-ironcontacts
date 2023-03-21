import {contactsjson} from '../src/contacts'
import React,{useState} from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {

  const [contacts,setContacts] = useState([...contactsjson].slice(0,5))
  const [selected,setSelected] = useState('')

  const handleRandom = () => {
    let index 
    const randomm = () => {
      index = Math.floor(Math.random()*contactsjson.length)}
    randomm()
    contacts.filter(elem => elem.id !== contactsjson[index].id).length === contacts.length ? setContacts(prev => {
      let newcontacts = [...prev]
      newcontacts.push(contactsjson[index])
      return newcontacts
    }):handleRandom()    
  }

  const handleSort = (e) => {
    e.target.name === 'popularity' ? setContacts(prev => [...prev].sort((a,b) => b.popularity-a.popularity)): e.target.name === 'name' && (setContacts(prev => [...prev].sort((a,b) => a.name.localeCompare(b.name))))
    setSelected(e.target.name)
  }

  const handleDelete = (id) => {
     setContacts(prev => [...prev].filter(elem => elem.id !== id)) 
  }

  return (
    <div className="App">
      <div className='Contacts'>
      <h1>IronContacts</h1>
      <div className='Btns'>
        <button onClick={handleRandom}>Add Random</button>
        <button name='popularity' className={selected === 'popularity' ? 'selected':''} onClick={handleSort}>Sorted by popularity</button>
        <button name='name' className={selected === 'name' ? 'selected':''} onClick={handleSort}>Sort by name</button>
      </div>      
      <div className='Title'>
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
        <h2>Oscar</h2>
        <h2>Emmy</h2>
        <h2>Delete</h2>
      </div>
        {contacts.map (elem => {
        return (
          <Contacts key={elem.id} picture={elem.pictureUrl} name={elem.name} popularity={elem.popularity.toFixed(2).toString()} wonOscar={elem.wonOscar} wonEmmy={elem.wonEmmy} handleDelete={handleDelete} id={elem.id} />
        )
      })}
      </div>      
    </div>
  );
}

export default App;
