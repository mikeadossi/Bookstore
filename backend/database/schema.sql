DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  genre VARCHAR(12) ,
  title VARCHAR(256) ,
  image_url VARCHAR(512),
  description TEXT,
  isbn VARCHAR(50) ,
  author_name VARCHAR(40) ,
  list_price VARCHAR(10) ,
  publisher VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY ,
  username VARCHAR(20) ,
  password VARCHAR(256)
);

INSERT INTO books (list_price, publisher, genre, title, image_url, description, isbn, author_name)
VALUES ('$16.99','Back Bay Books; Reprint edition (June 7, 2011)','non-fiction','Outliers','https://images-na.ssl-images-amazon.com/images/I/41h5QL0vVEL._SX327_BO1,204,203,200_.jpg','In this stunning new book, Malcolm Gladwell takes us on an intellectual journey through the world of "outliers"--the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different?
His answer is that we pay too much attention to what successful people are like, and too little attention to where they are from: that is, their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Along the way he explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math, and what made the Beatles the greatest rock band.
Brilliant and entertaining, Outliers is a landmark work that will simultaneously delight and illuminate.','0316017930','Malcolm Gladwell'),

('$17.00','Back Bay Books; 1 edition (April 3, 2007)','non-fiction', 'Blink', 'http://media.tumblr.com/tumblr_m1vljysTbD1rn2kl4.jpg','Blink is a book about how we think without thinking, about choices that seem to be made in an instant-in the blink of an eye-that actually arent as simple as they seem. Why are some people brilliant decision makers, while others are consistently inept? Why do some people follow their instincts and win, while others end up stumbling into error? How do our brains really work-in the office, in the classroom, in the kitchen, and in the bedroom? And why are the best decisions often those that are impossible to explain to others?','9780316010665','Malcolm Gladwell'),

('$16.99','HarperOne; 25 Anv edition (April 15, 2014)','fiction','The Alchemist','https://images-na.ssl-images-amazon.com/images/I/41ybG235TcL._SX329_BO1,204,203,200_.jpg', 'The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired.
Paulo Coelhos masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.
The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along lifes path, and, above all, following our dreams.','0062315005','Paulo Coelho'),

('$22.00','Knopf; First Edition/First Printing edition (November 22, 2016)','fiction','The Spy: A novel', 'https://images-na.ssl-images-amazon.com/images/I/51bxN2lZrnL._SX319_BO1,204,203,200_.jpg', 'HER ONLY CRIME WAS TO BE AN INDEPENDENT WOMAN. When Mata Hari arrived in Paris she was penniless.  Within months she was the most celebrated woman in the city. As a dancer, she shocked and delighted audiences; as a courtesan, she bewitched the era’s richest and most powerful men. But as paranoia consumed a country at war, Mata Hari’s lifestyle brought her under suspicion. In 1917, she was arrested in her hotel room on the Champs Elysees, and accused of espionage. Told in Mata Hari’s voice through her final letter, The Spy is the unforgettable story of a woman who dared to defy convention and who paid the ultimate price.', '1524732060', 'Paulo Coelho'),

('$18.95','W. W. Norton & Company; 1 edition (May 2, 2017)','non-fiction','Astrophysics for People in a Hurry','https://images-na.ssl-images-amazon.com/images/I/51kyOGIHeIL._SX306_BO1,204,203,200_.jpg','What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There’s no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson. But today, few of us have time to contemplate the cosmos. So Tyson brings the universe down to Earth succinctly and clearly, with sparkling wit, in tasty chapters consumable anytime and anywhere in your busy day.While you wait for your morning coffee to brew, for the bus, the train, or a plane to arrive, Astrophysics for People in a Hurry will reveal just what you need to be fluent and ready for the next cosmic headlines: from the Big Bang to black holes, from quarks to quantum mechanics, and from the search for planets to the search for life in the universe.','0393609391','Neil deGrasse Tyson'),

('$39.95','Princeton University Press (September 29, 2016)','non-fiction','Welcome to the Universe: An Astrophysical Tour','https://images-na.ssl-images-amazon.com/images/I/51mevO4joXL._SX352_BO1,204,203,200_.jpg','Welcome to the Universe is a personal guided tour of the cosmos by three of todays leading astrophysicists. Inspired by the enormously popular introductory astronomy course that Neil deGrasse Tyson, Michael A. Strauss, and J. Richard Gott taught together at Princeton, this book covers it all--from planets, stars, and galaxies to black holes, wormholes, and time travel. Describing the latest discoveries in astrophysics, the informative and entertaining narrative propels you from our home solar system to the outermost frontiers of space. How do stars live and die? Why did Pluto lose its planetary status? What are the prospects of intelligent life elsewhere in the universe? How did the universe begin? Why is it expanding and why is its expansion accelerating? Is our universe alone or part of an infinite multiverse? Answering these and many other questions, the authors open your eyes to the wonders of the cosmos, sharing their knowledge of how the universe works. Breathtaking in scope and stunningly illustrated throughout, Welcome to the Universe is for those who hunger for insights into our evolving universe that only world-class astrophysicists can provide.','0691157243', 'Neil deGrasse Tyson'),

('$19.95','W. W. Norton & Company; 1 edition (September 2, 2014)
','non-fiction','Origins: Fourteen Billion Years of Cosmic Evolution','https://images-na.ssl-images-amazon.com/images/I/51LHtKHoldL._SX331_BO1,204,203,200_.jpg','Our true origins are not just human, or even terrestrial, but in fact cosmic. Drawing on recent scientific breakthroughs and the current cross-pollination among geology, biology, astrophysics, and cosmology, ?Origins? explains the soul-stirring leaps in our understanding of the cosmos. From the first image of a galaxy birth to Spirit Rovers exploration of Mars, to the discovery of water on one of Jupiters moons, coauthors Neil deGrasse Tyson and Donald Goldsmith conduct a galvanizing tour of the cosmos with clarity and exuberance. 32 pages of color illustrations','0393350398','Neil deGrasse Tyson');
