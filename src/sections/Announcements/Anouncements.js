import React, { useState, useEffect } from 'react'
import './Anouncements.css'
import imgCity from '../../Assets/city0.jpg'

function Anouncements() {


    const [anouncements, setAnouncements] = useState([])

    useEffect(() => {
        fetch('https://rapidtracking.000webhostapp.com/react-file.php')
            // fetch('http://localhost/php_program/react-file.php')
            .then(Response => Response.json())
            .then(json => setAnouncements(json))

    }, [])






    return (
        <div id='anouncements' className='anouncements'>
            <img src={imgCity} className='imagebg' alt="" />
            <div id='aouncementCover' className='imgCover'></div>
            <div>.
                <div style={{
                    top: '50%',
                    left: '50%',
                    borderRadius: '1.4em',
                    transform: 'translate(-50%,-50%)',
                    position: 'absolute',
                    background: 'balck',
                    height: '70vh',
                    width: '71.5vw',
                    overflowY: 'auto'
                }}>
                    <table style={{
                        borderCollapse: 'collapse',
                        borderRadius: '1.3em',
                        overflow: 'hidden',
                        textAlign: 'center',
                        position: 'absolute',
                        height: '70vh',
                        width: '70vw',
                        color: '#1A1B18'
                    }}
                        className="table table-light container table-bordered table-hover" data-aos="zoom-in" data-aos-duration="1000" >
                        <thead >
                            <tr style={{ fontSize: '1.7rem' }} >
                                <th style={{ width: '7rem' }} scope="col">Date</th>
                                <th style={{ width: '10rem' }} scope="col">Title</th>
                                <th scope="col">Anouncements </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                anouncements.map((anouncement) =>
                                (<tr key={anouncement.id}>
                                    <th scope="row">{anouncement.date}</th>
                                    <td ><b>{anouncement.title}</b></td>
                                    <td >{anouncement.description}</td>
                                </tr>)
                                ).reverse()
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Anouncements