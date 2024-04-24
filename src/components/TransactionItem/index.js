import './index.css'

const TransactionItem = props => {
  const {details, onDeleteTransaction} = props
  const {id, title, amount, type} = details

  const deleteTransaction = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="table-row">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <div className="delete-container">
        <button type="button" onClick={deleteTransaction} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
