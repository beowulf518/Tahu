

import * as TYPES from './types'
// import * as psychicAPI from 'services/api-psychic'
import { API } from 'aws-amplify';

const getProducts = (search = '', page = 0, refresh = false) => async (dispatch, getState) => {
    try {
        const { product: { results = [] } } = getState();
        if (!refresh && results.length !== 0) {
            return
        }

        // const response = await psychicAPI.getPsychic(params)
        
        const apiName = 'tahuapi';
        let path='/items';
        if(search !== ''){
            path = path+'?q='+search + '&&';
        }
        if(page !== ''){
            path = path+'?page='+page;
        }
    
        const myInit = {
            headers: {},
        };

        const apiRes = await API.get(apiName, path, myInit);
        console.log('apiRes: ', apiRes);   
        const res = apiRes['items'].map(item => {
            const x = {
                autoplay: true,
                controls: true,
                responsive: true,
                fluid: false,
                height: '150px',
                sources: [{
                    src: item.previewUrl,
                    type: item.previewContentType
                }],
                isVideo: item.previewContentType.includes('video') ? true: false ,
                url: item.previewUrl,
                id: item.id,
                title: item.title,
                description: item.descripttion,

            }
            return x;
        })

        await dispatch({
            type: TYPES.FETCH_PRODUCTS,
            payload: res
        });

        await dispatch({
            type: TYPES.FETCH_PAGES,
            payload: apiRes['pages']
        })
    } catch (error) {
        console.log('[getProducts] error => ', error);
    }
};

export default getProducts;
