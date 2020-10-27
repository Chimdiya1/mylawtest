import React from 'react';
import Logo from '../../assets/avatar.jpg';
import './table.scss'

const Table = ({lawyers}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Lawyer</th>
                    <th>Requests</th>
                </tr>
            </thead>
            <tbody>
                {
                    lawyers.map(({name,requests}) => (
                        <tr key={name} >
                            <td><img src={Logo} alt="avatar" className="avatar" />{name}</td>
                            <td>{requests}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    );
}
 
export default Table;