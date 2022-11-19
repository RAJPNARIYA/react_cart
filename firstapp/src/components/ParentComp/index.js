const ParentComp = ({children}) => {
    console.log({children})
    return (
       <div>
         <p>Parent</p>
        {children}
       </div>
    )
}

export default ParentComp