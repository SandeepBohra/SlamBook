import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import _        from 'lodash';


export class MovieComponent extends React.Component{
    render(){
        var movies = _.map(this.props.list, (movie, i) =>{
            return (
                    <tr>
                        <td>{movie.guid}}</td>
                        <td>{movie.author}</td>
                        <td>{movie.title}</td>
                    </tr>)
                    
                    // {/* <ul>{i+1}
                    // <li>{movie.guid}</li> 
                    // <li>{movie.author}</li>
                    // </ul> */});
        })
        return (
           <div>
                <table >
                    <tr><th>1----1</th><th>2--2</th><th>3---3</th></tr>
                    {movies}
                </table>
           </div>
        );
    }
}