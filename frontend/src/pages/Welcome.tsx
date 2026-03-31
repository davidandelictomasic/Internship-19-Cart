import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cartLogo from '../assets/welcome_animation/cart logo.png'
import brandName from '../assets/welcome_animation/brand name.png'
import styles from './Welcome.module.css'

function Welcome() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => navigate('/home'), 4000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [navigate])

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img
          src={cartLogo}
          alt="Cart logo"
          className={`${styles.cartLogo} ${step >= 1 ? styles.cartLogoVisible : ''}`}
        />
        <img
          src={brandName}
          alt="CART"
          className={`${styles.brandName} ${step >= 2 ? styles.brandNameVisible : ''}`}
        />
      </div>
    </div>
  )
}

export default Welcome
