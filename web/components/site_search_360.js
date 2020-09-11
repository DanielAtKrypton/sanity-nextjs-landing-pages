import React from 'react';

export function SiteSearch360InBody () {
    return (<div>
        <script src="https://cdn.sitesearch360.com/v13/sitesearch360-v13.min.js" async></script>
        <section role="search" data-ss360="true" >
            <input type="search" id="searchBox" />
            <button id="searchButton">
                Lupa
             </button>
        </section>
    </div>)
}

export class SiteSearch360 extends React.Component {
    componentDidMount() {
        window.ss360Config = {
            /* Your site id */
            siteId: 'kryptonunite.com',
            /* A CSS selector that points to your search  box */
            searchBox: { selector: '#searchBox' }
        };
        console.log("Just mounted!");
    }
 
    render() {
        console.log("Renders!");
        return null;

        // console.log(this.getWindow());
        // return 
        // <body>
        // <div>
        //     <script src="https://cdn.sitesearch360.com/v13/sitesearch360-v13.min.js" async></script>
        //     <section role="search" data-ss360="true" >
        //         <input type="search" id="searchBox" />
        //         <button id="searchButton">
        //             Lupa
        //         </button>
        //     </section>
        // </div>
        // </body>;
    }
}