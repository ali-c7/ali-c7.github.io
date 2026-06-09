import React, { useEffect, useRef } from "react";

const BEAM_W = 500;
const BEAM_Y = 150;
const SUPPORT_H = 30;
const LEFT_X = 60;
const RIGHT_X = BEAM_W - 60;
const MID_X = (LEFT_X + RIGHT_X) / 2;
const SPAN = RIGHT_X - LEFT_X;
const ARROW_LEN = 60;

const BeamAnimation = () => {
  const beamPathRef = useRef(null);
  const arrowGroupRef = useRef(null);
  const rafRef = useRef(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      phaseRef.current += 0.012;
      const t = (Math.sin(phaseRef.current) + 1) * 0.5;
      const maxDef = 20 * t;

      const midY = BEAM_Y + maxDef * Math.sin(Math.PI * 0.5);

      if (beamPathRef.current) {
        let d = `M ${LEFT_X} ${BEAM_Y}`;
        const steps = 60;
        for (let i = 1; i <= steps; i++) {
          const frac = i / steps;
          const x = LEFT_X + frac * SPAN;
          const y = BEAM_Y + maxDef * Math.sin(Math.PI * frac);
          d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
        }
        beamPathRef.current.setAttribute("d", d);
      }

      if (arrowGroupRef.current) {
        arrowGroupRef.current.setAttribute(
          "transform",
          `translate(${MID_X}, ${midY})`
        );
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className='w-full h-full flex items-center justify-center bg-[#0a0520]'>
      <svg
        viewBox={`0 0 ${BEAM_W} 250`}
        className='w-full max-w-[520px] h-auto'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* Beam */}
        <path
          ref={beamPathRef}
          d={`M ${LEFT_X} ${BEAM_Y} L ${RIGHT_X} ${BEAM_Y}`}
          stroke='#c8c8d0'
          strokeWidth='6'
          fill='none'
          strokeLinecap='round'
        />

        {/* Pin support (left) */}
        <polygon
          points={`
            ${LEFT_X},${BEAM_Y + 2}
            ${LEFT_X - 14},${BEAM_Y + SUPPORT_H}
            ${LEFT_X + 14},${BEAM_Y + SUPPORT_H}
          `}
          fill='#1a1a1a'
          stroke='#555'
          strokeWidth='1.5'
        />
        <line
          x1={LEFT_X - 20}
          y1={BEAM_Y + SUPPORT_H + 2}
          x2={LEFT_X + 20}
          y2={BEAM_Y + SUPPORT_H + 2}
          stroke='#555'
          strokeWidth='2'
        />

        {/* Roller support (right) */}
        <polygon
          points={`
            ${RIGHT_X},${BEAM_Y + 2}
            ${RIGHT_X - 14},${BEAM_Y + SUPPORT_H - 6}
            ${RIGHT_X + 14},${BEAM_Y + SUPPORT_H - 6}
          `}
          fill='#1a1a1a'
          stroke='#555'
          strokeWidth='1.5'
        />
        <circle cx={RIGHT_X - 9} cy={BEAM_Y + SUPPORT_H + 1} r='5' fill='none' stroke='#555' strokeWidth='1.5' />
        <circle cx={RIGHT_X} cy={BEAM_Y + SUPPORT_H + 1} r='5' fill='none' stroke='#555' strokeWidth='1.5' />
        <circle cx={RIGHT_X + 9} cy={BEAM_Y + SUPPORT_H + 1} r='5' fill='none' stroke='#555' strokeWidth='1.5' />
        <line
          x1={RIGHT_X - 20}
          y1={BEAM_Y + SUPPORT_H + 8}
          x2={RIGHT_X + 20}
          y2={BEAM_Y + SUPPORT_H + 8}
          stroke='#555'
          strokeWidth='2'
        />

        {/* Load arrow — attached to beam midspan, moves with deflection */}
        <g ref={arrowGroupRef} transform={`translate(${MID_X}, ${BEAM_Y})`}>
          <line
            x1={0}
            y1={-ARROW_LEN}
            x2={0}
            y2={-6}
            stroke='#ff5252'
            strokeWidth='2.5'
          />
          <polygon
            points='0,0 -6,-14 6,-14'
            fill='#ff5252'
          />
          <text
            x={14}
            y={-ARROW_LEN + 8}
            fill='#ff5252'
            fontSize='13'
            fontFamily='Poppins, sans-serif'
            fontWeight='600'
          >
            P
          </text>
        </g>

      </svg>
    </div>
  );
};

export default BeamAnimation;
