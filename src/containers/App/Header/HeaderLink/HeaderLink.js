import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './HeaderLink.css';

export default class HeaderLink extends Component {
  static propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
  };

  render() {
    const { to, onClick, children } = this.props;

    return <Link to={to} className={styles.link} onClick={onClick}>{children}</Link>;
  }
}
