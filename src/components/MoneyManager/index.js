import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransactonHistory = []

// Write your code here

class MoneyManager extends Component {
  state = {
    historyList: initialTransactonHistory,
    titleInput: '',
    amountInput: '',
    optionInput: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({optionInput: event.target.value})
    // console.log(event.target.value)
  }

  // Add The Transation to the history
  onAddTransation = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionInput} = this.state

    const typeOption = transactionTypeOptions.find(
      eachItem => eachItem.optionId === optionInput,
    )
    const {displayText} = typeOption
    const newtransactionItem = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newtransactionItem],
      titleInput: '',
      amountInput: '',
      // optionInput: transactionTypeOptions[0].optionId,        due to this when we dont change the option it will getting problem.
    }))
  }

  // Delete transation

  deleteTheTransItem = id => {
    const {historyList} = this.state

    const filteredList = historyList.filter(eachItem => eachItem.id !== id)

    this.setState({
      historyList: filteredList,
    })
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expensesAmount = 0

    historyList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachItem.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0

    historyList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    let balanceAmount = 0
    let expensesAmount = 0

    historyList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      } else {
        expensesAmount += eachItem.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {historyList, titleInput, amountInput, optionInput} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    console.log(optionInput)

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="heading-container">
            <h1 className="username">Hi, Richard</h1>
            <p className="welcome-msg">
              Welcome back to your{' '}
              <span className="highlited-text">Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
              balanceAmount={balanceAmount}
            />
          </div>
          <div className="trasaction-items-container">
            <div className="add-transaction-section">
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <form onSubmit={this.onAddTransation}>
                <div className="input-box-container">
                  <label className="label-text" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    className="input-text-box"
                    type="text"
                    id="title"
                    placeholder="TITLE"
                    value={titleInput}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="input-box-container">
                  <label className="label-text" htmlFor="amount">
                    AMOUNT
                  </label>
                  <input
                    className="input-text-box"
                    type="text"
                    id="amount"
                    placeholder="AMOUNT"
                    value={amountInput}
                    onChange={this.onChangeAmount}
                  />
                </div>
                <div className="input-box-container">
                  <label className="label-text" htmlFor="type">
                    TYPE
                  </label>
                  <select
                    className="input-text-box"
                    id="type"
                    onChange={this.onChangeSelectOption}
                  >
                    {transactionTypeOptions.map(eachItem => (
                      <option value={eachItem.optionId} key={eachItem.optionId}>
                        {eachItem.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="transaction-history-sectoin">
              <div className="history">
                <h1 className="history-heading">History</h1>
                <ul className="history-showing-section">
                  <li className="list-item-header">
                    <div className="table-header-names">
                      <p>Title</p>
                    </div>
                    <div className="table-header-names">
                      <p>Amount</p>
                    </div>
                    <div className="table-header-names">
                      <p>Type</p>
                    </div>
                  </li>
                  {historyList.map(eachItem => (
                    <TransactionItem
                      transaction={eachItem}
                      deleteTheTransItem={this.deleteTheTransItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
