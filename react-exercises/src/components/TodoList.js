import { useState } from "react"

const TodoList = () => {
    const [items, setItems] = useState([])
    const [value, setValue] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        setItems([...items, value])
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
            </form>
            <ul>
                {items.map((item, index) => { return (<li key={index}>{item}</li>) })}
            </ul>
        </>
    )
}

export default TodoList;