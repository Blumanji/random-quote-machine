// JSON quote table:

var quoteTable = [
  {
    "quote": "If you cannot get rid of the family skeleton, you may as well make it dance.",
    "author": "George Bernard Shaw"
  },
  {
    "quote": "You can't start a diet in the middle of the week, that's just stupid.",
    "author": "Charles Barkley"
  },
  {
    "quote": "The world breaks everyone, and afterward, some are strong at the broken places.",
    "author": "Ernest Hemingway"
  },
  {
    "quote": "He who believes is strong; he who doubts is weak. Strong convictions precede great actions.",
    "author": "Louisa May Alcott"
  },
  {
    "quote": "I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day and I believe in miracles.",
    "author": "Audrey Hepburn"
  },
  {
    "quote": "That which does not kill us makes us stronger.",
    "author": "Friedrich Nietzsche"
  },
  {
    "quote": "The way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
  },
  {
    "quote": "People who are crazy enough to think they can change the world, are the ones who do.",
    "author": "Rob Siltanen"
  },
  {
    "quote": "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    "author": "Johann Wolfgang Von Goethe"
  },
  {
    "quote": "We generate fears while we sit. We overcome them by action.",
    "author": "Dr. Henry Link"
  },
  {
    "quote": "You are never too old to set another goal or to dream a new dream.",
    "author": "C.S. Lewis"
  },
  {
    "quote": "Reading is to the mind, as exercise is to the body.",
    "author": "Brian Tracy"
  },
  {
    "quote": "A day without sunshine is like, you know, night.",
    "author": "Steve Martin"
  },
  {
    "quote": "Man cannot live by bread alone; he must have peanut butter.",
    "author": "James A. Garfield"
  },
  {
    "quote": "If at first you don't succeed... So much for skydiving.",
    "author": "Henny Youngman"
  },
  {
    "quote": "Gambling: The sure way of getting nothing for something.",
    "author": "Wilson Mizner"
  },
  {
    "quote": "You need to be silly to be funny.",
    "author": "William Shatner"
  },
  {
    "quote": "People don't think it be like it is, but it do.",
    "author": "Black Science Man"
  },
  {
    "quote": "A day without sunshine is like, you know, night.",
    "author": "Arnold Schwarzenegger"
  },
  {
    "quote": "Swag, swag, swag on you, chillin' by the fire while we eatin' fondue.",
    "author": "Justin Bieber"
  },
  {
    "quote": "It is our choices that show who we truly are, far more than our abilities.",
    "author": "Albus Dumbledore"
  },
];

var currentQuote = '', currentAuthor = '';

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
function getQuote() {
  
     var rand = Math.floor(Math.random() * quoteTable.length);
      currentQuote = quoteTable[rand].quote;
      currentAuthor = quoteTable[rand].author;
      $('#quote-text').text('"' + currentQuote + '"');
      $('#quote-text').animateCss('fadeInDown');
      $('#quote-auth').text( ""+currentAuthor);
      $('#quote-auth').animateCss('fadeInLeft');
if(inIframe())
      {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
      };
};
$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
  $('#tumblr-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    }
  });
});