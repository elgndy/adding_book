import React ,{Component} from 'react';
import ThemeContextProvider, {ThemeContext} from './testcontext/context'
import Nav from './testcomponent/navbar';
import Details from './testcomponent/testbookdetails';
import Form from './testcomponent/testbookform';
class TestAppp extends Component{
    render(){
        return(
            <div className='App'>
                <ThemeContextProvider>
                    <Nav />
                    <Details />
                    <Form />
                </ThemeContextProvider>
            </div>
        )
    }
}

export default TestAppp