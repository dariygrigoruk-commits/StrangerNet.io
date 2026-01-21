//  массив из кнопок
let btn_slide = document.querySelectorAll('.btn_slide');
let b = document.querySelector('body')
let end_text = document.querySelector('.end_text')

let end_music;
const endtestAudio = new Audio();
const endcanPlayMP3 = endtestAudio.canPlayType('audio/mpeg');
const endcanPlayOGG = endtestAudio.canPlayType('audio/ogg');
const endcanPlayWAV = endtestAudio.canPlayType('audio/WAV');

// menu_btns

let n_main = document.querySelectorAll('.n_main')
let n_gg = document.querySelectorAll('.n_gg')
let n_world = document.querySelectorAll('.n_world')


// масив из слайдов
let slides = document.querySelectorAll('.slide');

// шаг для переключениея слайда
let step = 0;

n_main.forEach(item => {
    item.addEventListener("click", () => {
        step = 2;
        next_slide();
    })
})

n_gg.forEach(item => {
    item.addEventListener("click", () => {
        step = 3;
        next_slide();
    })
})

n_world.forEach(item => {
    item.addEventListener("click", () => {
        step = 10;
        next_slide();
    })
})

// Выбираем формат в зависимости от поддержки браузером
if (endcanPlayMP3 !== '' && endcanPlayMP3 !== 'no') {
  end_music = new Audio("./music/end.mp3");
} else if (endcanPlayOGG !== '' && endcanPlayOGG !== 'no') {
  end_music = new Audio("./music/end.ogg");
}
else if (endcanPlayWAV !== '' && endcanPlayWAV !== 'no') {
  end_music = new Audio("./music/end.WAV");
} else {
  console.error("Браузер не поддерживает ни MP3, ни OGG форматы");
}


let next_slide = () => {
    b.scrollTo(0, 0)
    btn_slide.forEach(item => {
        slides.forEach(item => {




            if (item.classList.contains != 'not_active_slide') {
                item.classList.add('not_active_slide')
            }


        })

        slides[step].classList.remove('not_active_slide')

    });

    if (step === 16) {
        end_music.play();

        setTimeout(() => {
            end_text.style.opacity = '0'
            setTimeout(() => {
                end_text.innerHTML = '«Оставайтесь на связи, потому что в этом мире странных дел нет окончаний — есть лишь новое начало».'
                end_text.style.opacity = '1'
            }, 1000)
        }, 6000)

        
    }

}


btn_slide.forEach(item => {
    item.addEventListener('click', () => {
        step++
        next_slide()
    });
});











