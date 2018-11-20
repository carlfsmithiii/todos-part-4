import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
        <p>URL Not Found</p>
        <Link to="/"> Home </Link>
    </div>
  )
}
