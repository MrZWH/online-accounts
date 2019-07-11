import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

class CategorySelect extends React.Component {
  state = {
    selectedCategoryId:
      this.props.selectedCategory && this.props.selectedCategory.id
  }
  selectCategory = (event, category) => {
    this.setState({ selectedCategoryId: category.id })
    this.props.onSelectCategory(category)
    event.preventDefult()
  }

  render() {
    const { categories } = this.props
    const { selectedCategoryId } = this.state
    return (
      <div className="category-select-component">
        <div className="row">
          {categories.map((category, index) => {
            const activeClassName =
              selectedCategoryId === category.id
                ? 'category-item col-3 actice'
                : 'category-item col-3'
            return (
              <div
                onClick={evevt => {
                  this.selectCategory(evevt, category)
                }}
                className={activeClassName}
                key={index}
              >
                <Ionicon
                  className="rounded-circle"
                  fontSize="50px"
                  color="#555"
                  icon={category.iconName}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CategorySelect
