import React from 'react'
import "./BodyPriceBar.css"
function BodyPriceBar() {
    return (
        <div className='BodyPriceBar'>
            <span className='textbox'>She looks so happy! The time
                we discussed works. How
                long shall O take her out for?</span>
            <div className='my-4'>
                <div className='price-bar'>
                    <div className='time-bar'>
                        <svg className='w-8 h-8 rounded-full border-2 opacity-30'></svg>
                        <h4>30 minute walk</h4>
                    </div>
                    <span>
                        <svg fill="#fff" version="1.1" id="Capa_1" link="http://www.w3.org/1999/xlink"
                            width="24px" height="24px" viewBox="0 0 31.371 31.371"
                            space="preserve">
                            <g>
                                <path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5
		c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348
		c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268
		l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307
		C22.416,14.762,24.26,16.877,24.26,20.34z"/>
                            </g>
                        </svg>
                        <h4 className='ml-[-0.3rem] mb-1'>29</h4>

                    </span>
                </div>
                <div className='price-bar'>
                    <div className='time-bar'>
                        <svg className='w-8 h-8 rounded-full border-2 opacity-30'></svg>
                        <h4>1 hour walk </h4>
                    </div>
                    <span>
                    <svg 
                    fill="#fff" version="1.1" id="Capa_1" link="http://www.w3.org/1999/xlink"
                            width="24px" height="24px" viewBox="0 0 31.371 31.371"
                            space="preserve">
                            <g>
                                <path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5
		c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348
		c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268
		l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307
		C22.416,14.762,24.26,16.877,24.26,20.34z"/>
                            </g>
                        </svg>
                        <h4 className='ml-[-0.3rem] mb-1'>49</h4>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BodyPriceBar
