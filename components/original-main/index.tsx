

const OriginalMain = () => {
    return (
        <main>
        <div className="divider large-divider"></div>

        <section id="services">
            <h2 className="has-text" data-textname="servicesHeading">Services</h2>
        
            <div className="container services-container">

                <div className=" container-item service-item" id="websites">
                    <div className="service-content">
                        <h3 className="has-text" data-textname="websitesServiceHeading">Websites and applications</h3>
                        <div className="service-text">
                            <ul className="service-list has-text" data-textname="websitesTextList">
                                <li>
                                   I use HTML, CSS, and JavaScript, and other frameworks to build websites from the ground up.
                                </li>
                                <li>
                                    I can design your website, or build one based on existing designs.
                                </li>
                                <li>
                                    Static pages, one-pagers, or larger systems with custom made admin tools and databases.
                                </li>
                            </ul>
                        </div>
                        
                    </div> 
                    <div className="service-icon"><img src="./assets/icon/services/icon-computer.svg" alt="websites and applications"/></div>
                    
                </div>

                <div className=" container-item service-item" id="photography">
                    <div className="service-content">
                        <h3 className="has-text" data-textname="photographyServiceHeading">Photography</h3>
                        <div className="service-text">
                            <ul className="service-list has-text" data-textname="photographyTextList">
                                <li>
                                    Product photography.
                                </li>
                                <li>
                                    Mood-setting stock photography.
                                </li>
                                <li>
                                    High quality, high-resolution photographs for use online and in print.
                                </li>
                               <li>
                                    Location-dependent service. Get in touch to discuss further.
                               </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="service-icon"><img src="./assets/icon/services/icon-photo.svg" alt="photography"/></div>
                </div>

                <div className=" container-item service-item" id="online-consulting">
                    
                    <div className="service-content">
                        <h3 className="has-text" data-textname="consultingServiceHeading">Online consulting</h3>
                        <div className="service-text">
                            <ul className="service-list has-text" data-textname="consultingTextList">
                                <li>
                                    Help map and formulate your needs in terms of design and technical requirements.
                                </li>
                                <li>
                                    Help with SEO and Google rankings.
                                </li>
                                <li>
                                    Meta content and keywords. WCAG standards.
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="service-icon"><img src="./assets/icon/services/icon-online.svg" alt="online consulting"/></div>
                </div>
               
                <div className=" container-item service-item" id="authoring">
                    
                    <div className="service-content">
                        <h3 className="has-text" data-textname="contentServiceHeading">Content Authoring</h3>
                        <div className="service-text">
                            <ul className="service-list has-text" data-textname="contentTextList">
                                <li>
                                    Blog posts, short texts, etc.
                                </li>
                                <li>
                                    Social media content.
                                </li>
                                <li>
                                    I also offer editing, translation, and proofreading services. Fluently bilingual in English and Norwegian.
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="service-icon"><img src="./assets/icon/services/icon-copy.svg" alt="content authoring"/> </div>
                </div>

            </div>
        </section>

        <div className="divider"></div>

        <section id="projects">

            <h2 className="has-text" data-textname="projectsHeading">Projects</h2>
            
            <div className="container projects-container"></div>

        </section> 

        <div className="divider"></div>

        <section id="contact">
            <h2 className="has-text" data-textname="contactHeading">Contact me</h2>
            <div className="contact-group">
                <form id="contact-form">
                    <h3 id="form-heading" className="has-text" data-textname="contactFormHeading">Send me a message</h3>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label has-text" data-textname="contactEmail">Email address (required)</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label has-text" data-textname="contactName">Your name (required)</label>
                        <input type="text" className="form-control" id="name" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label has-text" data-textname="contactSubject">Message subject (required)</label>
                        <input type="text" className="form-control" id="subject" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label has-text" data-textname="messageText">Your message (required)</label>
                        <textarea className="form-control" id="message-text" rows={3}></textarea>
                    </div>
                    <div className="mb-3">
                        
                        <div id="form-message"></div>
                        <button type="submit" id="submit-message" className="form-button pseudo-button has-text" data-textName="sendButton">Send</button>
                    </div>  
                    
                </form>
                <div className="contact-social">
                   
                    <ul className="social-links">
                        <li>
                            <a className="social-link" href="https://github.com/pnbakken"><img className="social-icon" src="./assets/icon/social/awesome-github.svg" alt="github"/> <span className="icon-text">GitHub</span></a>
                        </li>
                        <li>
                            <a className="social-link" href="https://www.linkedin.com/in/p%C3%A5l-bakken-0b2295204/"><img className="social-icon" src="./assets/icon/social/awesome-linkedin-in.svg" alt="linkedin"/><span className="icon-text">LinkedIn</span></a>
                        </li>
                        <li>
                            <a className="social-link" href="https://www.instagram.com/pnbakken/"><img className="social-icon" src="./assets/icon/social/awesome-instagram.svg" alt="linkedin" /> <span className="icon-text">Instagram</span></a>
                        </li>
                        <li>
                            <a className="social-link" href="mailto:contact@pnbakken.no"><img className="social-icon" src="./assets/icon/social/icon-email.svg" /> <span className="icon-text">contact@pnbakken.no</span> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <div className="divider"></div>

        <section id="about">
            <h2 className="has-text" data-textname="aboutHeading">About me</h2>
            <article className="container about-container">
                <div className="about-content">
                    <div className="bio-image"></div>
                    <div className="bio-text has-text" data-textname="bioText">
                        <p>
                            Hi, I&apos;m Pål and I&apos;m studying for a degree in front-end development, currently on track to graduate in December 2022.
                        </p> 
                        <p>
                            Until then I&apos;m open for smaller projects or part-time work on anything within my field, but I&apos;m always interested to hear about more long-term job opportunities as well.
                        </p>
                        <p>
                            More page content to come...
                        </p>
                        
                    </div>
                </div>
            </article>

            <article id="technologies">

                <h2 className="has-text" data-textname="techsHeading">Technologies</h2>
                <div className="container skills-container"></div>
                    
            </article>
    
        </section>
        
        <div className="divider"></div>
        
        
        <div className="page-copy">&copy; 2022 Pål N. Bakken</div>
    </main>
    );
}

export default OriginalMain;