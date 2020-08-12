import React from 'react';
import { connect } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

class Counter extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          incrementAmount : 2,
      }
      this.setIncrementAmount = this.setIncrementAmount.bind(this);
  }
    
  setIncrementAmount(v) {
      this.setState((prevState)=>({
         incrementAmount: prevState.incrementAmount+2,
      }));
  }
    
  render() {
      const {count,onDecrement,onIncrement,onIncrementAmout,onIncrementAsync} = this.props;
      const {incrementAmount} = this.state;
      return (
            <div>
              <div className={styles.row}>
                <button
                  className={styles.button}
                  aria-label="Increment value"
                  onClick={()=>onIncrement()}
                >
                  +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                  className={styles.button}
                  aria-label="Decrement value"
                  onClick={()=>onDecrement()}
                >
                  -
                </button>
              </div>
              <div className={styles.row}>
                <input
                  className={styles.textbox}
                  aria-label="Set increment amount"
                  value={incrementAmount}
                  onChange={e => this.setIncrementAmount(e.target.value)}
                />
                <button
                  className={styles.button}
                  onClick={()=>onIncrementAmout(incrementAmount)}
                >
                  Add Amount
                </button>
                <button
                  className={styles.asyncButton}
                  onClick={()=>onIncrementAsync(incrementAmount)}
                >
                  Add Async
                </button>
              </div>
            </div>
          );
  }
  
}

const mapStateToProps = state => ({
  count: selectCount(state),
});

// mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
// dispatch 를 파라미터로 받아옵니다.
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
  onIncrementAmout: diff => dispatch(incrementByAmount(Number(diff) || 0)),
  onIncrementAsync: diff => dispatch(incrementAsync(Number(diff) || 0))
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);