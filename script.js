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

// ── 카테고리별 운세 메시지 풀 ──
const generalMessages = [
    "오늘은 우주의 긍정적인 기운이 당신을 감싸는 날입니다. 평소 망설였던 도전을 실행에 옮기기에 좋은 타이밍이며, 직감이 특히 예리해지는 시기입니다. 작은 결정이라도 자신의 느낌을 믿고 과감히 나아가 보세요.",
    "주변 환경에 미묘한 변화가 감지됩니다. 사소해 보이는 대화나 우연한 만남 속에 중요한 힌트가 숨어 있을 수 있으니, 평소보다 관찰력을 높이고 열린 마음으로 하루를 보내보세요.",
    "지금은 속도를 늦추고 내면을 돌아볼 때입니다. 바쁜 일상에 치여 놓쳤던 자신의 진짜 감정과 욕구를 마주하면, 앞으로 나아갈 방향이 훨씬 뚜렷해질 것입니다. 조용한 산책이나 명상이 도움이 됩니다.",
    "당신의 숨겨진 재능과 매력이 주목받는 하루입니다. 회의 자리에서의 발언이든, 친구와의 대화에서의 위트이든, 자연스럽게 표현하면 주위 사람들이 당신을 새롭게 바라보게 될 것입니다.",
    "오랫동안 정체되어 있던 일이 갑자기 물꼬를 트는 기운이 보입니다. 포기하지 않고 꾸준히 노력해온 보람이 드디어 결실로 다가올 수 있으니, 끝까지 집중력을 유지하세요.",
    "새로운 시작을 위한 에너지가 충만합니다. 새 프로젝트, 새 취미, 새로운 관계 등 '처음'에 도전하기에 최적의 날입니다. 두려움보다 설렘에 집중하면 좋은 결과가 따라올 것입니다.",
    "오늘은 주변 사람들과의 협력이 빛을 발하는 날입니다. 혼자서 해결하려 했던 문제가 있다면 믿을 수 있는 동료나 친구에게 도움을 요청해 보세요. 예상 밖의 명쾌한 해답을 얻을 수 있습니다.",
    "감사의 마음을 표현할 때 행운이 배로 돌아오는 하루입니다. 그동안 당연하게 여겼던 주변의 도움을 다시 돌아보고, 작은 감사 인사로 관계의 깊이를 더해보세요.",
    "변화의 흐름 속에서 당신의 적응력이 빛을 발합니다. 예상치 못한 상황이 찾아오더라도 당황하지 말고 유연하게 대처하면, 오히려 더 나은 방향으로 상황이 전개될 것입니다.",
    "오늘 느끼는 작은 불안은 성장의 신호입니다. 안전 지대를 벗어나 한 걸음 더 나아가려는 내면의 원동력을 느끼고 있는 것이니, 그 에너지를 긍정적으로 활용해 보세요."
];

const loveMessages = [
    "연인이 있다면 평소 표현하지 못했던 진심을 전할 좋은 기회입니다. 화려한 이벤트보다 따뜻한 말 한마디가 상대의 마음을 깊이 울릴 수 있습니다. 솔로라면 관심 가는 사람에게 먼저 다가가 보세요.",
    "오늘은 관계 속 작은 오해가 풀리는 기운이 있습니다. 그동안 서운했던 감정이 있었다면 솔직하게 대화를 나눠보세요. 진정성 있는 소통이 두 사람의 거리를 확 좁혀줄 것입니다.",
    "새로운 인연의 기운이 감지됩니다. 모임이나 온라인 공간에서 뜻밖의 사람과 특별한 교감을 느낄 수 있으니, 첫인상에 얽매이지 말고 대화를 통해 상대를 알아가 보세요.",
    "연인과 함께하는 소소한 일상에서 큰 행복을 발견하는 날입니다. 거창한 데이트보다 함께 요리하거나, 산책하는 등 편안한 시간이 사랑을 더 깊게 만들어줄 것입니다.",
    "상대에게 지나치게 집착하기보다 나 자신을 가꾸는 데 에너지를 쏟아보세요. 자기 자신에게 충실한 모습이 오히려 상대에게 더 큰 매력으로 다가가게 되는 날입니다.",
    "가까운 사람과의 관계에서 '경청'이 핵심 키워드입니다. 내 의견을 전달하기보다 상대의 이야기에 귀 기울이면, 미처 몰랐던 상대의 속마음을 이해할 수 있는 소중한 순간이 옵니다.",
    "과거의 인연에 대한 미련이 있다면 오늘 깔끔하게 정리하기 좋은 날입니다. 집 안의 추억 물건을 정리하거나, 마음속으로 작별 인사를 건네면 새로운 사랑을 맞이할 공간이 열립니다.",
    "사랑에 있어 조급해하지 않아도 됩니다. 천천히 신뢰를 쌓아가는 관계가 결국 가장 오래가는 법입니다. 오늘은 상대를 있는 그대로 받아들이는 여유를 가져보세요."
];

const moneyMessages = [
    "금전적으로 안정적인 흐름이 이어지는 날입니다. 다만 충동 구매의 유혹이 있을 수 있으니, '24시간 규칙'을 적용하여 큰 지출은 하루 뒤에 다시 판단해보는 것이 현명합니다.",
    "예상치 못한 소식으로 재정 상황에 변화가 올 수 있습니다. 갑작스러운 보너스나 환급금 등 기분 좋은 소식일 가능성이 높지만, 수입이 들어오면 일정 비율을 저축하는 습관을 들여보세요.",
    "투자나 재테크에 관심이 있다면 오늘은 정보 수집에 집중하기 좋은 날입니다. 실행보다는 리서치에 시간을 투자하면 나중에 더 현명한 판단을 내릴 수 있을 것입니다.",
    "지출 관리에 신경 쓸 필요가 있는 하루입니다. 월말이 다가오기 전에 이번 달 예산을 점검하고, 불필요한 구독 서비스나 반복 지출이 없는지 한번 살펴보세요.",
    "사람에게 투자하는 것이 가장 큰 수익을 가져다주는 날입니다. 소중한 사람과의 식사, 감사의 선물 등에 쓰는 돈은 아깝지 않은 결과로 돌아올 것입니다.",
    "장기적인 재정 계획을 세우기에 좋은 날입니다. 1년 후, 5년 후의 목표를 구체적인 숫자로 적어보면, 오늘부터 실천할 수 있는 작은 절약 방법이 보입니다.",
    "금전 관련 결정은 감정보다 데이터에 기반하세요. 오늘은 주관적 판단이 흐려질 수 있으니, 중요한 투자나 큰 금액의 지출은 신뢰할 수 있는 전문가의 조언을 구하는 것이 좋습니다.",
    "나눔과 기부의 에너지가 좋은 날입니다. 작은 금액이라도 선한 곳에 쓰면 마음이 풍요로워지고, 예상치 못한 곳에서 금전적 행운이 찾아올 수 있습니다."
];

const healthMessages = [
    "에너지 레벨이 높은 하루입니다. 운동이나 야외 활동을 통해 이 에너지를 건강하게 발산해보세요. 특히 30분 이상의 유산소 운동이 하루의 컨디션을 한층 끌어올릴 것입니다.",
    "수분 섭취에 특히 신경 쓸 필요가 있는 날입니다. 카페인 음료 대신 따뜻한 물이나 허브 차를 가까이 두면, 오후의 집중력 저하를 예방하고 피부 컨디션도 좋아질 것입니다.",
    "정신 건강에 주목해야 할 때입니다. 스트레스가 쌓였다면 좋아하는 음악을 듣거나, 짧은 명상을 통해 마음을 리셋하세요. 5분의 호흡 운동만으로도 큰 차이를 느낄 수 있습니다.",
    "수면의 질이 건강에 큰 영향을 미치는 시기입니다. 오늘 밤은 스마트폰을 일찍 내려놓고, 취침 30분 전 가벼운 스트레칭으로 깊은 잠을 준비해보세요.",
    "소화 기능에 주의가 필요합니다. 오늘은 무겁고 자극적인 음식보다 소화가 잘 되는 따뜻한 음식을 선택하면 하루 종일 편안한 컨디션을 유지할 수 있을 것입니다.",
    "바른 자세에 신경 쓰면 컨디션이 크게 달라지는 날입니다. 장시간 앉아 있다면 한 시간마다 일어나 가볍게 스트레칭을 하고, 모니터 높이를 눈 높이에 맞춰보세요.",
    "자연과 함께하는 시간이 치유의 에너지를 줍니다. 점심시간에 공원을 산책하거나, 퇴근 후 가까운 산책로를 걸으면 몸과 마음이 모두 회복되는 것을 느낄 수 있습니다.",
    "면역력 관리에 좋은 날입니다. 비타민이 풍부한 과일이나 채소를 평소보다 조금 더 챙겨 먹고, 손 씻기와 환기 등 기본적인 위생 관리에 신경 쓰면 건강을 지킬 수 있습니다."
];

const luckyColors = [
    '로즈 골드', '미드나잇 블루', '에메랄드 그린', '라벤더', '코랄 핑크',
    '스카이 블루', '앰버 옐로우', '실버 그레이', '딥 퍼플', '민트',
    '터콰이즈', '버건디', '피치', '네이비', '아이보리'
];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('horoscope-form');
    const resetBtn = document.getElementById('reset-btn');
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.getElementById('result-section');

    const yearSelect = document.getElementById('birth-year');
    const monthSelect = document.getElementById('birth-month');
    const daySelect = document.getElementById('birth-day');

    // 년도 옵션 생성 (1920 ~ 올해)
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 1920; y--) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y + '년';
        yearSelect.appendChild(opt);
    }

    // 월 옵션 생성
    for (let m = 1; m <= 12; m++) {
        const opt = document.createElement('option');
        opt.value = String(m).padStart(2, '0');
        opt.textContent = m + '월';
        monthSelect.appendChild(opt);
    }

    // 일 옵션 생성
    function populateDays() {
        const selectedMonth = parseInt(monthSelect.value) || 1;
        const selectedYear = parseInt(yearSelect.value) || currentYear;
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        const currentDay = daySelect.value;

        daySelect.innerHTML = '<option value="" disabled selected>일</option>';
        for (let d = 1; d <= daysInMonth; d++) {
            const opt = document.createElement('option');
            opt.value = String(d).padStart(2, '0');
            opt.textContent = d + '일';
            daySelect.appendChild(opt);
        }

        if (parseInt(currentDay) <= daysInMonth) {
            daySelect.value = currentDay;
        }
    }

    yearSelect.addEventListener('change', populateDays);
    monthSelect.addEventListener('change', populateDays);
    populateDays();

    // 해시 함수: 문자열 → 정수
    function hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const year = yearSelect.value;
        const month = monthSelect.value;
        const day = daySelect.value;

        if (!year || !month || !day) return;

        const formattedDate = `${month}-${day}`;
        const birthdateValue = `${year}-${month}-${day}`;

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

    resetBtn.addEventListener('click', function () {
        resultSection.classList.add('hidden');
        inputSection.classList.remove('hidden');
        yearSelect.value = '';
        monthSelect.value = '';
        daySelect.innerHTML = '<option value="" disabled selected>일</option>';
        populateDays();
    });

    function showResult(zodiac, birthdate) {
        const today = new Date();
        const dateString = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        const baseSeed = birthdate + dateString + zodiac.name;

        // 카테고리별로 다른 시드를 사용하여 독립적인 메시지 선택
        const generalIdx = hashString(baseSeed + 'general') % generalMessages.length;
        const loveIdx = hashString(baseSeed + 'love') % loveMessages.length;
        const moneyIdx = hashString(baseSeed + 'money') % moneyMessages.length;
        const healthIdx = hashString(baseSeed + 'health') % healthMessages.length;
        const colorIdx = hashString(baseSeed + 'color') % luckyColors.length;
        const luckyNum = (hashString(baseSeed + 'number') % 99) + 1;

        document.getElementById('zodiac-icon').textContent = zodiac.icon;
        document.getElementById('zodiac-name').textContent = zodiac.name;
        document.getElementById('zodiac-dates').textContent = zodiac.dates;

        document.getElementById('fortune-general').textContent = generalMessages[generalIdx];
        document.getElementById('fortune-love').textContent = loveMessages[loveIdx];
        document.getElementById('fortune-money').textContent = moneyMessages[moneyIdx];
        document.getElementById('fortune-health').textContent = healthMessages[healthIdx];
        document.getElementById('lucky-number').textContent = '🔢 행운의 숫자: ' + luckyNum;
        document.getElementById('lucky-color').textContent = '🎨 행운의 색: ' + luckyColors[colorIdx];

        inputSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
    }
});
