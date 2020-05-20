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
        tableName: "Category",
        underscored: true,
        timestamps: true
    }


const Category = sequelize.define(alias,cols,config);

return Category;

}