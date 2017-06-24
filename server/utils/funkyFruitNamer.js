function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var titleCaseTheArray = function(arr) {
	var newArr = [];
	for (var i=0; i<arr.length; i++) {
		newArr.push(toTitleCase(arr[i]));
	}

	return newArr
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

var fruitNames = 'Apple,Apricot,Avocado,Banana,Bilberry,Blackberry,Blackcurrant,Blueberry,Boysenberry,Currant,Cherry,Cherimoya,Cloudberry,Coconut,Cranberry,Cucumber,Custard apple,Damson,Date,Dragonfruit,Durian,Elderberry,Feijoa,Fig,Goji berry,Gooseberry,Grape,Raisin,Grapefruit,Guava,Honeyberry,Huckleberry,Jabuticaba,Jackfruit,Jambul,Jujube,Juniper berry,Kiwifruit,Kumquat,Lemon,Lime,Loquat,Longan,Lychee,Mango,Marionberry,Melon,Cantaloupe,Honeydew,Watermelon,Miracle fruit,Mulberry,Nectarine,Nance,Olive,Orange,Blood orange,Clementine,Mandarine,Tangerine,Papaya,Passionfruit,Peach,Pear,Persimmon,Physalis,Plantain,Plum,Prune ,Pineapple,Plumcot,Pomegranate,Pomelo,Purple mangosteen,Quince,Raspberry,Salmonberry,Rambutan,Redcurrant,Salal berry,Salak,Satsuma,Soursop,Star fruit,Solanum quitoense,Strawberry,Tamarillo,Tamarind,Ugli fruit,Yuzu,Avocado,Chili pepper,Corn kernel,Cucumber,Eggplant,Olive,Pea,Squash,Sunflower seed,Tomato'.split(',')
var adjectives = 'addicting,afraid,agreeable,amused,ancient,angry,annoyed,anxious,arrogant,ashamed,average,awful,bad,beautiful,better,big,bitter,black,blue,boiling,brave,breezy,brief,bright,broad,broken,bumpy,calm,careful,charming,cheerful,chilly,clumsy,cold,colossal,combative,comfortable,confused,cooing,cool,cooperative,courageous,crazy,creepy,cruel,cuddly,curly,curved,damp,dangerous,deafening,deep,defeated,defiant,delicious,delightful,depressed,determined,dirty,disgusted,disturbed,dizzy,dry,dull,dusty,eager,early,elated,embarrassed,empty,encouraging,energetic,enthusiastic,envious,evil,excited,exuberant,faint,fair,faithful,fantastic,fast,fat,few,fierce,filthy,fine,flaky,flat,fluffy,foolish,forlorn,frail,frantic,fresh,friendly,frightened,funny,fuzzy,gentle,giant,gigantic,good,gorgeous,greasy,great,green,grieving,grubby,grumpy,handsome,happy,hard,harsh,healthy,heavy,helpful,helpless,high,hilarious,hissing,hollow,homeless,horrible,hot,huge,hungry,hurt,hushed,husky,icy,ill,immense,itchy,jealous,jittery,jolly,juicy,kind,large,late,lazy,light,little,lively,lonely,long,loose,loud,lovely,low,lucky,magnificent,mammoth,many,massive,melodic,melted,mighty,miniature,moaning,modern,mute,mysterious,narrow,nasty,naughty,nervous,new,nice,nosy,numerous,nutty,obedient,obnoxious,odd,old,orange,ordinary,outrageous,panicky,perfect,petite,plastic,pleasant,precious,pretty,prickly,proud,puny,purple,purring,quaint,quick,quickest,quiet,rainy,rapid,rare,raspy,ratty,red,relieved,repulsive,resonant,ripe,roasted,robust,rotten,rough,round,sad,salty,scary,scattered,scrawny,screeching,selfish,shaggy,shaky,shallow,sharp,shivering,short,shrill,silent,silky,silly,skinny,slimy,slippery,slow,small,smart,smiling,smooth,soft,solid,sore,sour,spicy,splendid,spotty,square,squealing,stale,steady,steep,sticky,stingy,straight,strange,striped,strong,stupendous,successful,sweet,swift,tall,tame,tan,tart,tasteless,tasty,tender,tender,tense,terrible,testy,thirsty,thoughtful,thoughtless,thundering,tight,tiny,tired,tough,tricky,troubled,ugliest,ugly,uneven,upset,uptight,vast,victorious,vivacious,voiceless,wasteful,watery,weak,weary,wet,whispering,wicked,wide,witty,wonderful,wooden,worried,yellow,young,yummy,zany'.split(',')


var words = {
	fruitNames: titleCaseTheArray(fruitNames),
	adjectives: titleCaseTheArray(adjectives),
}

module.exports = {
	getName: function() {
		var name = words.adjectives[getRandomInt(0, words.adjectives.length-1)];
		name += ' ';
		name += words.fruitNames[getRandomInt(0, words.fruitNames.length-1)];
		return name
	}
}
