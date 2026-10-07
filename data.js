// Catalogue + recipes. Art is generated as inline SVG (see main.js), so no image files can break.
const CATS=['Ceremonial Matcha','Everyday Matcha','Matcha Latte','Starter Sets','Accessories'];
const P=(id,name,cat,price,rating,badge,c,desc,item)=>({id,name,cat,price,rating,badge,c,desc,item,n:id});
const PRODUCTS=[
P(1,'Uji Ceremonial No.1','Ceremonial Matcha',48,4.9,'Bestseller','#5E7A2E','First-flush leaves, stone-ground. Sweet, deep and silky.'),
P(2,'Kirishima Ceremonial','Ceremonial Matcha',44,4.8,'New','#6C8A3A','Bright, vegetal and clean, with a long gentle finish.'),
P(3,'Okumidori Reserve','Ceremonial Matcha',62,5,'Limited','#4F6B27','A single-cultivar reserve with rounded umami.'),
P(4,'Daily Ritual Matcha','Everyday Matcha',28,4.6,'','#7D9444','Balanced and approachable for every morning bowl.'),
P(5,'Culinary Matcha','Everyday Matcha',22,4.4,'','#8CA050','Made for baking and blending, with body that holds up.'),
P(6,'Oat Milk Latte Blend','Matcha Latte',26,4.7,'New','#9AAE72','Lightly sweetened matcha built for steamed milk.'),
P(7,'Vanilla Latte Blend','Matcha Latte',26,4.5,'','#A8B88A','Soft vanilla over smooth green tea.'),
P(8,'First Bowl Starter Set','Starter Sets',72,4.9,'Gift','#66793A','Matcha, whisk, scoop and bowl in one box.'),
P(9,'Travel Ritual Set','Starter Sets',54,4.6,'','#7A8F4C','Matcha, shaker and bamboo scoop for the road.'),
P(10,'Bamboo Whisk (Chasen)','Accessories',24,4.8,'Bestseller','#B89B6A','Hand-carved 80-prong whisk from Nara.','whisk'),
P(11,'Raku Matcha Bowl','Accessories',58,4.9,'','#4A3B30','A wide, matte glazed chawan for whisking.','bowl'),
P(12,'Bamboo Scoop & Stand','Accessories',18,4.7,'','#C9AE80','Chashaku scoop with a ceramic whisk keeper.','whisk')];
const SIZES={'30g':1,'100g':2.8};
const RECIPES=[
{id:1,name:'Classic Matcha',time:'5 min',diff:'Easy',c:'#66793A',ing:['2g ceremonial matcha','70ml water at 75°C'],steps:['Sift matcha into a warm bowl.','Add water.','Whisk in a W motion until frothy.','Drink right away.']},
{id:2,name:'Iced Matcha',time:'5 min',diff:'Easy',c:'#8CA050',ing:['2g matcha','60ml water','Ice','100ml cold water'],steps:['Whisk matcha with warm water.','Fill a glass with ice.','Pour cold water, then the matcha over the top.']},
{id:3,name:'Matcha Latte',time:'8 min',diff:'Easy',c:'#9AAE72',ing:['2g matcha','50ml hot water','180ml steamed milk','Honey to taste'],steps:['Whisk matcha with hot water.','Steam or warm the milk.','Pour milk over the matcha.']},
{id:4,name:'Strawberry Matcha',time:'10 min',diff:'Medium',c:'#B7746A',ing:['2g matcha','5 strawberries','1 tbsp syrup','Milk and ice'],steps:['Muddle strawberries with syrup.','Add ice and milk.','Top with whisked matcha.']},
{id:5,name:'Vanilla Matcha',time:'7 min',diff:'Easy',c:'#C9B98A',ing:['2g matcha','1 tsp vanilla syrup','200ml milk'],steps:['Whisk matcha with a splash of water.','Stir vanilla into milk.','Combine and serve over ice.']},
{id:6,name:'Coconut Matcha',time:'7 min',diff:'Easy',c:'#A9B592',ing:['2g matcha','200ml coconut milk','1 tsp maple syrup'],steps:['Whisk matcha smooth.','Warm coconut milk with syrup.','Pour together and stir.']},
{id:7,name:'Matcha Affogato',time:'6 min',diff:'Medium',c:'#4A3B30',ing:['2 scoops vanilla ice cream','3g matcha','50ml hot water'],steps:['Whisk a strong, small matcha.','Scoop ice cream into a bowl.','Pour the matcha over and serve immediately.']}];
