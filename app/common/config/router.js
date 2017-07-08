
import layoutRouter from '../layout/router';
import loginRouter from '../../components/login/router/router';
import aboutRouter from '../../components/about/router/router';
import homeRouter from '../../components/home/router/router';

export default angular.module('ngRouter',[])
.config(layoutRouter)
.config(loginRouter)
.config(homeRouter)
.config(aboutRouter)
.name