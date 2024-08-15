var app = angular.module('studentApp', []);

app.controller('StudentCtrl', function() {
    var ctrl = this;
    ctrl.students = [];
    var nextId = 1;
    ctrl.new = {};
    ctrl.editMode = false;
    ctrl.editStudent = {};

    // Add a new student
    ctrl.add = function() {
        var newStudent = {
            id: nextId++,
            name: ctrl.new.name,
            age: ctrl.new.age,
            major: ctrl.new.major
        };
        ctrl.students.push(newStudent);
        ctrl.new = {}; // Clear the form
    };

    // Remove a student
    ctrl.remove = function(s) {
        var index = ctrl.students.findIndex(function(student) {
            return student.id === s.id;
        });
        if (index !== -1) {
            ctrl.students.splice(index, 1);
        }
    };

    // Edit a student
    ctrl.edit = function(s) {
        ctrl.editMode = true;
        ctrl.editStudent = angular.copy(s); // Create a copy to edit
    };

    // Update a student
    ctrl.update = function() {
        var index = ctrl.students.findIndex(function(student) {
            return student.id === ctrl.editStudent.id;
        });
        if (index !== -1) {
            ctrl.students[index] = ctrl.editStudent; // Update the student record
        }
        ctrl.editMode = false;
        ctrl.editStudent = {}; // Clear the edit form
    };

    // Cancel editing
    ctrl.cancelEdit = function() {
        ctrl.editMode = false;
        ctrl.editStudent = {};
    };
});
