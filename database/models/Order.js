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

return Order;

}