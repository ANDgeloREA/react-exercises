import CarDetails from "./CarDetails"

const CarForm = () => {
    let initialData = {
        name: "Fiat",
        model: "500",
        year: "2018",
        color: "Black"
    }

    return (
        <>
            <CarDetails initialData={initialData} />
        </>
    )
}

export default CarForm