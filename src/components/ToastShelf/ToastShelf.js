import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastList: data, removeFromToastList: onCloseItem, clearToastList } = React.useContext(ToastContext);

  function handleClearToasts(event){
    if (event.key === 'Escape') {
      clearToastList();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleClearToasts);

    return () => {
      document.removeEventListener("keydown", handleClearToasts);
    }
  }, []);

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
