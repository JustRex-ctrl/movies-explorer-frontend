const getTypeCardList = ({ width }) => {
  let settingContainer = null;

  if (width <= 768) {
    return settingContainer = {loadCards: 5, moreCards: 2}
  } else if (width <= 900) {
    return settingContainer = {loadCards: 8, moreCards: 2}
  // } else if (width >= 653 && width < 1151) {
  //   return settingContainer = {loadCards: 8, moreCards: 2}
  } else if (width < 1200) {
    return settingContainer = {loadCards: 12, moreCards: 3}
  } else if (width > 1151) {
    return settingContainer = {loadCards: 16, moreCards: 4}
  }

  return settingContainer
}

export default getTypeCardList;
