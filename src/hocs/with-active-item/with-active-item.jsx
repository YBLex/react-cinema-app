import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: ``,
      };

      this._setActive = this._setActive.bind(this);
    }

    _setActive(item) {
      this.setState({
        activeItem: item,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onSetActive={this._setActive}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
