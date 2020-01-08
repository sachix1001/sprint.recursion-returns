const getElementsByClassName = (targetName) => {
  // YOUR CODE HERE
  const arrEl = [];

  function checkNode(element) {
    // base case
    if (element.children.length === 0 || element.children === undefined) {
      return;
    }

    // check if element contains targetName
    if (element.classList) {
      if (element.classList.contains(targetName)) {
        arrEl.push(element);
      }
      // console.log("1 element.children: ", element.children);
      // console.log("2 child: ", element.children[i]);
      // console.log("3", element.className);
      // console.log(element.classList.contains(targetName));
      for (let i = 0; i < element.children.length; i++) {
        checkNode(element.children[i]);
      }
    }
  }

  checkNode(document.body);
  console.log(arrEl);
  return arrEl;
};

module.exports = { getElementsByClassName };
