import React, { useState } from 'react'
import PropTypes from 'prop-types'
const styles = {
  pageSection: {
    minWidth: '100%',
    margin: '1rem',
  },
  dropdown: {
    background: 'rgb(240, 242, 249)',
    width: 'fit-content',
    padding: '0.1rem',
    boxShadow: '5px 5px 5px 5px lightblue',
    margin:'0.5rem',
    marginTop:'0rem',
  },
  option: {
    padding: '0.3rem',
  },
  selectedOption: {
    padding: '0.3rem',
    background: 'rgb(116, 200, 255)',
  },
  selector: {
    background: 'transparent',
    borderRadius: '10px',
    padding: '0.5rem',
    borderColor: 'dodgerblue',
    margin:'0.5rem',
  },
  buttons: {
    borderRadius: '10px',
    background: 'black',
    color: 'white',
    border: 'unset',
    padding: '0.5rem',
    margin:'0.5rem',
  },
}

const defaultOptions = [
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' },
  { value: '4', text: 'Option 4' },
  { value: '5', text: 'Option 5' },
  { value: '6', text: 'Option 6' },
]

const Selector = (props) => {
  //Shows the dropdown when the user clicks on Select
  const [showDropdown, setShowDropdown] = useState(false)
  //Options that are selected
  const [selectedItems, setSelectedItems] = useState([])
  //Determines if selector is multi or single
  const [isMulti] = useState(props.isMulti)
  //Options that are part of the Select
  const [selectOptions] = useState(props.selectOptions || defaultOptions)

  //When the option is clicked, this function handles when a new is selected or unselected.
  const setOptionClick = (opt) => {
    const optValue = opt.value
    const optText = opt.text
    const isChecked = selectedItems.some(
      (item) => item.value === optValue && item.text === optText,
    )
    let newSelected = isMulti ? [...selectedItems] : []
    if (isChecked) {
      newSelected = newSelected.filter((obj) => obj.value !== optValue)
    } else {
      newSelected.push(opt)
    }
    if (!isMulti) {
      setShowDropdown(false)
    }

    setSelectedItems(newSelected)
  }

  //Selects all the options
  const selectAll = () => {
    const newSelected = []
    selectOptions.map((item) => {
      newSelected.push(item)
    })
    setSelectedItems(newSelected)
  }
  //Deselects all the options
  const deselectAll = () => {
    setSelectedItems([])
  }

  //When the user clicks outside of the dropdown, it disappears.
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdownOption')) {
      setShowDropdown(false)
    }
  }
  return (
    <div className="select" style={styles.pageSection}>
      <button
        className="dropbtn"
        onClick={() => setShowDropdown(true)}
        style={styles.selector}
      >
        {selectedItems.length > 0
          ? selectedItems.map((item) => {
            return isMulti ? `${item.text}, ` : `${item.text}`
          })
          : 'Select'}
      </button>
      {isMulti && (
        <button
          className="selectAllBtn"
          onClick={() => selectAll()}
          style={styles.buttons}
        >
          Select All
        </button>
      )}
      {isMulti && (
        <button
          className="deselectAllBtn"
          onClick={() => deselectAll()}
          style={styles.buttons}
        >
          Deselect All
        </button>
      )}
      {showDropdown && (
        <div
          className="dropdown-content"
          id="myDropdown"
          style={styles.dropdown}
        >
          {selectOptions.length &&
            selectOptions.map((opt, indx) => {
              const isChecked = selectedItems.some(
                (item) => item.value === opt.value && item.text === opt.text,
              )
              return (
                <div
                  className="dropdownOption"
                  key={indx}
                  onClick={() => setOptionClick(opt)}
                  value={opt.value}
                  style={isChecked ? styles.selectedOption : styles.option}
                >
                  {opt.text}
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
Selector.propTypes = {
  isMulti: PropTypes.bool,
  selectOptions: PropTypes.array,
}
export default Selector