export const Books = (props) => {
  const {items = []} = props;

  return (
    <div className="books">
      {items.map(book) => (
        <Book key={book.id} {...book} />
      )}
    </div>
  )
}