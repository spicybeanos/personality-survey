class Vector5 {
    constructor(i, n, t, p, a) {
        this.I = i;
        this.N = n;
        this.T = t;
        this.P = p;
        this.A = a;
    }
    multiply(k) {
        this.I = this.I * k;
        this.N = this.N * k;
        this.T = this.T * k;
        this.P = this.P * k;
        this.A = this.A * k;
    }
}

const QuestionVectors =
    [
        {
            text: "You regularly make new friends.",
            vect: new Vector5(-1, 0, 0, 0),
            id: 1
        },
        {
            text: "You spend a lot of your free time exploring various random topics that pique your interest.",
            vect: new Vector5(0, 1, 0, 0, 0),
            id: 2
        },
        {
            text: "Seeing other people cry can easily make you feel like you want to cry too. ",
            vect: new Vector5(0, 0, 1, 0, 0),
            id: 3
        },
        {
            text: "You often make a backup plan for a backup plan. ",
            vect: new Vector5(0, 0, 0, 1, 0)
            ,
            id: 4
        },
        {
            text: "You usually stay calm, even under a lot of pressure. ",
            vect: new Vector5(0, 0, 0, 0, 1),
            id: 5
        },
        {
            text: "At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know. ",
            vect: new Vector5(1, 0, 0, 0, 0),
            id: 6
        },
        {
            text: "You prefer to completely finish one project before starting another. ",
            vect: new Vector5(0, 0, 0, 1, 0),
            id: 7
        },
        {
            text: "You are very sentimental.",
            vect: new Vector5(0, 0, 1, 0, 0),
            id: 8
        },
        {
            text: "You like to use organizing tools like schedules and lists. ",
            vect: new Vector5(0, 0, 0, 1, 0),
            id: 9
        },
        {
            text: "Even a small mistake can cause you to doubt your overall abilities and knowledge. ",
            vect: new Vector5(0, 0, 0, 0, -1),
            id: 10
        },
        {
            /*
            not sure if A or E or both
            */
            text: "You feel comfortable just walking up to someone you find interesting and striking up a conversation. ",
            vect: new Vector5(0.7, 0, 0, 0, 0.7),
            id: 11
        },
        {
            text: "You are not too interested in discussing various interpretations and analyses of creative works. ",
            vect: new Vector5(0, -1, 0, 0, 0),
            id: 12
        },
        {
            text: "You are more inclined to follow your head than your heart. ",
            vect: new Vector5(0, 0, 1, 0, 0),
            id: 13
        },
        {
            text: "You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine. ",
            vect: new Vector5(0, 0.7, 0, -0.7, 0),
            id: 14
        },
        {
            text: "You rarely worry about whether you make a good impression on people you meet. ",
            vect: new Vector5(0, 0, 0, 0, 1),
            id: 15
        },
        {
            text: "You enjoy participating in group activities. ",
            vect: new Vector5(1, 0, 0, 0, 0),
            id: 16
        },
        {
            text: "You like books and movies that make you come up with your own interpretation of the ending. ",
            vect: new Vector5(0, 1, 0, 0, 0),
            id: 17
        },
        {
            text: "Your happiness comes more from helping others accomplish things than your own accomplishments. ",
            vect: new Vector5(0.7, 0, 0.7, 0, 0),
            id: 18
        },
        {
            text: "You are interested in so many things that you find it difficult to choose what to try next. ",
            vect: new Vector5(0, -0.7, 0, 0.7, 0),
            id: 19
        },
        {
            text: "You are prone to worrying that things will take a turn for the worse. ",
            vect: new Vector5(0, 0, 0, 0, -1),
            id: 20
        },
        {
            text: "You avoid leadership roles in group settings. ",
            vect: new Vector5(0.7, 0, 0, 0, -0.7),
            id: 21
        },
        {
            text: "You are definitely not an artistic type of person. ",
            vect: new Vector5(0, 0, -1, 0, 0),
            id: 22
        },
        {
            text: "You think the world would be a better place if people relied more on rationality and less on their feelings. ",
            vect: new Vector5(0, 0, 1, 0, 0),
            id: 23
        },
        {
            text: "You prefer to do your chores before allowing yourself to relax. ",
            vect: new Vector5(0, 0, 0, -1, 0),
            id: 24
        },
        {
            text: "You enjoy watching people argue. ",
            vect: new Vector5(0, 1, 1, 0, 0),
            id: 25
        },
        {
            text: "You tend to avoid drawing attention to yourself. ",
            vect: new Vector5(1, 0, 0, 0, -1),
            id: 26
        },
        {
            text: "Your mood can change very quickly. ",
            vect: new Vector5(0, -1, 0, 0, -1),
            id: 27
        },
        {
            text: "You lose patience with people who are not as efficient as you. ",
            vect: new Vector5(0, 0, 1, 0, 0),
            id: 28
        },
        {
            text: "You often end up doing things at the last possible moment. ",
            vect: new Vector5(0, 0, 0, 1, 0),
            id: 29
        },
        {
            text: "You have always been fascinated by the question of what, if anything, happens after death. ",
            vect: new Vector5(0, 0.7, 0.7, 0, 0),
            id: 30
        },
        {
            text: "You usually prefer to be around others rather than on your own. ",
            vect: new Vector5(-1, 0, 0, 0, 0),
            id: 31
        },
        {
            text: "You become bored or lose interest when the discussion gets highly theoretical. ",
            vect: new Vector5(0, -1, 0, 0, 0),
            id: 32
        },
        {
            text: "You find it easy to empathize with a person whose experiences are very different from yours. ",
            vect: new Vector5(0, 0.7, 0.7, 0, 0),
            id: 33
        },
        {
            text: "You usually postpone finalizing decisions for as long as possible. ",
            vect: new Vector5(0, 0, 0, 1, 0),
            id: 34
        },
        {
            text: "You rarely second-guess the choices that you have made. ",
            vect: new Vector5(0, 0, 0, 0, 1),
            id: 35
        },
        {
            text: "After a long and exhausting week, a lively social event is just what you need. ",
            vect: new Vector5(-1, 0, 0, 0, 0),
            id: 36
        },
        {
            text: "You enjoy going to art museums.",
            vect: new Vector5(0.7, 0.7, 0, 0, 0),
            id: 37
        },
        {
            text: "You often have a hard time understanding other people’s feelings. ",
            vect: new Vector5(0, 0, 1, 0, 0),
            id: 38
        },
        {
            text: "You like to have a to-do list for each day. ",
            vect: new Vector5(0, 0, 0, -1, 0),
            id: 39
        },
        {
            text: "You rarely feel insecure. ",
            vect: new Vector5(0, 0, 0, 0, -1),
            id: 40
        },
        {
            text: "You avoid making phone calls. ",
            vect: new Vector5(1, 0, 0, 0, 0),
            id: 41
        },
        {
            text: "You often spend a lot of time trying to understand views that are very different from your own. ",
            vect: new Vector5(0, 0.7, 0.7, 0, 0),
            id: 42
        },
        {
            text: "In your social circle, you are often the one who contacts your friends and initiates activities. ",
            vect: new Vector5(-1, 0, 0, 0, 0),
            id: 43
        },
        {
            text: "If your plans are interrupted, your top priority is to get back on track as soon as possible. ",
            vect: new Vector5(0, 0, 0, -1, 0),
            id: 44
        },
        {
            text: "You are still bothered by mistakes that you made a long time ago. ",
            vect: new Vector5(0, 0, 0, 0, -1),
            id: 45
        },
        {
            text: "You rarely contemplate the reasons for human existence or the meaning of life. ",
            vect: new Vector5(0, -1, 0, 0, 0),
            id: 46
        },
        {
            text: "Your emotions control you more than you control them. ",
            vect: new Vector5(0, 0, -1, 0, 0),
            id: 47
        },
        {
            text: "You take great care not to make people look bad, even when it is completely their fault. ",
            vect: new Vector5(0, -1, -1, 0, 0),
            id: 48
        },
        {
            text: "Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts. ",
            vect: new Vector5(0, 0, 0, -1, 0),
            id: 49
        },
        {
            text: "When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you. ",
            vect: new Vector5(0, 0, 0, 0, -1),
            id: 50
        },
        {
            text: "You would love a job that requires you to work alone most of the time. ",
            vect: new Vector5(1, 0, 0, 0, 0),
            id: 51
        },
        {
            text: "You believe that pondering abstract philosophical questions is a waste of time. ",
            vect: new Vector5(0, -1, -1, 0, 0),
            id: 52
        },
        {
            text: "You feel more drawn to places with busy, bustling atmospheres than quiet, intimate places. ",
            vect: new Vector5(-1, 0, 0, 0, 0),
            id: 53
        },
        {
            text: "You know at first glance how someone is feeling. ",
            vect: new Vector5(0, -0.7, -0.7, 0, 0),
            id: 54
        },
        {
            text: "You often feel overwhelmed. ",
            vect: new Vector5(0, 0, 0, 0, -1),
            id: 55
        },
        {
            text: "You complete things methodically without skipping over any steps. ",
            vect: new Vector5(0, 0, 0.7, -0.7, 0),
            id: 56
        },
        {
            text: "You are very intrigued by things labeled as controversial. ",
            vect: new Vector5(0, 0.7, 0.7, 1, 1),
            id: 57
        },
        {
            text: "You would pass along a good opportunity if you thought someone else needed it more. ",
            vect: new Vector5(0, 0, -0.7, 0.7, 0),
            id: 58
        },
        {
            text: "You struggle with deadlines. ",
            vect: new Vector5(0, 0, 0, -1, 0),
            id: 59
        },
        {
            text: "You feel confident that things will work out for you.",
            vect: new Vector5(0, 0, 0, 0, 1),
            id: 60
        }
    ];

    export default QuestionVectors;