const OriginalFooter = () => {
    return (
        <footer>
        <div className="language-select">
            <div>
                <a href="./?lang=eng"><img src="/icon/language/icons8-great-britain-48.png" alt="English" /></a> <a href="./?lang=nob"><img src="/icon/language/icons8-norway-48.png" alt="Norsk" /></a>
            </div>
            <button className="discrete-button has-text" id="clear-language" value="Clear language selection" style={{display:"none"}} data-textname="removeStoredLanguage">Clear language selection</button>
        </div>
        
        <div className="footer-links"><span className="has-text" data-textname="viewOnGH">View this site on</span> <a href="https://github.com/pnbakken/next-portfolio">GitHub</a></div>
    </footer>
    );
}

export default OriginalFooter;