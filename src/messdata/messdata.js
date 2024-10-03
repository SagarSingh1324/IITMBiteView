const data = {
  veg:{
    north_menu_odd: 
      {Sunday:{
        bf:["Mango / Orange jam", "Boiled Peanut", "Boiled Egg/ Oats", "hl Rava Dosa/Plain Dosa"],
        lunch:["Veg Hyderabadi Biryani", "Roti", "Dal (Toor Dal)", "Raita", "hl Paneer Butter Masala", "hl Ice Cream/Sahi Tukda "],
        dinner:["Rice", "Roti", "Rajma Masala", "hl Bhindi fry", "Mixed Fruit Salad", "Lemon Juice"],
      },
      Monday:{
        bf:["Mango jam", "Boiled Chole", "Boiled Egg/Oats", "hl Poha","Tamarind Chu tney", "Jalebi"],
        lunch:["Rice", "Roti", "Dal Makhani", "Gobi Capsicum Masala", "hl Chole Curry dry"],
        dinner:["Rice", "Roti", "Chana dal", "hl Malai Kofta", "Moong Dal Halwa"],
      },
      Tuesday:{
        bf:["Mixed Fruit Jam", "Boiled Green Gram", "Omelette/Chocos", "Wheat Upma", "hl Kachori", "Coconut chutney", "Aloo Sabji"],
        lunch:["Rice", "Roti", "Dal (Masoor)", "hl Bhindi Masala", "Sev Tomato", "Fried green chilli"],
        dinner:["Fried Rice", "Roti", "Toor dal", "hl Gobi Manchurian", "Water Melon fruit", "Buttermilk"],     
      },
      Wednesday:{
        bf:["Pineapple Jam", "Boiled Black Chana", "Fried Egg/Cornflakes", "Luchi", "hl Aloo Dum"],
        lunch:["Rice", "Roti", "Dal (Rajma)", "Carrot Peas Foogath", "hl Soya Beans Curry", "Detox water"],
        dinner:["Ghee Rice", "Roti", "Masoor Dal", "hl Kadai Paneer", "Mango fruit (for summer)", "Guava fruit", "Lemon Juice"],  
      },
      Thursday:{
        bf:["Mango jam", "Green gram Sprouts", "Omelette/ Oats", "hl Pav Bhaji", "Aloo Bonda"],
        lunch:["Wheat Khichdi", "Roti", "Dal (Toor)", "hl Karela fry", "Lauki Chana Dal (Semi-fry)", "Mirchi Bhajji"],
        dinner:["Rice", "Roti", "Fried Dal", "hl Soya chunk curry", "Musk melon fruit", "Buttermilk"],     
      },
      Friday:{
        bf:["Pineapple Jam", "Millet sprouts", "Boiled Egg/ Chocos", "hl Sabudana Khichdi", "Curd"],
        lunch:["Rice", "Roti", "Dal (Chana dal)", "Cabbage onion", "pakoda", "hl Mix Veg Curry"],
        dinner:["Navaratan Pulao", "hl Methi Puri","Dal Tadka","hl Black Chana Curry", "Dalma", "Sabudhana Kheer"],
      },
      Saturday:{
        bf:["Mixed Fruit Jam", "Mixed boiled sprouts","Mixed boiled chole", "Boiled Egg/ Cornflakes", "hl Aloo Paratha", "Curd", "Green Chutney"],
        lunch:["Rice", "Green Methi Paratha", "Dal (Urad)", "Aloo 65", "hl Vegetable Kurma"],
        dinner:["Sambar Rice", "Rice Khichdi", "Curd Rice", "hl Potato chips", "Mixed fruit Salad", "Boost + Milk"],
      }
    },
    north_menu_even :
      {Sunday:{
        bf:["Mango / Orange jam", "Boiled Peanut", "Boiled Egg/ Oats", "hl Kachori", "Aloo sabji", "Imli chutney"],
        lunch:["Mixed Veg Biryani", "Roti","Raita", "Dal (Toor Dal)", "Vegetable Pakora", "hl Kadai Paneer", "hl Gulab Jamun/Ice cream"],
        dinner:["Rice", "Roti", "Dal Fry", "hl Soyabean masala", "Mixed fruit salad", " Lemon Juice"],
      },
      Monday:{
        bf:["Pineapple Jam", "Millet sprouts", "Full Boiled Egg/ Cornflakes", "hl Poha", "Jalebi", "Tamarind Chutney"],
        lunch:["Rice", "Roti", "hl Tendli Fry", "hl Jeera Aloo", "hl Kadi Pakoda"],
        dinner:["Rice", "Roti", "Chana dal", "hl Bangara Baigan", "Pineapple fruit", "hl Rice Kheer"],
      },
      Tuesday:{
        bf:["Mixed Fruit Jam", "Boiled Green Gram", "Omelette/ Chocos", "hl Maggi", "Cutlet", "Sauce"],
        lunch:["Rice", "Roti", "Dal (Masoor)", "Jack fruit sabji", "Fried green chilli"],
        dinner:["Peas Pulao", "Roti", "Toor dal", "hl Vegetable Kofta", "Papaya fruit", "Buttermilk"],     
      },
      Wednesday:{
        bf:["Pineapple Jam", "Boiled Black Chana", "Full Boiled Egg/Cornflakes", "hl Idli + Mendu Vada", "Mix Veg Sambar", "Coconut chutney"],
        lunch:["Rice", "Roti", "Dal (Rajma)", "Cabbage Onion", "pakoda", "hl Aloo Parwal (seasonal) curry", "Detox water"],
        dinner:["Rice", "Roti", "Masoor Dal", "hl Shahi Paneer", "Mixed Fruit Salad", "Lemon Juice"],  
      },
      Thursday:{
        bf:["Mango jam", "Green gram Sprouts", "Omelette/ Oats", "hl Millet Chilla (with shredded vegetables mixed)", "Tomato + Onion chutney"],
        lunch:["Moong Dal vegetable Khichdi", "Roti", "Aloo Chokha", "Fried green chilli", "hl Aloo Gobhi curry"],
        dinner:["Rice", "Roti", "Palak Dal", "hl Kala chana masala curry", "Water Melon fruit", "Buttermilk"],     
      },
      Friday:{
        bf:["Mixed Fruit Jam", "Boiled peanut/ Chole", "Boiled Egg/ Chocos", "hl Onion Uthappam", "Groundnut chutney", "Drumstick Sambar"],
        lunch:["Rice", "Roti", "Chana dal", "hl Paneer onion Bhurji", "Kadai Mix Veg Curry"],
        dinner:["Jeera Rice", "Roti", "Mixed Dal fry","Aloo Beans dry", "hl Chole curry", "Fruit Custard"],
      },
      Saturday:{
        bf:["Mango Jam", "Boiled Chole", "Boiled Egg/ Cornflakes", "hl Kal Dosa", "Mix Veg Sambhar", "Groundnut Chutney"],
        lunch:["Rice", "Roti", "Dal (Urad)", "Mushroom Peas Masala", "hl Aloo Beans (dry)"],
        dinner:["Rice", "Roti", "Dal Makhani", "hl Mixed Veg dry", "Banana fruit", "Horlicks+ Milk"],
      }
    },
    south_menu_odd:
      {Sunday:{
        bf:['Boiled Egg/ Oats', 'White Chana Sprouts', 'Mixed Fruit Jam', 'hl Millet Dosa [1]', 'Groundnut Chutney [1]', 'hl Puttu [3]', 'Kadala Curry [3]'],
        lunch:['Plain Chapathi', 'Veg Biryani (Basmati rice)', 'hl Kadai Paneer', 'Gulab Jamun (1) / Ice Cream (3)'],
        dinner:['Plain Rice', 'hl Gobi (1)/Aloo (3) Parotta', 'Green Chutney', 'Curd', 'Lemon Rasam', 'Watermelon Fruit', 'Mix Veg Pickle'],
      },
      Monday:{
        bf:["Boiled Egg/Oats", "Boiled Chole", "Mango/Orange Jam", "hl Rava Dosa", "Pudina Chutney", "Sambar"],
        lunch:["Methi Chapati", "hl Banana Bajji", "Beetroot Fry", "Tomato Rasam", "Mix Veg Kootu", "Avakai Pachadi", "Gongura Thoviyal"],
        dinner:["Plain rice", "Plain Chapati", "hl Brinjal Milmaker curry", "Lemon Rasam", "Banana Fruit", "Mix Veg Pickle"],
      },
      Tuesday:{
        bf:["Omelette/ Chocos", "Green Gram Sprouts", "Strawberry Jam", "Mysore bonda", "hl Khichdi (Wheat)(1) Khichdi (Rava)(3)", "Groundnut Chutney"],
        lunch:['Phulka', 'Tomato Rice', 'hl Bhindi Fry', 'hl Cauliflower Peas Curry', 'Mix Veg Sambar', 'Bele Saaru', 'Mixed Veg Pickle', 'Mint Thoviyal'],
        dinner:['Plain rice', 'hl Kerala Paratha', 'hl Veg Kurma', 'Drumstick Sambar', 'Seasonal Fruit', 'Lemon Pickle'],     
      },
      Wednesday:{
        bf:['Fried Egg/ Cornflakes', 'Boiled Black Chana', 'Mix Fruit Jam', 'hl Idly (1)/ Ragi Idli (3)', 'Vada', 'Coconut Chutney', 'Sambar'],
        lunch:['Pudina Chapati', 'hl Aloo 65', 'hl Cabbage curry', 'Pepper Rasam', 'Cucumber Pappu', 'Lemon Pickle', 'Ridge Gourd Thoviyal', 'Detox Water'],
        dinner:['Plain rice', 'Phulka', 'Jeera Rice', 'hl Palak Paneer', 'Paruppu Kadaiyal', 'Garlic Rasam', 'Carrot Halwa', 'Mango Pickle'],     
      },
      Thursday:{
        bf:['Omelette/ Oats', 'Boiled Peanut', 'Pineapple Jam', 'hl Onion Uthappam', 'Pongal', 'Groundnut chutney', 'Sambar'],
        lunch:['Phulka', 'hl Tindly Fry', 'Clustered Beans', 'Moong Dal', 'Brinjal Sambar', 'Mixed Veg Pickle', 'Curry Leaf Thoviyal'],
        dinner:['Plain Rice', 'Plain Chapati', 'hl Tomato Drumstick Curry', 'Mix Veg Sambar', 'Pineapple Fruit', 'Lemon Pickle'],  
      },
      Friday:{
        bf: ['Boiled Egg/ Chocos', 'White Chana Sprouts', 'Strawberry Jam', 'hl Masala Dosa', 'Coconut Chutney', 'Sambar'],
        lunch:['Plain Chapati', 'hl Bitter Gourd Fry', 'Gutti Vankaya Curry', 'Jeera Rasam', 'Spinach Pappu', 'Lemon Pickle', 'Gongura Thoviyal'],
        dinner:['Plain Rice', 'hl Idli', 'Coconut Chutney', 'Sambar', 'Mix Veg Curry', 'Papaya Fruit', 'Mango Pickle'],
      },
      Saturday:{
        bf:['Fried Egg/ Cornflakes', 'Boiled Moong', 'Pineapple Jam', 'Poori', 'hl Aloo Masala'],
        lunch: ['Phulka', 'Masala Vada', 'hl Spinach Fry', 'Drumstick Sambar', 'Parippu Curry', 'Avakai Pachadi', 'Mint Thoviyal'],
        dinner:['hl Lemon Rice', 'hl Vegetable Khichdi', 'Dal Fry', 'Banana Fruit', 'Tomato Chutney'],
      }
    },
    south_menu_even:
      {Sunday:{
        bf:['Boiled Egg/ Oats', 'Mixed Fruit Jam', 'White Chana Sprouts', 'hl Millet Dosa', 'Groundnut Chutney'],
        lunch:['Plain Chapathi', 'Veg Biryani (Basmati)', 'hl Paneer Butter Masala', 'Custard Bread (2)/ Mysore Pak (4)'],
        dinner:['Plain Rice', 'hl Godi Dosa', 'hl Aloo Jeera Curry', 'Tomato Rasam', 'Mixed Fruit Salad', 'Mix Veg Pickle'],
      },
      Monday:{
        bf:['Boiled Egg/ Oats', 'Mango/ Orange Jam', 'Boiled Chole', 'hl Semiya Upma', 'Masala Vada', 'Coconut Chutney'],
        lunch:['Methi Chapati', 'Chilli Bajji', 'hl Carrot Beans Poriyal', 'Bhindi Sambar', 'Tomato Dal', 'Avakai Pachadi', 'Gongura Thoviyal']  ,
        dinner:['Plain Rice', 'Phulka', 'hl Potato Green Peas Masala', 'Mix Veg Sambar', 'Banana Fruit', 'Thoviyal'],
      },
      Tuesday:{
        bf:['Omelette/ Chocos', 'Strawberry Jam', 'Green Gram Sprouts', 'Punugulu', 'hl Khichdi (Wheat) (2)/ Rava Khichdi (4)', 'Groundnut Chutney'],
        lunch:['Phulka', 'Tomato Rice', 'hl Bhindi Fry', 'Tomato Peas Curry', 'Lemon Rasam', 'Bottle Gourd Dal', 'Mixed Veg Pickle', 'Mint Thoviyal'],
        dinner:['Plain Rice', 'hl Chole Bhature', 'Tomato Rasam', 'Seasonal Fruit', 'Lemon Pickle'],     
      },
      Wednesday:{
        bf:['Fried Egg/ Cornflakes', 'Mix Fruit Jam', 'Boiled Black Chana', 'hl Idly (2) /Ragi Idli (4)', 'Vada', 'Coconut Chutney', 'Sambar'],
        lunch:['Pudina Chapati', 'Gobi 65', 'hl Bottle Gourd Curry', 'Tomato Rasam', 'Palak Pappu', 'Lemon Pickle', 'Ridge Gourd Thoviyal', 'Detox Water'],
        dinner:['Plain Rice', 'Phulka', 'Jeera Rice', 'hl Masala Paneer', 'Tomato Dal', 'Bhindi Sambar', 'Payasam', 'Mix Veg Pickle'],  
      },
      Thursday:{
        bf:['Omelette/ Oats', 'Pineapple Jam', 'Boiled Peanut', 'hl Upma-Pesarattu', 'Ginger Chutney', 'Sambar'],
        lunch:['Phulka', 'hl Brinjal Fry', 'Clustered Beans', 'Moong Dal', 'Mix Veg Sambar', 'Mix Veg Pickle', 'Curry Leaf Thoviyal'],
        dinner:['Plain Rice', 'Plain Chapati', 'hl Carrot Poriyal', 'Lemon Rasam', 'Pineapple Fruit', 'Lemon Pickle'],     
      },
      Friday:{
        bf:['Boiled Egg/ Chocos', 'Strawberry Jam', 'Millet Sprouts', 'hl Maggi', 'Tomato Sauce', 'Idiyappam[2]', 'Veg Kurma[2]', 'Pulihora[4]'],
        lunch:['Plain Chapati', 'hl Mutter Paneer', 'Raw Banana Fry', 'Tomato Rasam', 'Parippu (Dal) Curry', 'Lemon Pickle', 'Gongura Thoviyal'],
        dinner:['Plain Rice', 'hl Kal (2)/ Ragi Dosa (4)', 'Coconut Chutney', 'Mix Veg Curry', 'Drumstick Sambar', 'Papaya Fruit', 'Mix Veg Pickle'],
      },
      Saturday:{
        bf:['Fried Egg/ Cornflakes', 'Pineapple Jam', 'Boiled Moong', 'hl Poori', 'hl Aloo Masala'],
        lunch:['Phulka', 'hl Mix Cabbage Fry', 'hl Keerai Vada', 'Drumstick Sambar', 'Gongura Pappu', 'Avakai Pachadi', 'Mint Thoviyal'],
        dinner:['Vangi Bath', 'Sambar Rice', 'Curd Rice', 'Potato Chips', 'Watermelon Fruit', 'Mango Pickle'],
      }
    },
  },
  non_veg:{
    north_menu_odd: 
      {Sunday:{
        bf:["Mango / Orange jam", "Boiled Peanut", "Boiled Egg/ Oats", "hl Chole Bhature"],
        lunch:["Rice", "Roti", "Dal (Toor Dal)", "Bingan Bharta", "hl Butter Chicken Curry", "Gulab Jamun "],
        dinner:["Rice", "Roti", "Rajma Masala", "hl Bhindi fry", "Banana fruit", "Lemon Juice"],
      },
      Monday:{
        bf:["Strawberry jam", "Boiled Chole", "Boiled Egg/Oats", "hl Dalia", "Jalebi"],
        lunch:["Rice", "Roti", "Dal Makhani", "Gobi Capsicum Masala", "hl Egg Burji"],
        dinner:["Rice", "Roti", "Chana dal", "hl Malai Kofta", "Moong Dal Halwa", "Orange fruit"],
      },
      Tuesday:{
        bf:["Mixed Fruit Jam", "Boiled Green Gram", "Omelette/Chocos", "Wheat Upma", "hl Kachori", "Coconut chutney"],
        lunch:["Rice", "Roti", "Dal (Masoor)", "hl Bhindi Masala", "Sev Tomato"],
        dinner:["Fried Rice", "Roti", "Toor dal", "hl Gobi Manchurian", "Water Melon fruit", "Buttermilk"],     
      },
      Wednesday:{
        bf:["Pineapple Jam", "Boiled Black Chana", "Fried Egg/Cornflakes", "Luchi", "hl Aloo Dum"],
        lunch:["Rice", "Roti", "Dal (Rajma)", "Carrot Peas Foogath", "hl Soya Beans Curry", "Detox water"],
        dinner:["Ghee Rice", "Roti", "Masoor Dal", "hl Chicken tikka masala", "Mango fruit (for summer)/ Guava fruit", "Lemon Juice"],  
      },
      Thursday:{
        bf:["Strawberry jam", "Green gram Sprouts", "Omelette/ Oats", "hl Pav Bhaji"],
        lunch:["Wheat Khichdi", "Roti", "Dal (Toor)", "hl Karela fry", "Lauki Chana Dal (Semi-fry)"],
        dinner:["Rice", "Roti", "Rajma Masala", "hl Egg Mughalai", "Musk melon fruit", "Buttermilk"],     
      },
      Friday:{
        bf:["Mixed Fruit Jam", "Mixed boiled peanut,", "chole, greengram", "Boiled Egg/ Chocos", "hl Aloo Paratha", "Curd", "Green chutney"],
        lunch:["Rice", "Roti", "Dal (Chana dal)", "Cabbage onion", "pakoda", "hl Mix Veg Curry"],
        dinner:["Peas Pulao", "hl Methi Puri", "Dalma", "Sabudhana Kheer"],
      },
      Saturday:{
        bf:["Pineapple Jam", "Millet sprouts", "Fried Egg/ Cornflakes", "hl Sabudana Khichdi", "Curd"],
        lunch:["Rice", "Green Methi Paratha", "Dal (Urad)", "Aloo 65", "hl Vegetable Kurma", "Tomato ketchup"],
        dinner:["Sambar Rice", "Rice Khichdi", "Curd Rice", "hl Potato chips", "Mixed fruit Salad", "Boost + Milk"],
      }
    },
    north_menu_even :
      {Sunday:{
        bf:["Mango / Orange jam", "Boiled Peanut", "Boiled Egg/ Oats", "hl Semiya Upma", "Groundnut chutney", "Cutlet", "Sauce"],
        lunch:["Rice", "Roti", "Dal (Toor Dal)", "Vegetable Pakora fry", "hl Awadhi Chicken", "Gulab Jamun/Ice cream"],
        dinner:["Rice", "Roti", "Dal Fry", "hl Rajma Masala", "Banana fruit", "Lemon Juice"],
      },
      Monday:{
        bf:["Strawberry Jam", "Boiled Chole", "Boiled Egg/ Oats", "hl Methi Paratha", "Mint Chutney"],
        lunch:["Rice", "Roti", "Dal (Moong)", "hl Tendli Aloo Fry", "Kadi Pakoda"],
        dinner:["Rice", "Roti", "Chana dal", "hl Spicy Egg Bhurji", "Pineapple fruit", "Rice Kheer"],
      },
      Tuesday:{
        bf:["Mixed Fruit Jam", "Boiled Green Gram", "Omelette/ Chocos", "hl Upma/Kachori"],
        lunch:["Rice", "Roti", "Dal (Masoor)", "Millet Vegetable", "hl Khichdi", "hl Aloo Bharta"],
        dinner:["Fried Rice", "Roti", "Toor dal", "hl Vegetable Kofta", "Papaya fruit", "Buttermilk"],     
      },
      Wednesday:{
        bf:["Pineapple Jam", "Boiled Black Chana", "Fried Egg/Cornflakes", "hl Idli", "Sambar", "Coconut chutney"],
        lunch:["Rice", "Roti", "Dal (Rajma)", "Cabbage Onion pakoda", "hl Aloo Parwal (seasonal) curry", "Detox water"],
        dinner:["Rice", "Roti", "Masoor Dal", "hl Punjabi Chicken Curry", "Mixed Fruit Salad", "Lemon Juice"],  
      },
      Thursday:{
        bf:["Strawberry jam", "Green gram Sprouts", "Omelette/ Oats", "hl Millet Chilla (with shredded vegetables mixed)", "Red chutney"],
        lunch:["Moong Dal vegetable Khichdi", "Roti", "Dal (Toor)", "Green leaf sabji", "hl Aloo Gobhi curry"],
        dinner:["Rice", "Roti", "Rajma Masala", "hl Egg Mughlai", "Water Melon fruit", "Buttermilk"],     
      },
      Friday:{
        bf:["Mixed Fruit Jam", "Mixed boiled peanut,", "chole, green gram", "Boiled Egg/ Chocos", "hl Onion Uthappam", "Groundnut chutney", "Sambar"],
        lunch:["Rice", "Roti", "Chana dal", "hl Paneer Bhurji", "Kadai Mix Veg Curry"],
        dinner:["Jeera Rice", "Roti", "Urad Dal", "hl Chole curry", "Custard"],
      },
      Saturday:{
        bf:["Pineapple Jam", "Millet sprouts", "Fried Egg/ Cornflakes", "hl Poha", "Jalebi", "Sauce"],
        lunch:["Rice", "Roti", "Dal (Urad)", "Mushroom Peas Masala", "hl Aloo Beans (dry)"],
        dinner:["Imli Rice", "Rice Khichdi", "Curd Rice", "hl Potato chips", "Mixed fruit salad", "Horlicks+ Milk"],
      }
    },
    south_menu_odd:
      {Sunday:{
        bf:['Boiled Egg/ Oats', 'White Chana Sprouts', 'Mixed Fruit Jam', 'hl Millet Dosa [1]', 'Groundnut Chutney [1]', 'hl Puttu [3]', 'Kadala Curry [3]'],
        lunch:['Plain Chapathi', 'Kuska','Sherva', 'hl Pepper Chicken Fry', 'Gulab Jamun (1) / Ice Cream (3)'],
        dinner:['Plain Rice', 'hl Gobi (1)/Aloo (3) Parotta', 'Green Chutney', 'Curd', 'Lemon Rasam', 'Watermelon Fruit', 'Mix Veg Pickle'],
      },
      Monday:{
        bf:["Boiled Egg/Oats", "Boiled Chole", "Mango/Orange Jam", "hl Rava Dosa", "Pudina Chutney", "Sambar"],
        lunch:["Methi Chapati", "hl Banana Bajji", "Beetroot Fry", "Tomato Rasam", "Mix Veg Kootu", "Avakai Pachadi", "Gongura Thoviyal"],
        dinner:["Plain rice", "Plain Chapati", "hl Egg Bhurji", "Lemon Rasam", "Banana Fruit", "Mix Veg Pickle"],
      },
      Tuesday:{
        bf:["Omelette/ Chocos", "Green Gram Sprouts", "Strawberry Jam", "Mysore bonda", "hl Khichdi (Wheat)(1) Khichdi (Rava)(3)", "Groundnut Chutney"],
        lunch:['Phulka', 'Tomato Rice', 'hl Bhindi Fry', 'hl Cauliflower Peas Curry', 'Mix Veg Sambar', 'Bele Saaru', 'Mixed Veg Pickle', 'Mint Thoviyal'],
        dinner:['Plain rice', 'hl Kerala Paratha', 'hl Veg Kurma', 'Drumstick Sambar', 'Seasonal Fruit', 'Lemon Pickle'],     
      },
      Wednesday:{
        bf:['Fried Egg/ Cornflakes', 'Boiled Black Chana', 'Mix Fruit Jam', 'hl Idly (1)/ Ragi Idli (3)', 'Vada', 'Coconut Chutney', 'Sambar'],
        lunch:['Pudina Chapati', 'hl Aloo 65', 'hl Cabbage curry', 'Pepper Rasam', 'Cucumber Pappu', 'Lemon Pickle', 'Ridge Gourd Thoviyal', 'Detox Water'],
        dinner:['Plain rice', 'Phulka', 'Jeera Rice', 'hl Kadai Chicken Curry', 'Garlic Rasam', 'Carrot Halwa', 'Mango Pickle'],     
      },
      Thursday:{
        bf:['Omelette/ Oats', 'Boiled Peanut', 'Pineapple Jam', 'hl Onion Uthappam', 'Pongal', 'Groundnut chutney', 'Sambar'],
        lunch:['Phulka', 'hl Tindly Fry', 'Clustered Beans Moong Dal', 'Brinjal Sambar', 'Mixed Veg Pickle', 'Curry Leaf Thoviyal'],
        dinner:['Plain Rice', 'Plain Chapati', 'hl Egg Mughalai', 'Mix Veg Sambar', 'Pineapple Fruit', 'Lemon Pickle'],  
      },
      Friday:{
        bf: ['Boiled Egg/ Chocos', 'White Chana Sprouts', 'Strawberry Jam', 'hl Masala Dosa', 'Coconut Chutney', 'Sambar'],
        lunch:['Plain Chapati', 'hl Bitter Gourd Fry', 'Gutti Vankaya Curry', 'Jeera Rasam', 'Spinach Pappu', 'Lemon Pickle', 'Gongura Thoviyal'],
        dinner:['Plain Rice', 'hl Idli', 'Coconut Chutney', 'Sambar', 'Mix Veg Curry', 'Papaya Fruit', 'Mango Pickle'],
      },
      Saturday:{
        bf:['Fried Egg/ Cornflakes', 'Boiled Moong', 'Pineapple Jam', 'Poori', 'hl Aloo Masala'],
        lunch: ['Phulka', 'Masala Vada', 'hl Spinach Fry', 'Drumstick Sambar', 'Parippu Curry', 'Avakai Pachadi', 'Mint Thoviyal'],
        dinner:['hl Lemon Rice', 'hl Vegetable Khichdi', 'Dal Fry', 'Banana Fruit', 'Tomato Chutney'],
      }
    },
    south_menu_even:
      {Sunday:{
        bf:['Boiled Egg/ Oats', 'Mixed Fruit Jam', 'White Chana Sprouts', 'hl Millet Dosa', 'Groundnut Chutney'],
        lunch:['Plain Chapathi', 'hl Hyderabadi Chicken Biryani', 'Mirchi ka Salan', 'Onion & Lemon Salad', 'Custard Bread (2)/ Mysore Pak (4)'],
        dinner:['Plain Rice', 'hl Godi Dosa','Onion Chutney', 'Aloo Jeera Curry', 'Tomato Rasam', 'Mixed Fruit Salad', 'Mix Veg Pickle'],
      },
      Monday:{
        bf:['Boiled Egg/ Oats', 'Mango/ Orange Jam', 'Boiled Chole', 'Semiya Upma', 'Masala Vada', 'Coconut Chutney'],
        lunch:['Methi Chapati', 'Chilli Bajji', 'Carrot Beans Poriyal', 'Bhindi Sambar', 'Tomato Dal', 'Avakai Pachadi', 'Gongura Thoviyal']  ,
        dinner:['Plain Rice', 'Phulka', 'hl Masala Egg Bhurji', 'Mix Veg Sambar', 'Banana Fruit', 'Thoviyal'],
      },
      Tuesday:{
        bf:['Omelette/ Chocos', 'Strawberry Jam', 'Green Gram Sprouts', 'Punugulu', 'hl Khichdi (Wheat) (2)/ Rava Khichdi (4)', 'Groundnut Chutney'],
        lunch:['Phulka', 'Tomato Rice', 'hl Bhindi Fry', 'Tomato Peas Curry', 'Lemon Rasam', 'Bottle Gourd Dal', 'Mixed Veg Pickle', 'Mint Thoviyal'],
        dinner:['Plain Rice', 'hl Chole Bhature', 'Tomato Rasam', 'Seasonal Fruit', 'Lemon Pickle'],     
      },
      Wednesday:{
        bf:['Fried Egg/ Cornflakes', 'Mix Fruit Jam', 'Boiled Black Chana', 'hl Idly (2) /Ragi Idli (4)', 'Vada', 'Coconut Chutney', 'Sambar'],
        lunch:['Pudina Chapati', 'Gobi 65', 'hl Bottle Gourd Curry', 'Tomato Rasam', 'Palak Pappu', 'Lemon Pickle', 'Ridge Gourd Thoviyal', 'Detox Water'],
        dinner:['Plain Rice', 'Phulka', 'Jeera Rice', 'hl Andhra Chicken Curry', 'Tomato Dal', 'Bhindi Sambar', 'Payasam', 'Mix Veg Pickle'],  
      },
      Thursday:{
        bf:['Omelette/ Oats', 'Pineapple Jam', 'Boiled Peanut', 'hl Upma-Pesarattu', 'Ginger Chutney', 'Sambar'],
        lunch:['Phulka', 'hl Brinjal Fry', 'Clustered Beans', 'Moong Dal', 'Mix Veg Sambar', 'Mix Veg Pickle', 'Curry Leaf Thoviyal'],
        dinner:['Plain Rice', 'Plain Chapati', 'hl Roasted Boiled Egg Masala', 'Lemon Rasam', 'Pineapple Fruit', 'Lemon Pickle'],     
      },
      Friday:{
        bf:['Boiled Egg/ Chocos', 'Strawberry Jam', 'Millet Sprouts', 'hl Maggi', 'Tomato Sauce', 'hl Idiyappam', 'Veg Kurma','Tomato Sauce'],
        lunch:['Plain Chapati', 'hl Mutter Paneer', 'Raw Banana Fry', 'Tomato Rasam', 'Parippu (Dal) Curry', 'Lemon Pickle', 'Gongura Thoviyal'],
        dinner:['Plain Rice', 'hl Kal (2)/ Ragi Dosa (4)', 'Coconut Chutney', 'Mix Veg Curry', 'Drumstick Sambar', 'Papaya Fruit', 'Mix Veg Pickle'],
      },
      Saturday:{
        bf:['Fried Egg/ Cornflakes', 'Pineapple Jam', 'Boiled Moong', 'hl Poori', 'hl Aloo Masala'],
        lunch:['Phulka', 'Mix Cabbage Fry', 'Keerai Vada', 'Drumstick Sambar', 'Gongura Pappu', 'Avakai Pachadi', 'Mint Thoviyal'],
        dinner:['Vangi Bath', 'Sambar Rice', 'Curd Rice', 'Potato Chips', 'Watermelon Fruit', 'Mango Pickle'],
      }
    }
  }
};

export default data;
  