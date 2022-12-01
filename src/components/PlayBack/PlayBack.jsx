import React from 'react'
import './PlayBack.scss'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { BsFillPlayFill } from 'react-icons/bs'
import { BiShuffle } from 'react-icons/bi'
import { CiRepeat } from 'react-icons/ci'

// BsPauseFill

const PlayBack = () => {

  return (
    <section className='playback'>
        <div className="playback__wrapper">
          {/* <div className="playback__media"></div> */}

          <div className="playback__control">
            <div className="control__top">
              <div className="tooltip">
                <span className="shuffle__control">
                  <BiShuffle className="shuffle" />
                </span>
                <span className="tooltiptext tooltiptext__lg">Enable shuffle</span>
              </div>
              
              <div className="tooltip">
                <span className="previous__control">
                  <MdSkipPrevious className="previous" />
                </span>
                <span className="tooltiptext">Previous</span>
              </div>
              
              <div className="tooltip">
                <span className="play__control">
                  <BsFillPlayFill className="play" />
                </span>
                <span className="tooltiptext">Play</span>
              </div>
              
              <div className="tooltip">
                <span className="next__control">
                  <MdSkipNext className="next" />
                </span>
                <span className="tooltiptext">Next</span>
              </div>
              
              <div className="tooltip">
                <span className="repeat__control">
                  <CiRepeat className="repeat" />
                </span>
                <span className="tooltiptext tooltiptext__lg">Enable repeat</span>
              </div>
            </div>

            <div className="control__bottom"></div>
          </div>
          
          {/* <div className="playback__config"></div> */}
        </div>
    </section>
  )
}

export default PlayBack