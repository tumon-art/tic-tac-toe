export const Square = ({onClick,val}) => {
  return (
   <div className="blk" 
    onClick={onClick}>

    {val}

   </div>
  )
}