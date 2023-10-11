function createNode(
  {
    tag = 'p',
    classList = null,
    id = null,
    textContent = null,
    href = null,
    src = null,
    data = null,
    backgroundColor = null,
    value = null,
    html = null,
    type = null,
  },
  parentNode = document.body
) {
  const element = document.createElement(tag);
  if (classList) {
    element.classList.add(...classList);
  }
  if (id) {
    element.id = id;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (href) {
    element.href = href;
  }
  if (src) {
    element.src = src;
  }
  if (data) {
    element.dataset.title = data;
  }
  if (value) {
    element.value = value;
  }

  if (html) {
    element.innerHTML = html;
  }

  if (type) {
    element.type = type;
  }
  if (backgroundColor) {
    element.backgroundColor = backgroundColor;
  }
  parentNode.appendChild(element);
  return element;
}
