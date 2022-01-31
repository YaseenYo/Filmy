import React from 'react'
import "./style.css";

const MovieStatistics = () => {
    return (
        <React.Fragment>
            <table className = "ui celled table fixed_header">
                <thead style = {{background:"#f9fafb"}}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Rental Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Maaz</td>
                        <td>Friday</td>
                        <td className = "negative">Borrowed</td>
                        <td><button className = "ui mini button primary">Return</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Saba</td>
                        <td>Monday</td>
                        <td className = "positive">Returned</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Muiz</td>
                        <td>Tuesday</td>
                        <td className = "positive">Returned</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Faizan</td>
                        <td>Sunday</td>
                        <td className = "negative">Borrowed</td>
                        <td><button className = "ui mini button primary">Return</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Faizan</td>
                        <td>Sunday</td>
                        <td className = "negative">Borrowed</td>
                        <td><button className = "ui mini button primary">Return</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Faizan</td>
                        <td>Sunday</td>
                        <td className = "negative">Borrowed</td>
                        <td><button className = "ui mini button primary">Return</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Faizan</td>
                        <td>Sunday</td>
                        <td className = "negative">Borrowed</td>
                        <td><button className = "ui mini button primary">Return</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Faizan</td>
                        <td>Sunday</td>
                        <td className = "negative">Borrowed</td>
                        <td><button className = "ui mini button primary">Return</button></td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default MovieStatistics;