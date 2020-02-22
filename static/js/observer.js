let prevInteractionRatio

const callback = (entries, observer) => {
  const header = entries.find(entry => entry.target.id === 'header')
  if (header) {
    if (header.isIntersecting === false) {
      header.target.classList.remove('alt')
      header.target.classList.add('reveal')
      prevInteractionRatio = header.interactionRatio
    }
  }
}
const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '200px',
  threshold: 1.0
})
const target = document.querySelector('#header')
if (target) {
  observer.observe(target)
}
