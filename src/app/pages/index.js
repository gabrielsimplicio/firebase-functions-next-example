import React from "react"
import App from "../components/App"
import getLanguages from './languages'

const Index = ({ languages }) => (
  <App>
    <ul>
      {languages && languages.map((language, i) => {
        return <li key={i}>{language}</li>;
      })}
    </ul>
  </App>
)

Index.getInitialProps = () => {
  return getLanguages().then(languages => {
    return { languages };
  });
}

export default Index;
