// import React, { useState, useEffect } from 'react';
// import classNames from 'classnames';

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hidden, setHidden] = useState(false);

//   const [linkHovered, setLinkHovered] = useState(false);
//   const [backHovered, setBackHovered] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       addEventListeners();
//     handleLinkHoverEvents();
//     return () => removeEventListeners();
//     }, 1000);
//     return () => clearInterval(interval);
//   });

//   const [clicked, setClicked] = useState(false);

//   const addEventListeners = () => {
//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseenter', onMouseEnter);
//     document.addEventListener('mouseleave', onMouseLeave);
//     document.addEventListener('mousedown', onMouseDown);
//     document.addEventListener('mouseup', onMouseUp);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseenter', onMouseEnter);
//     document.removeEventListener('mouseleave', onMouseLeave);
//     document.removeEventListener('mousedown', onMouseDown);
//     document.removeEventListener('mouseup', onMouseUp);
//   };

//   const onMouseDown = () => {
//     setClicked(true);
//     setBackHovered(false);
//   };

//   const onMouseUp = () => {
//     setClicked(false);
//   };

//   const onMouseLeave = () => {
//     setHidden(true);
//   };

//   const onMouseEnter = () => {
//     setHidden(false);
//   };

//   const onMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   const handleLinkHoverEvents = () => {
//     document
//       .querySelectorAll('a, button, .highlightCursor')
//       .forEach((el) => {
//         el.addEventListener('mouseover', () => setLinkHovered(true));
//         el.addEventListener('mouseout', () => setLinkHovered(false));
//       });
//     document.querySelectorAll('.back').forEach((el) => {
//       el.addEventListener('mouseover', () => {setBackHovered(true); setLinkHovered(false); setClicked(false);});
//       el.addEventListener('mouseout', () => setBackHovered(false));
//     });
//     document.querySelectorAll('iframe').forEach((el) => {
//       el.addEventListener('mouseover', () => setHidden(true));
//       el.addEventListener('mouseout', () => setHidden(false));
//     });
//   };

//   const cursorClasses = classNames('cursor', {
//     'cursor--clicked': clicked,
//     'cursor--hidden': hidden,
//     'cursor--link-hovered': linkHovered,
//     'cursor--back': backHovered,
//   });
//   if (typeof navigator !== 'undefined' && isMobile()) return null;
//   return (
//     <div
//       className={cursorClasses}
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//     />
//   );
// };

// export default Cursor;
