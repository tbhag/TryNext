import React from 'react'
import Styles from '../style'
export function Grid({theme = 'default', children, columns = children.length}) {
return (
    <React.Fragment>
        <main className="grid">
            {children.map(child => <article className="article">{child}</article>)}
        </main>
        <style jsx>{`
            .grid {
                color: ${Styles[theme].textColor};
                font-size: ${Styles[theme].fontSize};
                font-weight: ${Styles[theme].fontWeight};
                padding: 20px;
                width: 100%; 
                display: grid;
                grid-auto-rows: minmax(100px, 1fr); 
                grid-template-columns: repeat(${columns}, 1fr);
                grid-gap: 20px;
            }
            .article {
                border-radius: 10px;
                padding: 20px;
                background-color: ${Styles[theme].bgColor};
            }
        `}</style>
        <style global jsx>{`
            html {
                box-sizing: border-box;
            }
            *, *:before, *:after {
                box-sizing: inherit;
            }
            body {
                background-color: lightgray;
                font-family: arial
            }
        `}</style>
    </React.Fragment>
)
}