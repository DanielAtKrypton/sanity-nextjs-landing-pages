import React from 'react';

const ss360Config = {
    /* Your site id */
    siteId: 'kryptonunite.com',
    /* A CSS selector that points to your search  box */
    searchBox: { selector: '#searchBox' }
};

export default class SiteSearch360 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <script src="https://cdn.sitesearch360.com/v13/sitesearch360-v13.min.js" async></script>
            <section role="search" data-ss360="true" >
                <input type="search" id="searchBox" />
                <button id="searchButton">
                    Lupa
            </button>
            </section>
        </div>;
    }
}