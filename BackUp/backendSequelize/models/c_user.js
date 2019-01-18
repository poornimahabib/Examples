/* jshint indent: 1 */
var uniqueId=require('uniqid')

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_user', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true,
			defaultValue:uniqueId()
		},
		org_id: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		full_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		user_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		last_login: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_login_from: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		account_status: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		isDeleted: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		created_by: {
			type: DataTypes.STRING(40),
			allowNull: false,
			defaultValue:1
		},
		creation_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue:Date
		},
		last_modified_by: {
			type: DataTypes.STRING(40),
			allowNull: false,
			defaultValue:1
		},
		last_modified_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue:Date
		},
		deleted_by: {
			type: DataTypes.STRING(40),
			allowNull: false,
			defaultValue:1
		},
		deleted_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue:Date
		}
	}, {
		tableName: 'c_user',
		timestamps:false
	});
};
