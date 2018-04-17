import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
        }
    }
}

ShelfOptions.initEnum(['currentlyReading', 'wantToRead', 'read', 'none']);

//
// export const SHELFOPTIONS = Enum(
//     'CURRENTLY_READING', 'WANT_TO_READ', 'READ', 'NONE'
// )


class ShelfPicker extends Component {
    debugger;
    render() {
        return (
        <select defaultValue={this.props.selectedOption.name}>
            <option value="none" disabled>Move to...</option>
            {
                ShelfOptions.enumValues.map((option) => {
                    return (
                        <option value={option.name}>{option.titleValue()}</option>
                    )
                })
            }
        </select>
        )
    }
}

export default ShelfPicker
