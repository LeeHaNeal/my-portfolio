import React from "react";

function Contact() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <p className="footer-lead mono">READY TO CONNECT</p>
        <h2>같이 만들어볼까요?</h2>
        <div className="footer-links">
          <a href="mailto:harull817@naver.com">harull817@naver.com</a>
          <a href="https://github.com/LeeHaNeal" target="_blank" rel="noreferrer">
            github.com/LeeHaNeal
          </a>
        </div>
      </div>
      <p className="footer-copy mono">© {new Date().getFullYear()} Lee HaNeal</p>
    </footer>
  );
}

export default Contact;
