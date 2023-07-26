import { useState } from 'react'
import Logo from './components/Logo'
import PackingList from './components/PackingList';
import Form from './components/Form';
import Stats from './components/Stats'



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {

  const [items, setItems] = useState(initialItems)

  const handleAddItems = (item) =>{
    setItems([
      ...items,
      item
    ])
  }
  const handleDeleteItem = (id) => {
    setItems(item => items.filter(item => item.id !==id));
  }

  const handleToggleItem = (id) => {
    console.log(id)
    setItems((setItems) => items.map((item)=> item.id === id ? {
      ...items,
      packed: item.packed
    } : item ))
    // setCount((count) => count + 1)
    // setCount(count +1)
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList initialItems={initialItems} 
      items={items}
        onDeleteItems={handleDeleteItem}
        onToggle={handleToggleItem}
      />
      <Stats items={items}/>
    </div>
  )
}


export default App;
