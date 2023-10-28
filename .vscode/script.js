function toggleMode() {
    const html = document.documentElement
  
    if (html.classList.contains("lighit")) {
      html.classList.remove("lighit")
    } else {
      html.classList.add("lighit")
  
      // Ou podemos usar o toggle, que realiza a mesma função.
      //html.classList.toggle('light')
    }
    // pegar a tag img
    const img = document.querySelector("#profile img")
    //substituior img
    if (html.classList.contains("lighit")) {
      //se tiver com o ligth mode, adicionar a imagem ligth
      img.setAttribute("src", "./assets/avatar-light-gb.png")
    } else {
      //se tiver sem ligth mode, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png")
    }
  }

  