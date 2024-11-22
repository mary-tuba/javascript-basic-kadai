const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {

    setTimeout(() => {
        // document.getElementById('text').textContent = 'ボタンをクリックしました';
        text.textContent = 'ボタンをクリックしました';
    },2000);

});
