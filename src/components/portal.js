'use client';

import { createPortal } from 'react-dom';

const createDiv = (divName = 'portal-id') => {
  const createDiv = document.createElement('div');
  createDiv.setAttribute('id', divName);
  document.body.appendChild(createDiv);

  return createDiv;
};

const ReactPortal = ({ isOpen, children, divName = 'portal-id' }) => {
  if (isOpen) {
    let element;

    if (typeof window !== 'undefined') {
      element = document.getElementById(divName);
      if (!element) {
        element = createDiv(divName);
      }
      element.style.zIndex = 10;
      element.style.position = 'fixed';
      element.style.inset = 0;
      element.style.backgroundColor = 'red';
    }

    if (element) return createPortal(children, element);
  }

  return null;
};

export default ReactPortal;

export { createDiv };
