# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "user"

u1 = User.create(name: "Ashley", email: "ashleymattam27@gmail.com", password: "123", admin: true)
u2 = User.create(name: "Chris", email: "christhomas@gmail.com", password: "123", admin: true)
u3 = User.create(name: "Jessica", email: "jessicajohn@gmail.com", password: "123", admin: true)


puts "breweries"
 
b1 = Brewery.create(name: "10-56 Brewing Company", street: "400 Brown Cir", city: "Knox", state: "Indiana", phone_number: "630-816-5790", image: "https://ik.imagekit.io/vonlhgv94ld/1056_logo_dc5gPCv60.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648326990949", user_id: u1.id )
 
b2 = Brewery.create(name: "10 Barrel Brewing Co", street: "62970 18th St", city: "Bend", state: "Oregon", phone_number: "541-585-1007", image: "https://ik.imagekit.io/vonlhgv94ld/10-barrel-logo-square_9EiS-EtJJ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648327323071", user_id: u2.id)
 
b3 = Brewery.create(name: "Monkish Brewing Co", street: "20311 South Western Avenue", city: "Torrance", state: "California", phone_number: "310-295-2157", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226", user_id: u3.id)
 
b4 = Brewery.create(name: "HUDL Brewing Company", street: "1327 S Main St Ste 100", city: "Las Vegas", state: "Nevada", phone_number: "702-445-7100", image: "https://ik.imagekit.io/vonlhgv94ld/ek1h9ktyrgwn6x3jx52jvucunzsr_AgApTbno2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648327486631", user_id: u1.id)
 
b5 = Brewery.create(name: "Greenport Harbor Brewing Company", street: "234 Carpenter Street", city: "Greenport", state: "New York", phone_number: "6314776681", image: "https://ik.imagekit.io/vonlhgv94ld/static1.squarespace_KKXxHmu_8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648327561256", user_id: u2.id)
 
b6 = Brewery.create(name: "Finback Brewery", street: "78-01 77th Ave", city: "Glendale", state: "New York", phone_number: "718-628-8600", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997", user_id: u3.id)



puts "beers"
 
beer1 = Beer.create(name: "Festival", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-23_at_4.51.10_PM_9IFz4qQyB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648068705017", flavor: "Fruity", brewery_id: b1.id, beer_style: "Ale")
 
beer2 = Beer.create(name: "Double PB & Jeff W/ Strawberry", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.00.25_PM_w5Lpay1b6R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647550859647", flavor: "Malty/Sweet", brewery_id: b1.id, beer_style: "Brown Ale")
 
beer3 = Beer.create(name: "Nature Calls", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.02.16_PM_8BS_ubC8H4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647550949146", flavor: "Fruity", brewery_id: b2.id, beer_style: "India Pale Ale (IPA)")
 
beer4 = Beer.create(name: "Guava Crush", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.05.38_PM_vndrqNYcnl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647551151315", flavor: "Crisp", brewery_id: b2.id, beer_style: "Ale")
 
beer5 = Beer.create(name: "Anomaly", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226", flavor: "Dark/Roasty", brewery_id: b3.id, beer_style: "Ale")
 
beer6 = Beer.create(name: "Foggy Window", image: "https://ik.imagekit.io/vonlhgv94ld/Monkish-Brewing-Logo_0VAv2Vlwq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068796226", flavor: "Hoppy/Bitter", brewery_id: b3.id, beer_style: "India Pale Ale (IPA)")
 
beer7 = Beer.create(name: "Spun Monkey", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.17.54_PM_2JnhvCrVOe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647551887254", flavor: "Malty/Sweet", brewery_id: b4.id, beer_style: "Stout")
 
beer8 = Beer.create(name: "Scorched Meadows - Hazy", image: "https://ik.imagekit.io/vonlhgv94ld/scorched_meadows_beer_OBDkMeqLo6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1647552366775", flavor: "Crisp", brewery_id: b4.id, beer_style: "Stout")
 
beer9 = Beer.create(name: "Harbor Ale", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.32.39_PM_mRW2wg5CD5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647552771524", flavor: "Malty/Sweet", brewery_id: b5.id, beer_style: "Pale Ale")
 
beer10 = Beer.create(name: "Summer Ale", image: "https://ik.imagekit.io/vonlhgv94ld/Screen_Shot_2022-03-17_at_5.37.06_PM_eouUPk2leW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647553036996", flavor: "Crisp", brewery_id: b5.id, beer_style: "Pale Ale")
 
beer11 = Beer.create(name: "Finback IPA", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997", flavor: "Hoppy/Bitter", brewery_id: b6.id, beer_style: "India Pale Ale (IPA)")
 
beer12 = Beer.create(name: "Star Child", image: "https://ik.imagekit.io/vonlhgv94ld/finback_brewery_uf08PXKxz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648068898997", flavor: "Sour", brewery_id: b6.id, beer_style: "Sour Ale")

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
