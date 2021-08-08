const saying = [
    {a : "유행은 유행에 뒤떨어질 수 밖에 없게 만들어진다.",
    b : "가브리엘(코코)샤넬"},
    {a: "미래는 탁한 거울이다. 누구든 들여다 보려 하면 늙고 근심 어린 얼굴의 희미한 윤곽만 볼 뿐이다.",
    b: "짐 비숍" },
    {a: "현재뿐 아니라 미래까지 걱정한다면 인생은 살 가치가 없을 것이다.",
    b: "윌리엄 서머셋 모옴"},
    {a: "일 분 전만큼 먼 시간은 없다.",
    b: "짐 비숍"},
    {a: "당신은 지체할 수도 있지만 시간은 그러하지 않을 것이다.",
    b: "벤자민 프랭클린"},
    {a: "미래에 사로잡혀있으면 현재를 있는 그대로 볼 수 없을 뿐 아니라 과거까지 재구성하려 들게 된다.",
    b: "에릭 호퍼"},
    {a: "우리는 오늘은 이러고 있지만, 내일은 어떻게 될지 누가 알아요?",
    b: "윌리엄 셰익스피어"},
    {a: "과거에서 멀어질수록 나 자신의 인격 형성에 더 가까워진다.",
    b: "이자벨 에버하트"}
];
const wiseSaying = document.querySelector(".time_wise_saying");
const autor = document.querySelector(".time_wise_saying_autor");

const todaySpirit = saying[Math.floor(Math.random() * saying.length)];

wiseSaying.innerText = todaySpirit.a;
autor.innerText = `-${todaySpirit.b}-`