const fetchGameMetaData = gameID => {
  // Initial fetch call to get the Game, and then we can get the Datalogs
  return fetch(`http://localhost:8000/api/game/${gameID}`).then(res =>
    res.json()
  );
};

const fetchGameLogData = (gameID, month, day) => {
  // Secondary fetch call to get TimeLogs for the matching Game
  // Have to secondary filter the Response to get current Day/Month matching time log
  // Need to update API to handle this
  return fetch(`http://localhost:8000/api/game/${gameID}/logs`)
    .then(res => res.json())
    .then(json => {
      return json.filter(timeLog => {
        return (
          new Date(timeLog.logged_at).getMonth() === month &&
          new Date(timeLog.logged_at).getDay() === day
        );
      });
    });
};

const fetchGameInfo = (gameID, month, day) => {
  return Promise.all([
    fetchGameMetaData(gameID),
    fetchGameLogData(gameID, month, day)
  ]);
};

const localizeTimeString = timeLog => {
  const OPTIONS = { hour: "2-digit", minute: "2-digit" };
  return timeLog.map(log => {
    return new Date(log.logged_at).toLocaleTimeString("en-US", OPTIONS);
  });
};

const formatViews = timeLog => {
  return timeLog.map(log => {
    return log.views;
  });
};

module.exports = {
  fetchGameInfo: fetchGameInfo,
  localizeTimeString: localizeTimeString,
  formatViews: formatViews
};
