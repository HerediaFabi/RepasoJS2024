var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // console.log(startEl);

  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  if (startEl.children.length > 0) {
    for (let i = 0; i < startEl.children.length; i++) {
      resultSet.push(
        ...traverseDomAndCollectElements(matchFunc, startEl.children[i])
      );
    }
  }

  return resultSet;
  // TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  let string = "";
  if (selector[0] == "#") {
    string = "id";
  } else if (selector[0] == ".") {
    string = "class";
  } else {
    string = "tag";
    for (let i = 1; i < selector.length; i++) {
      if (selector[i] == ".") {
        string += ".class";
      }
    }
  }
  return string;
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (el) {
      return el.id && el.id.toLowerCase() === selector.slice(1).toLowerCase();
    };
  } else if (selectorType === "class") {
    matchFunction = function (el) {
      if (el.classList) {
        for (let i = 0; i < el.classList.length; i++) {
          if (el.classList[i].toLowerCase() === selector.slice(1).toLowerCase())
            return true;
        }
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (el) {
      if (el.tagName && el.classList) {
        let validationTag =
          el.tagName.toLowerCase() ===
          selector.slice(0, el.tagName.length).toLowerCase();
        let validationClass = false;
        for (let i = 0; i < el.classList.length; i++) {
          if (
            el.classList[i].toLowerCase() ===
            selector.slice(el.tagName.length + 1).toLowerCase()
          )
            validationClass = true;
        }
        return validationTag && validationClass;
      }
      return false;
    };
  } else if (selectorType === "tag") {
    matchFunction = function (el) {
      return el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
