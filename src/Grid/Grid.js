import React from 'react';
import { createBlock } from '../component';

class Grid extends React.Component {
    static blockTag = 'div';
    static blockName = 'grid';
    static blockMods = [
        'column',
        'indent',
        'direction',
        'align',
        'valign',
        'divider',
        'wrap',
    ];

    render() {
        return (
            React.createElement(
                this.getTagName(),
                this.getProps(),
                this.props.children,
            )
        );
    }
}

export default createBlock(Grid);
