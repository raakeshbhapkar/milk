webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a class=\"navbar-brand\" href=\"#\">Demo Project</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"> <a routerLink=\"list\">Empolee List</a></li>\n        <li routerLinkActive=\"active\"> <a [routerLink]=\"['edit',id]\">Create</a></li>\n\n\n      </ul>\n    </div>\n  </div>\n\n\n</nav>\n\n\n\n\n\n<div class=\"container\" style=\"margin-top:70px;\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.id = 0;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__envoirment__ = __webpack_require__("../../../../../src/app/envoirment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_emplist_emplist_component__ = __webpack_require__("../../../../../src/app/component/emplist/emplist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_createemp_createemp_component__ = __webpack_require__("../../../../../src/app/component/createemp/createemp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__share_emp_ser__ = __webpack_require__("../../../../../src/app/share/emp.ser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_emp_details_emp_details_component__ = __webpack_require__("../../../../../src/app/component/emp-details/emp-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/component/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_10__component_emplist_emplist_component__["a" /* EmplistComponent */]
    },
    { path: 'viewBill', component: __WEBPACK_IMPORTED_MODULE_13__component_emp_details_emp_details_component__["a" /* EmpDetailsComponent */] },
    { path: '', redirectTo: '/list', pathMatch: "full" },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__component_createemp_createemp_component__["a" /* CreateempComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__component_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule(afs) {
        this.afs = afs;
        var settings = { timestampsInSnapshots: true };
        afs.app.firestore().settings(settings);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_emplist_emplist_component__["a" /* EmplistComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_createemp_createemp_component__["a" /* CreateempComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_emp_details_emp_details_component__["a" /* EmpDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__envoirment__["a" /* envoirment */].firebase, 'angulafs'),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["a" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__share_emp_ser__["a" /* EmployeeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestore */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/component/createemp/createemp.component.html":
/***/ (function(module, exports) {

module.exports = "<form #employeeForm=\"ngForm\" (ngSubmit)=\"saveEmployee(employeeForm)\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{panelTitle}}</h3>\n    </div>\n    <div class=\"panel-body\">\n\n      <div class=\"form-group\" [class.has-error]=\"nameControl.invalid && nameControl.touched\">\n        <label for=\"title\" class=\"control-label\">Name</label>\n        <input id=\"title\" required type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" #nameControl=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"nameControl.invalid && nameControl.touched\">\n    Name is required\n  </span>\n      </div>\n\n\n      <div class=\"form-group\" [class.has-error]=\"phonenControl.invalid && phonenControl.touched\">\n        <label for=\"description\" class=\"control-label\">Phone</label>\n        <input id=\"description\" required type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"phone\" #phonenControl=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"phonenControl.invalid && phonenControl.touched\">\n   Phone is required\n  </span>\n      </div>\n\n\n      <div class=\"form-group\" [class.has-error]=\"milkquantityControl.invalid && milkquantityControl.touched\">\n        <label for=\"description\" class=\"control-label\"> Milk Quantity </label>\n        <!-- <input id=\"description\" required type=\"text\" class=\"form-control\" name=\"milkQuantity\" [(ngModel)]=\"milkQuantity\" #milkquantityControl=\"ngModel\">\n         -->\n          <select  name=\"milkQuantity\" [(ngModel)]=\"milkQuantity\" #milkquantityControl=\"ngModel\">\n        <option  selected=\"selected\" value=\"1\">1</option>\n          <option value=\"0.5\">0.5</option>\n            <option value=\"1.5\">1.5</option>\n              <option value=\"2\">2</option>\n                <option value=\"2.5\">2.5</option>\n                 <option value=\"3\">3</option>\n                  <option value=\"3.5\">3.5</option>\n                    <option value=\"4\">4</option>\n                      <option value=\"4.5\">4.5</option>\n                        <option value=\"5\">5</option>\n        </select>\n           <span class=\"help-block\" *ngIf=\"milkquantityControl.invalid && milkquantityControl.touched\">\n             Milk Quantity is required\n            </span>\n      </div>\n\n       <div class=\"form-group\" [class.has-error]=\"milkrateControl.invalid && milkrateControl.touched\">\n        <label for=\"description\" class=\"control-label\"> Milk Rate </label>\n        <input id=\"description\" required type=\"text\" class=\"form-control\" name=\"milkrate\" [(ngModel)]=\"milkrate\" #milkrateControl=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"milkrateControl.invalid && milkrateControl.touched\">\n   Milk Rate is required\n  </span>\n      </div>\n\n <div class=\"form-group\" [class.has-error]=\"addressControl.invalid && addressControl.touched\">\n        <label for=\"title\" class=\"control-label\">Address</label>\n        <input id=\"title\" required type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"address\" #addressControl=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"addressControl.invalid && addressControl.touched\">\n          Address  is required\n        </span>\n </div>\n  \n\n\n   \n         <div class=\"form-group\" [class.has-error]=\"apartmentnameControl.invalid && apartmentnameControl.touched\">\n        <label for=\"title\" class=\"control-label\">Apartmanrt Name</label>\n        <input id=\"title\" required type=\"text\" class=\"form-control\" name=\"apartmentName\" [(ngModel)]=\"apartmentName\" #apartmentnameControl=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"apartmentnameControl.invalid && apartmentnameControl.touched\">\n    Apartment Name is required\n  </span>\n      </div>\n  \n       <div class=\"form-group\" [class.has-error]=\"buildingnumberControl.invalid && buildingnumberControl.touched\">\n        <label for=\"title\" class=\"control-label\">Building Number</label>\n        <input id=\"title\" required type=\"text\" class=\"form-control\" name=\"buildingNumber\" [(ngModel)]=\"buildingNumber\" #buildingnumberControl=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"buildingnumberControl.invalid && buildingnumberControl.touched\">\n    Building Number is required\n  </span>\n      </div>\n\n         <div class=\"form-group\" [class.has-error]=\"flatnumberControl.invalid && flatnumberControl.touched\">\n        <label for=\"title\" class=\"control-label\">Flat Number</label>\n        <input id=\"title\" required type=\"text\" class=\"form-control\" name=\"flatNumber\" [(ngModel)]=\"flatNumber\" #flatnumberControl=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"flatnumberControl.invalid && flatnumberControl.touched\">\n    Flat Number is required\n  </span>\n      </div>\n  \n  \n\n  \n\n\n\n\n    </div>\n    <div class=\"panel-footer\">\n      <button class=\"btn btn-primary\" [disabled]=\"employeeForm.invalid\" type=\"submit\">Save</button>\n    </div>\n  </div>\n</form>\n<!-- {{employeeForm.value | json}}\n<br/> {{employee | json}} -->"

/***/ }),

/***/ "../../../../../src/app/component/createemp/createemp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_emp_ser__ = __webpack_require__("../../../../../src/app/share/emp.ser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateempComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateempComponent = (function () {
    function CreateempComponent(_employeeService, _router, _activatedRoute) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.title = "Rakesh";
        this.milkQuantity = 1;
        this.bills = [];
    }
    ;
    CreateempComponent.prototype.ngOnInit = function () {
        this.id = this._activatedRoute.snapshot.paramMap.get('id');
        console.log(" this.id ", this.id);
        if (this.id != 0) {
            var employees = this._employeeService.setEmployee();
            console.log(employees);
            if (this.id != 0 && employees == undefined) {
                this._router.navigate(['list']);
            }
            // this.employeeForm.patchValue({    
            this.name = employees.name;
            this.apartmentName = employees.apartmentName;
            this.buildingNumber = employees.buildingNumber;
            this.flatNumber = employees.flatNumber;
            this.milkQuantity = employees.milkQuantity;
            this.phone = employees.phone;
            this.milkrate = employees.milkrate;
            this.address = employees.address;
            this.bills = employees.bills;
            console.log(this.bills);
        }
        else {
            console.log("else createform");
            // this.employeeForm.reset();
        }
    };
    // private getEmployee(id: number) {
    // }
    CreateempComponent.prototype.saveEmployee = function (employee) {
        this.id = this._activatedRoute.snapshot.paramMap.get('id');
        var newEmployee = {
            "address": employee.value.address,
            "apartmentName": employee.value.apartmentName,
            "buildingNumber": employee.value.buildingNumber,
            "flatNumber": employee.value.flatNumber,
            "milkQuantity": employee.value.milkQuantity,
            "milkrate": employee.value.milkrate,
            "name": employee.value.name,
            "phone": employee.value.phone,
            "bills": []
        };
        if (this.id != 0) {
            console.log("employee.id", this.id);
            newEmployee.bills = this.bills;
            this._employeeService.updateemp(newEmployee, this.id);
        }
        else {
            console.log(employee.value);
            console.log(newEmployee);
            this._employeeService.save(newEmployee);
        }
        employee.reset();
        this._router.navigate(['list']);
    };
    CreateempComponent.prototype.ngOnDestroy = function () {
        // if( this.employees.length==0){
        setTimeout(function () {
            window.location.reload();
        }, 1000);
        // }
    };
    return CreateempComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('employee'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgForm */]) === "function" && _a || Object)
], CreateempComponent.prototype, "employeeForm", void 0);
CreateempComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-createemp',
        template: __webpack_require__("../../../../../src/app/component/createemp/createemp.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_emp_ser__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_emp_ser__["a" /* EmployeeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CreateempComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=createemp.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/emp-details/emp-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imageClass{\r\n    width:200px;\r\n    height:200px;\r\n}\r\n.vertical-align{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n.font-weight-bold{font-weight: 800;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/emp-details/emp-details.component.html":
/***/ (function(module, exports) {

module.exports = "<select #selectMonth (change)=\"setSelectedchange($event.target.value)\">\n   <option *ngFor=\"let m of monthset\" [value]=\"m.value\">{{m.month}}</option>\n</select>\n\n<div class=\"panel panel-primary\">\n\n  <div class=\"panel-body\">\n\n    <div class=\"col-xs-10\">\n\n      <div class=\"row vertical-align\">\n\n        <div class=\"col-xs-8\">\n\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Name\n            </div>\n            <div class=\"col-xs-6\">\n            {{employe?.name}} \n            </div>\n          </div>\n           <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Milk Rate\n            </div>\n            <div class=\"col-xs-6\">\n            {{employe?.milkrate}} \n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n            Phone \n            </div>\n            <div class=\"col-xs-6\">\n            {{employe?.phone}} \n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n              Address\n            </div>\n            <div class=\"col-xs-6\">\n            {{employe?.address}} \n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-6\">\n           Apartment Name \n            </div>\n            <div class=\"col-xs-6\">\n            {{employe?.apartmentName}} \n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-xs-12\">\n        <table class=\"table\">\n  <thead>\n    <th>Date</th>\n      <th>Quantity</th>\n      \n  </thead>\n  <tbody>\n    <tr *ngFor=\"let employeeone of bills\">\n      <td>{{employeeone.datesetofBills}}</td>\n       <td>{{employeeone.milkQuantityofBills}}</td>\n    </tr>\n     </tbody>\n  </table>\n    </div>\n<div class=\"row\">\n<div class=\"col-xs-6 font-weight-bold\">Total Quantity: {{totalMilk}}</div>\n\n\n<div class=\"col-xs-6 font-weight-bold\">Total Amount: {{totalAmount}}</div>\n\n</div>\n  </div>\n  <div class=\"panel-footer\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/list']\">\n      Back to List\n    </a>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/emp-details/emp-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_emp_ser__ = __webpack_require__("../../../../../src/app/share/emp.ser.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpDetailsComponent = (function () {
    function EmpDetailsComponent(_route, _employeeService, _router) {
        this._route = _route;
        this._employeeService = _employeeService;
        this._router = _router;
        this.bills = [];
        this.totalMilk = 0;
        this.totalAmount = 0;
        this.monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthset = [];
    }
    EmpDetailsComponent.prototype.ngOnInit = function () {
        //this.selectempId = this._route.snapshot.paramMap.get("id");
        var d = new Date();
        var n = d.getMonth();
        var check = +n - 3;
        console.log("n", n);
        console.log("check", check);
        this.monthset = [];
        for (var i = n; i > check; i--) {
            console.log("n loop", i);
            console.log(this.monthArray[i]);
            var data = { "value": i, "month": this.monthArray[i] };
            this.monthset.push(data);
        }
        this.employe = this._employeeService.sendBill();
        if (this.employe == undefined) {
            this._router.navigate(['list']);
        }
        this.setSelectedchange(this.monthset[0].value);
    };
    EmpDetailsComponent.prototype.ngOnDestroy = function () {
        // if( this.employees.length==0){
        window.location.reload();
        // }
    };
    EmpDetailsComponent.prototype.setSelectedchange = function (selectValue) {
        var _this = this;
        this.bills = [];
        this.totalMilk = 0;
        this.totalAmount = 0;
        console.log("bill component", this.employe);
        this.employe.bills.forEach(function (element) {
            console.log("element", element);
            var getDate = new Date(element.datesetofBills);
            var getMonth = getDate.getMonth();
            console.log(_this.monthset[0].value, "getMonth", getMonth);
            if (element.CheckedofBills == true && getMonth == selectValue) {
                _this.bills.push(element);
                _this.totalMilk += +element.milkQuantityofBills;
                _this.totalAmount = _this.totalMilk * +_this.employe.milkrate;
            }
            console.log(" this.bills", _this.bills);
            console.log("this.totalMilk", _this.totalMilk);
            console.log("this.totalAmount", _this.totalAmount);
        });
    };
    return EmpDetailsComponent;
}());
EmpDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-emp-details',
        template: __webpack_require__("../../../../../src/app/component/emp-details/emp-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/emp-details/emp-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__share_emp_ser__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__share_emp_ser__["a" /* EmployeeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EmpDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=emp-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/emplist/emplist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imageClass{\r\n    width:200px;\r\n    height:200px;\r\n}\r\n.vertical-align{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/emplist/emplist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form #employeeFormlist=\"ngForm\" (ngSubmit)=\"saveEmp(employeeFormlist)\"> -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n<input matInput #mydatepicker readonly  [(ngModel)]=\"start_time\" name=\"dateToday\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</div>\n <div class=\"col-md-6\">\n  <input type=\"checkbox\" name=\"selectall\" (click)=\"selectAllFunc($event)\"  [checked]=\"selectall\"  [(ngModel)]=\"selectall\"> select All\n</div>\n    </div>\n<div class=\"row\">\n   <div class=\"col-md-12\">\n<table class=\"table\">\n  <thead>\n    <th>Check</th>\n    <th>Name</th>\n     <th>Quantity</th>\n      <th>Action</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let employeeone of employees\">\n      <td><input type=\"checkbox\" name=\"getproduct\" [checked]=\"selectall\"  [(ngModel)]=\"employeeone.checked\"></td>\n      <td>{{employeeone.name}}</td>\n      <td>\n        <select name=\"todayQun\" #milkselect  [ngModel]=\"employeeone.milkQuantity\" [(ngModel)]=\"employeeone.milkToday\">\n        <option [selected]=\"1== employeeone.milkQuantity\" value=\"1\">1</option>\n          <option [selected]=\"0.5 == employeeone.milkQuantity\" value=\"0.5\">0.5</option>\n            <option [selected]=\"1.5 == employeeone.milkQuantity\" value=\"1.5\">1.5</option>\n              <option [selected]=\"2 == employeeone.milkQuantity\" value=\"2\">2</option>\n                <option [selected]=\"2.5 == employeeone.milkQuantity\" value=\"2.5\">2.5</option>\n                 <option [selected]=\"3 == employeeone.milkQuantity\" value=\"3\">3</option>\n                  <option [selected]=\"3.5== employeeone.milkQuantity\" value=\"3.5\">3.5</option>\n                    <option [selected]=\"4 == employeeone.milkQuantity\" value=\"4\">4</option>\n                      <option [selected]=\"4.5 == employeeone.milkQuantity\" value=\"4.5\">4.5</option>\n                        <option [selected]=\"3 == employeeone.milkQuantity\" value=\"5\">5</option>\n        </select>\n      </td>\n      \n       <td>\n           <button class=\"btn btn-primary\"  (click)=\"editEmployee(employeeone)\">Edit</button>\n          \n           <button class=\"btn btn-primary\" (click)=\"viewBillEmployee(employeeone)\">View Bill</button>\n           <button style=\"margin-left:100px;\" class=\"btn btn-danger\" (click)=\"deleteEmployee($event,employeeone)\">Delete</button>\n       </td>\n    </tr>\n\n  </tbody>\n</table>\n\n<!-- <form> -->\n\n<button class=\"btn btn-primary\"  (click)=\"saveEmp(employees)\">Save</button>\n</div>\n</div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/emplist/emplist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_emp_ser__ = __webpack_require__("../../../../../src/app/share/emp.ser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmplistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmplistComponent = (function () {
    function EmplistComponent(_EmployeeService, _router, _activatedRoute) {
        this._EmployeeService = _EmployeeService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.selectall = false;
        this.employees = [];
        this.start_time = new Date();
    }
    EmplistComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("list init");
        this._EmployeeService.getEmployeesData().subscribe(function (empList) {
            console.log(2222);
            console.log(empList);
            // this.employees=[];
            _this.employees = empList;
            console.log(_this.employees);
        });
    };
    EmplistComponent.prototype.editEmployee = function (employeeone) {
        //let lastindex = employeeId.lastIndexOf("/");
        //let setId = employeeId.slice(lastindex + 1, employeeId.length);
        //console.log("setId", setId);
        this._EmployeeService.getEmployee(employeeone);
        console.log(employeeone.id);
        this._router.navigate(['/edit', employeeone.id]);
    };
    EmplistComponent.prototype.deleteEmployee = function (employeeId, data) {
        // let lastindex = employeeId.lastIndexOf("/");
        // let setId = employeeId.slice(lastindex + 1, employeeId.length);
        console.log(data);
        this._EmployeeService.deleteEmployee(data);
    };
    EmplistComponent.prototype.saveEmp = function (employees) {
        var _this = this;
        this.employees.forEach(function (role, index) {
            console.log("role.bills", role.bills);
            role.bills.forEach(function (element, i) {
                console.log("element", element);
                console.log("element.datesetofBills", element.datesetofBills);
                if (element.datesetofBills == _this.mydatepicker.nativeElement.value) {
                    console.log("its match");
                    role.bills.splice(i, 1);
                }
                var d = new Date();
                var prewDate = d.setMonth(d.getMonth() - 2);
                var predateFinal = new Date(prewDate);
                var currentDate = new Date(element.datesetofBills);
                console.log("predateFinal", predateFinal);
                console.log("currentDate", currentDate);
                if (predateFinal > currentDate) {
                    role.bills.splice(i, 1);
                }
            });
        });
        // console.log(employees);
        //console.log(this.mydatepicker.nativeElement.value);
        this.employees.forEach(function (role, index) {
            console.log("index", index);
            console.log("rolebefore", role);
            console.log("milkToday", role.milkToday);
            var milkget = role.milkToday;
            //role.checked = "checked";
            console.log("role.checked", role.checked);
            if (milkget == "") {
                milkget = role.milkQuantity;
            }
            //let data={' CheckedofBills': role.checked,'datesetofBills':this.mydatepicker.nativeElement.value, 'milkQuantityofBills':role.milkToday}
            var data = { 'CheckedofBills': role.checked, 'datesetofBills': _this.mydatepicker.nativeElement.value, 'milkQuantityofBills': milkget };
            var d = new Date();
            var prewDate = d.setMonth(d.getMonth() - 2);
            // if(prewDate){
            // }
            console.log("rolefter", role);
            role.bills.push(data);
            //console.log("11role",role);
            console.log(role.bills);
            _this._EmployeeService.updatebillData(role, role.id);
        });
        this.selectall = false;
    };
    EmplistComponent.prototype.ngAfterViewInit = function () {
        this.milkselectArray = this.milkselect.toArray();
    };
    EmplistComponent.prototype.viewBillEmployee = function (data) {
        this._EmployeeService.viewBill(data);
        this._router.navigate(['/viewBill']);
    };
    EmplistComponent.prototype.selectAllFunc = function (event) {
        var _this = this;
        this.selectall = event.target.checked;
        console.log("this.selectall", this.selectall);
        this.employees.forEach(function (role, index) {
            role.checked = _this.selectall;
        });
    };
    return EmplistComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('mydatepicker'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], EmplistComponent.prototype, "mydatepicker", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewChildren */])('milkselect'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* QueryList */]) === "function" && _b || Object)
], EmplistComponent.prototype, "milkselect", void 0);
EmplistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-emplist',
        template: __webpack_require__("../../../../../src/app/component/emplist/emplist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/emplist/emplist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__share_emp_ser__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__share_emp_ser__["a" /* EmployeeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], EmplistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=emplist.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        alert("page not found");
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/component/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/envoirment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return envoirment; });
var envoirment = {
    production: false,
    firebase: {
        // apiKey: "AIzaSyADc12ZeA1GYtDonG9bIcU8A-NHW68bG6w",
        // authDomain: "project-631626351405164394.firebaseapp.com",
        // databaseURL: "https://project-631626351405164394.firebaseio.com",
        // projectId: "project-631626351405164394",
        // storageBucket: "project-631626351405164394.appspot.com",
        // messagingSenderId: "516395314854"
        //   apiKey: "AIzaSyDkZ-4hCeCD3AqeIfqzngC99eq9Cr9hafc",
        // authDomain: "milk-836cf.firebaseapp.com",
        // databaseURL: "https://milk-836cf.firebaseio.com",
        // projectId: "milk-836cf",
        // storageBucket: "milk-836cf.appspot.com",
        // messagingSenderId: "325338520538"
        apiKey: "AIzaSyC-sDNv8kbY-Ps8XCxLvsWJxJKCKhsvmqo",
        authDomain: "collection-7560c.firebaseapp.com",
        databaseURL: "https://collection-7560c.firebaseio.com",
        projectId: "collection-7560c",
        storageBucket: "collection-7560c.appspot.com",
        messagingSenderId: "1049008629077"
    }
};
//# sourceMappingURL=envoirment.js.map

/***/ }),

/***/ "../../../../../src/app/share/emp.ser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = (function () {
    function EmployeeService(_http, angularFirestore) {
        this._http = _http;
        this.angularFirestore = angularFirestore;
        this.itemcollection = this.angularFirestore.collection('items');
        // console.log(angularFirestore.collection('items').valueChanges());
        // this.items=angularFirestore.collection('items').valueChanges();
        this.items = angularFirestore.collection('items').snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                data.checked = false;
                data.datedToday = "";
                data.milkToday = "";
                console.log("data", data);
                return data;
            });
        });
        console.log(7777);
        console.log(this.itemcollection);
    }
    EmployeeService.prototype.getEmployeesData = function () {
        return this.items;
        // return this._http.get('https://milk-836cf.firebaseio.com/members.json')
        //     .pipe(map((response: Response) => response.json()));
    };
    EmployeeService.prototype.getEmployee = function (emp) {
        this.editData = null;
        this.editData = emp;
        //  return this._http.get(`https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks/${id}`)
        //     .pipe(map((response: Response) => response.json()));
    };
    EmployeeService.prototype.setEmployee = function () {
        return this.editData;
    };
    EmployeeService.prototype.updateemp = function (itemm, id) {
        console.log(itemm.id);
        this.itemDoc = this.angularFirestore.doc("items/" + id);
        this.itemDoc.update(itemm);
    };
    EmployeeService.prototype.save = function (employee) {
        this.itemcollection.add(employee);
    };
    EmployeeService.prototype.updatebillData = function (itemm, id) {
        console.log(id);
        this.itemDoc = this.angularFirestore.doc("items/" + id);
        //this.itemDoc.push({description: "new Item"});
        //this.itemcollection.doc(id).set({ bills: [{ who: "third@test.com", when: new Date() }] })
        this.itemDoc.update(itemm);
    };
    EmployeeService.prototype.deleteEmployee = function (itemm) {
        this.itemDoc = this.angularFirestore.doc("items/" + itemm.id);
        this.itemDoc.delete();
    };
    EmployeeService.prototype.viewBill = function (data) {
        this.viewBillData = data;
    };
    EmployeeService.prototype.sendBill = function () {
        return this.viewBillData;
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestore */]) === "function" && _b || Object])
], EmployeeService);

var _a, _b;
//# sourceMappingURL=emp.ser.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map