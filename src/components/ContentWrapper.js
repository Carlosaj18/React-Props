import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Tabla from "./Tabla";
import Footer from './Footer';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                </div>
                <Tabla /> 
                <Footer />
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;