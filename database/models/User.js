module.exports = (sequelize, dataTypes) => {
    let alias = "User";
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
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_type: {
            type: dataTypes.INTEGER,
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
        tableName: "users",
        underscored: true,
        timestamps: true
    }


const User = sequelize.define(alias,cols,config);

/*User.associate = function(models){
    User.belongsTo(models.Application,{
         as: "applications",
         throught: "orders",
         foreignKey: "user_id",
         otherKey: "application_id",
         timestamps: false
     })
     User.belongsTo(models.Application,{
        as: "app_create",
        foreignKey: "user_id",
        timestamps: false
    });
}*/
return User;

}