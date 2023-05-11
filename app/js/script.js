const btn = document.getElementById('dice');
const adviceNumber = document.getElementById('advice_number');
const adviceQuote = document.getElementById('advice');

const loadContent = (id, advice) => {
  adviceNumber.textContent = id;
  adviceQuote.textContent = advice;
};

const getAdvice = async () => {
  try {
    const response = await fetch(
      'https://api.adviceslip.com/advice?t=' + Math.random()
    );

    if (!response.ok) {
      throw new Error('Api connection problem');
    }

    const jsonData = await response.json();

    const data = jsonData.slip;
    const id = data.id;
    const advice = data.advice;

    loadContent(id, advice);
  } catch (e) {
    console.error(e);
  }
};
getAdvice();

btn.onclick = function () {
  getAdvice();
};
