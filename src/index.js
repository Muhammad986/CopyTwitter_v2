import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


const elem = (
    <div>

    </div>
)

const Header = () => {
    return <h1>Hello World!</h1>
}
const Field =() => {
    const holder = "Enter here"
    const styledField = {
        width: '300px'
    }
    return <input 
        type="text" 
        style={styledField}
        placeholder={holder}/>
}
const Btn = () => {
    const text = "Log in"
    const logged = false
    return <button>{logged ? null : text}</button>
}

const App = () => {
    return(
        <div>
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}


ReactDOM.render(
  <App/>
/*   <React.StrictMode>
    <App />
  </React.StrictMode> */,
  document.getElementById('root')
);
