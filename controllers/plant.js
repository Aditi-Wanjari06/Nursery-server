const plants = [
    {
        "id": 1,
        "name": "Bamboo",
        "category": "indoor",
        "image": "https://i.pinimg.com/originals/ea/ad/49/eaad49ae493971341c54be47e9814d17.jpg",
        "price": 150,
        "description": "3 Layer Luckey Bamboo In A Glass Vase"
    },

    {
        "id": 2,
        "name": "Rose",
        "category": "outdoor",
        "image": "https://i.pinimg.com/originals/ea/ad/49/eaad49ae493971341c54be47e9814d17.jpg",
        "price": 2000,
        "description": "Rose Plant"
    },

    {
        "id": 3,
        "name": "Mango",
        "category": "indoor",
        "image": "https://i.pinimg.com/originals/ea/ad/49/eaad49ae493971341c54be47e9814d17.jpg",
        "price": 250,
        "description": "Mango Plant"
    }
]

const postPlant =  (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    if (!name) {
        return res.json({
            success: false,
            data: null,
            message: "Name is required"
        })
    }

    if (!category) {
        res.json({
            success: false,
            data: null,
            message: "Category is required"
        })
    }

    if (!image) {
        res.json({
            success: false,
            data: null,
            message: "Image is required"
        })
    }

    if (!price) {
        res.json({
            success: false,
            data: null,
            message: "Price is required"
        })
    }

    if (!description) {
        res.json({
            success: false,
            data: null,
            message: "Description is required"
        })
    }

    const randomId = Math.round(Math.random() * 1000)

    const newPlant = {
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    }

    plants.push(newPlant)

    res.json({
        success: true,
        data: newPlant,
        message: "New plant added successfully"
    })

}

const getPlants =  (req, res) => {

    res.json({
        success: true,
        data: plants,
        message: "All plants fetched successfully"
    })
}

const getPlantId = (req, res) => {
    const { id } = req.params

    const plant = plants.find((p) => p.id == id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant fetched succesfully" : "Plant not found"
    })
}

const putPlantId =  (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    const { id } = req.params

    let index = -1;

    plants.forEach((plant, i) => {
        if (plant.id == id) {
            index = i
        }
    })

    const newObj = {
        id,
        name,
        category,
        image,
        price,
        description

    }

    if (index == -1) {
        return res.json({
            success: false,
            data: null,
            message: `Plant not found for id ${id}`
        })
    }
    else {
        plants[index] = newObj

        return res.json({
            success: true,
            data: newObj,
            message: "Plant updated sccessfully.."
        })


    }
}

const deletePlantId = (req, res) => {
    const { id } = req.params

    let index = -1

    plants.forEach((plant, i) => {
        if (plant.id == id) {
            index = i
        }

    })

    if (index == -1) {
        return res.json({
            success: true,
            message: `Plant not found with id ${id}`
        })
    }

    plants.splice(index, 1)

    res.json({
        success: true,
        message: "Plant deleted successfully",
        data: null
    })
}

export {
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
}