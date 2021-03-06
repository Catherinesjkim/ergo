/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Engine = require('../lib/engine');

describe('#evalengine', () => {
    it('should fail running when using a base Engine', () => {
        const engine = new Engine();
        engine.kind().should.equal('empty');
        (() => engine.compileVMScript('const a = 1;')).should.throw('[compileVMScript] Cannot execute Engine: instantiate either VMEngine or EvalEngine');
        (() => engine.runVMScriptCall(2,{ a : 1 },'function f() { return context.a + utcOffset; }','f()')).should.throw('[runVMScriptCall] Cannot execute Engine: instantiate either VMEngine or EvalEngine');
    });
});
