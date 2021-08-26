import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import MyRouts from './routers/routes';
import VideoJS from './components/VideoJS';

function App() {

  const [options, setOptions] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {

    const fetchItems = async () =>{
      const apiName = 'tahuapi';
      const path = '/items';
      const myInit = {
        headers: {},
      };

      const res = await API.get(apiName, path, myInit);      
      setApiData(res);
    }

    fetchItems();
  }, []);

  useEffect(() => {

    const getItemById = async (id) => {
      const apiName = 'tahuapi';
      const path = '/item/' + id;
      const myInit = {
        headers: {},
      };

      const res = await API.get(apiName, path, myInit);
      console.log("Get Item By Id: ", res);
    }

    const fetchOptions = () =>{
      console.log("apiData: ", apiData);

      const res = apiData.map(item => {
        const x = {
          autoplay: true,
          controls: true,
          responsive: false,
          fluid: false,
          sources: [{
            src: item.previewUrl,
            type: item.previewContentType
          }],
          isVideo: item.previewContentType.includes('video') ? true: false ,
          url: item.previewUrl,
          id: item.id
        }
        return x;
      })
      

      console.log("option list: ", res);
      setOptions(res);
    }

    fetchOptions();

    if(apiData.length > 0) {
      getItemById(apiData[0].id);
    }
    
  }, [apiData]);

  
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       test image and video
    //     </p>
    //     <div style={{display: 'flex', gap: '20px', flexDirection: 'column'}}>
    //       {options.length>0 && options.map((ops, index) => (            
    //         <div>
    //           {ops.isVideo && <VideoJS options={ops} />}
    //           {!ops.isVideo && <img src={ops.url} /> }
    //         </div>
    //          //? (<VideoJS options={ops} />): (<img src={ops.url} />)            
    //       ))}
 
    //       {options.length === 0 && (
    //         <div>
    //           Loading
    //         </div>
    //       )}
    //     </div>
       
    //   </header>
    // </div>
    <MyRouts />
  );
}

export default App;
