let data = [];

function handleSubmit(event) {
  event.preventDefault();
  let title = document.getElementById("input-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let desc = document.getElementById("input-desc").value;
  let image = document.getElementById("image-blog").files;
  let nodejs = document.getElementById("nodeJs").checked;
  let react = document.getElementById("react").checked;
  let nextjs = document.getElementById("nextJs").checked;
  let typescript = document.getElementById("typescript").checked;

    if (nodejs) {
        nodejs = document.getElementById("nodeJs").value
    } else {
        nodejs = ''
    }    
    if (react) {
        react = document.getElementById("react").value
    } else {
        react = ''
    }    
    if (nextjs) {
        nextjs = document.getElementById("nextJs").value
    } else {
        nextjs = ''
    }    
    if (typescript) {
        typescript = document.getElementById("typescript").value
    } else {
        typescript = ''
    }    

    

  image = URL.createObjectURL(image[0]);

let blog = {
    title: title,
    startDate: startDate,
    endDate: endDate,
    desc: desc,
    image: image,
    nodejs: nodejs,
    react: react,
    nextjs: nextjs,
    typescript: typescript
}

  data.push(blog);
  console.log(data);

  renderBlog();
}

function renderBlog() {
  document.getElementById("blog").innerHTML = ``;
  for (let i = 0; i < data.length; i++) {
    document.getElementById("blog").innerHTML += 
    `
      <div class="card">
          <div class="image">
            <img src=${data[i].image} alt="">
          </div>
          <div class="title">
            <h3>${data[i].title}</h3>
          </div>
          <div class="desc">
            <p>${data[i].desc}</p>
          </div>
          <div class="tech">
            <i class="${data[i].nodejs}"></i>
            <i class="${data[i].react}"></i>
            <i class="${data[i].nextjs}"></i>
            <i class="${data[i].typescript}"></i>
          </div>
          <div class="edit">
            <button>edit</button>
            <button>delete</button>
          </div>
      </div>
    `
  }
}