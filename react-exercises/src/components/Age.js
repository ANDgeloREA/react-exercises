import React from "react"

class Age extends React.Component {
    render() {
        return (
            <>
                {this.props.age >= 18 && this.props.age <= 65 && <p>Your age is {this.props.age}!</p>}
                {this.props.age < 18 && <p>You are very young!</p>}
            </>
        )
    }
}
 
Age.defaultProps = {
    age: "17"
}

export default Age;
