module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true
        },
    }
    let config = {
        tableName: "categories",
        underscored: true,
        timestamps: false
    }


const Category = sequelize.define(alias,cols,config);
Category.associate = function(models){
    Category.hasMany(models.Application,{
        as: "aplicaciones",
        foreignKey: "category_id",
        timestamps: false
    
    })
}
return Category;

}