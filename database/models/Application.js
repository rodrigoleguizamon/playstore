module.exports = function(sequelize, dataTypes){
    let alias = "Application";
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
        image_url: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(5,2),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "applications",
        underscored: true,
        timestamps: true
    }


const Application = sequelize.define(alias,cols,config);

Application.associate = function(models){
    Application.belongsToMany(models.User,{
        as: "users",
        through: "orders",
        foreignKey: "application_id",
        otherKey: "user_id",
        timestamps:false
    })
    Application.belongsTo(models.Category,{
        as: "categories",
        foreignKey: "category_id",
        timestamps: false
       
    });
    /*Application.belongsTo(models.User,{
        as: "desarollador",
        foreignKey:"id"
    });
    Application.belongsTo(models.Comment,{
        as: "comentarios",
        throught: "orders",
        foreignKey: "application_id",
        otherKey: "order_id",
    })*/
}

return Application;

}