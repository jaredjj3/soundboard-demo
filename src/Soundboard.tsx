import * as React from 'react';
import { Sound } from './types';
import { PlayIcon } from './PlayIcon';

const SOUNDS: Sound[] = [
  {
    name: 'Heater-1.mp3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    name: 'Kick_n_Hat-2.mp3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    name: 'Chord_1.mp3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    name: 'Give_us_a_light.mp3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    name: 'Brk_Snr.mp3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];

export const Soundboard = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {SOUNDS.map((sound) => (
            <tr>
              <td>{sound.name}</td>
              <td>
                <button type="button" className="btn btn-success">
                  <PlayIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
