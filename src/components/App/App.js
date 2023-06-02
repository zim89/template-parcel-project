const gallery = document.querySelector('.gallery');

class App {
  render(arr) {
    const markup = arr.map(({ title }) => `<li>${title}</li>`).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
  }
}

export default new App();
