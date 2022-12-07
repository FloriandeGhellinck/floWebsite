import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import axios from 'axios';

const ExportSpotify = () => {
  const CLIENT_ID = 'ed6cbd8ed8ed416e8da0400ade1ebd98';
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const [token, setToken] = useState('');
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    console.log(token);
    if (token) {
      setToken(token);
      return;
    }
    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((e) => e.startsWith('access_token'))
        .split('=')[1];
      //   console.log(token);

      window.location.hash = '';
      window.localStorage.setItem('token', token);
      setToken(token);
    }
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'artist',
      },
    });
    console.log(data);
  };

  return (
    <div>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}> Logout</button>
      )}

      {token ? (
        <form onSubmit={searchArtists}>
          <input type='text' onChange={(e) => setSearchKey(e.target.value)} />
          <button type='submit'> Search</button>
        </form>
      ) : (
        <h2> Please login</h2>
      )}
    </div>
  );
};
export default ExportSpotify;
