// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount, balanceAmount} = props
  return (
    <ul className="money-details-section">
      <li className="money-detail-item your-balance">
        <div>
          <img
            className="money-details-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div className="money-value-container">
          <p className="money-detail">Your Balance</p>
          <p className="money-value" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="money-detail-item your-income">
        <div>
          <img
            className="money-details-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div className="money-value-container">
          <p className="money-detail">Your Income</p>
          <p className="money-value" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="money-detail-item your-expenses">
        <div>
          <img
            className="money-details-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div className="money-value-container">
          <p className="money-detail">Your expenses</p>
          <p className="money-value" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
