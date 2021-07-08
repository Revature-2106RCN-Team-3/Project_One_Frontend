import { Dispatch } from 'react';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { resourceLimits } from 'worker_threads';
import reducers from "../reducers/index";

const store = createStore(
  reducers,
  {}
);

export default store;

//persist data across sessions by using localStorage
const localStorageMiddleware = (store: Store) => {
    return (next: Dispatch<void>) => (action: any) => {
        const result = next(action);
        try {
            const { settings } = store.getState();
            localStorage.setItem('theme', JSON.stringify(settings.theme));
        } catch (e) {
            console.log('Error while saving in localStorage', e);
        }
        return result;
    }
}

const populateStore = () => {
    const storage = localStorage.getItem('theme');
    if(storage && storage !== null) {
        return {
            settings: {
                theme: JSON.parse(storage)
            }
        }
    }
    return undefined;
}