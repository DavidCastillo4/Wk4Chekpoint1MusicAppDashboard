//Components/UxSwitch.js
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { ACTIONS } from './Dashboard';

let UxSwitch = ({ dispatch, online }) => {

  return (
    <Switch
      checked={online}
      onChange={(e) => dispatch({ type: ACTIONS.Switch, payload: { online: e.target.checked } })}
      name="switch"
      inputProps={{ 'aria-label': 'online status' }}
    />
  )
};

export default UxSwitch;
