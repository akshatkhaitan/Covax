import React from 'react'
import st from "../styles/centerdash.module.css";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import ManageBookings from "../components/ManageBookings.js";
import PastBookings from '../components/PastBookings';
import OrderVaccine from '../components/OrderVaccine';
import CenterProfile from '../components/CenterProfile';
import CenterMainpage from '../components/CenterMainpage';

function CenterDash(props) {
    const center=props.center;
    const setCenter=props.setCenter;
    const [nav,setNav]= useState(0);
    return (
        <>
            <div className={st.outer}>
                <div className={st.navbar}>
                    <div className={st.logo}>
                    <Link to="/" >
                            <a href="#" style={{ textDecoration: "none" }}>Co-VAX </a>
                          </Link>&nbsp;&nbsp;
                        <div className={st.dashlogo}>Dashboard</div>
                    </div>
                    <div className={st.navRight}>
                        <div className={st.logout}>
                            <button onClick={() => setNav(0)
                            }
                                className={st.linkk}>profile</button>
                        </div>
                        <div className={st.logout}>
                            <button onClick={() => setNav(1)
                            }
                                className={st.linkk}>Manage Bookings</button>
                        </div>
                        <div className={st.logout}>
                            <button onClick={() => setNav(2)
                            }
                                className={st.linkk}>Past Bookings</button>
                        </div>
                        <div className={st.logout}>
                            <button onClick={() => setNav(3)
                            } className={st.linkk}>Order Vaccine</button>
                        </div>
                        <div className={st.logout}>
                            <Link to="/" style={{ textDecoration: "none" }}><button className={st.linkk}>Logout</button></Link>
                        </div>
                    </div>
                </div>
                <div className={st.lower}>
                    {
                        nav==0?
                        <CenterMainpage center={center} setCenter={setCenter}/>:
                        nav==1?
                        <ManageBookings center={center} setCenter={setCenter}/>:
                        nav == 2? 
                        <PastBookings center={center} setCenter={setCenter}/>:
                        <OrderVaccine center={center} setCenter={setCenter}/>
                    }
                </div>
            </div>
        </>
    )
}

export default CenterDash