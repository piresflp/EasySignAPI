module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        options: {
            encrypt: false,
            validateBulkLoadParameters: true
        },
    },
    host: 'easysigndb.cjxnue9s2rb0.us-east-2.rds.amazonaws.com',
    username: 'easysigndb',
    password: 'cotucaeasysigndatabase',
    database: 'EasySign',
    define: {
        timestamps: false,
        underscored: true,
        freezeTableName: false,
    }
};