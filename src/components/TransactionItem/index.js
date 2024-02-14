// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTheTransItem} = props
  const {title, amount, type, id} = transaction

  const onDeleteTransItem = () => {
    deleteTheTransItem(id)
  }

  return (
    <li className="list-items">
      <div className="table-header-names">
        <p>{title}</p>
      </div>
      <div className="table-header-names">
        <p>Rs {amount}</p>
      </div>
      <div className="table-header-names">
        <p>{type}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDeleteTransItem}
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
