"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var css = require('./styles.css'); // media breakpoint - small screen min width


var smallScreenMin = 480; // default className for NotificationsSystem component

var notificationsSystemClassName = css['notifications-system']; // default className for NotificationsContainer component

var notificationsContainerClassName = {
  main: css['notifications-container'],
  position: function position(_position) {
    return css["notifications-container--".concat(_position)];
  }
}; // default transition for Notification component

var notificationsContainerTransition = {
  enterTimeout: 600,
  leaveTimeout: 600,
  name: {
    enter: css['notification-wrapper-enter'],
    leave: css['notification-wrapper-leave']
  }
}; // default className for Notification component

var notificationClassName = {
  main: css.notification,
  wrapper: css['notification-wrapper'],
  meta: css['notification-meta'],
  title: css['notification-title'],
  message: css['notification-message'],
  // `fa` corresponds to font-awesome's class name
  icon: "fa ".concat(css['notification-icon']),
  imageContainer: css['notification-image-container'],
  image: css['notification-image'],
  status: function status(_status) {
    return css["notification--".concat(_status)];
  },
  dismissible: css['notification--dismissible'],
  buttons: function buttons(count) {
    if (count === 0) {
      return '';
    } else if (count === 1) {
      return css['notification--buttons-1'];
    } else if (count === 2) {
      return css['notification--buttons-2'];
    }

    return css['notification-buttons'];
  },
  closeButtonContainer: css['notification-close-button-container'],
  closeButton: "fa ".concat(css['notification-close-button']),
  button: css['notification-button'],
  buttonText: css['notification-button-text']
};
var _default = {
  smallScreenMin: smallScreenMin,
  notificationsSystem: {
    className: notificationsSystemClassName
  },
  notificationsContainer: {
    className: notificationsContainerClassName,
    transition: notificationsContainerTransition
  },
  notification: {
    className: notificationClassName
  }
};
exports.default = _default;