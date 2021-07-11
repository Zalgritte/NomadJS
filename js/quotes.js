const quotes = [
    {
        quote : "우리는 받아서 삶을 꾸려나가고 주면서 인생을 꾸며나간다.",
        author : "윈스턴 처칠",
    },
    {
        quote : "우리는 항상 젊음을 위해 미래를 개발할 수는 없지만, 미래를 위해 우리의 젊음을 개발할 수는 있다.",
        author : "프랭클린 D. 루스벨트",
    },
    {
        quote : "젊음은 한때 이지만, 철없음은 영원할 수 있다.",
        author : "데이브 배리",
    },
    {
        quote : "확실히, 여행은 단순한 관광 이상이다. 여행은 삶에 관한 상념들에 계속해서 일어나는 깊고, 영구적인 변화이다.",
        author : "미리엄 비어드",
    },
    {
        quote : "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
        author : "공자",
    },
    {
        quote : "여행은 되돌아 보았을 때에만 매력적이다.",
        author : "폴 서룩스",
    },
    {
        quote : "인생은 3막이 고약하게 쓰여진 조금 괜찮은 연극이다.",
        author : "트루먼 카포트",
    },
    {
        quote : "인생에는 서두르는 것 말고도 더 많은 것이 있다.",
        author : "마하트마 간디",
    },
    {
        quote : "당혹스럽게도 나는 침대에서 여자와 함께 태어났다.",
        author : "윌슨 미즈너",
    },
    {
        quote : "인생은 과감한 모험이던가, 아니면 아무 것도 아니다.",
        author : "헬렌 켈러",
    },
    {
        quote : "아침에 몸단장을 하고 나면 정성들여 별의 몸단장을 해주어야 해.",
        author : "생텍쥐페리",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;