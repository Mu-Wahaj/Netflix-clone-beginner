export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-social">
          <span className="footer-icon">f</span>
          <span className="footer-icon">in</span>
          <span className="footer-icon">yt</span>
        </div>
        <div className="footer-links">
          {["Audio Description","Help Centre","Gift Cards","Media Centre","Investor Relations",
            "Jobs","Terms of Use","Privacy","Legal Notices","Cookie Preferences","Corporate Information","Contact Us"
          ].map(l => <span key={l} className="footer-link">{l}</span>)}
        </div>
        <p className="footer-copy">Built by Muhammad Wahaj · BITF24M059 · Portfolio Project</p>
      </div>
    </footer>
  );
}
