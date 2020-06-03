module.exports = (sequelize, dataTypes) => {
    let alias = "Comment";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        order_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        content: {
            type: dataTypes.STRING,
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
        tableName: "comments",
        underscored: true,
        timestamps: true
    }


const Comment = sequelize.define(alias,cols,config);

Comment.associate = function(models){
        Application.belongsTo(models.Application,{
        as: "aplicaciones",
        throught: "orders",
        foreignKey: "order_id",
        otherKey: "application_id",
    })
}
return Comment;

}