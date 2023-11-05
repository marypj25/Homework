const node_for_click = document.getElementById("for_click")

function find_edit(){
  document.getElementsByClassName('block4')[0].innerHTML='Bender'

}
node_for_click.addEventListener("click",find_edit)

const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name() {
  document.getElementsByClassName('block5')[0].innerHTML = 'Mary Dale'
}
node_for_click_name.addEventListener("click",find_edit_name)


function insert_img(){
  // Создаем элемент изображения
const img = document.createElement('img');

// Устанавливаем путь к изображению
img.src = 'https://visitjapan.ru/storage/app/media/Spot/4119/og_image/5616c4ad2542dkimono-pink-hana1-6871-file0.jpg';

// Устанавливаем альтернативный текст для изображения
img.alt = 'Описание изображения';
img.height = 100;
img.width=100;
img.style.marginTop='-100px';
img.style.marginLeft='360px';

// Получаем контейнер, куда нужно вставить изображение
//const container = document.querySelector('#image-container');
const container = document.getElementById("image-container");

// Вставляем изображение в контейнер
container.append(img);

document.getElementsByTagName("div")[1].appendChild(img); // вставили в div 1(внизу)

}
const node_insert_img = document.getElementById("insert_img")
node_insert_img.addEventListener("click",insert_img)