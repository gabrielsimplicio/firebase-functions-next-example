import fetch from 'isomorphic-fetch';

export default function getLanguages() {
    return fetch("https://csr-firebase-sample.firebaseio.com/languages.json").then(res => res.json());
}