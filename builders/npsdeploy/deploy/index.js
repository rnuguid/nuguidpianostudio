"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const architect_1 = require("@angular-devkit/architect");
const childProcess = tslib_1.__importStar(require("child_process"));
exports.default = architect_1.createBuilder(commandBuilder);
function commandBuilder(options, context) {
    context.reportStatus(`Executing "${options.command}"...`);
    // We want to use same project's build target.
    let targ = context.target;
    return new Promise(resolve => {
        if (targ.target) {
            targ.target = "build";
            targ.configuration = "production";
            context.scheduleTarget(targ).then(x => {
                context.logger.info("Target scheduled");
                x.result.then(() => {
                    context.logger.info("Build Completed!");
                    let deployScript = "./deploy.sh";
                    let child = childProcess.spawn(deployScript, [], { cwd: context.workspaceRoot + "/builders/npsdeploy/", stdio: 'inherit' });
                    child.on('close', () => resolve({ success: true }));
                });
            }, (err) => {
                context.logger.info(err.toString());
                context.logger.info("Build failed ... ");
                resolve({ success: false });
            });
        }
        else {
            context.logger.info("No target in BuilderContext provided...");
            resolve({ success: false });
        }
    });
}
//# sourceMappingURL=index.js.map