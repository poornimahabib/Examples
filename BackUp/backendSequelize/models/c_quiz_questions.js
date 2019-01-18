/* jshint indent: 1 */
var uniqueId=require('uniqid')

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_quiz_questions', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true,
			defaultValue:uniqueId()
		},
		topic_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_topic',
				key: 'id'
			}
		},
		vimeo_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_vimeo',
				key: 'id'
			}
		},
		sequence_number: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_vimeo_quiz_sequence',
				key: 'vimeo_id'
			}
		},
		question_title: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		question_narration: {
			type: DataTypes.TEXT,
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
		tableName: 'c_quiz_questions',
		timestamps:false
	});
};
