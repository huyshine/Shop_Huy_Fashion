
import './App.css'
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slides/counterSlide'
import styled from 'styled-components'
function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

  return (
    <div>
    <div>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  )
}

export default App
