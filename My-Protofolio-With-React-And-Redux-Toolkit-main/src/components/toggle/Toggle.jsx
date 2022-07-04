import './toggle.scss'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheam } from '../../store/reducers/theam'

export default function Toggle () {
  const theamState = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className='t' onClick={() => dispatch(toggleTheam())}>
      <img src={Sun} alt='' className='t-icon' />
      <img src={Moon} alt='' className='t-icon' />
      <div
        className='t-button'
        style={{ left: theamState.value ? 0 : '27px' }}
      ></div>
    </div>
  )
}
