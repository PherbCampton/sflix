import "./footer.css"

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-top">
                <p className="footer-links">Andriod App</p>
                <p className="footer-links">Terms of service</p>
                <p className="footer-links">Contact</p>
                <p className="footer-links">Sitemap</p>
            </div>
            <div className="footer-bottom">
                <p>
                    SFlix is a Free Movies streaming site with zero ads. 
                    We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. 
                    You can also Download full movies from MoviesCloud and watch it later if you want.
                </p>
                <p className="trademark">
                    © SFlix
                </p>
            </div>
        </div>
    )
}