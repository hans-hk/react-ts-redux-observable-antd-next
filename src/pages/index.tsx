import Link from 'next/link';
import React from 'react';
import {HansbarProvider} from '../libs/hansbar/HansbarContext';

type indexProps = {};

function index() {
  return (
    <div>
      <p>index pages</p>
      <Link href="/about">
        <a>about</a>
      </Link>

      <Link href="/about">
        <button>about</button>
      </Link>
    </div>
  );
}

index.defaultProps = {};

export default index;
