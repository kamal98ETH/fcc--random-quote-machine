const QUOTES = [
    {
        text: "Certain things catch your eye, but pursue only those that capture the heart.",
        author: "Ancient Indian Proverb"
    },
    {
        text: "Definiteness of purpose is the starting point of all achievement.",
        author: "W. Clement Stone"
    },
    {
        text: "Everything has beauty, but not everyone can see.",
        author: "Confucius"
    },
    {
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        text: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    },
    {
        text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "Aristotle"
    },
    {
        text: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        text: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
        author: "Sheryl Sandberg"
    },
    {
        text: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
        author: "Ann Landers"
    },
    {
        text: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
        author: "Tony Robbins"
    },
    {
        text: "It’s not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        text: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King Jr."
    },
    {
        text: "I didn’t fail the test. I just found 100 ways to do it wrong.",
        author: "Benjamin Franklin"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        text: "Life is what happens to you while you’re busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse"
    },
    {
        text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        text: "A truly rich man is one whose children run into his arms when his hands are empty.",
        author: "Unknown"
    },
    {
        text: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
        author: "Rosa Parks"
    },
    {
        text: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        author: "Marie Curie"
    },
    {
        text: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
        author: "Jesse Owens"
    },
    {
        text: "Fall seven times and stand up eight.",
        author: "Japanese Proverb"
    },
    {
        text: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        author: "Bob Dylan"
    },
    {
        text: "Believe you can and you’re halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author: "Dalai Lama"
    },
    {
        text: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
        author: "Booker T. Washington"
    },
    {
        text: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
        author: "Unknown"
    },
    {
        text: "Education costs money. But then so does ignorance.",
        author: "Sir Claus Moser"
    }
];

const COLORS = ["#34568B", "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#955251", "#B565A7", "#009B77", "#DD4124", "#D65076", "#45B8AC", "#EFC050", "#5B5EA6", "#9B2335", "#DFCFBE", "#55B4B0", "#E15D44", "#7FCDCD", "#BC243C", "#C3447A", "#98B4D4"];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: QUOTES[Math.floor(Math.random() * QUOTES.length)],
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        }
        this.newQuote = this.newQuote.bind(this);
    }

    newQuote() {
        this.setState(
            {
                quote: QUOTES[Math.floor(Math.random() * QUOTES.length)],
                color: COLORS[Math.floor(Math.random() * COLORS.length)]
            }
        );
        document.getElementById("text").animate([{ opacity: 0 }, { opacity: 1 }], 1000);
        document.getElementById("author").animate([{ opacity: 0 }, { opacity: 1 }], 1000);
        document.getElementById('container').style.transition = "1s";
    }

    tweet() {
        let link = "https://twitter.com/intent/tweet?hashtags=quotes&related=kamal&text=%22" + this.state.quote.text + ".%22%20" + this.state.quote.author;
        return link
    }

    tumb() {
        let link = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,kamal&caption=" + this.state.quote.author + "&content= " + this.state.quote.text + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
        return link;
    }

    render() {
        return (
            <div id="container" style={{ backgroundColor: this.state.color }}>
                <div id="quote-box" style={{ color: this.state.color }}>
                    <div id="text">
                        <i className="fa-solid fa-quote-left"></i>
                        {this.state.quote.text}
                        <i className="fa-solid fa-quote-right"></i>
                    </div>

                    <div id="author">
                        - {this.state.quote.author}
                    </div>
                    <div id="buttons">
                        <div id="socials" style={{ color: this.state.color }}>
                            <a href={this.tweet()} id="tweet-quote" target="_blank"><i className="fa-brands fa-square-twitter" style={{ color: this.state.color }}></i></a>
                            <a href={this.tumb()} id="tumbler-quote" target="_blank"><i className="fa-brands fa-square-tumblr" style={{ color: this.state.color }}></i></a>
                        </div>
                        <button onClick={this.newQuote} id="new-quote" style={{ backgroundColor: this.state.color }}>New quote</button>
                    </div>
                </div>
                <p id="credit">by kamal</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))