export const Books = (props) => {
  const {items = []} = props;

  return (
    <div className="books">
      {items.map(item => (
        <Book key={item.id} {...item} />
      ))}
    </div>
  )
}

const Book = (props) => {
  const {id, title, price} = props;

  return (
  
    <div className="book">
      <h2>{title}</h2>
      <span>{price}</span>
      <button>Buy</button>
    </div>
  
  )
}