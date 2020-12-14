import { BuilderContext, BuilderOutput, createBuilder, Target } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';

import * as childProcess from 'child_process';

interface Options extends JsonObject {
  command: string;
  args: string[];
}

export default createBuilder(commandBuilder);

function commandBuilder(
  options: Options,
  context: BuilderContext,
  ): Promise<BuilderOutput> {
    
    context.reportStatus(`Executing "${options.command}"...`);

    // We want to use same project's build target.
    let targ : Target = context.target as Target


    return new Promise(resolve => {

      if (targ.target)
      {
        targ.target = "build"
        targ.configuration = "production"
        context.scheduleTarget(targ).then( 
          x => {
            context.logger.info("Target scheduled"); 
            x.result.then( 
              () => {
                context.logger.info("Build Completed!");
                let deployScript : string = "./deploy.sh"
                
                let child : childProcess.ChildProcess = childProcess.spawn(deployScript, [], {cwd: context.workspaceRoot + "/builders/npsdeploy/", stdio:'inherit'})
                child.on('close', ()=>resolve({success:true}))
              })
          }, 
          (err) => {
            context.logger.info(err.toString())
            context.logger.info("Build failed ... "); 
            resolve({success: false})
          }
         )
      }
      else
      {
        context.logger.info("No target in BuilderContext provided...")
        resolve({success: false})
      }
    })
}