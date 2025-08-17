function Footer () {
    return (
        <div className="bg-primary-navy-950 flex flex-col text-neutral-white px-15 pt-25 pb-5 gap-4">
            <img src="/images/logo.svg" className="h-fit w-30" alt="" />
            <div className="flex justify-between text-xs mt-4">
                <div className="flex justify-between gap-4">
                    <img src="/images/icon-location.svg" className="h-3 w-3" alt="" />
                    <p className="">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <img src="/images/icon-phone.svg" className="h-3 w-3" alt="" />
                        <p className="">+1-543-123-4567</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src="/images/icon-email.svg" className="h-3 w-3" alt="" />
                        <p className="">exemple@.com </p>
                    </div>                      
                </div>
                <div>
                    <ul className="flex flex-col gap-4 text-xs">
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col text-xs gap-4">
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <img src="/images/icon-facebook.svg" alt="" />
                    <img src="/images/icon-twitter.svg" alt="" />
                    <img src="/images/icon-instagram.svg" alt="" />
                </div>


                


            </div>

        </div>

    );
}
export default Footer;