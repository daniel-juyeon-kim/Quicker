import React, { createElement, useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Tmap from "./Tmap"
import Postcode from "./Postcode"
import { request } from 'http';

const showMap = () => document.getElementById("TMapApp")!.style.display = "block"

const hideMap = () => document.getElementById("TMapApp")!.style.display = "none"

const isGeolocation = () => navigator.geolocation

const getLatLon = () => {
    return new Promise(
        (resolve, rejected) => navigator.geolocation.getCurrentPosition(resolve, rejected)
    );
}

type CommissionPageProps = {
    hideCommissionPage: () => void
}

export default function CommissionPage({ hideCommissionPage }:CommissionPageProps) {
    const navigate = useNavigate();

    const startinputDiv = useRef<HTMLDivElement>(null)
    const arriveinputDiv = useRef<HTMLDivElement>(null)
    const [title, setTitle] = useState("출발지")
    const [startPosition, setStartPosition] = useState({})
    const [arrivePosition, setArrivePosition] = useState({})

    const pageBack = () => {
        if (title === "출발지") { navigate("/") }
        else if (title === "도착지") {
            setTitle("출발지")
            startinputDiv.current!.style.display = "block"
            arriveinputDiv.current!.style.display = "none"
        }
        else if (title === "세부사항") {
            setTitle("도착지")
            startinputDiv.current!.style.display = "none"
            arriveinputDiv.current!.style.display = "block"
        }

    }
    const get = () => {
        fetch('http://localhost:9000/get')
            .then(response => response.json())
            .then(data => console.log((data)))
    }

    const post = () => {
        const data = { username: 'example' };

        fetch('http://localhost:9000/post', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        
    }

    return (
        <>
            <button onClick={pageBack}>이전 버튼</button>
            <Tmap containerId={"mapContainerBox"} startPosition={startPosition} arrivePosition={arrivePosition} />
            <Postcode refs={{ startinputDiv: startinputDiv, arriveinputDiv: arriveinputDiv }} mapControls={{ showMap: showMap, hideMap: hideMap }} setStates={{ "setStartPosition": setStartPosition, "setArrivePosition": setArrivePosition, "setTitle": setTitle }} title={title} hideCommissionPage={hideCommissionPage}/>
            <button onClick={get}>get</button>
            <button onClick={post}>post</button>
        </>
    );
}