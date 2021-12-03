import { applyMiddleware, createStore } from 'redux';
import getAllReducers from '../store/index';
import { apiHandler } from '../store/Middleware/apiHandler';

/**
 * Apply all Middleware presents in the site
 * 
 */
const getAllMiddleWare = () => {
    return applyMiddleware(apiHandler)
}

/**
 * Get our newly created store for redux injection!
 * Later add devTool extensions here
 * */
export const getStore = () => createStore(getAllReducers(), getAllMiddleWare())


export default getStore;