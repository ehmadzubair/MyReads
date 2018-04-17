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
    debugger;
    render() {
        return (
        <select defaultValue={this.props.selectedOption && this.props.selectedOption.name}>
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
