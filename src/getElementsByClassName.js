const getElementsByClassName = (targetName) => {
  // YOUR CODE HERE
  const arrEl = [];

  function checkNode(element) {
    // base case
    if (element.children.length === 0) {
      if (element.classList.contains(targetName)) {
        arrEl.push(element);
      }
      return;
    }

    // check if element contains targetName
    if (element.classList.contains(targetName)) {
      arrEl.push(element);
    }
    for (let i = 0; i < element.children.length; i++) {
      checkNode(element.children[i]);
    }
  }

  checkNode(document.body);
  return arrEl;
};

module.exports = { getElementsByClassName };
