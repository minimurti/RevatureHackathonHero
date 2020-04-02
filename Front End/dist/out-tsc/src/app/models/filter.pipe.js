import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    transform(value, ...args) {
        console.log(args);
        if (!args[0]) {
            return value;
        }
        const searchValue = args[0].toLowerCase();
        return value.filter(user => {
            if (user.email.toLowerCase().includes(searchValue)) {
                return true;
            }
            return false;
        });
    }
};
FilterPipe = tslib_1.__decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map