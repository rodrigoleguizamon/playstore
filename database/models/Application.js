module.exports = (sequelize, dataTypes) => {
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
            autoIncrement: true,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
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

return Application;

}