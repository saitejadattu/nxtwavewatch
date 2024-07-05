import AppContext from '../../context/AppContext'
import './index.css'
import {} from './styledComponents'

const FailureView = props => {
  const {getRetry} = props
  const onClickRetry = () => {
    getRetry()
  }
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        const imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <div
            className={
              isDark
                ? 'active-failure-view-container'
                : 'inactive-failure-view-container'
            }
          >
            <img className="failure-image" src={imgUrl} alt="failure view" />
            <h1
              className={
                isDark ? 'active-failure-heading' : 'inactive-failure-heading'
              }
            >
              Oops! Something Went Wrong
            </h1>
            <p
              className={
                isDark ? 'active-failure-para' : 'inactive-failure-para'
              }
            >
              We are having some trouble to complete your Request. <br />
              Please try again.
            </p>
            <button
              type="button"
              className={isDark ? 'active-button' : 'inactive-button'}
              onClick={onClickRetry}
            >
              Retry
            </button>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
export default FailureView
