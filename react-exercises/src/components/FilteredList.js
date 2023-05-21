import { useMemo } from "react"

function FilteredList() {

    const usersData = [
        {
            id: 1,
            name: "Andrea",
            age: 29
        },
        {
            id: 2,
            name: "Enrica",
            age: 22
        },
        {
            id: 3,
            name: "Leonardo",
            age: 8
        },
        {
            id: 4,
            name: "Stefano",
            age: 27
        },
        {
            id: 5,
            name: "Alice",
            age: 21
        },
        {
            id: 6,
            name: "Paolo",
            age: 16
        },
        {
            id: 7,
            name: "Gabriele",
            age: 17
        },
        {
            id: 8,
            name: "Lisanna",
            age: 18
        }
    ]

    const adults = useMemo(() => usersData.filter(item => item.age >= 18), [usersData])

    return (
        <>
            {
                adults.map(((item) => {
                    return (
                        <>
                            <div>{item.name} {item.age}</div>
                        </>
                    )
                }))
            }
        </>
    )
}

export default FilteredList