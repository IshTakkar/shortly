import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";

import Search from '../components/Search';
import SearchCard from '../components/SearchCard';
import Stats from '../components/Stats';

const StyledInfo = styled.div`
    background-color: #EFF1F7;
    margin: 0px;
`;

const Info = () => {
    const [text, setText] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const { promiseInProgress } = usePromiseTracker();

    //**** code can be used to save the results generated ****

    // const LOCAL_STORAGE_KEY = "list-shorten-results";
    // useEffect(() => {
    //     // fires when app component mounts to the DOM
    //     const storageShortenResults = JSON.parse(
    //         window.localStorage.getItem(LOCAL_STORAGE_KEY)
    //     );
    //     if (storageShortenResults) {
    //         storageShortenResults.map((storageShortenResult) => {
    //             return (storageShortenResult.isCopied = false);
    //         });
    //         setResults(storageShortenResults);
    //     }
    // }, []);

    // useEffect(() => {
    //     // fires when shortenResults array gets updated
    //     window.localStorage.setItem(
    //         LOCAL_STORAGE_KEY,
    //         JSON.stringify(results)
    //     );
    // }, [results]);

    const sendRequest = async (text) => {
        const url = 'https://api.shrtco.de/v2/shorten';
        try {
            const response = await axios.get(url, { params: { url: text } });
            const shortUrl = response.data.result.full_short_link;
            setResults([
                {
                    text: text,
                    shortUrl: shortUrl,
                    isCopied: false
                },
                ...results
            ])
        } catch (error) {
            setErrorMessage(error.response.data.error);
        }
    }

    const formValidation = () => {
        const txt = document.getElementById('text');
        const urlChecker = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
        const txtError = document.getElementById('error');

        if (txt.value.length === 0 || urlChecker.test(txt) === false) {
            // alert('Please enter valid url')
            txtError.innerHTML = 'Please enter a valid URL';
        } else {
            trackPromise(sendRequest(text));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        formValidation();
    }


    return (
        <>
            <StyledInfo>
                <Search text={text} setText={setText} click={handleSubmit} errorMessage={errorMessage} style={{ marginTop: '-24px' }} />
                {promiseInProgress === true ? <p>Please Wait</p> : null}
                {results.map((result, index) => (
                    <SearchCard link={result.text} shortened={result.shortUrl} key={index} />
                ))}
                <Stats />
            </StyledInfo>
        </>
    );
};

export default Info;