import React from 'react'
import styles from './Slider.scss'
import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

const createSliderWithTooltip = RCSlider.createSliderWithTooltip
const Range = createSliderWithTooltip(RCSlider.Range)

const Slider = ({
  field,
  form,
  ...props
}) => {
  const handleChange = value => {
    form.setFieldValue(field.name, value)
  }

  return (
    <div className={styles.component}>
      <Range
        defaultValue={field.value}
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}

export default Slider
