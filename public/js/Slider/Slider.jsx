import React, { Component, PropTypes } from 'react';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeImageIndex: 0
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.renderNavButton = this.renderNavButton.bind(this);
    }

    handleButtonClick(direction) {
        const { imgs } = this.props.slider;

        if (direction === 'left') {
            if (this.state.activeImageIndex === 0) {
                this.setState({
                    activeImageIndex: imgs.length - 1
                });
            } else {
                this.setState({
                    activeImageIndex: this.state.activeImageIndex - 1
                });
            }
        }
        else if (direction === 'right') {
            if (this.state.activeImageIndex === imgs.length - 1) {
                this.setState({
                    activeImageIndex: 0
                });
            } else {
                this.setState({
                    activeImageIndex: this.state.activeImageIndex + 1
                });
            }
        }
    }

    renderNavButton(direction) {
        if (this.props.slider.imgs.length > 1) {
            return (
                <div className="slider-btn">
                    <span
                        onClick={() => this.handleButtonClick(direction)}
                        className={`glyphicon glyphicon-chevron-${direction}`}
                        aria-hidden="true">
                    </span>
                </div>
            );
        }

        return null;
    }

    render() {
        const { activeImageIndex } = this.state;

        const {
            label,
            slider
        } = this.props;
        return(
            <div className="slider-container">
                <h2>{label}</h2>
                <div className="slider">
                    {this.renderNavButton('left')}
                    <div className="slide-container">
                        <img className="slide" src={slider.baseUrl + slider.imgs[activeImageIndex]} />
                        {slider.captions ?
                            <div className="caption">
                                {slider.captions[activeImageIndex]}
                            </div>
                            :
                            null
                        }
                    </div>
                    {this.renderNavButton('right')}
                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    label: PropTypes.string.isRequired,
    slider: PropTypes.object.isRequired
};
