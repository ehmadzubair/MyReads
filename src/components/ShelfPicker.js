import React, {Component} from 'react'
import {Enum} from 'enumify'

export class ShelfOptions extends Enum {
    titleValue() {
        switch (this) {
            case ShelfOptions.currentlyReading:
                return 'Currently Reading'
            case ShelfOptions.wantToRead:
                return 'Want to Read'
            case ShelfOptions.read:
                return 'Read'
            case ShelfOptions.none:
                return 'None'
            default:
                return 'None'
        }
    }
}

ShelfOptions.initEnum(['currentlyReading', 'wantToRead', 'read', 'none']);

class ShelfPicker extends Component {

    constructor(props) {
        super(props)
        this.onSelectionChanged = (event) => {
            this.props.onShelfChanged(event.target.value)
        }
    }

    onSelectionChanged(event) {
        this.props.onShelfChanged(event.target.value)
    }

    render() {
        return (
        <select defaultValue={this.props.selectedOption && this.props.selectedOption.name} onChange={(event) => {this.onSelectionChanged(event)}}>
            <option value="disabled_none" disabled>Move to...</option>
            {
                ShelfOptions.enumValues.map((option) => {
                    return (
                        <option key={option.name} value={option.name}>{option.titleValue()}</option>
                    )
                })
            }
        </select>
        )
    }
}

export default ShelfPicker
