import React from 'react';
import PropTypes from 'prop-types';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

class TabList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      tabNames,
      onSetActive
    } = this.props;

    const defaultActiveTab = tabNames[0];
    onSetActive(defaultActiveTab);
  }

  render() {
    const {
      classes,
      tabNames,
      onTabClick,
      activeItem,
      onSetActive,
    } = this.props;
    const {list, item, link} = classes;

    return (
      <ul className={list}>
        {
          tabNames.map((tabName, index) =>
            (<li
              key={index}
              className={`${item}${activeItem === tabName
                ? ` ${item}--active`
                : ``}`}>
              <a
                className={link}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabClick(tabName);
                  onSetActive(tabName);
                }}
              >
                {tabName}
              </a>
            </li>))
        }
      </ul>
    );
  }
}

TabList.propTypes = {
  classes: PropTypes.shape({
    list: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  onSetActive: PropTypes.func.isRequired,
};

export default withActiveItem(TabList);
