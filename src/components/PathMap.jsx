import React from 'react';
import { Link } from 'react-router-dom';

export default function PathMap() {
  return (
    <div className={"fade-in-to-right"}>
      <center>
        <svg width='100%' className='svg'>
          <a
            href='https://github.com/Terasology/TutorialAssetSystem/wiki/Block-Attributes'
            className='node'
          >
            <circle className='c1' cx='10%' cy='10%' r='4%'></circle>
            <circle className='c2' cx='10%' cy='10%' r='2%'></circle>
          </a>
          <a to='#' className='tooltip'>
            <rect
              width='16%'
              height='16%'
              x='2%'
              y='30%'
              fill='black'
              stroke='white'
              strokeWidth='5px'
              fillOpacity='80%'
            ></rect>
            <text fontFamily='Consolas' fontSize='90%' fill='white'>
              <tspan x='2.5%' y='35%'>
                Block Attributes,
              </tspan>
              <tspan x='2.5%' dy='1.2em'>
                Click to View Tutorial.{' '}
              </tspan>
            </text>
            <line
              x1='10%'
              y1='17%'
              x2='10%'
              y2='30%'
              className='tooltip-line'
            ></line>
          </a>
          <line
            x1='10%'
            y1='10%'
            x2='25%'
            y2='35%'
            className='path-line'
          ></line>
          <a
            className='node'
            href='https://github.com/Terasology/TutorialAssetSystem/wiki/Block-Definition'
          >
            <circle className='c1' cx='25%' cy='35%' r='4%'></circle>
            <circle className='c2' cx='25%' cy='35%' r='2%'></circle>
          </a>
          <Link to='#' className='tooltip'>
            <rect
              width='16%'
              height='16%'
              x='17%'
              y='50%'
              fill='black'
              stroke='white'
              strokeWidth='5px'
              fillOpacity='80%'
            ></rect>
            <text fontFamily='Consolas' fontSize='90%' fill='white'>
              <tspan x='17.5%' y='55%'>
                This is Second Resource,
              </tspan>
              <tspan x='17.5%' dy='1.2em'>
                Click to View Tutorial.
              </tspan>
            </text>
            <line
              x1='25%'
              y1='42%'
              x2='25%'
              y2='50%'
              className='tooltip-line'
            ></line>
          </Link>
          <line
            x1='25%'
            y1='35%'
            x2='40%'
            y2='10%'
            className='path-line'
          ></line>
          <Link
            className='node'
            to='https://github.com/Terasology/TutorialAssetSystem/wiki/Block-Families'
          >
            <circle className='c1' cx='40%' cy='10%' r='4%'></circle>
            <circle className='c2' cx='40%' cy='10%' r='2%'></circle>
          </Link>
          <line
            x1='40%'
            y1='10%'
            x2='50%'
            y2='35%'
            className='path-line'
          ></line>
          <Link to='#' className='node'>
            <circle className='c1' cx='50%' cy='35%' r='4%'></circle>
            <circle className='c2' cx='50%' cy='35%' r='2%'></circle>
          </Link>
          <line
            x1='50%'
            y1='35%'
            x2='65%'
            y2='10%'
            className='path-line'
          ></line>
          <Link to='#' className='node'>
            <circle className='c1' cx='65%' cy='10%' r='4%'></circle>
            <circle className='c2' cx='65%' cy='10%' r='2%'></circle>
          </Link>
          <Link to='#' className='tooltip'>
            <rect
              width='16%'
              height='16%'
              x='57%'
              y='50%'
              fill='black'
              stroke='white'
              strokeWidth='5px'
              fillOpacity='80%'
            ></rect>
            <text fontFamily='Consolas' fontSize='90%' fill='white'>
              <tspan x='57.5%' y='55%'>
                This is Fourth Resource,
              </tspan>
              <tspan x='57.5%' dy='1.2em'>
                Click to View Tutorial.{' '}
              </tspan>
            </text>

            <line
              x1='65%'
              y1='17%'
              x2='65%'
              y2='50%'
              className='tooltip-line'
            ></line>
          </Link>
          <line
            x1='65%'
            y1='10%'
            x2='75%'
            y2='35%'
            className='path-line'
          ></line>
          <Link to='#' className='node'>
            <circle className='c1' cx='75%' cy='35%' r='4%'></circle>
            <circle className='c2' cx='75%' cy='35%' r='2%'></circle>
          </Link>
          <line
            x1='75%'
            y1='35%'
            x2='90%'
            y2='20%'
            className='path-line'
          ></line>
          <Link to='#' className='node'>
            <circle className='c1' cx='90%' cy='20%' r='4%'></circle>
            <circle className='c2' cx='90%' cy='20%' r='2%'></circle>
          </Link>
          Sorry, your browser does not support inline SVG.
        </svg>
      </center>
    </div>
  );
}
