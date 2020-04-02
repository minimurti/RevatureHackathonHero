import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import * as MATERIAL_MODULES from '@angular/material';
export function mapMaterialModules() {
    return Object.keys(MATERIAL_MODULES).filter((k) => {
        let asset = MATERIAL_MODULES[k];
        return typeof asset == 'function'
            && asset.name.startsWith('Mat')
            && asset.name.includes('Module');
    }).map((k) => MATERIAL_MODULES[k]);
}
const modules = mapMaterialModules();
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib_1.__decorate([
    NgModule({
        imports: modules,
        exports: modules
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map