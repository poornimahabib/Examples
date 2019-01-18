var assert=require('assert');

describe('models', function () {
  it('returns the models', function () {
    assert.ok(require('../models/c_course.js'));
    assert.ok(require('../models/c_file'));
    assert.ok(require('../models/c_quiz_options'));
    assert.ok(require('../models/c_quiz_questions'));
    assert.ok(require('../models/c_section'));
    assert.ok(require('../models/c_text'));
    assert.ok(require('../models/c_topic'));
    assert.ok(require('../models/c_user'));
    assert.ok(require('../models/c_vimeo'));
    assert.ok(require('../models/c_vimeo_quiz_sequence'));
  });

});