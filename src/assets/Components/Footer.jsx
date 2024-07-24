import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-40">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Contact Information */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
                        <p className="text-sm">
                            1234 Street Name, City, State 56789
                        </p>
                        <p className="text-sm">
                            Email: info@example.com
                        </p>
                        <p className="text-sm">
                            Phone: (123) 456-7890
                        </p>
                    </div>
                    {/* Navigation Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
                        <ul className="text-sm">
                            <li className="mb-1"><a href="#" className="hover:underline">Home</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Shop</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Contact Us</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
                        </ul>
                    </div>
                    {/* Social Media Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
                            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                    <h2 className="text-2xl">Pyrim</h2>
                    <div className="flex flex-row">
                        <p className="p-1.5">
                            &copy; {new Date().getFullYear()} Pyrim.
                        </p>
                        <p className="border-l border-gray-700 p-1.5">
                            All rights reserved.
                        </p>
                        <a href="#"
                           className="hover:text-gray-400 border-l border-gray-700 p-1.5 underline text-blue-500">
                            Terms & Conditions
                        </a>
                        <a href="#"
                           className="hover:text-gray-400 border-l border-gray-700 p-1.5 underline text-blue-500">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
