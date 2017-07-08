import {authHookRunBlock} from './requiresAuth.hook'
export default angular.module('ngRun',[])
.run(authHookRunBlock)
.name