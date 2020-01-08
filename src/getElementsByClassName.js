const getElementsByClassName = (targetName) => {
  // YOUR CODE HERE
  const arrEl = [];

  function checkNode(element) {
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
