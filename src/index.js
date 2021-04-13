// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import gon from 'gon';

import ReactDOM from 'react-dom';
import React from 'react';
import Chat from './Chat.jsx'

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const { channels } = gon;
const mountNode = document.getElementById('chat');
ReactDOM.render(<Chat channels={channels} />, mountNode);
