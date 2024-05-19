const Footer = () => {
  return (
    <section className="footer-background xl:translate-x-0 2xl:translate-x-0 ">
      <div className="py-5 font-medium flex justify-around items-center px-10">
        <p className="pointer-events-auto cursor-pointer">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
        <div className="flex gap-5">
          <p className="pointer-events-auto cursor-pointer">Documentation</p>
          <p className="pointer-events-auto cursor-pointer">Support</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
