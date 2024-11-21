/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domain/Person.ts":
/*!******************************!*\
  !*** ./src/domain/Person.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Person = /** @class */ (function () {
    /**
     * Creates a new person
     * @param name
     * @param age
     */
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.toString = function () {
        return "Person  ".concat(this.name, ", age ").concat(this.age, "]");
    };
    return Person;
}());
exports["default"] = Person;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Person_1 = __webpack_require__(/*! ./domain/Person */ "./src/domain/Person.ts");
document.addEventListener("DOMContentLoaded", function () {
    var updateButton = document.getElementById("updateButton");
    if (updateButton) {
        updateButton.addEventListener("click", updatePerson);
    }
});
function updatePerson() {
    var _a;
    var name = document.getElementById("name").value;
    var age = (_a = document.getElementById("age")) === null || _a === void 0 ? void 0 : _a.value;
    var root = document.getElementById("root");
    var person = new Person_1.default(name, 3);
    if (root) {
        root.innerHTML = "<h1>Updated Person: ".concat(person.getName(), "</h1>");
        if (age) {
            root.innerHTML += "<p>Age: ".concat(person.getAge(), "</p>");
        }
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUlFOzs7O09BSUc7SUFDSCxnQkFBWSxJQUFZLEVBQUUsR0FBVztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0UsT0FBTyxrQkFBVyxJQUFJLENBQUMsSUFBSSxtQkFBUyxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUM7SUFDbEQsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDO0FBRUQscUJBQWUsTUFBTSxDQUFDOzs7Ozs7O1VDbkN0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsb0ZBQXNDO0FBRXRDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUM1QyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUMxQyxjQUFjLENBQ00sQ0FBQztJQUN2QixJQUFJLFlBQVksRUFBRTtRQUNoQixZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3REO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLFlBQVk7O0lBQ25CLElBQU0sSUFBSSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFzQixDQUFDLEtBQUssQ0FBQztJQUN6RSxJQUFNLEdBQUcsR0FBRyxNQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFzQiwwQ0FBRSxLQUFLLENBQUM7SUFDeEUsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU3QyxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRW5DLElBQUksSUFBSSxFQUFFO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyw4QkFBdUIsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFPLENBQUM7UUFDaEUsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFXLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBTSxDQUFDO1NBQ3BEO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmQtdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2RvbWFpbi9QZXJzb24udHMiLCJ3ZWJwYWNrOi8vdGFpbHdpbmQtdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RhaWx3aW5kLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQZXJzb24ge1xuICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBhZ2U6IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBwZXJzb25cbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGFnZVxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hZ2UgPSBhZ2U7XG4gIH1cblxuICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFnZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEFnZShhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWdlID0gYWdlO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFBlcnNvbiAgJHt0aGlzLm5hbWV9LCBhZ2UgJHt0aGlzLmFnZX1dYDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb247XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IFBlcnNvbiAgZnJvbSAnLi9kb21haW4vUGVyc29uJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCB1cGRhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInVwZGF0ZUJ1dHRvblwiLFxuICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBpZiAodXBkYXRlQnV0dG9uKSB7XG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVQZXJzb24pO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlUGVyc29uKCkge1xuICBjb25zdCBuYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgY29uc3QgYWdlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZTtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBjb25zdCBwZXJzb24gPSBuZXcgUGVyc29uKG5hbWUsIDMpO1xuXG4gIGlmIChyb290KSB7XG4gICAgcm9vdC5pbm5lckhUTUwgPSBgPGgxPlVwZGF0ZWQgUGVyc29uOiAke3BlcnNvbi5nZXROYW1lKCl9PC9oMT5gO1xuICAgIGlmIChhZ2UpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MICs9IGA8cD5BZ2U6ICR7cGVyc29uLmdldEFnZSgpfTwvcD5gO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9