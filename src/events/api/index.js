const postDirection = async (baseUrl, direction) => {
  if(!baseUrl) {
    throw new Error("postDirection: invalid baseUrl!");
  }

  if(!direction) {
    throw new Error("postDirection: invalid direction, verify checkDirection");
  }

  const endpoint = "/move";
  const queryString = `?direction=${direction}`;
  const url = baseUrl + endpoint + queryString;

  const res = await fetch(url, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const response = await res.json();
  console.log('Success:', JSON.stringify(response)); // remove this

};

const getGameState = async (baseUrl) => {
  if(!baseUrl) {
    throw new Error("postDirection: invalid baseUrl!");
  }

  const endpoint = "/game";
  const url = baseUrl + endpoint;
  const res = await fetch(url);
  const newState = await res.json();

  return newState;
}

module.exports = {
  postDirection,
  getGameState,
}