import faker from "faker";

const mount = (el) => {
  const documentList = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = documentList;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");

  if (el) mount(el);
}

export { mount };
