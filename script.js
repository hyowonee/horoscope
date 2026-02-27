const zodiacData = [
    { name: '염소자리', icon: '♑', start: '01-01', end: '01-19', dates: '12.22 - 1.19' },
    { name: '물병자리', icon: '♒', start: '01-20', end: '02-18', dates: '1.20 - 2.18' },
    { name: '물고기자리', icon: '♓', start: '02-19', end: '03-20', dates: '2.19 - 3.20' },
    { name: '양자리', icon: '♈', start: '03-21', end: '04-19', dates: '3.21 - 4.19' },
    { name: '황소자리', icon: '♉', start: '04-20', end: '05-20', dates: '4.20 - 5.20' },
    { name: '쌍둥이자리', icon: '♊', start: '05-21', end: '06-21', dates: '5.21 - 6.21' },
    { name: '게자리', icon: '♋', start: '06-22', end: '07-22', dates: '6.22 - 7.22' },
    { name: '사자자리', icon: '♌', start: '07-23', end: '08-22', dates: '7.23 - 8.22' },
    { name: '처녀자리', icon: '♍', start: '08-23', end: '09-22', dates: '8.23 - 9.22' },
    { name: '천칭자리', icon: '♎', start: '09-23', end: '10-23', dates: '9.23 - 10.23' },
    { name: '전갈자리', icon: '♏', start: '10-24', end: '11-22', dates: '10.24 - 11.22' },
    { name: '사수자리', icon: '♐', start: '11-23', end: '12-21', dates: '11.23 - 12.21' },
    { name: '염소자리', icon: '♑', start: '12-22', end: '12-31', dates: '12.22 - 1.19' }
];

const horoscopeMessages = [
    "오늘은 우주의 에너지가 당신을 감싸고 있습니다. 직감을 믿고 과감한 결정을 내려도 좋은 날입니다.",
    "뜻밖의 반가운 소식이 들려올 수 있습니다. 오늘 하루는 주변의 작은 변화도 주의 깊게 살펴보세요.",
    "잠시 멈춰서 심호흡을 할 때입니다. 너무 서두르지 말고 현재의 순간을 즐기는 여유를 가지세요.",
    "당신의 숨겨진 매력이 빛을 발하는 날입니다. 평소보다 더 자신감 있게 자신을 표현해보세요.",
    "새로운 인연이 다가오고 있을지 모릅니다. 오늘 마주치는 사람들에게 따뜻한 미소를 건네보세요.",
    "오늘은 사소한 친절이 큰 행운으로 되돌아오는 날입니다. 주위 사람들에게 작은 도움을 줘보세요.",
    "오랫동안 해결되지 않았던 문제의 실마리가 보이기 시작합니다. 차분하게 상황을 분석해보세요.",
    "금전적인 흐름이 좋습니다. 하지만 충동적인 소비보다는 미래를 위한 작은 투자가 어울리는 날입니다.",
    "내면의 목소리에 집중하세요. 타인의 의견보다 당신 자신이 진정으로 원하는 것이 무엇인지 깨달을 수 있습니다.",
    "활기찬 에너지가 가득합니다! 미뤄뒀던 일이 있다면 오늘 시작해보는 것이 큰 성과를 가져다 줄 것입니다."
];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('horoscope-form');
    const resetBtn = document.getElementById('reset-btn');
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.getElementById('result-section');
    const birthdateInput = document.getElementById('birthdate');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const birthdateValue = birthdateInput.value;
        if (!birthdateValue) return;

        const date = new Date(birthdateValue);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${month}-${day}`;

        let userZodiac = null;

        for (const zodiac of zodiacData) {
            if (formattedDate >= zodiac.start && formattedDate <= zodiac.end) {
                userZodiac = zodiac;
                break;
            }
        }

        if (userZodiac) {
            showResult(userZodiac, birthdateValue);
        }
    });

    resetBtn.addEventListener('click', function() {
        resultSection.classList.add('hidden');
        inputSection.classList.remove('hidden');
        birthdateInput.value = '';
    });

    function showResult(zodiac, birthdate) {
        // Pseudo-random message generation based on birthdate + current date
        const today = new Date();
        const dateString = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        
        // Create a simple hash based on user's birthdate and today's date
        const seedString = birthdate + dateString + zodiac.name;
        let hash = 0;
        for (let i = 0; i < seedString.length; i++) {
            hash = (hash << 5) - hash + seedString.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        
        // Ensure positive index
        const messageIndex = Math.abs(hash) % horoscopeMessages.length;
        const todayMessage = horoscopeMessages[messageIndex];

        document.getElementById('zodiac-icon').textContent = zodiac.icon;
        document.getElementById('zodiac-name').textContent = zodiac.name;
        document.getElementById('zodiac-dates').textContent = zodiac.dates;
        document.getElementById('horoscope-text').textContent = todayMessage;

        inputSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
    }
});
