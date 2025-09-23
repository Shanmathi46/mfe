import {mount} from 'auth/AuthApp';
import React ,{useRef, useEffect}from 'react';
import { useHistory } from 'react-router-dom';

export default ({onSignIn})=>{
  console.log('AuthApp loaded');
  const ref=useRef(null);
  const history=useHistory();

  useEffect(()=>{
    const {onParentNavigate}=mount(ref.current,{
      initialPathname:history.location.pathname,
      onSignIn,
      onNavigate:({pathname: nextPathname})=>{
        const {pathname}=history.location;
        if(pathname!==nextPathname){
          history.push(nextPathname);
        }
      }
    });
    history.listen(onParentNavigate)
  },[])

  return <div ref={ref}></div>
}