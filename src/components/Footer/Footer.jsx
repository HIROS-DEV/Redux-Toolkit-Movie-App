import './Footer.scss';

const Footer = () => {
  return <div className="footer">
    <div>Movie App</div>
    <div>{new Date().getFullYear()}, Movie, Inc. or its affiliates</div>
  </div>;
};
export default Footer;
