"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var api_service_1 = require("../services/api.service");
var ResultService = (function () {
    function ResultService(apiService) {
        this.apiService = apiService;
    }
    ResultService.prototype.getCourseResults = function (idCourse) {
        return Promise.resolve(this.apiService.get('/Courses/' + idCourse + '/Results'));
    };
    ResultService.prototype.putResult = function (result) {
        return Promise.resolve(this.apiService.put('/Results/', JSON.stringify(result)));
    };
    ResultService.prototype.postResult = function (result) {
        return Promise.resolve(this.apiService.post('/Results/', JSON.stringify(result)));
    };
    ResultService.prototype.putCourseResults = function (courseId, results) {
        return Promise.resolve(this.apiService.put('/Courses/' + courseId + '/Results', JSON.stringify(results)));
    };
    return ResultService;
}());
ResultService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ResultService);
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map