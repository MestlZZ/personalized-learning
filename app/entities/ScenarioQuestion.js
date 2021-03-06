﻿define(['_', 'entities/Question'], function (_, Question) {

    var ctor = function (id, title, type, projectId, embedCode, masteryScore) {
        var that = this,
            _protected = {
                answer: answer,
                restoreProgress: restoreProgress,
                getProgress: getProgress
            };

        Question.call(that, id, title, type, _protected);

        that.embedCode = embedCode;

        that.projectId = projectId;

        that.masteryScore = masteryScore;

        function answer(score) {
            that.score = score >= that.masteryScore ? 100 : 0;
        }

        function restoreProgress(progress) {
            if (!_.isNaN(progress)) {
                that.score = progress;
            }
        }

        function getProgress() {
            return that.score;
        }

    };

    return ctor;

})