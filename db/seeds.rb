# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "breweries"
 
b1 = Brewery.create(name: "10-56 Brewing Company", street: "400 Brown Cir", city: "Knox", state: "Indiana", phone_number: "630-816-5790", image: "https://ik.imagekit.io/vonlhgv94ld/1056_logo_dc5gPCv60.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648326990949")
 
b2 = Brewery.create(name: "10 Barrel Brewing Co", street: "62970 18th St", city: "Bend", state: "Oregon", phone_number: "541-585-1007", image: "https://ik.imagekit.io/vonlhgv94ld/10-barrel-logo-square_9EiS-EtJJ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648327323071")
 
b3 = Brewery.create(name: "Monkish Brewing Co", street: "20311 South Western Avenue", city: "Torrance", state: "California", phone_number: "310-295-2157", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226")
 
b4 = Brewery.create(name: "HUDL Brewing Company", street: "1327 S Main St Ste 100", city: "Las Vegas", state: "Nevada", phone_number: "702-445-7100", image: "https://ik.imagekit.io/vonlhgv94ld/ek1h9ktyrgwn6x3jx52jvucunzsr_AgApTbno2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648327486631")
 
b5 = Brewery.create(name: "Greenport Harbor Brewing Company", street: "234 Carpenter Street", city: "Greenport", state: "New York", phone_number: "6314776681", image: "https://ik.imagekit.io/vonlhgv94ld/static1.squarespace_KKXxHmu_8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648327561256")
 
b6 = Brewery.create(name: "Finback Brewery", street: "78-01 77th Ave", city: "Glendale", state: "New York", phone_number: "718-628-8600", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997")

puts "beer styles"
 
s1 = BeerStyle.create(name: "Lager", description: "Lager is beer which has been brewed and conditioned at low temperature. Lagers can be pale, amber, or dark. Pale lager is the most widely consumed and commercially available style of beer.")
 
s2 = BeerStyle.create(name: "Ale", description: "Ale is a type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste. As with most beers, ale typically has a bittering agent to balance the malt and act as a preservative. Ale was originally bittered with gruit, a mixture of herbs or spices boiled in the wort before fermentation.")
 
s3 = BeerStyle.create(name: "India Pale Ale (IPA)", description: "India pale ale (IPA) is a hoppy beer style within the broader category of pale ale. The style of pale ale which became known as India pale ale was widespread in England by 1815, and would grow in popularity, notably as an export beer shipped to India (which was under the control of the British East India Company until 1858) and elsewhere.")
 
s4 = BeerStyle.create(name: "Pale Ale", description: "Pale ale is a typically golden to amber coloured style of ale which is brewed using an ale yeast and predominantly pale malt. The term first appeared around 1703 for beers made from malts dried with high-carbon coke, which resulted in a lighter colour than other beers popular at that time. Different brewing practices and hop quantities have resulted in a range of tastes and strengths within the pale ale family.")

s5 = BeerStyle.create(name: "Stout", description: "Stout is a dark, top-fermented beer with a number of variations, including dry stout, oatmeal stout, milk stout, and imperial stout.")
 
s6 = BeerStyle.create(name: "Porter", description: "Porter is a style of beer that was developed in London, England, in the early 18th century. It was well-hopped and dark in appearance owing to the use of brown malt." )
 
s7 = BeerStyle.create(name: "Brown Ale", description: "Brown ale is a style of beer with a dark amber or brown colour. Beers termed brown ale include sweet, low alcohol beers such as Manns Original Brown Ale, medium strength amber beers of moderate bitterness such as Newcastle Brown Ale, and malty but hoppy beers such as Sierra Nevada Brown Ale.")
 
s8 = BeerStyle.create(name: "Sour Ale", description: "Sour ale is beer which has an intentionally acidic, tart, or sour taste. Sour beers are made by intentionally allowing wild yeast strains or bacteria into the brew, traditionally through the barrels or during the cooling of the wort in a coolship open to the outside air.")

puts "user"

u1 = User.create(name: "Ashley", email: "ashleymattam27@gmail.com", password: "123", admin: true)
u2 = User.create(name: "Chris", email: "christhomas@gmail.com", password: "123", admin: true)
u3 = User.create(name: "Jessica", email: "jessicajohn@gmail.com", password: "123", admin: true)

puts "beers"
 
beer1 = Beer.create(name: "Festival", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-23_at_4.51.10_PM_9IFz4qQyB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648068705017", flavor: "Fruity", brewery_id: b1.id, beer_style_id: s2.id, user_id: u1.id )
 
beer2 = Beer.create(name: "Double PB & Jeff W/ Strawberry", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.00.25_PM_w5Lpay1b6R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647550859647", flavor: "Malty/Sweet", brewery_id: b1.id, beer_style_id: s7.id, user_id: u1.id)
 
beer3 = Beer.create(name: "Nature Calls", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.02.16_PM_8BS_ubC8H4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647550949146", flavor: "Fruity", brewery_id: b2.id, beer_style_id: s3.id, user_id: u2.id )
 
beer4 = Beer.create(name: "Guava Crush", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.05.38_PM_vndrqNYcnl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647551151315", flavor: "Crisp", brewery_id: b2.id, beer_style_id: s2.id, user_id: u2.id)
 
beer5 = Beer.create(name: "Anomaly", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226", flavor: "Dark/Roasty", brewery_id: b3.id, beer_style_id: s2.id, user_id: u3.id )
 
beer6 = Beer.create(name: "Foggy Window", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226", flavor: "Hoppy/Bitter", brewery_id: b3.id, beer_style_id: s3.id, user_id: u3.id)
 
beer7 = Beer.create(name: "Spun Monkey", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.17.54_PM_2JnhvCrVOe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647551887254", flavor: "Malty/Sweet", brewery_id: b4.id, beer_style_id: s5.id, user_id: u1.id)
 
beer8 = Beer.create(name: "Scorched Meadows - Hazy", image: "https://ik.imagekit.io/vonlhgv94ld/scorched_meadows_beer_OBDkMeqLo6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1647552366775", flavor: "Crisp", brewery_id: b4.id, beer_style_id: s5.id, user_id: u1.id)
 
beer9 = Beer.create(name: "Harbor Ale", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.32.39_PM_mRW2wg5CD5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647552771524", flavor: "Malty/Sweet", brewery_id: b5.id, beer_style_id: s4.id, user_id: u2.id)
 
beer10 = Beer.create(name: "Summer Ale", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.37.06_PM_eouUPk2leW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647553036996", flavor: "Crisp", brewery_id: b5.id, beer_style_id: s4.id, user_id: u2.id)
 
beer11 = Beer.create(name: "Finback IPA", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997", flavor: "Hoppy/Bitter", brewery_id: b6.id, beer_style_id: s3.id, user_id: u3.id)
 
beer12 = Beer.create(name: "Star Child", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997", flavor: "Sour", brewery_id: b6.id, beer_style_id: s8.id, user_id: u3.id)

puts "reviews"
 
Review.create(comment: "Nice fruity flavor and super smooth!", name: "Joe", rating: 5, beer_id: beer1.id)
 
Review.create(comment: "Very good peanut butter and strawberry flavor.", name: "Jessica", rating: 5, beer_id: beer2.id)
 
Review.create(comment: "This was disgusting.", name: "Jason", rating: 1, beer_id: beer2.id)
 
Review.create(comment: "Would definitely recommend this one!", name: "Hazel", rating: 5, beer_id: beer3.id)
 
Review.create(comment: "Very crisp! Perfect summer beer.", name: "Ryan", rating: 5, beer_id: beer4.id)
 
Review.create(comment: "Not the best but also wasn't the worst.", name: "Z", rating: 3, beer_id: beer5.id)
 
Review.create(comment: "Loved it! I bought an entire case to bring home.", name: "Adam", rating: 5, beer_id: beer6.id)
 
Review.create(comment: "ehh, this one was whatever.", name: "George", rating: 2, beer_id: beer7.id)
 
Review.create(comment: "Bought a case to bring home! Definitely try it!!", name: "John", rating: 5, beer_id: beer8.id)
 
Review.create(comment: "Nice malty flavor and super smooth!", name: "Ash", rating: 5, beer_id: beer9.id)
 
Review.create(comment: "Perfect summer drink!!", name: "Ashley", rating: 5, beer_id: beer10.id)
 
Review.create(comment: "A little too bitter for my taste buds. If you're into bitter bear then I guess I recommend it.", name: "Sharon", rating: 3, beer_id: beer11.id)
 
Review.create(comment: "Sour, but I liked it!! The taste was very unique.", name: "Joe", rating: 5, beer_id: beer12.id)






puts "done seeding"
