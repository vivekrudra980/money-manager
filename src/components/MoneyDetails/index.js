import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <div className="mid-section">
      <div className="card-container parrot">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="text-container">
          <p className="text">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="card-container sky">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="text-container">
          <p className="text">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="card-container purple">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="text-container">
          <p className="text">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
