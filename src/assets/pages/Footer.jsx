import React from 'react'
import { FaHome, FaEnvelope,FaPrint} from 'react-icons/fa';
function Footer() {
  return (
    <>
        <div className='bg-slate-900 text-white py-8'>
    <div className='container grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='col-span-1'>
            <h4 className="text-lg font-bold mb-4">Company Name</h4>
            <p className="text-sm">In this section we should write about our Company to introduce your company or something else</p>
        </div>
        <div className='col-span-1'>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="list-none">
                <li className="text-sm">About</li>
                <li className="text-sm">Customer service</li>
                <li className="text-sm">Customer support</li>
            </ul>
        </div>
        <div className='col-span-1'>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="list-none">
                <li className="text-sm">Sitemap</li>
                <li className="text-sm">Shipping Rates</li>
                <li className="text-sm">Affiliate Program</li>
                <li className="text-sm">Contact Us</li>
            </ul>
        </div>
        <div className='col-span-1'>
            <h4 className="text-lg font-bold mb-4">Address</h4>
            <p className="text-sm"><FaHome className="inline-block mr-1" /> Kigali ...</p>
            <p className="text-sm"><FaEnvelope className="inline-block mr-1" /> example@gmail.com</p>
            <p className="text-sm"><FaPrint className="inline-block mr-1" /> +2507834568</p>
        </div>
    </div>
</div>

    </>

  )
}

export default Footer
