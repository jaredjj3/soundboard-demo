import * as React from 'react';
import { Sound } from './types';

const SOUNDS: Sound[] = [
  {
    name: 'foo',
    url: '',
  },
  {
    name: 'bar',
    url: '',
  },
  {
    name: 'baz',
    url: '',
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
                  play
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
