import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastList: data, removeFromToastList: onCloseItem } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {data.map(({ id, message, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} onClose={() => onCloseItem(id)}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
