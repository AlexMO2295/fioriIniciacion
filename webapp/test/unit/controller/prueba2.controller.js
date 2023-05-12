/*global QUnit*/

sap.ui.define([
	"prueba2/prueba2/controller/prueba2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("prueba2 Controller");

	QUnit.test("I should test the prueba2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
