  let scrollpos = window.scrollY
  const header1 = document.querySelector(".sidebar-content")
  const header_height = header1.offsetHeight > 50

  const add_class_on_scroll = () => header1.classList.add("fade-in")
  const remove_class_on_scroll = () => header1.classList.remove("fade-in")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })

window.onscroll = function() {myFunction()};

function myFunction() {
  const collectionItem = document.querySelector(".sidebar-content")
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    collectionItem.classList.add("stickyItem");
  } else {
    collectionItem.classList.remove("stickyItem");
  }
}


// working script on scroll down
window.addEventListener('scroll', function() {
  const collectionItem = document.querySelector(".sidebar-content")
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    collectionItem.classList.add("stickyItem");
  } else {
    collectionItem.classList.remove("stickyItem");
  }
});