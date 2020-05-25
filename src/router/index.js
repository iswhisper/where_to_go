import Vue from 'vue'
import Router from 'vue-router'
import DateList from '@/pages/detail/DateList'

Vue.use(Router)

 const router=new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home'),
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City'),
  }, {
    path: '/detail/:id',  //动态路由
    name: 'Detail',
    component: () => import('@/pages/detail/Detail'),
  },{
    path: '/activityDetail/:id',  //动态路由
    name: 'Activity',
    component: () => import('@/pages/detail/Activity'),
  },{
	  path: '/dateList/:id',  //动态路由
	  name: 'DateList',
	  component:DateList,
	}, {
   path: '/weekend/:id',  //动态路由
   name: 'Weekend',
   component: () => import('@/pages/weekend/Weekend'),
  },],
  //每次做路由切换的时候，页面始终回到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
router.onError((error) => {
const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    try {
      if (isChunkLoadFailed) {
        let LoadingChunk = window.sessionStorage.getItem('LoadingChunk');
        if (LoadingChunk) {
          window.sessionStorage.setItem('LoadingChunk', LoadingChunk - 0 + 1);
        } else {
          window.sessionStorage.setItem('LoadingChunk', 1);
        }
        if (LoadingChunk - 0 > 1) {
          // 防止 死循环
          return false;
        }
        router.replace(targetPath);
        window.sessionStorage.setItem('LoadingChunkPath', targetPath);
        const sa = window.sa;
        if (sa && sa.track) {
          sa.track('element_click', {
            page_title: 'LoadingChunk',
            element_type: 'view',
            page_source: targetPath, // 当前路由
            element_name: `刷新页面${LoadingChunk - 0}次` // 尝试 打开次数
          });
        }

      }
    } catch (e) {
      console.log(e);
    }
});
router.onReady(vm => {
	try {
      let LoadingChunkPath = window.sessionStorage.getItem('LoadingChunkPath');
      
      const path = vm.path;
      if (LoadingChunkPath) {
        if (path !== LoadingChunkPath && path !== '/') {
          window.sessionStorage.setItem('LoadingChunkPath', vm.path);
          router.replace(vm.path);
        } else {
          router.replace(LoadingChunkPath);
        }
      }
    } catch (e) {
      console.log(e);
			}
});
export default router
