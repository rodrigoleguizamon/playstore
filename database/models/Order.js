module.exports = (sequelize, dataTypes) => {
    let alias = "Order";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        application_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(5,2),
            allowNull: false
        },
    }
    let config = {
        tableName: "orders",
        underscored: true,
        timestamps: false
    }


const Order = sequelize.define(alias,cols,config);

/*Order.associate = function(models){
    Order.hasOne(models.Application,{
        as: "compradas",
        foreignKey: "application_id",
    })
    Order.belongsTo(models.Application,{
        as: "comments",
        foreignKey: "id",
    })
}*/

return Order;

}