module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        description:{
            type: DataTypes.STRING
        },
        price:{
            type:DataTypes.DOUBLE,
            allowNull: false
        }, 
        photo: {
            type: DataTypes.BLOB
        }
    });
    return Products;
}