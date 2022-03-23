# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "breweries"
 
Brewery.create(name: "10-56 Brewing Company", street: "400 Brown Cir", city: "Knox", state: "Indiana", phone_number: "6308165790")
 
Brewery.create(name: "10 Barrel Brewing Co", street: "62970 18th St", city: "Bend", state: "Oregon", phone_number: "5415851007")
 
Brewery.create(name: "Monkish Brewing Co", street: "20311 South Western Avenue", city: "Torrance", state: "California", phone_number: "3102952157")
 
Brewery.create(name: "HUDL Brewing Company", street: "1327 S Main St Ste 100", city: "Las Vegas", state: "Nevada", phone_number: "7024457100")
 
Brewery.create(name: "Greenport Harbor Brewing Company", street: "234 Carpenter Street", city: "Greenport", state: "New York", phone_number: "6314776681")
 
Brewery.create(name: "Finback Brewery", street: "78-01 77th Ave", city: "Glendale", state: "New York", phone_number: "7186288600")

puts "beer styles"
 
BeerStyle.create(name: "Lager", description: "Lager is beer which has been brewed and conditioned at low temperature. Lagers can be pale, amber, or dark. Pale lager is the most widely consumed and commercially available style of beer.")
 
BeerStyle.create(name: "Ale", description: "Ale is a type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste. As with most beers, ale typically has a bittering agent to balance the malt and act as a preservative. Ale was originally bittered with gruit, a mixture of herbs or spices boiled in the wort before fermentation.")
 
BeerStyle.create(name: "India Pale Ale (IPA)", description: "India pale ale (IPA) is a hoppy beer style within the broader category of pale ale. The style of pale ale which became known as India pale ale was widespread in England by 1815, and would grow in popularity, notably as an export beer shipped to India (which was under the control of the British East India Company until 1858) and elsewhere.")
 
BeerStyle.create(name: "Pale Ale", description: "Pale ale is a typically golden to amber coloured style of ale which is brewed using an ale yeast and predominantly pale malt. The term first appeared around 1703 for beers made from malts dried with high-carbon coke, which resulted in a lighter colour than other beers popular at that time. Different brewing practices and hop quantities have resulted in a range of tastes and strengths within the pale ale family.")

BeerStyle.create(name: "Stout", description: "Stout is a dark, top-fermented beer with a number of variations, including dry stout, oatmeal stout, milk stout, and imperial stout.")
 
BeerStyle.create(name: "Porter", description: "Porter is a style of beer that was developed in London, England, in the early 18th century. It was well-hopped and dark in appearance owing to the use of brown malt." )
 
BeerStyle.create(name: "Brown Ale", description: "Brown ale is a style of beer with a dark amber or brown colour. Beers termed brown ale include sweet, low alcohol beers such as Manns Original Brown Ale, medium strength amber beers of moderate bitterness such as Newcastle Brown Ale, and malty but hoppy beers such as Sierra Nevada Brown Ale.")
 
BeerStyle.create(name: "Sour Ale", description: "Sour ale is beer which has an intentionally acidic, tart, or sour taste. Sour beers are made by intentionally allowing wild yeast strains or bacteria into the brew, traditionally through the barrels or during the cooling of the wort in a coolship open to the outside air.")

puts "user"

User.create(name: "Ashley", email: "ashleymattam27@gmail.com", password: "123", admin: true)
User.create(name: "Chris", email: "christhomas@gmail.com", password: "123", admin: true)
User.create(name: "Jessica", email: "jessicajohn@gmail.com", password: "123", admin: true)

puts "beers"
 
Beer.create(name: "Festival", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-23_at_4.51.10_PM_9IFz4qQyB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648068705017", flavor: "Fruit & Spice", brewery_id: 1, beer_style_id: 2, user_id: 1 )
 
Beer.create(name: "Double PB & Jeff W/ Strawberry", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.00.25_PM_w5Lpay1b6R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647550859647", flavor: "Malty & Sweet", brewery_id: 1, beer_style_id: 7, user_id: 1)
 
Beer.create(name: "Nature Calls", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.02.16_PM_8BS_ubC8H4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647550949146", flavor: "Fruit & Spice", brewery_id: 2, beer_style_id: 3, user_id: 2 )
 
Beer.create(name: "Guava Crush", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.05.38_PM_vndrqNYcnl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647551151315", flavor: "Crisp & Clean", brewery_id: 2, beer_style_id: 2, user_id: 2)
 
Beer.create(name: "Anomaly", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226", flavor: "Dark & Roasty", brewery_id: 3, beer_style_id: 2, user_id: 3 )
 
Beer.create(name: "Foggy Window", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226", flavor: "Hoppy & Bitter", brewery_id: 3, beer_style_id: 3, user_id: 3)
 
Beer.create(name: "Spun Monkey", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.17.54_PM_2JnhvCrVOe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647551887254", flavor: "Malty & Sweet", brewery_id: 4, beer_style_id: 5, user_id: 1)
 
Beer.create(name: "Scorched Meadows - Hazy", image: "https://ik.imagekit.io/vonlhgv94ld/scorched_meadows_beer_OBDkMeqLo6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1647552366775", flavor: "Crisp & Clean", brewery_id: 4, beer_style_id: 5, user_id: 1)
 
Beer.create(name: "Harbor Ale", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.32.39_PM_mRW2wg5CD5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647552771524", flavor: "Malty & Sweet", brewery_id: 5, beer_style_id: 4, user_id: 2)
 
Beer.create(name: "Summer Ale", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.37.06_PM_eouUPk2leW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647553036996", flavor: "Crisp & Clean", brewery_id: 5, beer_style_id: 4, user_id: 2)
 
Beer.create(name: "Finback IPA", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997", flavor: "Hoppy & Bitter", brewery_id: 6, beer_style_id: 3, user_id: 3)
 
Beer.create(name: "Star Child", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997", flavor: "Sour, Tart & Funky", brewery_id: 6, beer_style_id: 8, user_id: 3)

puts "reviews"
 
Review.create(comment: "Nice fruity flavor and super smooth!", name: "Joe", rating: 5, beer_id: 1)
 
Review.create(comment: "Very good peanut butter and strawberry flavor.", name: "Jessica", rating: 5, beer_id: 2)
 
Review.create(comment: "This was disgusting.", name: "Jason", rating: 1, beer_id: 2)
 
Review.create(comment: "Would definitely recommend this one!", name: "Hazel", rating: 5, beer_id: 3)
 
Review.create(comment: "Very crisp! Perfect summer beer.", name: "Ryan", rating: 5, beer_id: 4)
 
Review.create(comment: "Not the best but also wasn't the worst.", name: "Z", rating: 3, beer_id: 5)
 
Review.create(comment: "Loved it! I bought an entire case to bring home.", name: "Adam", rating: 5, beer_id: 6)
 
Review.create(comment: "ehh, this one was whatever.", name: "George", rating: 2, beer_id: 7)
 
Review.create(comment: "Bought a case to bring home! Definitely try it!!", name: "John", rating: 5, beer_id: 8)
 
Review.create(comment: "Nice malty flavor and super smooth!", name: "Ash", rating: 5, beer_id: 9)
 
Review.create(comment: "Perfect summer drink!!", name: "Ashley", rating: 5, beer_id: 10)
 
Review.create(comment: "A little too bitter for my taste buds. If you're into bitter bear then I guess I recommend it.", name: "Sharon", rating: 3, beer_id: 11)
 
Review.create(comment: "Sour, but I liked it!! The taste was very unique.", name: "Joe", rating: 5, beer_id: 12)






puts "done seeding"
