import { useState, useRef } from "react"

const TodoList = () => {
    const [items, setItems] = useState([])
    const [value, setValue] = useState("")
    const index = useRef();

    const handleClick = (event) => {
        event.preventDefault()
        setItems([...items, value])
        setValue("")
    }

    const handleDelete = (id) => {
        const newList= [...items]
        newList.splice(id, 1)
        setItems(newList)
    }

    const handleReset = (event) => {
        event.preventDefault()
        setItems([])
        setValue("")
    }

    const handleInputChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <>
            <form>
                <input type="text" value={value} onInput={handleInputChange} />
                <button type="submit" onClick={handleClick}>Add to list</button>
                <button type="submit" onClick={handleReset}>Reset list</button>
            </form>
            <ul>
                {items.map((item, index) => { return (<li key={index} index={index}>{item} <button onClick={() => handleDelete(index)}>Delete</button></li>) })}
            </ul>
        </>
    )
}

export default TodoList;