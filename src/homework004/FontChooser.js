class FontChooser extends React.Component {

    constructor(props) {
        super(props);
        
        var min = Number(this.props.min);
        var max = Number(this.props.max);
        var size = Number(this.props.size);

        if ( min > max ) {
            min = max;
            max = this.props.min;
        }
        if ( min < 1 ) min = 1;
        if ( min > size) {
            size = min;
        } else if ( max < size) {
            size = max;
        }

        this.state = { 
                hidden: true,
                bolded: this.props.bold=='true',
                min: min,
                max: max,
                size: size,
                defaultSize: size
            };
    }
    
    clickHandler() {
        this.setState({hidden: !this.state.hidden});
    }

    checkHandler() {
        this.setState({bolded: !this.state.bolded});
    }

    incrementSize() {
        var size = Number(this.state.size);
        if (size < this.state.max) size += 1;
        this.setState({size: size});
    }

    decrementSize() {
        var size = Number(this.state.size);
        if (size > this.state.min) size -= 1;
        this.setState({size: size});
    }

    dblclickHandler() {
        this.setState({ size: this.state.defaultSize });
    }

    render() {
        var check = this.state.bolded;
        var bold = check ? 'bold' : 'normal';
        var size = Number(this.state.size);
        var colour = 
            (Number(this.state.min)==size || Number(this.state.max)==size)
            ? 'red' : 'black';
        var hide = this.state.hidden;

        return(
            <div>
            <input 
                    type="checkbox" 
                    id="boldCheckbox" 
                    hidden={hide}
                    checked={check}
                    onChange={this.checkHandler.bind(this)}
                />
            <button 
                    id="decreaseButton" 
                    hidden={hide}
                    onClick={this.decrementSize.bind(this)}
                >-</button>
            <span 
                    id="fontSizeSpan" 
                    style={{color: colour}}
                    hidden={hide}
                    onDoubleClick={this.dblclickHandler.bind(this)}
                >
                    {size}
                </span>
            <button 
                    id="increaseButton" 
                    hidden={hide}
                    onClick={this.incrementSize.bind(this)}
                >+</button>
            <span 
                    id="textSpan" 
                    style={{fontWeight: bold, fontSize: size}}
                    onClick={this.clickHandler.bind(this)}
                >
                    {this.props.text}
                </span>
            </div>
        );
    }
}

