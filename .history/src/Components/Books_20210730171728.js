export const Books = (props) => {
  const { items = [], addOrder } = props;

  return (
    <div className="books">
      {items.map(item => (
        <Book key={item.id} {...item} addOrder={addOrder} />
      ))}
    </div>
  )
}

const Book = (props) => {
  const {id, title, price, addOrder} = props;

  return (
  
    <div className="book">
      <h2>{title}</h2>
      <span>{price}</span>
      <button onClick={addOrder(id)}>Buy</button>
    </div>
  
  )
}