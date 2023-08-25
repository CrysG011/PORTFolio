import { describe, test, expect, beforeEach } from '@jest/globals';
import { JSDOM } from 'jsdom';

import '../menu'; 

describe('Main Functionality', () => {
  let window: Window;
  let document: Document;

  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><div class="nav"></div>`);
    document = window.document;
  });

  test('Toggle nav class on button click', () => {
    
    const button = document.createElement('button');
    button.classList.add('button');
    document.body.appendChild(button);

    const nav = document.querySelector('.nav') as HTMLDivElement;
    const initialClassList = nav.classList.value;

    const event = new Event('click');
    button.dispatchEvent(event);

    const updatedClassList = nav.classList.value;

    expect(updatedClassList).not.toBe(initialClassList);
  });

  // más pruebas ...
});
