import * as React from 'react';
import './style.css';
import { Soundboard } from './Soundboard';

export default function App() {
  return (
    <div className="container">
      <h1>Soundboard Demo</h1>
      <Soundboard />
    </div>
  );
}
