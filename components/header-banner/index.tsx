function HeaderBanner() {
    return (
        <header id="header-banner">
        <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <a href="#header-banner" className="nav-link brand-link active">Pål N. Bakken</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#services" className="nav-link has-text" data-textname="navServices">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link has-text" data-textname="navWork">Work</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link has-text" data-textname="navContact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link has-text" data-textname="navAbout">About me</a>
                        </li>
                    </ul>
                    <div className="language-select">
                        <div>
                            <a href="./?lang=eng"><img src="/icon/language/icons8-great-britain-48.png" alt="English" /></a> <a href="./?lang=nob"><img src="/icon/language/icons8-norway-48.png" alt="Norsk" /></a>
                        </div>
                        <button className="discrete-button has-text" id="clear-language" value="Clear language selection" style={{display:"none"}} data-textname="removeStoredLanguage">Clear language selection</button>
                    </div>                   
                </div> 
            </div> 
        </nav>
        <div className="banner-content" >
            <h1 className="banner-headline has-text" data-textname="pageHeading"  >Hi! I&apos;m a student <span className="blue-text">front-end</span> developer!</h1>
            <div className="banner-text">

                <p className="has-text" data-textname="bannerText">I enjoy making good looking, responsive websites that are backed by solid code.</p>
                <a className="pseudo-button has-text" data-textname="bannerCTA" href="#contact">Get in touch</a>

              
            </div>
        </div>
        
    </header>
    );
}

export default HeaderBanner;