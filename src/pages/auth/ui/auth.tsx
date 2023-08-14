import React, { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

export const Auth = (): ReactElement => {
  return (
    <div>
      <h2>auth</h2>
      <Outlet />
    </div>
  );
};
