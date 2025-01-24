import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastList, setToastList] = React.useState([]);

  const addToToastList = React.useCallback((message, variant) => {
    const newId = crypto.randomUUID();
    const newToastList = [...toastList, { id: newId, message, variant }];
    setToastList(newToastList);
  }, [toastList]);

  const removeFromToastList = React.useCallback(itemId => {
    const newToastList = [...toastList.filter(({ id }) => id !== itemId)];
    setToastList(newToastList);
  }, [toastList]);

  const handleEscape = React.useCallback(() => { setToastList([]) }, []);

  useEscapeKey(handleEscape);

  return <ToastContext.Provider value={{ toastList, addToToastList, removeFromToastList }}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
