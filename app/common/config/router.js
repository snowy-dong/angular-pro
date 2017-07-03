
import layoutRouter from '../layout/router';
import aboutRouter from '../../components/about/router/router';
import homeRouter from '../../components/home/router/router';

export default angular.module('ngRouter',[])
.config(layoutRouter)
.config(homeRouter)
.config(aboutRouter)
.name