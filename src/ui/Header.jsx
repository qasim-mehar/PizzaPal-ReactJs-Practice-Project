import { Link } from 'react-router-dom';

import React from 'react';

function Header() {

  return (
    <header>
      <Link className="text-3xl font-bold" to="/">PizzaPal Co.</Link>

    </header>
  );
}


export default Header;