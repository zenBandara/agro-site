import React, { useState } from 'react';
import { AvatarCreator } from '@readyplayerme/react-avatar-creator';
import { Avatar } from '@readyplayerme/visage';

const config = {
  clearCache: true,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' };

export default function App() {
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleOnAvatarExported = (event) => {
    setAvatarUrl(event.data.url);
  };

  return (
    <div>
      <div style={{ width: '100%', height: '100%', marginBottom: '130px' , marginTop: '70px' }}>
      <AvatarCreator subdomain="traverse-kbay0j" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
      
      {avatarUrl && <Avatar modelSrc={avatarUrl} />}
      </div>
    </div>
  );
}








{/*
import { Avatar } from "@readyplayerme/visage";
import { useState } from "react";

export default function App() {
  const [avatarUrl, setAvatarUrl] = useState('https://models.readyplayer.me/653b31e882ec257272c23334.glb');

  return (
    <div style={{ width: '1000px', height: '600px', paddingLeft: '500px' }}>
      {avatarUrl && <Avatar modelSrc={avatarUrl} />
      }
    </div>
  );
}
*/}




{/*
import React from 'react';
import { AvatarCreator } from '@readyplayerme/react-avatar-creator';

const config = {
  clearCache: true,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = {
  width: '100%',
  height: '100vh',
  border: 'none',
};

function App() {
  const handleOnAvatarExported = (event) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  return (
    <AvatarCreator
      subdomain="http://traverse-kbay0j.readyplayer.me?frameApi"
      config={config}
      style={style}
      onAvatarExported={handleOnAvatarExported}
    />
  );
}

export default App;
*/}