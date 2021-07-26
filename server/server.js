const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    
    
}))

const data = {
    title: "Simple Victoria Sponge",
    prepTime: 40,
    cookTime:20,
    serves: 10,
    ingredients: ["200g Caster Sugar", "200g Butter", "4 Eggs", "200g Self Raising Flour", "2 Tbsp Milk", "1 tsp Baking Powder"],
    image: "https://gfjules.com/wp-content/uploads/2015/08/gluten-free-white-cake-on-plate-gfJules.jpg"
}

app.get('/', (req, res) => {
    res.json(data)

})



app.listen(5000, function() {
    console.log ('server is running on port 5000')
})
