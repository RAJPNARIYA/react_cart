const ChildComp = ({name, age, ...rest}) => {
    console.log(rest)
     return (
        <p>{name}</p>
    )
}

export default ChildComp