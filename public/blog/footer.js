/* ADL Business Consulting — Shared Blog Footer
   Injected into all blog pages via <script src="/blog/footer.js"></script>
   Update contact info here and it applies everywhere automatically.
*/
(function () {
  var year = new Date().getFullYear();
  var html = [
    '<div class="footer-disclaimer">',
    '  This content is for informational purposes only and does not constitute professional accounting, tax, or legal advice.',
    '  For guidance specific to your situation, please consult a qualified professional.',
    '  <a href="/#disclaimer">View our full disclaimer &#8594;</a>',
    '</div>',
    '<div class="footer-inner">',
    '  <div class="footer-copy">&copy; ' + year + ' ADL Business Consulting, PC. All rights reserved.</div>',
    '  <div class="footer-contact">',
    '    <a href="tel:5103202724">&#128222; 510-320-2724</a>',
    '    <a href="mailto:info@adlbusinessconsulting.com">&#9993; info@adlbusinessconsulting.com</a>',
    '  </div>',
    '  <div class="footer-links">',
    '    <a href="/#services">Services</a>',
    '    <a href="/#about">About</a>',
    '    <a href="/blog/">Blog</a>',
    '    <a href="/#contact">Contact</a>',
    '  </div>',
    '</div>',
  ].join('\n');

  var footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = html;
  }
})();
