import React, {Component} from 'react';


export class AddData extends Component {
    constructor(props) {
        super(props);
        this.clickSubmit = this.clickSubmit.bind(this)
        
        this.state = {  }
    }
    clickSubmit(e){
        console.log(e.target.value);
         var guid = document.getElementById('guid').value
         var author = document.getElementById('author').value
         var title = document.getElementById('title').value
        this.props.submitVal({guid, author, title})
    }
    render() { 
        return (
            <div>
                <div>
                GUID:
                <input type="text" id="guid" ref={(input) => { this.textInput = input; }} />
                <br />
                TITLE
                <input type="text" name="lastname" id="author"/>
                <br />
                DESCR
                <input type="text" name="lastname" id="title"/>
                <br />
                <input type="button" value="Submit" onClick={this.clickSubmit}/>
                </div>
            </div>);
                {/*   */}
                {/* <div>
                    <span>val1</span>
                    <input type='text' />
                </div>
                <div>
                    <span>val2</span>
                    <input type='text' />
                </div>
                <div>
                    <span>val3</span>
                    <input type='text' />
                </div>
                <button type="button" onClick={submitData}>Submit</button> */}
    }
}
 
export default AddData;