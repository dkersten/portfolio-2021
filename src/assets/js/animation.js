const svgContainers = document.querySelectorAll('.svg-container')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        console.log('in the view');
        entry.target.classList.add('show');
        entry.target.classList.remove('hide');
        console.log(entry.target.classList)
      } else {
        console.log('out of view');
        entry.target.classList.add('hide');
        entry.target.classList.remove('show');
        console.log(entry.target.classList)
      }
    })
})
  
svgContainers.forEach(svgContainer => {
    observer.observe(svgContainer);
})