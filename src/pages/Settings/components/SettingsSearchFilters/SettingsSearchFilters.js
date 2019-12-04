import React from 'react'
import styles from './SettingsSearchFilters.scss'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const SettingsSearchFilters = () => {
  const createSliderWithTooltip = Slider.createSliderWithTooltip
  const Range = createSliderWithTooltip(Slider.Range)

  const handleAfterOnChange = value => {
    // eslint-disable-next-line no-console
    console.log(value)
  }

  return (
    <div className={styles.component}>
      <Range
        min={18}
        max={99}
        defaultValue={[18, 25]}
        tipFormatter={value => `${value}`}
        onAfterChange={value => handleAfterOnChange(value)}
        trackStyle={[{
          backgroundColor: '#63D397'
        }]}
        handleStyle={[{
          backgroundColor: '#63D397',
          border: '0',
          boxShadow: 'none'
        }]}
      />
    </div>
  )
}

export default SettingsSearchFilters
