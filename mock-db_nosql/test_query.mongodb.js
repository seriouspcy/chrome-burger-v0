use("chrome-burger-db")
db.staff.find({}, { _id: 0, first_name: 1, last_name: 1, role: 1 })

db.menu_items.find({category:"Burger"})

db.menu_items.find().sort({price:-1})

db.menu_items.find({},{_id: 0, name: 1, price: 1}).sort({price: 1}).limit(3)

db.ingredients.find(supplier_id:"Pattys Premium Meats")